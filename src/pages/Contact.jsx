import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="page-container">
      <section className="page-header">
        <p className="small-title">Get In Touch</p>

        <h1>Contact CyberShield</h1>

        <p>
          Have a question or want to learn more? Send us a message.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Let's Talk</h2>

          <p>
            If you have any questions about cybersecurity, feel free to contact
            us.
          </p>

          <div className="contact-detail">
            <strong>Email</strong>
            <p>contact@cybershield.com</p>
          </div>

          <div className="contact-detail">
            <strong>Location</strong>
            <p>Peshawar, Pakistan</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Message</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;