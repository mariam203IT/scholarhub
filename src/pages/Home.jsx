import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-content">
      <div className="hero">
        <h1>Welcome to ScholarHub</h1>
        <p>Your gateway to academic scholarships, internships, and global opportunities.</p>
        <Link to="/opportunities" className="btn-primary">Browse Opportunities</Link>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Scholarships</h3>
          <p>Find fully-funded undergraduate and postgraduate scholarships.</p>
        </div>
        <div className="feature-card">
          <h3>Internships</h3>
          <p>Gain hands-on professional experience with top organizations.</p>
        </div>
        <div className="feature-card">
          <h3>Save & Track</h3>
          <p>Bookmark your favorite programs locally and track them anytime.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;