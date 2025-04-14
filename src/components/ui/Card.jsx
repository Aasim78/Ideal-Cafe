/*import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ 
  className = '', 
  children, 
  ...props 
}) => {
  return (
    <BootstrapCard 
      className={`${className}`}
      {...props}
    >
      {children}
    </BootstrapCard>
  );
};

const CardHeader = ({ children, ...props }) => (
  <BootstrapCard.Header {...props}>
    {children}
  </BootstrapCard.Header>
);

const CardBody = ({ children, ...props }) => (
  <BootstrapCard.Body {...props}>
    {children}
  </BootstrapCard.Body>
);

const CardTitle = ({ children, ...props }) => (
  <BootstrapCard.Title {...props}>
    {children}
  </BootstrapCard.Title>
);

const CardText = ({ children, ...props }) => (
  <BootstrapCard.Text {...props}>
    {children}
  </BootstrapCard.Text>
);

export { 
  Card, 
  CardHeader, 
  CardBody, 
  CardTitle, 
  CardText 
};
*/
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ 
  className = '', 
  children, 
  ...props 
}) => {
  return (
    <BootstrapCard 
      className={`${className}`}
      {...props}
    >
      {children}
    </BootstrapCard>
  );
};

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

export { 
  Card, 
  CardContent 
};
