import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ 
  type = 'text', 
  placeholder, 
  className = '', 
  ...props 
}) => {
  return (
    <Form.Control 
      type={type} 
      placeholder={placeholder}
      className={`${className}`}
      {...props}
    />
  );
};

export default Input;
