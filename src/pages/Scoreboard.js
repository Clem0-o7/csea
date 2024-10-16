import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

const Scoreboard = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const winnersRef = ref(db, 'winners/');
    onValue(winnersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const winnersArray = Object.values(data);

        // Assign marks based on position
        const scoredWinners = winnersArray.map((winner) => {
          let marks = 0;
          if (winner.position === '1st') {
            marks = 3;
          } else if (winner.position === '2nd') {
            marks = 2;
          } else if (winner.position === '3rd') {
            marks = 1;
          }
          return { ...winner, marks };
        });

        // Group winners by name and sum their marks
        const winnerMap = {};
        scoredWinners.forEach(({ name, event, marks }) => {
          if (!winnerMap[name]) {
            winnerMap[name] = { name, events: [], totalMarks: 0 };
          }
          winnerMap[name].events.push(event);
          winnerMap[name].totalMarks += marks;
        });

        // Convert the map back to an array and sort by totalMarks in descending order
        const groupedWinners = Object.values(winnerMap).sort((a, b) => b.totalMarks - a.totalMarks);
        setWinners(groupedWinners);
      }
    });
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Scoreboard</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Events Won</th>
            <th className="p-4 border-b">Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {winners.length > 0 ? (
            winners.map((winner, index) => (
              <tr key={index}>
                <td className="p-4 border-b">{winner.name}</td>
                <td className="p-4 border-b">{winner.events.join(', ')}</td>
                <td className="p-4 border-b">{winner.totalMarks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-4 text-center">No winners found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
