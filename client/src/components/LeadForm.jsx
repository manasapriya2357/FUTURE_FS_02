import { useState, useEffect } from "react";

function LeadForm({
  addLead,
  editingLead,
  updateLead,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    notes: "",
  });

  useEffect(() => {
    if (editingLead) {
      setFormData(editingLead);
    }
  }, [editingLead]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingLead) {
      updateLead(formData);
    } else {
      addLead({
        ...formData,
        status: "New",
      });
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      source: "",
      notes: "",
    });
  };

  return (
    <div className="lead-form">
      <h2>
        {editingLead
          ? "Edit Lead"
          : "Add Lead"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="source"
          placeholder="Source"
          value={formData.source}
          onChange={handleChange}
        />

        <input
          type="text"
          name="notes"
          placeholder="Notes / Follow-up"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">
          {editingLead
            ? "Update Lead"
            : "Add Lead"}
        </button>
      </form>
    </div>
  );
}

export default LeadForm;