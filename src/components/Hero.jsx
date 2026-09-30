import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              YOUR PROPERTY, OUR PRIORITY
            </div>

            <h1>
              Find a Place
              <br />
              You'll <span>Love</span>
              <br />
              to Call Home.
            </h1>

            <p className="hero-description">
              Discover exceptional homes, apartments, and investment
              opportunities. Your next chapter starts with finding the perfect
              property.
            </p>

            <div className="hero-actions">
              <Link to="/properties" className="hero-primary-btn">
                <Search size={18} />
                Explore Properties
                <ArrowRight size={17} />
              </Link>

              <Link to="/contact" className="hero-secondary-btn">
                Talk to an Agent
              </Link>
            </div>

            <div className="hero-trust">
              <span className="hero-trust-icon">
                <ShieldCheck size={19} />
              </span>
              <span>Trusted guidance for every move</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>DISCOVER YOUR NEXT HOME</span>
            <span className="hero-bottom-line" />
            <span>ESTATEPRO REAL ESTATE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
