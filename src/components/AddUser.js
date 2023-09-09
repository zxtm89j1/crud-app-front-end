import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

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
      swal(error.name, error.message, "error");
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
    <div>
      <form>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="Enter Name here"
          name="name"
          onChange={handleNameChange}
          value={formData.name}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          placeholder="Enter Email here"
          name="email"
          onChange={handleEmailChange}
          value={formData.email}
        />
        <label htmlFor="">Password: </label>
        <input
          type="password"
          placeholder="Enter password here"
          name="password"
          onChange={handlePasswordChange}
          value={formData.password}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
