import React, { useState } from 'react';
import { Lock, Mail, User, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './LoginRegister.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(`${isLogin ? 'Login' : 'Registration'} successful for ${formData.email}! (Dummy)`);
    }, 1500);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-blob-1"></div>
        <div className="auth-blob-2"></div>
      </div>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <Lock size={32} />
          </div>
          <h1>{isLogin ? 'Welcome Back' : 'Create an Account'}</h1>
          <p>
            {isLogin 
              ? 'Enter your credentials to access your account' 
              : 'Join thousands of professionals finding their dream jobs'}
          </p>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <User className="input-icon" size={18} />
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                  className="auth-input"
                />
              </div>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={18} />
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com" 
                required 
                className="auth-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={18} />
              <input 
                type="password" 
                id="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••" 
                required 
                className="auth-input"
              />
            </div>
          </div>
          
          {isLogin && (
            <div style={{textAlign: 'right'}}>
              <a href="#forgot" className="auth-toggle-btn" style={{fontSize: '0.875rem', padding: 0}}>
                Forgot Password?
              </a>
            </div>
          )}
          
          <Button 
            type="submit" 
            variant="primary" 
            className="auth-btn-full"
            isLoading={loading}
            icon={!loading && <ArrowRight size={18} />}
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>
        
        <div className="auth-divider">OR</div>
        
        <Button variant="outline" className="auth-btn-full">
          Continue with Google
        </Button>
        
        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={toggleMode} className="auth-toggle-btn">
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
