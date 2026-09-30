import { Users, ShieldCheck, Home, Headset } from "lucide-react";
import Header from "../components/Header";
import AgentCard from "../components/AgentCard";
import agents from "../data/agents";
import "./Agents.css";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description:
      "Get support throughout your property search, from the first conversation to the next steps.",
  },
  {
    icon: Home,
    title: "Local Property Knowledge",
    description:
      "Explore available property options with guidance tailored to your needs and location.",
  },
  {
    icon: Headset,
    title: "Personal Support",
    description:
      "Connect with an agent to discuss your questions, preferences, and property goals.",
  },
];

function Agents() {
  return (
    <>
      <Header />

      <main className="agents-page">
        <section className="agents-hero">
          <div className="agents-hero-overlay" />
          <div className="agents-hero-content">
            <span className="agents-eyebrow">
              <Users size={15} />
              Meet Our Professionals
            </span>
            <h1>People Who Make Finding Home Easier</h1>
            <p>
              Meet the EstatePro team and connect with a property professional
              who can guide you through your real estate journey.
            </p>
          </div>
        </section>

        <section className="agents-intro section-container">
          <div className="agents-intro-copy">
            <span className="agents-section-label">Our Team</span>
            <h2>Knowledgeable People. Personal Service.</h2>
            <p>
              Whether you are buying, selling, or exploring an investment, our
              team is here to help you understand your options and take the next
              step with confidence.
            </p>
          </div>

          <div className="agents-intro-count">
            <Users size={22} />
            <div>
              <strong>{agents.length}</strong>
              <span>Featured agents</span>
            </div>
          </div>
        </section>

        <section className="agents-list-section section-container">
          <div className="agents-section-heading">
            <div>
              <span className="agents-section-label">
                EstatePro Specialists
              </span>
              <h2>Meet Our Agents</h2>
            </div>
            <p>
              Get in touch with an agent to discuss properties and arrange your
              next conversation.
            </p>
          </div>

          <div className="agents-grid">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        <section className="agents-benefits-section">
          <div className="section-container">
            <div className="agents-benefits-heading">
              <span className="agents-section-label">
                The EstatePro Approach
              </span>
              <h2>Support at Every Step</h2>
              <p>
                Our service is built around clear communication and helping
                clients explore their real estate options.
              </p>
            </div>

            <div className="agents-benefits-grid">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article className="agents-benefit-card" key={title}>
                  <div className="agents-benefit-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="agents-cta section-container">
          <div>
            <span className="agents-section-label">Let's Get Started</span>
            <h2>Have a Property Question?</h2>
            <p>
              Reach out to EstatePro and let us know what you are looking for.
            </p>
          </div>
          <a href="/contact" className="agents-cta-button">
            Contact Our Team
          </a>
        </section>
      </main>
    </>
  );
}

export default Agents;
