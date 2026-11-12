function Dashboard() {
  return (
    <div className="page-content">
      <span className="badge badge-indigo">Analytics</span>
      <h1>Platform Dashboard</h1>
      <p>Overview of active student opportunities and application stats.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="badge badge-green">Live Updates</span>
          <h2>120+</h2>
          <p>Verified Scholarships</p>
        </div>
        <div className="stat-card">
          <span className="badge badge-blue">Active Grants</span>
          <h2>45</h2>
          <p>Global Partner Universities</p>
        </div>
        <div className="stat-card">
          <span className="badge badge-indigo">Success Rate</span>
          <h2>94%</h2>
          <p>Student Satisfaction</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;