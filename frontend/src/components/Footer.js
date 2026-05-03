import React from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Briefcase className="logo-icon" size={20} />
            <span>JobPortal</span>
          </Link>
          <p className="footer-tagline">
            Connecting talented professionals with world-class opportunities.
          </p>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">For Candidates</h4>
          <ul className="footer-links">
            <li><Link to="/jobs">Browse Jobs</Link></li>
            <li><Link to="/login">Register</Link></li>
            <li><Link to="#">Job Alerts</Link></li>
            <li><Link to="#">Saved Jobs</Link></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">For Employers</h4>
          <ul className="footer-links">
            <li><Link to="#">Post a Job</Link></li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">Dashboard</Link></li>
            <li><Link to="#">Resources</Link></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><Link to="#">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
