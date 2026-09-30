import {
  Award,
  Building2,
  CheckCircle,
  Handshake,
  Heart,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import "./About.css";

const statistics = [
  { value: "500+", label: "Properties Listed" },
  { value: "350+", label: "Happy Clients" },
  { value: "25+", label: "Expert Agents" },
  { value: "8+", label: "Years of Experience" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "We believe clear communication and honest information help clients make informed property decisions.",
  },
  {
    icon: Heart,
    title: "Client-Focused Service",
    description:
      "We listen to each client's goals and aim to make every step of the property journey straightforward.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "We strive to provide attentive service, reliable guidance, and a consistent standard of professionalism.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description:
      "We value lasting relationships built through responsiveness, respect, and dependable support.",
  },
];

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Home Buyer",
    quote:
      "The team made the property search feel organized and approachable. They listened to my preferences and helped me compare different options.",
    initials: "SA",
  },
  {
    name: "Omar Hassan",
    role: "Property Investor",
    quote:
      "I appreciated the clear communication and the time taken to explain the available property choices. The experience felt personal and professional.",
    initials: "OH",
  },
  {
    name: "Amina Yusuf",
    role: "Home Buyer",
    quote:
      "The process was easy to follow, and I was able to discuss my questions with the team at every stage. It was a positive experience.",
    initials: "AY",
  },
];

function About() {
  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-overlay" />
          <div className="about-hero-content">
            <span className="about-eyebrow">
              <Building2 size={15} />
              About EstatePro
            </span>
            <h1>Helping You Find More Than Just a Property</h1>
            <p>
              We connect people with property opportunities through personalized
              service, local knowledge, and a commitment to making real estate
              more approachable.
            </p>
          </div>
        </section>

        <section className="about-story section-container">
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=85"
              alt="Contemporary home with a welcoming architectural design"
              loading="lazy"
            />
            <div className="about-image-caption">
              <Building2 size={20} />
              <span>Connecting people with places to call home</span>
            </div>
          </div>

          <div className="about-story-content">
            <span className="about-section-label">Our Story</span>
            <h2>Real Estate Built Around People</h2>
            <p>
              EstatePro is a real estate brand concept designed around the idea
              that finding a property should be a clear, informed, and personal
              experience.
            </p>
            <p>
              From exploring homes to considering property investments, our
              approach focuses on understanding individual needs, presenting
              options, and supporting clients as they evaluate their next steps.
            </p>
            <div className="about-story-points">
              <div>
                <CheckCircle size={18} />
                <span>Personalized property guidance</span>
              </div>
              <div>
                <CheckCircle size={18} />
                <span>Clear communication throughout the process</span>
              </div>
              <div>
                <CheckCircle size={18} />
                <span>Property options for different goals</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-stats">
          <div className="section-container about-stats-inner">
            {statistics.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="about-stats-note">
            Illustrative portfolio-demo statistics. Replace with verified
            company figures before publication.
          </p>
        </section>

        <section className="about-mission section-container">
          <div className="about-mission-content">
            <span className="about-section-label">Our Mission</span>
            <h2>Making Property Decisions Feel More Informed</h2>
            <p>
              Our mission is to make the property journey easier to navigate by
              combining useful information, attentive service, and a welcoming
              client experience.
            </p>
          </div>
          <div className="about-mission-card">
            <div className="about-mission-icon">
              <Target size={27} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a recognizable and trusted real estate brand, helping people
              explore property opportunities with clarity and confidence.
            </p>
          </div>
        </section>

        <section className="about-values-section">
          <div className="section-container">
            <div className="about-section-heading">
              <span className="about-section-label">What Guides Us</span>
              <h2>Our Core Values</h2>
              <p>
                The principles behind the experience we aim to provide to every
                client and property partner.
              </p>
            </div>

            <div className="about-values-grid">
              {values.map(({ icon: Icon, title, description }) => (
                <article className="about-value-card" key={title}>
                  <div className="about-value-icon">
                    <Icon size={23} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-testimonials section-container">
          <div className="about-section-heading">
            <span className="about-section-label">Client Experiences</span>
            <h2>What Clients Appreciate</h2>
            <p>
              Example testimonials illustrating the type of feedback this demo
              website can present.
            </p>
          </div>

          <div className="about-testimonials-grid">
            {testimonials.map((testimonial) => (
              <article
                className="about-testimonial-card"
                key={testimonial.name}
              >
                <div
                  className="about-testimonial-stars"
                  aria-label="Five stars"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <div className="about-testimonial-author">
                  <div className="about-testimonial-avatar">
                    {testimonial.initials}
                  </div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="about-testimonials-note">
            Testimonials are fictional examples for this portfolio project, not
            verified customer reviews.
          </p>
        </section>

        <section className="about-cta">
          <div className="section-container about-cta-inner">
            <div>
              <span className="about-section-label">Your Property Journey</span>
              <h2>Let's Find the Right Opportunity for You</h2>
              <p>
                Explore available properties or get in touch with our team to
                discuss your real estate goals.
              </p>
            </div>
            <div className="about-cta-actions">
              <a href="/properties" className="about-cta-primary">
                Explore Properties
              </a>
              <a href="/contact" className="about-cta-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
