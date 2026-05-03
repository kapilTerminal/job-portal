import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Clock, Building, ArrowLeft, CheckCircle, Send } from 'lucide-react';
import { dummyJobs } from '../data/dummyJobs';
import Button from '../components/Button';
import './JobDetail.css';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch job by ID
    setLoading(true);
    setTimeout(() => {
      const foundJob = dummyJobs.find(j => j.id === parseInt(id));
      setJob(foundJob);
      setLoading(false);
    }, 800);
    window.scrollTo(0, 0);
  }, [id]);

  const handleApply = () => {
    setApplying(true);
    // Simulate API call for application
    setTimeout(() => {
      setApplying(false);
      setApplied(true);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="job-detail-page">
        <div className="job-detail-header-bg"></div>
        <div className="container">
          <div className="skeleton-detail-header"></div>
          <div className="job-detail-content">
            <div className="job-main-col">
              <div className="job-header-card skeleton-card"></div>
              <div className="job-description-card skeleton-card" style={{height: '400px'}}></div>
            </div>
            <div className="job-sidebar-col">
              <div className="apply-card skeleton-card" style={{height: '250px'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container section text-center">
        <h2>Job not found</h2>
        <p className="text-muted mt-sm mb-lg">The position you are looking for might have been closed.</p>
        <Link to="/jobs">
          <Button variant="primary">Back to Jobs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="job-detail-page">
      <div className="job-detail-header-bg"></div>
      
      <div className="container">
        <Link to="/jobs" className="back-link">
          <ArrowLeft size={16} /> Back to jobs
        </Link>
        
        <motion.div 
          className="job-detail-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="job-main-col">
            <div className="job-header-card">
              <div className="job-title-wrapper">
                <div className="job-company-logo-large">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h1 className="job-title-large">{job.title}</h1>
                  <div className="job-meta-row">
                    <div className="job-meta-item">
                      <Building className="meta-icon" size={16} />
                      <span>{job.company}</span>
                    </div>
                    <div className="job-meta-item">
                      <MapPin className="meta-icon" size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-meta-item">
                      <DollarSign className="meta-icon" size={16} />
                      <span>{job.salary}</span>
                    </div>
                    <div className="job-meta-item">
                      <Clock className="meta-icon" size={16} />
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="job-description-card">
              <h2>Job Description</h2>
              <div className="description-content">
                <p>{job.description}</p>
                
                <h3>Requirements</h3>
                <ul>
                  <li>Proven experience in the relevant field.</li>
                  <li>Strong problem-solving skills and attention to detail.</li>
                  <li>Ability to work independently and collaboratively.</li>
                  <li>Excellent communication skills.</li>
                </ul>
                
                <h3>Benefits</h3>
                <ul>
                  <li>Competitive salary and equity package.</li>
                  <li>Health, dental, and vision insurance.</li>
                  <li>Flexible working hours and remote options.</li>
                  <li>Continuous learning and development budget.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="job-sidebar-col">
            <div className="apply-card">
              <h3>Ready to join?</h3>
              <p>Take the next step in your career and apply to {job.company}.</p>
              
              {applied ? (
                <motion.div 
                  className="success-message"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <CheckCircle size={20} className="success-icon" />
                  <span>Application Submitted!</span>
                </motion.div>
              ) : (
                <Button 
                  variant="primary" 
                  className="btn-full apply-btn" 
                  onClick={handleApply}
                  isLoading={applying}
                >
                  <span className="apply-btn-content">
                    Apply Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <Send size={16} className="ml-xs" />
                    </motion.div>
                  </span>
                </Button>
              )}
              
              <Button variant="outline" className="btn-full mt-md">
                Save for later
              </Button>
            </div>
            
            <div className="company-card">
              <div className="company-logo-placeholder">
                {job.company.charAt(0)}
              </div>
              <h4>About {job.company}</h4>
              <p>A leading company innovating in the tech space, providing top-tier solutions for clients worldwide.</p>
              <a href="#" className="company-link">Visit Website</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetail;
