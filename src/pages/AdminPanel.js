import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Ensure correct path
import { ref, set } from 'firebase/database';

const AdminPanel = () => {
  // States for announcements
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementDescription, setAnnouncementDescription] = useState('');

  // States for winners
  const [winnerName, setWinnerName] = useState('');
  const [winnerEvent, setWinnerEvent] = useState('');
  const [winnerPosition, setWinnerPosition] = useState('');
  const [winnerYear, setWinnerYear] = useState('');

  // Handle announcement submission
  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    const announcementId = Date.now(); // Unique ID based on current timestamp
    const announcementsRef = ref(db, 'announcements/' + announcementId);

    try {
      await set(announcementsRef, {
        title: announcementTitle,
        description: announcementDescription,
      });
      setAnnouncementTitle('');
      setAnnouncementDescription('');
      alert('Announcement added successfully!');
    } catch (error) {
      alert('Error adding announcement: ' + error.message);
    }
  };

  // Handle winner submission
  const handleWinnerSubmit = async (e) => {
    e.preventDefault();
    const winnerId = Date.now(); // Unique ID based on current timestamp
    const winnersRef = ref(db, 'winners/' + winnerId);

    try {
      await set(winnersRef, {
        name: winnerName,
        event: winnerEvent,
        position: winnerPosition,
        year: winnerYear,
      });
      setWinnerName('');
      setWinnerEvent('');
      setWinnerPosition('');
      setWinnerYear('');
      alert('Winner added successfully!');
    } catch (error) {
      alert('Error adding winner: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>

      {/* Announcements Form */}
      <form onSubmit={handleAnnouncementSubmit} className="space-y-4 mb-6">
        <h3 className="text-xl font-semibold">Add Announcement</h3>
        <div>
          <input
            type="text"
            placeholder="Announcement Title"
            value={announcementTitle}
            onChange={(e) => setAnnouncementTitle(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Announcement Description"
            value={announcementDescription}
            onChange={(e) => setAnnouncementDescription(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Announcement
        </button>
      </form>

      {/* Winners Form */}
      <form onSubmit={handleWinnerSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold">Add Winner</h3>
        <div>
          <input
            type="text"
            placeholder="Winner Name"
            value={winnerName}
            onChange={(e) => setWinnerName(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Event"
            value={winnerEvent}
            onChange={(e) => setWinnerEvent(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Position"
            value={winnerPosition}
            onChange={(e) => setWinnerPosition(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Year"
            value={winnerYear}
            onChange={(e) => setWinnerYear(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="p-2 bg-green-500 text-white rounded">
          Add Winner
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
