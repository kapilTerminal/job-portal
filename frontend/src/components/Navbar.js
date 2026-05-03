import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Briefcase className="logo-icon" size={24} />
          <span>JobPortal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
            {location.pathname === '/' && (
              <motion.div layoutId="nav-indicator" className="active-indicator" />
            )}
          </Link>
          <Link 
            to="/jobs" 
            className={`nav-link ${location.pathname === '/jobs' ? 'active' : ''}`}
          >
            Jobs
            {location.pathname === '/jobs' && (
              <motion.div layoutId="nav-indicator" className="active-indicator" />
            )}
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
            {location.pathname === '/contact' && (
              <motion.div layoutId="nav-indicator" className="active-indicator" />
            )}
          </Link>
          
          <Link to="/login">
            <Button variant="primary" className="nav-btn-login">Login / Register</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/jobs" className={`mobile-link ${location.pathname === '/jobs' ? 'active' : ''}`} onClick={closeMenu}>Jobs</Link>
          <Link to="/contact" className={`mobile-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
          <Link to="/login" className="mobile-link mobile-login" onClick={closeMenu}>Login / Register</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
