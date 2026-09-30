import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Heart, Home, ChevronDown } from "lucide-react";
import { useFavorites } from "../context/useFavorites";
import "./Header.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "Agents", path: "/agents" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { favorites } = useFavorites();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Home size={23} strokeWidth={2.2} />
          </span>
          <span className="brand-name">
            Estate<span>Pro</span>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          id="primary-navigation"
          className={`header-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="header-actions">
            <Link
              to="/favorites"
              className="favorites-link"
              onClick={closeMenu}
              aria-label={`Favorites, ${favorites.length} saved properties`}
            >
              <Heart size={19} />
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="favorites-count">{favorites.length}</span>
              )}
            </Link>

            <Link to="/properties" className="header-cta" onClick={closeMenu}>
              Explore Homes
              <ChevronDown size={16} className="cta-chevron" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
