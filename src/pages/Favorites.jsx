import { Link } from "react-router-dom";
import { Heart, ArrowRight, Trash2, Bookmark } from "lucide-react";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";
import { useFavorites } from "../context/useFavorites";
import "./Favorites.css";

function Favorites() {
  const { favoriteIds, clearFavorites } = useFavorites();

  const favoriteProperties = properties.filter((property) =>
    favoriteIds.includes(property.id),
  );

  return (
    <>
      <Header />

      <main className="favorites-page">
        <section className="favorites-hero">
          <div className="favorites-container">
            <span className="favorites-eyebrow">
              <Heart size={15} />
              YOUR COLLECTION
            </span>
            <h1>Saved Properties</h1>
            <p>
              Keep track of the properties you love and revisit them whenever
              you're ready.
            </p>
          </div>
        </section>

        <section className="favorites-content favorites-container">
          <div className="favorites-heading">
            <div>
              <h2>My Favorites</h2>
              <p>
                {favoriteProperties.length}{" "}
                {favoriteProperties.length === 1 ? "property" : "properties"}{" "}
                saved
              </p>
            </div>

            {favoriteProperties.length > 0 && (
              <button
                type="button"
                className="favorites-clear-button"
                onClick={clearFavorites}
              >
                <Trash2 size={16} />
                Clear All
              </button>
            )}
          </div>

          {favoriteProperties.length > 0 ? (
            <div className="favorites-grid">
              {favoriteProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="favorites-empty">
              <div className="favorites-empty-icon">
                <Bookmark size={34} />
              </div>
              <h2>No saved properties yet</h2>
              <p>
                Browse our listings and tap the heart icon on any property you
                want to save here.
              </p>
              <Link to="/properties" className="favorites-browse-button">
                Explore Properties
                <ArrowRight size={17} />
              </Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Favorites;
