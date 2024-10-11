import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Ensure correct path
import { ref, set } from 'firebase/database';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const announcementId = Date.now(); // Unique ID based on current timestamp
    const announcementsRef = ref(db, 'announcements/' + announcementId);
    
    try {
      await set(announcementsRef, {
        title,
        description,
      });
      setTitle('');
      setDescription('');
      alert('Announcement added successfully!');
    } catch (error) {
      alert('Error adding announcement: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Announcement Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Announcement Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Announcement
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
