const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary Lead Storage
let leads = [];

// Home Route
app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

// Get All Leads
app.get("/leads", (req, res) => {
  res.json(leads);
});

// Add Lead
app.post("/leads", (req, res) => {
  const lead = req.body;

  leads.push(lead);

  res.status(201).json({
    message: "Lead Added Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});