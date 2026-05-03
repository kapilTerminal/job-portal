import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Search, MapPin, Plane, User, Briefcase } from 'lucide-react';
import JobCard from '../components/JobCard';
import { dummyJobs } from '../data/dummyJobs';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const featuredJobs = dummyJobs.slice(0, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/jobs');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background-elements">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
        </div>
        
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="hero-badge">
              🚀 Over 10,000+ global jobs available
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="hero-title">
              Find Your Dream Job<br/>
              <span className="text-primary">Anywhere in the World</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="hero-subtitle">
              Discover thousands of remote and local jobs in tech, design, marketing, and more. 
              Your next global adventure starts right here.
            </motion.p>
            
            <motion.form variants={fadeInUp} className="hero-search-box" onSubmit={handleSearch}>
              <div className="hero-search-input">
                <Search size={20} className="text-muted" />
                <input type="text" placeholder="Job title or keyword" />
              </div>
              <div className="hero-search-divider"></div>
              <div className="hero-search-input">
                <MapPin size={20} className="text-muted" />
                <input type="text" placeholder="Location or Remote" />
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary hero-search-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
            </motion.form>
            
            <motion.div variants={fadeInUp} className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Job Offers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Countries</span>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="hero-visual">
            <motion.div 
              className="animation-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Globe / Destination */}
              <div className="globe-icon">🌍</div>
              
              {/* Plane Animation */}
              <div className="plane-wrapper">
                <Plane className="animated-plane" size={32} />
              </div>
              
              {/* Traveler Animation */}
              <div className="traveler-wrapper">
                <User size={24} className="traveler-icon" />
                <Briefcase size={16} className="luggage-icon" />
              </div>
              
              {/* Dotted path */}
              <svg className="dotted-path" width="300" height="200" viewBox="0 0 300 200">
                <path d="M10,180 Q100,20 280,40" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeDasharray="8 8" className="path-animation" />
              </svg>
              
              <div className="hero-glass-card card-1">
                <div className="glass-content">
                  <div className="glass-icon">💼</div>
                  <div>
                    <h4>Hired in London</h4>
                    <p>Sarah J. - Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="hero-glass-card card-2">
                <div className="glass-content">
                  <div className="glass-icon">🌴</div>
                  <div>
                    <h4>Relocated to Bali</h4>
                    <p>Mark T. - Designer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="section featured-jobs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Opportunities</h2>
            <Link to="/jobs" className="view-all-link">
              Explore all jobs <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="jobs-grid">
            {featuredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Ready to accelerate your career globally?</h2>
          <p>Create an account to save jobs, track applications, and receive alerts tailored to your preferences.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className="btn btn-primary btn-large">
              Join the Network
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
