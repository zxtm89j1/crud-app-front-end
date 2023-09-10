import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./css/AddUser.css";
import myImage from "./images/sample.png";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/adduser", formData);

      swal("User saved!", "User is saved to the database!", "success");
      setFormData({
        name: "",
        password: "",
        email: "",
      });
    } catch (error) {
      if (
        formData.name === "" ||
        formData.password === "" ||
        formData.email === ""
      ) {
        swal(
          "Input fields empty!",
          "Please enter valid information in the input fields!",
          "error"
        );
      } else {
        swal(error.name, error.message, "error");
      }
    }
  };

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  return (
    <div className="adduser_body">
      <form onSubmit={handleSubmit} className="form">
        <div className="image_container">
          <img src={myImage} alt="cover_image" />
        </div>
        <div className="row">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            placeholder="Enter Name here"
            name="name"
            onChange={handleNameChange}
            value={formData.name}
          />
        </div>
        <div className="row">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter Email here"
            name="email"
            onChange={handleEmailChange}
            value={formData.email}
          />
        </div>
        <div className="row">
          <label htmlFor="">Password: </label>
          <input
            type="password"
            placeholder="Enter password here"
            name="password"
            onChange={handlePasswordChange}
            value={formData.password}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default AddUser;
