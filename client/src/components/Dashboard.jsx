function Dashboard({ leads }) {
  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
  ).length;

  return (
    <div className="dashboard">
      

      <div className="stats">
        <div className="card">
          <h3>Total Leads</h3>
          <p>{totalLeads}</p>
        </div>

        <div className="card">
          <h3>New Leads</h3>
          <p>{newLeads}</p>
        </div>

        <div className="card">
          <h3>Contacted</h3>
          <p>{contactedLeads}</p>
        </div>

        <div className="card">
          <h3>Converted</h3>
          <p>{convertedLeads}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;