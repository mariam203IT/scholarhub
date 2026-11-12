import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (name.trim() === "") validationErrors.name = "Name is required";
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      validationErrors.email = "Enter a valid email";
    }
    if (phone.trim() === "") validationErrors.phone = "Phone is required";
    if (subject.trim() === "") validationErrors.subject = "Subject is required";
    if (message.trim() === "") validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setSuccess("Your inquiry has been submitted successfully!");
      setErrors({});
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="page-content">
      <h1>Contact Us</h1>
      {success && <p className="success-msg">{success}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div>
          <label>Phone</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div>
          <label>Subject</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          {errors.subject && <span className="error-text">{errors.subject}</span>}
        </div>

        <div>
          <label>Message</label>
          <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;