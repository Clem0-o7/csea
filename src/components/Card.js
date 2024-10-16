import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ title, description }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
