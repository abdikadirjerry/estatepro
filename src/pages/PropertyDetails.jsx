import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Check,
  Phone,
  Mail,
  CalendarDays,
  Heart,
  Share2,
  Building2,
} from "lucide-react";
import Header from "../components/Header";
import properties from "../data/properties";
import "./PropertyDetails.css";
import { useFavorites } from "../context/useFavorites";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const { isFavorite, toggleFavorite } = useFavorites();

  if (!property) {
    return (
      <>
        <Header />
        <main className="property-not-found">
          <div className="property-not-found-icon">
            <Building2 size={42} />
          </div>
          <h1>Property Not Found</h1>
          <p>
            The property you're looking for may have been removed or the address
            may be incorrect.
          </p>
          <Link to="/properties" className="details-back-link">
            <ArrowLeft size={18} />
            Browse Properties
          </Link>
        </main>
      </>
    );
  }

  const images = [
    property.image,
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
  ];

  const amenities = [
    "Modern Kitchen",
    "Air Conditioning",
    "Parking Space",
    "High-Speed Internet",
    "Built-in Wardrobes",
    "Security System",
    "Outdoor Space",
    "Water Supply",
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);

  const handleInquiry = (event) => {
    event.preventDefault();
    setShowMessage(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <Header />

      <main className="property-details-page">
        <div className="details-container">
          <div className="details-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/properties">Properties</Link>
            <span>/</span>
            <span>{property.title}</span>
          </div>

          <div className="details-heading">
            <div>
              <Link to="/properties" className="details-back-link">
                <ArrowLeft size={17} />
                Back to Properties
              </Link>

              <h1>{property.title}</h1>

              <p className="details-location">
                <MapPin size={18} />
                {property.location}
              </p>
            </div>

            <div className="details-actions">
              <button
                type="button"
                className="details-action-button"
                aria-label={
                  isFavorite(property.id)
                    ? "Remove property from favorites"
                    : "Save property to favorites"
                }
                aria-pressed={isFavorite(property.id)}
                onClick={() => toggleFavorite(property.id)}
              >
                <Heart
                  size={19}
                  fill={isFavorite(property.id) ? "currentColor" : "none"}
                />
                <span>{isFavorite(property.id) ? "Saved" : "Save"}</span>
              </button>

              <button
                type="button"
                className="details-action-button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: property.title,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Property link copied.");
                  }
                }}
              >
                <Share2 size={19} />
                <span>Share</span>
              </button>
            </div>
          </div>

          <section className="details-gallery" aria-label="Property photos">
            <div className="details-main-image">
              <img src={images[activeImage]} alt={property.title} />
              <span className="details-status-badge">
                {property.status || "For Sale"}
              </span>
            </div>

            <div className="details-thumbnails">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={`details-thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View property photo ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img
                    src={image}
                    alt={`${property.title} view ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </section>

          <div className="details-content-grid">
            <div className="details-main-content">
              <section className="details-overview">
                <div className="details-price-row">
                  <div>
                    <span className="details-label">Property Price</span>
                    <h2>{formatPrice(property.price)}</h2>
                  </div>
                  <span className="details-type-badge">{property.type}</span>
                </div>

                <div className="details-specifications">
                  <div className="details-specification">
                    <BedDouble size={22} />
                    <div>
                      <strong>{property.bedrooms}</strong>
                      <span>Bedrooms</span>
                    </div>
                  </div>

                  <div className="details-specification">
                    <Bath size={22} />
                    <div>
                      <strong>{property.bathrooms}</strong>
                      <span>Bathrooms</span>
                    </div>
                  </div>

                  <div className="details-specification">
                    <Maximize size={22} />
                    <div>
                      <strong>{property.area}</strong>
                      <span>Square Feet</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="details-section">
                <h2>Property Description</h2>
                <p>
                  {property.description ||
                    `Discover this beautiful ${property.type.toLowerCase()} in ${
                      property.location
                    }. Designed for comfortable modern living, this property
                    offers thoughtfully arranged spaces and convenient access
                    to local amenities. Contact our team to learn more or
                    arrange a viewing.`}
                </p>
              </section>

              <section className="details-section">
                <h2>Property Features</h2>
                <div className="details-amenities">
                  {amenities.map((amenity) => (
                    <div className="details-amenity" key={amenity}>
                      <span className="details-amenity-check">
                        <Check size={15} />
                      </span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </section>

              <section className="details-section">
                <h2>Location</h2>
                <div className="details-location-card">
                  <div className="details-location-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <strong>{property.location}</strong>
                    <p>Contact our team for more information about the area.</p>
                  </div>
                </div>
              </section>
            </div>

            <aside className="details-sidebar">
              <div className="details-agent-card">
                <div className="details-agent-heading">
                  <div className="details-agent-avatar">
                    <Building2 size={27} />
                  </div>
                  <div>
                    <span>Listed by</span>
                    <h3>EstatePro Realty</h3>
                    <p>Property Consultant</p>
                  </div>
                </div>

                <div className="details-agent-divider" />

                <h3 className="details-inquiry-title">
                  Interested in this property?
                </h3>
                <p className="details-inquiry-description">
                  Send us a message and our team will help you with the next
                  steps.
                </p>

                <form className="details-inquiry-form" onSubmit={handleInquiry}>
                  <label htmlFor="inquiry-name">Your Name</label>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                  <label htmlFor="inquiry-email">Email Address</label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                  <label htmlFor="inquiry-phone">Phone Number</label>
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />

                  <label htmlFor="inquiry-message">Message</label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows="4"
                    defaultValue={`Hello, I'm interested in ${property.title}. Please provide more information.`}
                    required
                  />

                  <button type="submit" className="details-submit-button">
                    <Mail size={17} />
                    Send Inquiry
                  </button>

                  {showMessage && (
                    <p className="details-form-notice" role="status">
                      This demo form is ready for backend integration.
                    </p>
                  )}
                </form>

                <div className="details-agent-contact">
                  <a href="tel:+252634000000">
                    <Phone size={17} />
                    Contact by Phone
                  </a>
                  <a href="mailto:info@estatepro.example">
                    <Mail size={17} />
                    Email Our Team
                  </a>
                  <p>
                    <CalendarDays size={16} />
                    Schedule a property viewing
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

export default PropertyDetails;
