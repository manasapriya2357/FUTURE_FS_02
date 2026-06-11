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

// Delete Lead
app.delete("/leads/:index", (req, res) => {
  const index = parseInt(req.params.index);

  leads.splice(index, 1);

  res.json({
    message: "Lead Deleted Successfully",
  });
});

// Update Lead
app.put("/leads/:index", (req, res) => {
  const index = parseInt(req.params.index);

  leads[index] = req.body;

  res.json({
    message: "Lead Updated Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});