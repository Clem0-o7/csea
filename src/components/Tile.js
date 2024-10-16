import React from 'react';
import { Card } from 'react-bootstrap';

const Tile = ({ title, content }) => {
  return (
    <Card className="text-center mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tile;
