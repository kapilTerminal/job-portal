import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock } from 'lucide-react';
import './JobCard.css';

const JobCard = ({ job, index = 0 }) => {
  return (
    <motion.div 
      className="job-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6, boxShadow: 'var(--shadow-hover)', borderColor: 'var(--color-primary-light)' }}
    >
      <div className="job-card-header">
        <div className="job-company-logo">
          {job.company.charAt(0)}
        </div>
        <div className="job-title-wrapper">
          <h3 className="job-title">{job.title}</h3>
          <div className="job-company">{job.company}</div>
        </div>
        <span className="job-type">{job.type}</span>
      </div>
      
      <div className="job-details">
        <div className="job-detail-item">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className="job-detail-item">
          <DollarSign size={16} />
          <span>{job.salary}</span>
        </div>
        <div className="job-detail-item">
          <Clock size={16} />
          <span>{job.postedDate}</span>
        </div>
      </div>
      
      <p className="job-description">{job.description}</p>
      
      <div className="job-card-footer">
        <Link to={`/jobs/${job.id}`} className="btn-view-details">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default JobCard;
