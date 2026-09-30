import { Link } from "react-router-dom";
import { BedDouble, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <article className="property-card">
      <div className="property-card-image-wrapper">
        <img
          className="property-card-image"
          src={property.image}
          alt={property.title}
          loading="lazy"
        />

        <div className="property-card-badges">
          <span className="property-status-badge">{property.status}</span>
          <span className="property-type-badge">{property.type}</span>
        </div>
      </div>

      <div className="property-card-content">
        <div className="property-card-price">
          {formattedPrice}
          {property.status === "For Rent" && (
            <span className="property-price-period"> / month</span>
          )}
        </div>

        <h3 className="property-card-title">{property.title}</h3>

        <div className="property-card-location">
          <MapPin size={15} />
          <span>{property.location}</span>
        </div>

        <div className="property-card-divider" />

        <div className="property-card-details">
          <div className="property-detail">
            <BedDouble size={17} />
            <span>{property.bedrooms} Beds</span>
          </div>

          <div className="property-detail">
            <Bath size={17} />
            <span>{property.bathrooms} Baths</span>
          </div>

          <div className="property-detail">
            <Maximize size={16} />
            <span>{property.area.toLocaleString("en-US")} sqft</span>
          </div>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="property-card-link"
          aria-label={`View details for ${property.title}`}
        >
          View Property
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;
