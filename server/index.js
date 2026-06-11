const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("URI Loaded:", process.env.MONGO_URI);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    console.log(
      "Ready State:",
      mongoose.connection.readyState
    );
  })
  .catch((err) => {
    console.log("❌ Connection Error:", err);
  });

// Lead Schema
const leadSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  source: {
    type: String,
    required: true,
  },

  notes: String,

  status: {
    type: String,
    default: "New",
  },
},
{
  timestamps: true,
}
);
const Lead = mongoose.model("Lead", leadSchema);

// Home Route
app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

// Get All Leads
app.get("/leads", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

// Add Lead
app.post("/leads", async (req, res) => {
  const lead = new Lead(req.body);

  await lead.save();

  res.status(201).json({
    message: "Lead Added Successfully",
  });
});

// Delete Lead
app.delete("/leads/:id", async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);

  res.json({
    message: "Lead Deleted Successfully",
  });
});

// Update Lead
app.put("/leads/:id", async (req, res) => {
  await Lead.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.json({
    message: "Lead Updated Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});