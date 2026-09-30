import { useState } from "react";
import { CheckCircle, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import Header from "../components/Header";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-overlay" />
          <div className="contact-hero-content">
            <span className="contact-eyebrow">Get in Touch</span>
            <h1>Let's Talk About Your Property Goals</h1>
            <p>
              Whether you're buying, selling, or exploring your options, the
              EstatePro team is ready to hear from you.
            </p>
          </div>
        </section>

        <section className="contact-main section-container">
          <div className="contact-info">
            <span className="contact-section-label">Contact EstatePro</span>
            <h2>We're Here to Help You Move Forward</h2>
            <p className="contact-info-description">
              Send us a message or use the contact details below. Tell us what
              you're looking for, and our team can help you explore the next
              steps.
            </p>

            <div className="contact-info-list">
              <a className="contact-info-item" href="tel:+252634001000">
                <span className="contact-info-icon">
                  <Phone size={19} />
                </span>
                <span>
                  <strong>Call Our Team</strong>
                  <small>+252 63 400 1000</small>
                </span>
              </a>

              <a
                className="contact-info-item"
                href="mailto:hello@estatepro.com"
              >
                <span className="contact-info-icon">
                  <Mail size={19} />
                </span>
                <span>
                  <strong>Email Us</strong>
                  <small>hello@estatepro.com</small>
                </span>
              </a>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <MapPin size={19} />
                </span>
                <span>
                  <strong>Our Office</strong>
                  <small>Hargeisa, Somaliland</small>
                </span>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <Clock3 size={19} />
                </span>
                <span>
                  <strong>Office Hours</strong>
                  <small>Saturday – Thursday, 8:00 AM – 5:00 PM</small>
                </span>
              </div>
            </div>

            <div className="contact-note">
              <strong>Looking for a property?</strong>
              <p>
                Share your preferred location, property type, and budget in the
                message form. This helps us understand your needs.
              </p>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-section-label">Send an Inquiry</span>
              <h2>Tell Us How We Can Help</h2>
              <p>Complete the form and we'll be ready to follow up.</p>
            </div>

            {submitted && (
              <div className="contact-success" role="status">
                <CheckCircle size={20} />
                <div>
                  <strong>Message prepared successfully</strong>
                  <p>
                    This demo form does not send messages yet. Connect a backend
                    or form service to receive inquiries.
                  </p>
                </div>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    minLength={2}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+252 ..."
                    autoComplete="tel"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject">I'm Interested In</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select an inquiry type
                    </option>
                    <option value="Buying a property">Buying a property</option>
                    <option value="Renting a property">
                      Renting a property
                    </option>
                    <option value="Selling a property">
                      Selling a property
                    </option>
                    <option value="Property investment">
                      Property investment
                    </option>
                    <option value="Working with an agent">
                      Working with an agent
                    </option>
                    <option value="Other inquiry">Other inquiry</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about what you're looking for..."
                  rows={6}
                  required
                  minLength={10}
                />
              </div>

              <button className="contact-submit" type="submit">
                Send Message
                <Send size={16} />
              </button>

              <p className="contact-form-disclaimer">
                By submitting this form, you agree to be contacted about your
                inquiry. This demo does not transmit or store your information.
              </p>
            </form>
          </div>
        </section>

        <section className="contact-location-section">
          <div className="section-container contact-location">
            <div className="contact-location-copy">
              <span className="contact-section-label">Find Us</span>
              <h2>Serving Hargeisa and Surrounding Areas</h2>
              <p>
                EstatePro is presented as a Hargeisa-based real estate agency in
                this portfolio demo. Contact the team to discuss property
                availability and viewing arrangements.
              </p>
            </div>

            <div className="contact-location-card">
              <div className="contact-location-pin">
                <MapPin size={24} />
              </div>
              <strong>EstatePro Realty</strong>
              <span>Hargeisa, Somaliland</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hargeisa%2C+Somaliland"
                target="_blank"
                rel="noreferrer"
              >
                View area on map
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
