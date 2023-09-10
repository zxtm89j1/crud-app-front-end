import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="main_link_div">
      <Link to="/">Home</Link>

      <Link to="/adduser">Add User</Link>

      <Link to="/about">About</Link>

      <Link to="/search">Search Users</Link>
    </div>
  );
};

export default Navbar;
