import { Link } from "react-router-dom";
import { BedDouble, Bath, Maximize, MapPin, Heart } from "lucide-react";
import { useFavorites } from "../context/useFavorites";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(property.id);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <article className="property-card">
      <div className="property-card-image">
        <img src={property.image} alt={property.title} />

        <span className="property-card-status">
          {property.status || "For Sale"}
        </span>

        <button
          type="button"
          className={`property-card-favorite ${saved ? "is-favorite" : ""}`}
          aria-label={
            saved
              ? `Remove ${property.title} from favorites`
              : `Save ${property.title} to favorites`
          }
          aria-pressed={saved}
          onClick={() => toggleFavorite(property.id)}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="property-card-content">
        <div className="property-card-price-row">
          <strong className="property-card-price">
            {formatPrice(property.price)}
          </strong>
          <span className="property-card-type">{property.type}</span>
        </div>

        <h3 className="property-card-title">
          <Link to={`/properties/${property.id}`}>{property.title}</Link>
        </h3>

        <p className="property-card-location">
          <MapPin size={15} />
          {property.location}
        </p>

        <div className="property-card-features">
          <span>
            <BedDouble size={16} />
            {property.bedrooms} Beds
          </span>
          <span>
            <Bath size={16} />
            {property.bathrooms} Baths
          </span>
          <span>
            <Maximize size={16} />
            {property.area} sqft
          </span>
        </div>

        <Link to={`/properties/${property.id}`} className="property-card-link">
          View Property
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;
