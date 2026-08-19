import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e, method) => {
    e.preventDefault();

    if (method === "whatsapp") {
      const phoneNumber = "919063354210";

      const whatsappMessage = `Hello Shireesha,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappUrl, "_blank");
    } else if (method === "email") {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://formspree.io/f/xyzjwdda", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (response.ok) {
          alert("Email sent successfully! ✅ I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send email. Please try WhatsApp instead.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try WhatsApp instead.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Let's Work Together</h2>

          <p>
            Have a project or opportunity in mind?
            <br />
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p>
              I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of
              your vision.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <small>Email</small>
                  <p>shireeshapulaganti@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <small>WhatsApp</small>
                  <p>Available for communication</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              />
            </div>

            <div className="form-buttons">
              <button
                type="button"
                className="btn-email"
                onClick={(e) => handleSubmit(e, "email")}
                disabled={isSubmitting}
              >
                {isSubmitting ? "📧 Sending..." : "📧 Send Email"}
              </button>

              <button
                type="button"
                className="btn-whatsapp"
                onClick={(e) => handleSubmit(e, "whatsapp")}
                disabled={isSubmitting}
              >
                💬 Send on WhatsApp
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;