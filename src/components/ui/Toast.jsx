import React, { useState } from 'react';
import { Toast as BootstrapToast, ToastContainer } from 'react-bootstrap';

const Toast = ({ 
  title, 
  message, 
  show = false, 
  onClose 
}) => {
  return (
    <ToastContainer position="top-end" className="p-3">
      <BootstrapToast onClose={onClose} show={show} delay={3000} autohide>
        <BootstrapToast.Header>
          <strong className="me-auto">{title}</strong>
        </BootstrapToast.Header>
        <BootstrapToast.Body>{message}</BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  );
};

export default Toast;
