import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

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
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">{announcement.title}</h3>
            <p>{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
