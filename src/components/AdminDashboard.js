import { useState } from "react";

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    title: " ",
    year: " ",
    // medium: " ",
    // dimensions: " ",
    isSold: true,
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <container className="admin-form-box">
        <form onSubmit={handleSubmit}>
          <p className="input-info">Artwork title*</p>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={formData.title}
          />
          <p className="input-info">Year made*</p>
          <input
            type="number"
            onChange={handleChange}
            name="year"
            value={formData.year}
          />
          <input
            className="checkbox-input"
            type="checkbox"
            id="isSold"
            checked={formData.isSold}
            onChange={handleChange}
            name="isSold"
          />
        </form>
      </container>
    </div>
  );
}
