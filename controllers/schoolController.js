function calculateDistance(lat1,lon1,lat2,lon2) {
  const R = 6371; // Earth radius in KM

  const dLat = (lat2-lat1)*(Math.PI / 180);
  const dLon = (lon2-lon1)*(Math.PI / 180);

  const a =
    Math.sin(dLat/2)*Math.sin(dLat / 2)+
    Math.cos(lat1 * (Math.PI/180))*
      Math.cos(lat2 * (Math.PI / 180))*
      Math.sin(dLon/2)*
      Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

const db = require("../config/db");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validation
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const query =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        error: err
      });
    }

    res.status(201).json({
      message: "School added successfully",
      schoolId: result.insertId
    });
  });
};

exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "Latitude and Longitude are required"
    });
  }

  const query = "SELECT * FROM schools";

  db.query(query, (err, schools) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        error: err
      });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const schoolsWithDistance = schools.map((school) => {
      const distance = calculateDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );

      return {
        ...school,
        distance: distance
      };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  });
};

