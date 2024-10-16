import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Row className="min-vh-100 d-flex align-items-center justify-content-center text-black">
      <Col xs={12} md={8} lg={6}>
        <h1 className="text-center">Welcome to CSEA</h1>
        <p className="text-center">Your one-stop destination for placement information and resources.</p>
        <p className="text-center">Explore announcements, events, and more!</p>
      </Col>
    </Row>
  );
};

export default Home;
