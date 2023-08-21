import { useState } from "react";
import { useDropzone } from "react-dropzone";


export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    title:"",
    year:"",
    medium:"",
    dimensions:"",
    price:"",
    isSold: true,
  });

  console.log(formData);

  const [uploadedImage, setUploadedImage] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleImageDrop(acceptedFiles) {
    setUploadedImage(acceptedFiles[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data", formData);
    console.log("Uploaded Image", uploadedImage);
    //send data to server - need to do this

  // Reset form data
  setFormData({
    title: "",
    year: "",
    medium: "",
    dimensions: "",
    price: "",
    isSold: false,
  });
  
  // Reset uploaded image
  setUploadedImage(null);

  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleImageDrop,
    accept: "image/*", // Accept only image files
  });

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
            type="text"
            className="text-box"
            onChange={handleChange}
            name="dimensions"
            value={formData.dimensions}
          />
          </div>
          <div className="input-info">
            <p>Price*</p>
          <input
            type="text"
            className="text-box"
            onChange={handleChange}
            name="price"
            value={formData.price}
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
        
          <div className="input-info">
            <p>Upload Artwork Image</p>
            <div className={`drop-zone ${isDragActive ? "drag-active" : ""}`} {...getRootProps()}>
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" className="uploaded-image" />
              ) : isDragActive ? (
                <p>Drop the image here...</p>
              ) : (
                <p>Drag &amp; drop an image here, or click to select one</p>
              )}
            </div>
          </div>
        
          <button className="admin-sign-button" type="submit">
          Upload
        </button>
        </form>
      </container>
    </div>
  );
}
