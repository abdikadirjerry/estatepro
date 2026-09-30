import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Home, DollarSign, Search, RotateCcw } from "lucide-react";
import "./PropertySearch.css";

const initialFilters = {
  location: "",
  propertyType: "",
  minPrice: "",
  maxPrice: "",
};

function PropertySearch() {
  const [filters, setFilters] = useState(initialFilters);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value.trim()) {
        searchParams.set(key, value.trim());
      }
    });

    navigate(`/properties?${searchParams.toString()}`);
  };

  const handleReset = () => {
    setFilters(initialFilters);
  };

  return (
    <section className="property-search-section">
      <div className="property-search-container">
        <div className="property-search-heading">
          <span className="property-search-eyebrow">
            FIND YOUR PERFECT PROPERTY
          </span>
          <h2>Search Properties</h2>
          <p>Find a home that fits your lifestyle, location, and budget.</p>
        </div>

        <form className="property-search-form" onSubmit={handleSubmit}>
          <div className="search-fields">
            <div className="search-field search-location">
              <label htmlFor="search-location">
                <MapPin size={17} />
                Location
              </label>
              <input
                id="search-location"
                type="text"
                name="location"
                placeholder="Enter city or neighborhood"
                value={filters.location}
                onChange={handleChange}
              />
            </div>

            <div className="search-field">
              <label htmlFor="search-property-type">
                <Home size={17} />
                Property Type
              </label>
              <select
                id="search-property-type"
                name="propertyType"
                value={filters.propertyType}
                onChange={handleChange}
              >
                <option value="">All Properties</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Condo">Condo</option>
              </select>
            </div>

            <div className="search-field">
              <label htmlFor="search-min-price">
                <DollarSign size={17} />
                Min Price
              </label>
              <select
                id="search-min-price"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
              >
                <option value="">No Min</option>
                <option value="50000">$50,000</option>
                <option value="100000">$100,000</option>
                <option value="150000">$150,000</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
              </select>
            </div>

            <div className="search-field">
              <label htmlFor="search-max-price">
                <DollarSign size={17} />
                Max Price
              </label>
              <select
                id="search-max-price"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
              >
                <option value="">No Max</option>
                <option value="100000">$100,000</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
                <option value="750000">$750,000</option>
                <option value="1000000">$1,000,000</option>
              </select>
            </div>
          </div>

          <div className="property-search-actions">
            <button
              type="button"
              className="search-reset-btn"
              onClick={handleReset}
            >
              <RotateCcw size={15} />
              Clear Filters
            </button>

            <button type="submit" className="search-submit-btn">
              <Search size={18} />
              Search Properties
            </button>
          </div>
        </form>

        <div className="property-search-note">
          <span className="search-note-dot" />
          Explore properties tailored to your needs
        </div>
      </div>
    </section>
  );
}

export default PropertySearch;
