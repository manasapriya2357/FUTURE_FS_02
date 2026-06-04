function LeadTable({ leads, updateStatus }) {
  return (
    <div className="lead-table">
      <h2>Leads</h2>

      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Source</th>
                <th>Status</th>
                <th>Notes</th>
            </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>

              <td>{lead.email}</td>

              <td>{lead.source}</td>

              <td>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(
                      index,
                      e.target.value
                    )
                  }
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Converted</option>
                </select>
              </td>
              <td>{lead.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;