const express = require("express");
const cors = require("cors");
require("dotenv").config();

const schoolRoutes = require("./routes/schoolRoutes");

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("School Management API Running");
});


app.use("/api", schoolRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});