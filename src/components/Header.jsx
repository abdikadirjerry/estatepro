import { Link } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Header.css";
import { useFavorites } from "../context/useFavorites";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const { favoritesCount } = useFavorites();

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Building2 size={24} strokeWidth={2.2} />
          </span>
          <span className="brand-name">
            Estate<span>Pro</span>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`header-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/properties" onClick={closeMenu}>
            Properties
          </Link>
          <Link to="/agents" onClick={closeMenu}>
            Agents
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link to="/properties" className="header-cta" onClick={closeMenu}>
            Explore Properties
          </Link>

          <Link to="/favorites" className="favorites-nav-link">
            <Heart size={17} />
            <span>Favorites</span>
            {favoritesCount > 0 && (
              <span className="favorites-nav-count">{favoritesCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
