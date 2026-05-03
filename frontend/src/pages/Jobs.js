import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import JobCard from '../components/JobCard';
import { dummyJobs } from '../data/dummyJobs';
import './Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [jobType, setJobType] = useState('All');

  useEffect(() => {
    // Simulate API call delay
    setLoading(true);
    setTimeout(() => {
      setJobs(dummyJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = job.location.toLowerCase().includes(locationTerm.toLowerCase());
    const matchesType = jobType === 'All' || job.type === jobType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="jobs-page">
      <div className="jobs-header-section">
        <div className="container">
          <h1 className="jobs-page-title">Browse Opportunities</h1>
          <p className="jobs-page-subtitle">Find the perfect role that matches your skills and aspirations.</p>
          
          <div className="search-filters">
            <div className="search-input-group">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Job title or company..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="filter-input"
              />
            </div>
            <div className="filter-divider"></div>
            <div className="search-input-group">
              <MapPin className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Location..." 
                value={locationTerm}
                onChange={(e) => setLocationTerm(e.target.value)}
                className="filter-input"
              />
            </div>
            <div className="filter-divider"></div>
            <div className="search-input-group select-group">
              <select 
                value={jobType} 
                onChange={(e) => setJobType(e.target.value)}
                className="filter-select"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
              <ChevronDown className="select-icon" size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="jobs-results-info">
          {!loading && <p>Showing <strong>{filteredJobs.length}</strong> jobs</p>}
        </div>
        
        {loading ? (
          <div className="jobs-grid">
            {[1, 2, 3, 4, 5, 6].map(skeleton => (
              <div key={skeleton} className="job-card-skeleton">
                <div className="skeleton-header">
                  <div className="skeleton-logo"></div>
                  <div className="skeleton-title-group">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-subtitle"></div>
                  </div>
                </div>
                <div className="skeleton-text line-1"></div>
                <div className="skeleton-text line-2"></div>
                <div className="skeleton-text line-3"></div>
                <div className="skeleton-button"></div>
              </div>
            ))}
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="jobs-grid">
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        ) : (
          <div className="no-jobs-found">
            <div className="no-jobs-icon">🔍</div>
            <h3>No jobs found</h3>
            <p>We couldn't find any positions matching your search criteria.</p>
            <button 
              className="btn btn-outline"
              onClick={() => { setSearchTerm(''); setLocationTerm(''); setJobType('All'); }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
