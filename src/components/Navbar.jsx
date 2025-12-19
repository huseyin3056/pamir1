import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Hüseyin Özdil
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>Anasayfa</Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')} onClick={closeMenu}>Hakkımızda</Link>
          </li>
          <li>
            <Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projeler</Link>
          </li>
          <li>
            <Link to="/cv" className={isActive('/cv')} onClick={closeMenu}>CV</Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>İletişim</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
