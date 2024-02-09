import React, { useState } from 'react';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TableSortLabel, TextField } from '@mui/material';
import jsonData from '../data.json';

const PlayerStatsPage = () => {
  const [playerStats, setPlayerStats] = useState(jsonData.playerStats);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterPlayerStats(event.target.value);
  };

  const filterPlayerStats = (query) => {
    const filteredStats = jsonData.playerStats.filter(player => {
      return (
        player.name.toLowerCase().includes(query.toLowerCase()) ||
        player.position.toLowerCase().includes(query.toLowerCase())
      );
    });
    setPlayerStats(filteredStats);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Player Stats
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>GP</TableCell>
              <TableCell>PTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerStats.map(player => (
              <TableRow key={player.nbaId}>
                <TableCell>
                  <img src={player.photoUrl} alt={player.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                </TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.position}</TableCell>
                <TableCell>{player.height}</TableCell>
                <TableCell>{player.weight}</TableCell>
                <TableCell>{player.gp}</TableCell>
                <TableCell>{player.pts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PlayerStatsPage;
