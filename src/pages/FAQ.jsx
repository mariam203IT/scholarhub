const faqs = [
  { id: 1, q: "How do I bookmark a scholarship?", a: "Navigate to the 'My Saved' tab and fill in the details of the scholarship to store it locally." },
  { id: 2, q: "Are the listed opportunities fully funded?", a: "Yes, most opportunities include tuition fees and living stipends." },
  { id: 3, q: "Is my saved data secure?", a: "All saved items are kept privately inside your own web browser's LocalStorage." }
];

function FAQ() {
  return (
    <div className="page-content">
      <span className="badge badge-blue">Help Center</span>
      <h1>Frequently Asked Questions</h1>
      <p>Everything you need to know about navigating ScholarHub.</p>

      <div className="faq-list" style={{ marginTop: "24px" }}>
        {faqs.map((item) => (
          <div key={item.id} className="faq-item">
            <h3 className="faq-question">Q: {item.q}</h3>
            <p style={{ color: "#475569" }}>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;