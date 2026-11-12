import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo-badge">SH</span>
        <h2>ScholarHub</h2>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/opportunities">Opportunities</Link></li>
        <li><Link to="/saved">My Saved</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;