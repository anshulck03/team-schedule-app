import React, { useState, useEffect } from 'react';
import '../GameStatusPage.css'; // Import CSS file for styling
import jsonData from '../data.json';

const GameStatusPage = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    // Simulating fetching data from API (replace with actual API call)
    setGames(jsonData.games);
    setFilteredGames(jsonData.games);
  }, []);

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setSelectedStatus(status);
  
    if (status === '') {
      // If "All" is selected, show all games
      setFilteredGames(games);
    } else {
      // Filter games based on selected status
      const filtered = games.filter(game => game.status === parseInt(status));
      setFilteredGames(filtered);
    }
  };
  

  return (
    <div className="game-status-page">
      <h1 className="page-title">Game Status Page</h1>
      <div className="status-select-container">
        <label htmlFor="status-select" className="status-label">Select Status:</label>
        <select id="status-select" value={selectedStatus} onChange={handleStatusChange} className="status-select">
          <option value="">All</option>
          <option value="1">Not Started</option>
          <option value="2">In Progress</option>
          <option value="3">Completed</option>
        </select>
      </div>

      <div className="filtered-games-container">
        <h2 className="filtered-games-title">Filtered Games</h2>
        <ul className="games-list">
          {filteredGames.map((game, index) => (
            <li key={index} className="game-item">
              <strong className="game-index">Game {index + 1}</strong>
              <p className="game-info">Date: {game.date}</p>
              <p className="game-info">Opponent: {game.opponent}</p>
              <p className="game-info">Status: {game.status === 1 ? 'Not Started' : game.status === 2 ? 'In Progress' : 'Completed'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameStatusPage;
