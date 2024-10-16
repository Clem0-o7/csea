import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Row className="min-vh-100 d-flex align-items-center justify-content-center text-black">
      <Col xs={12} md={8} lg={6}>
        <h1 className="text-center">About CSEA</h1>
        <p className="text-center">
          The Computer Science and Engineering Association (CSEA) at Thiagarajar College of Engineering 
          is dedicated to providing resources and support for students pursuing careers in technology and 
          computer science. Our mission is to empower students through knowledge sharing, skill development, 
          and networking opportunities.
        </p>
        <p className="text-center">
          We organize events, workshops, and seminars to connect students with industry professionals, 
          enhance their learning experience, and prepare them for successful careers.
        </p>
      </Col>
    </Row>
  );
};

export default About;
