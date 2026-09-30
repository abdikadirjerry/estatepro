import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import properties from "../data/properties";
import PropertyCard from "./PropertyCard";
import "./FeaturedProperties.css";

function FeaturedProperties() {
  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 3);

  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-heading">
          <div className="featured-heading-content">
            <span className="featured-eyebrow">
              <Building2 size={15} />
              HANDPICKED FOR YOU
            </span>

            <h2>
              Explore Our <span>Featured</span> Properties
            </h2>

            <p>
              Discover exceptional homes and investment opportunities selected
              to match your lifestyle.
            </p>
          </div>

          <Link to="/properties" className="featured-view-all">
            View All Properties
            <ArrowRight size={17} />
          </Link>
        </div>

        {featuredProperties.length > 0 ? (
          <div className="featured-grid">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="featured-empty">
            <Building2 size={32} />
            <h3>No featured properties yet</h3>
            <p>Check back soon for new property listings.</p>
          </div>
        )}

        <div className="featured-bottom">
          <span className="featured-bottom-line" />
          <p>Find your perfect place with EstatePro</p>
          <span className="featured-bottom-line" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
