import React from 'react';
import { Form } from 'react-bootstrap';

const Textarea = ({ 
  placeholder, 
  rows = 3, 
  className = '', 
  ...props 
}) => {
  return (
    <Form.Control 
      as="textarea" 
      placeholder={placeholder}
      rows={rows}
      className={`${className}`}
      {...props}
    />
  );
};

export default Textarea;
