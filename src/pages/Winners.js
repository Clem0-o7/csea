import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Winners = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const winnersRef = ref(db, 'winners/');
    onValue(winnersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setWinners(Object.values(data)); // Convert object to array
      }
    });
  }, []);

  return (
    <Container className="min-vh-100 p-4">
      <h2 className="text-center mb-4 text-black">Winners</h2>
      <Row>
        {winners.map((winner, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="font-weight-bold">{winner.name}</Card.Title>
                <Card.Text>
                  <strong>Event:</strong> {winner.event}
                  <br />
                  <strong>Position:</strong> {winner.position}
                  <br />
                  <strong>Year:</strong> {winner.year}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Winners;
