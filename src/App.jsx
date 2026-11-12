import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Opportunities from "./pages/Opportunities";
import Contact from "./pages/Contact";
import SavedOpportunities from "./pages/SavedOpportunities";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/saved" element={<SavedOpportunities />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;