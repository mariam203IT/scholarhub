import { useState } from "react";

const STORAGE_KEY = "scholarhub_saved_items_with_images";

function loadSavedItems() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData === null) return [];
    const parsed = JSON.parse(rawData);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveItems(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function SavedOpportunities() {
  const [savedList, setSavedList] = useState(() => loadSavedItems());
  const [title, setTitle] = useState("");
  const [provider, setProvider] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (title.trim() === "" || provider.trim() === "" || deadline.trim() === "") {
      alert("Please fill in all required text fields.");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: title.trim(),
      provider: provider.trim(),
      deadline: deadline.trim(),
      image: image || "https://via.placeholder.com/150"
    };

    const updated = [...savedList, newItem];
    setSavedList(updated);
    saveItems(updated);

    setTitle("");
    setProvider("");
    setDeadline("");
    setImage("");
  };

  const handleDelete = (id) => {
    const updated = savedList.filter((item) => item.id !== id);
    setSavedList(updated);
    saveItems(updated);
  };

  return (
    <div className="page-content">
      <span className="badge badge-indigo">Personalized Tracker</span>
      <h1>My Saved Opportunities</h1>
      <p style={{ color: "#475569", marginBottom: "20px" }}>
        Add custom scholarships and attach university logos. Your data and images stay saved even after refreshing!
      </p>

      <form onSubmit={handleAdd} className="dynamic-form">
        <label>
          Opportunity Title:
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="e.g. Fulbright Scholarship" 
          />
        </label>
        
        <label>
          University / Organization:
          <input 
            type="text" 
            value={provider} 
            onChange={(e) => setProvider(e.target.value)} 
            placeholder="e.g. Harvard University" 
          />
        </label>
        
        <label>
          Application Deadline:
          <input 
            type="date" 
            value={deadline} 
            onChange={(e) => setDeadline(e.target.value)} 
          />
        </label>

        <label>
          Upload University Logo / Image:
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
        </label>

        <button type="submit">Bookmark Opportunity</button>
      </form>

      <h2 style={{ marginTop: "30px" }}>Saved Items List ({savedList.length})</h2>
      {savedList.length === 0 ? (
        <p style={{ marginTop: "10px", color: "#64748b" }}>No saved opportunities yet.</p>
      ) : (
        <ul className="items-list">
          {savedList.map((item) => (
            <li key={item.id} className="list-item" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <img 
                src={item.image} 
                alt="Logo" 
                style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px", border: "1px solid #e2e8f0" }} 
              />
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "16px", color: "#0f172a" }}>{item.title}</strong>
                <p style={{ color: "#475569", fontSize: "14px" }}>{item.provider} | Deadline: {item.deadline}</p>
              </div>
              <button 
                type="button" 
                className="btn-delete" 
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedOpportunities;