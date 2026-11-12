function About() {
  return (
    <div className="page-content">
      <span className="badge badge-indigo">About Us</span>
      <h1 style={{ marginTop: "12px", marginBottom: "12px" }}>About ScholarHub</h1>
      <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
        ScholarHub is an educational web platform designed to help university students discover, 
        organize, and bookmark verified global scholarships, summer internships, and research grants.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <span className="badge badge-blue">Our Mission</span>
          <h3 style={{ marginTop: "8px", marginBottom: "8px" }}>Equal Opportunities</h3>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Democratize access to academic funding and simplify the search process for students worldwide.
          </p>
        </div>

        <div className="feature-card">
          <span className="badge badge-green">Smart Tracking</span>
          <h3 style={{ marginTop: "8px", marginBottom: "8px" }}>Local Privacy</h3>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Allow students to store their target grants safely inside their own browser using client-side storage.
          </p>
        </div>

        <div className="feature-card">
          <span className="badge badge-indigo">Verified Grants</span>
          <h3 style={{ marginTop: "8px", marginBottom: "8px" }}>Reliable Data</h3>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Provide accurate details on application deadlines, target degrees, and funding coverage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;