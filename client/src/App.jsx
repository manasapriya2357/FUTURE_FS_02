import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import LeadForm from "./components/LeadForm";
import LeadTable from "./components/LeadTable";
import Login from "./components/Login";

function App() {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  useEffect(() => {
  fetchLeads();
}, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const fetchLeads = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/leads"
    );

    setLeads(response.data);
  } catch (error) {
    console.error(error);
  }
};

  const addLead = async (lead) => {
  try {
    await axios.post(
      "http://localhost:5000/leads",
      lead
    );

    fetchLeads();
  } catch (error) {
    console.error(error);
  }
};

const deleteLead = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/leads/${id}`
    );

    fetchLeads();
  } catch (error) {
    console.error(error);
  }
};

const editLead = (lead, index) => {
  setEditingLead(lead);
  setEditingIndex(index);
};

const updateLead = async (updatedLead) => {
  try {
    await axios.put(
      `http://localhost:5000/leads/${editingIndex}`,
      {
        ...updatedLead,
        status: leads[editingIndex].status,
      }
    );

    fetchLeads();

    setEditingLead(null);
    setEditingIndex(null);
  } catch (error) {
    console.error(error);
  }
};

  const updateStatus = async (index, status) => {
  try {
    const lead = leads[index];

    await axios.put(
      `http://localhost:5000/leads/${lead._id}`,
      {
        ...lead,
        status,
      }
    );

    fetchLeads();
  } catch (error) {
    console.error(error);
  }
};

// Login Check
if (!isLoggedIn) {
  return (
    <Login
      onLogin={() => setIsLoggedIn(true)}
    />
  );
}



  return (
    <div className="app">
      <h1>Mini CRM Dashboard</h1>

      <Dashboard leads={leads} />

      <LeadForm
  addLead={addLead}
  editingLead={editingLead}
  updateLead={updateLead}
/>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search leads..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-box">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Leads</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
      </div>

      <LeadTable
  leads={filteredLeads}
  updateStatus={updateStatus}
  deleteLead={deleteLead}
  editLead={editLead}
/>
    </div>
  );
}

export default App;