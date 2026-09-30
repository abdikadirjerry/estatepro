import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, Star } from "lucide-react";
import "./AgentCard.css";

function AgentCard({ agent }) {
  return (
    <article className="agent-card">
      <div className="agent-card-image">
        <img src={agent.image} alt={agent.name} loading="lazy" />
        <span className="agent-card-specialty">{agent.specialty}</span>
      </div>

      <div className="agent-card-content">
        <div className="agent-card-heading">
          <div>
            <h2>{agent.name}</h2>
            <p className="agent-card-role">{agent.role}</p>
          </div>

          <div
            className="agent-card-rating"
            aria-label={`Rating ${agent.rating} out of 5`}
          >
            <Star size={15} fill="currentColor" />
            <span>{agent.rating}</span>
          </div>
        </div>

        <p className="agent-card-bio">{agent.bio}</p>

        <div className="agent-card-stats">
          <div>
            <strong>{agent.experience}+</strong>
            <span>Years experience</span>
          </div>
          <div>
            <strong>{agent.propertiesSold}</strong>
            <span>Properties sold</span>
          </div>
        </div>

        <div className="agent-card-contact">
          <a href={`tel:${agent.phone.replace(/\s/g, "")}`}>
            <Phone size={15} />
            <span>{agent.phone}</span>
          </a>
          <a href={`mailto:${agent.email}`}>
            <Mail size={15} />
            <span>{agent.email}</span>
          </a>
        </div>

        <Link to="/contact" className="agent-card-link">
          Contact Agent
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default AgentCard;
