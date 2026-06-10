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

const deleteLead = async (index) => {
  try {
    await axios.delete(
      `http://localhost:5000/leads/${index}`
    );

    fetchLeads();
  } catch (error) {
    console.error(error);
  }
};

  const updateStatus = (index, status) => {
    const updatedLeads = [...leads];
    updatedLeads[index].status = status;
    setLeads(updatedLeads);
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

      <LeadForm addLead={addLead} />

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
/>
    </div>
  );
}

export default App;