import { useEffect, useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import API from "../../api/axios";

function Contact() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    API.get("/profile")
      .then(({ data }) => setProfile(data))
      .catch(() => {});
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await API.post("/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <span>Get In Touch</span>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="contact-icon"><FaEnvelope /></div>
            <div>
              <h3>Email</h3>
              <p>{profile?.email || "chavdavishal9054@gmail.com"}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <div>
              <h3>Phone</h3>
              <p>{profile?.phone || "+91 9427566394"}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div>
              <h3>Location</h3>
              <p>{profile?.location || "Ahmedabad, Gujarat"}</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
            <textarea rows="6" name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p style={{ color: "#22c55e", marginTop: 10 }}>Message sent successfully!</p>}
            {status === "error" && <p style={{ color: "#ef4444", marginTop: 10 }}>Failed to send. Try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
