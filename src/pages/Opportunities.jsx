import { useState } from "react";

const initialOpportunities = [
  { id: 1, title: "Global STEM Excellence Scholarship", type: "Scholarship", country: "Germany", degree: "Bachelor" },
  { id: 2, title: "Software Engineering Summer Internship", type: "Internship", country: "Remote", degree: "Undergraduate" },
  { id: 3, title: "Chevening Master's Fellowship", type: "Scholarship", country: "UK", degree: "Master" },
  { id: 4, title: "AI & Data Science Research Grant", type: "Research", country: "Canada", degree: "PhD" },
  { id: 5, title: "Tech Leaders Exchange Program", type: "Internship", country: "USA", degree: "Bachelor" }
];

function Opportunities() {
  const [filterType, setFilterType] = useState("All");

  const filteredItems = filterType === "All" 
    ? initialOpportunities 
    : initialOpportunities.filter(item => item.type === filterType);

  return (
    <div className="page-content">
      <span className="badge badge-indigo">Browse Grants</span>
      <h1>Available Opportunities</h1>
      <p style={{ color: "#475569", marginBottom: "20px" }}>Explore verified scholarships and internships worldwide.</p>
      
      <div className="filter-bar">
        <label>Filter by Type: </label>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Scholarship">Scholarships</option>
          <option value="Internship">Internships</option>
          <option value="Research">Research</option>
        </select>
      </div>

      <div className="cards-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p style={{ marginTop: "10px" }}><strong>Type:</strong> {item.type}</p>
            <p><strong>Location:</strong> {item.country}</p>
            <p><strong>Target:</strong> {item.degree}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;