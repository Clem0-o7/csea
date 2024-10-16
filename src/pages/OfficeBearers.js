import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import muthu from '../assets/muthu.jpg';
import sibaath from '../assets/sibaath.jpg';
import aperna from '../assets/aperna.jpg';
import bharath from '../assets/bharath.jpg';
import divya from '../assets/divya.jpg';
import ishwarya from '../assets/ishwarya.jpg';

const OfficeBearers = () => {
  const bearers = [
    { name: 'Muthu', image: muthu },
    { name: 'Sibaath', image: sibaath },
    { name: 'Aperna', image: aperna },
    { name: 'Bharath', image: bharath },
    { name: 'Divya', image: divya },
    { name: 'Ishwarya', image: ishwarya },
  ];

  // Sort bearers alphabetically by name
  const sortedBearers = bearers.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container className="min-vh-100 py-5">
      <h2 className="text-center mb-5">Office Bearers</h2>
      <Row>
        {sortedBearers.map((bearer, index) => (
          <Col key={index} sm={6} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={bearer.image} alt={bearer.name} />
              <Card.Body className="text-center">
                <Card.Title>{bearer.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OfficeBearers;
