import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SearchUser from "./components/SearchUser";
import AddUser from "./components/AddUser";
import "./components/css/All.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/search" element={<SearchUser />} />
      </Routes>
    </Router>
  );
}

export default App;
