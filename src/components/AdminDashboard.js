import { useState } from "react";

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    title:"",
    year:"",
    medium:"",
    dimensions:"",
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
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="input-info">
            <p>Artwork title*</p>
          <input
            type="text"
            className="text-box"
            onChange={handleChange}
            name="title"
            value={formData.title}
          />
          </div>
          <div className="input-info">
            <p>Year made*</p>
          <input
            type="number"
            className="text-box"
            onChange={handleChange}
            name="year"
            value={formData.year}
          />
          </div>
           <div className="input-info">
            <p>Medium*</p>
          <input
            type="text"
            className="text-box"
            onChange={handleChange}
            name="medium"
            value={formData.medium}
          />
          </div>
          <div className="input-info">
            <p>Dimensions*</p>
          <input
            type="number"
            className="text-box"
            onChange={handleChange}
            name="dimensions"
            value={formData.dimensions}
          />
          </div>
          <div className="input-info">
            <label className="checkbox-label">
            <p>Artwork sold*</p>
          <input
            className="checkbox-input"
            type="checkbox"
            id="isSold"
            checked={formData.isSold}
            onChange={handleChange}
            name="isSold"
          />
          </label>
          </div>
          <button className="admin-sign-button" type="submit">
          Upload
        </button>
        </form>
      </container>
    </div>
  );
}
