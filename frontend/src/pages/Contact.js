import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page section">
      <div className="container contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have questions about JobPortal? We're here to help. Send us a message and our team will respond within 24 hours.</p>
        </div>
        
        <div className="contact-content-card">
          <div className="contact-info-panel">
            <h2>Contact Information</h2>
            <p className="contact-info-text">Fill up the form and our Team will get back to you within 24 hours.</p>
            
            <div className="info-items">
              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <span>support@jobportal.com</span>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <span>123 Tech Avenue, San Francisco, CA 94105</span>
              </div>
            </div>
            
            <div className="decorative-circles">
              <div className="circle-small"></div>
              <div className="circle-large"></div>
            </div>
          </div>
          
          <div className="contact-form-panel">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon-wrapper">
                  <CheckCircle size={48} className="success-icon-large" />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, {formData.name || 'there'}. We've received your message and will be in touch shortly.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSubmitted(false)}
                  className="mt-lg"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required 
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Tell us about your inquiry..."
                    required
                    className="form-input"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="submit-btn"
                  isLoading={submitting}
                  icon={<Send size={18} />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
