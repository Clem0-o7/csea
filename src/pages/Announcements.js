import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const announcementsRef = ref(db, 'announcements/');
    onValue(announcementsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAnnouncements(Object.values(data)); // Convert object to array
      }
    });
  }, []);

  return (
    <Container className="min-vh-100 p-4">
      <h2 className="text-center mb-4 text-black">Announcements</h2>
      <Row>
        {announcements.map((announcement, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="font-weight-bold">{announcement.title}</Card.Title>
                <Card.Text>{announcement.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Announcements;
