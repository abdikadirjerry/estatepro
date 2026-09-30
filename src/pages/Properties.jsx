import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowDownUp,
  Building2,
  ChevronDown,
  LayoutGrid,
  MapPin,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import StateMessage from "../components/StateMessage";
import properties from "../data/properties";
import "./Properties.css";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const location = searchParams.get("location") || "";
  const propertyType = searchParams.get("propertyType") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const filteredProperties = useMemo(() => {
    const normalizedLocation = location.trim().toLowerCase();

    const results = properties.filter((property) => {
      const matchesLocation =
        !normalizedLocation ||
        property.location.toLowerCase().includes(normalizedLocation) ||
        property.address.toLowerCase().includes(normalizedLocation) ||
        property.title.toLowerCase().includes(normalizedLocation);

      const matchesType =
        !propertyType ||
        property.type.toLowerCase() === propertyType.toLowerCase();

      const matchesMinPrice = !minPrice || property.price >= Number(minPrice);

      const matchesMaxPrice = !maxPrice || property.price <= Number(maxPrice);

      return (
        matchesLocation && matchesType && matchesMinPrice && matchesMaxPrice
      );
    });

    switch (sortBy) {
      case "price-low":
        return results.sort((a, b) => a.price - b.price);

      case "price-high":
        return results.sort((a, b) => b.price - a.price);

      case "newest":
      default:
        return results.sort((a, b) => b.id - a.id);
    }
  }, [location, propertyType, minPrice, maxPrice, sortBy]);

  const hasActiveFilters = Boolean(
    location || propertyType || minPrice || maxPrice,
  );

  const updateFilter = (name, value) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set(name, value.trim());
    } else {
      nextParams.delete(name);
    }

    setSearchParams(nextParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <>
      <Header />

      <main className="properties-page">
        <section className="properties-hero">
          <div className="properties-hero-container">
            <div className="properties-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Properties</span>
            </div>

            <span className="properties-eyebrow">DISCOVER YOUR NEXT HOME</span>

            <h1>
              Explore Our <span>Properties</span>
            </h1>

            <p>
              Browse our collection of homes, apartments, and exceptional real
              estate opportunities.
            </p>
          </div>
        </section>

        <section className="properties-content">
          <div className="properties-container">
            <div className="properties-toolbar">
              <div className="properties-result-info">
                <span className="properties-result-icon">
                  <Building2 size={19} />
                </span>

                <div>
                  <h2>
                    {filteredProperties.length}{" "}
                    {filteredProperties.length === 1
                      ? "Property"
                      : "Properties"}{" "}
                    Found
                  </h2>

                  <p>
                    {hasActiveFilters
                      ? "Matching your selected filters"
                      : "Explore all available listings"}
                  </p>
                </div>
              </div>

              <div className="properties-toolbar-actions">
                <button
                  type="button"
                  className={`properties-filter-toggle ${
                    showFilters ? "active" : ""
                  }`}
                  onClick={() => setShowFilters((current) => !current)}
                  aria-expanded={showFilters}
                >
                  <SlidersHorizontal size={17} />
                  Filters
                  <ChevronDown
                    size={15}
                    className={showFilters ? "rotate" : ""}
                  />
                </button>

                <label className="properties-sort">
                  <ArrowDownUp size={16} />
                  <span>Sort:</span>

                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    aria-label="Sort properties"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </label>
              </div>
            </div>

            <div
              className={`properties-filter-panel ${
                showFilters ? "filters-visible" : ""
              }`}
            >
              <div className="properties-filter-field">
                <label htmlFor="listing-location">
                  <MapPin size={15} />
                  Location
                </label>

                <input
                  id="listing-location"
                  type="search"
                  value={location}
                  onChange={(event) =>
                    updateFilter("location", event.target.value)
                  }
                  placeholder="City or neighborhood"
                />
              </div>

              <div className="properties-filter-field">
                <label htmlFor="listing-type">
                  <Building2 size={15} />
                  Property Type
                </label>

                <select
                  id="listing-type"
                  value={propertyType}
                  onChange={(event) =>
                    updateFilter("propertyType", event.target.value)
                  }
                >
                  <option value="">All Types</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Condo">Condo</option>
                </select>
              </div>

              <div className="properties-filter-field">
                <label htmlFor="listing-min-price">Minimum Price</label>

                <select
                  id="listing-min-price"
                  value={minPrice}
                  onChange={(event) =>
                    updateFilter("minPrice", event.target.value)
                  }
                >
                  <option value="">No Minimum</option>
                  <option value="50000">$50,000</option>
                  <option value="100000">$100,000</option>
                  <option value="150000">$150,000</option>
                  <option value="200000">$200,000</option>
                  <option value="300000">$300,000</option>
                  <option value="500000">$500,000</option>
                </select>
              </div>

              <div className="properties-filter-field">
                <label htmlFor="listing-max-price">Maximum Price</label>

                <select
                  id="listing-max-price"
                  value={maxPrice}
                  onChange={(event) =>
                    updateFilter("maxPrice", event.target.value)
                  }
                >
                  <option value="">No Maximum</option>
                  <option value="100000">$100,000</option>
                  <option value="200000">$200,000</option>
                  <option value="300000">$300,000</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                </select>
              </div>

              <button
                type="button"
                className="properties-clear-btn"
                onClick={clearFilters}
                disabled={!hasActiveFilters}
              >
                <RotateCcw size={15} />
                Clear
              </button>
            </div>

            {hasActiveFilters && (
              <div className="properties-active-filters">
                <span>Active filters:</span>

                {location && (
                  <button
                    type="button"
                    onClick={() => updateFilter("location", "")}
                    className="properties-filter-chip"
                  >
                    Location: {location} <span>×</span>
                  </button>
                )}

                {propertyType && (
                  <button
                    type="button"
                    onClick={() => updateFilter("propertyType", "")}
                    className="properties-filter-chip"
                  >
                    {propertyType} <span>×</span>
                  </button>
                )}

                {minPrice && (
                  <button
                    type="button"
                    onClick={() => updateFilter("minPrice", "")}
                    className="properties-filter-chip"
                  >
                    Min: ${Number(minPrice).toLocaleString("en-US")}{" "}
                    <span>×</span>
                  </button>
                )}

                {maxPrice && (
                  <button
                    type="button"
                    onClick={() => updateFilter("maxPrice", "")}
                    className="properties-filter-chip"
                  >
                    Max: ${Number(maxPrice).toLocaleString("en-US")}{" "}
                    <span>×</span>
                  </button>
                )}
              </div>
            )}

            {filteredProperties.length > 0 ? (
              <div className="properties-grid">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <StateMessage
                type="empty"
                title="No Properties Found"
                description="We couldn't find any properties matching your current search. Try adjusting your filters."
                action={
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="properties-empty-btn"
                  >
                    <RotateCcw size={16} />
                    Clear All Filters
                  </button>
                }
              />
            )}

            <div className="properties-footer-note">
              <LayoutGrid size={16} />

              <span>
                Showing {filteredProperties.length} of {properties.length}{" "}
                properties
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Properties;
