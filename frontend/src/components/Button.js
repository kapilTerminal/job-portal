import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', isLoading = false, icon = null, ...props }) => {
  return (
    <motion.button 
      className={`btn btn-${variant} ${className} ${isLoading ? 'btn-loading' : ''}`} 
      disabled={isLoading || props.disabled}
      whileHover={!isLoading && !props.disabled ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
      whileTap={!isLoading && !props.disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      {isLoading ? (
        <svg className="spinner" viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
};

export default Button;
