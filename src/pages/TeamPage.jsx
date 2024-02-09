import React, { useState, useEffect } from 'react';
import { Grid, Select, MenuItem, TextField, Button, Typography, Paper } from '@mui/material';
import jsonData from '../data.json';
import Header from "../components/Header"
const TeamPage = () => {
  const [selectedView, setSelectedView] = useState('seasonTotalStats');
  const [newReport, setNewReport] = useState({
    scout: '',
    playerName: '',
    reportContent: ''
  });
  const [scoutingReports, setScoutingReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simulate fetching data from API (replace with actual API call)
    setGames(jsonData.games);
    setScoutingReports(jsonData.scoutingReports); // Set scouting reports from JSON data
    setFilteredReports(jsonData.scoutingReports); // Set filtered reports initially
  }, []);

  const handleViewChange = (event) => {
    setSelectedView(event.target.value);
    // Update displayed data based on the selected view
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReport(prevReport => ({
      ...prevReport,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new report to the list of scouting reports
    setScoutingReports(prevReports => [...prevReports, newReport]);
    // Clear the form fields after submission
    setNewReport({
      scout: '',
      playerName: '',
      reportContent: ''
    });
    // Update filtered reports to include the new report
    setFilteredReports(prevReports => [...prevReports, newReport]);
  };

  const handleFilterReports = (event) => {
    const filterValue = event.target.value;
    if (filterValue === 'all') {
      setFilteredReports(scoutingReports); // Show all reports if 'All' selected
    } else {
      const filtered = scoutingReports.filter(report => report.scout === filterValue);
      setFilteredReports(filtered); // Filter reports by scout
    }
  };

  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <Paper elevation={3}> {/* Add elevation for box shadow */}
          <Typography variant="h4" align="center" gutterBottom>
            Team Page
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}> {/* Add elevation for box shadow */}
          <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Select value={selectedView} onChange={handleViewChange} fullWidth>
                <MenuItem value="seasonTotalStats">Season Total Stats</MenuItem>
                <MenuItem value="perGameStats">Per Game Stats</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
                <TextField
                  type="text"
                  name="scout"
                  placeholder="Scout's Name"
                  value={newReport.scout}
                  onChange={handleInputChange}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  type="text"
                  name="playerName"
                  placeholder="Player's Name"
                  value={newReport.playerName}
                  onChange={handleInputChange}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  name="reportContent"
                  placeholder="Report Content"
                  value={newReport.reportContent}
                  onChange={handleInputChange}
                  variant="outlined"
                  size="small"
                  multiline
                />
                <Button type="submit" variant="contained" color="primary">
                  Add Report
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}> {/* Add elevation for box shadow */}
          <Typography variant="h5" align="center" gutterBottom>
            Filter Reports by Scout:
          </Typography>
          <Select value="all" onChange={handleFilterReports} fullWidth>
            <MenuItem value="all">All</MenuItem>
            {/* Map through scouting reports to get unique scouts */}
            {[...new Set(scoutingReports.map(report => report.scout))].map((scout, index) => (
              <MenuItem key={index} value={scout}>{scout}</MenuItem>
            ))}
          </Select>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}> {/* Add elevation for box shadow */}
          <Typography variant="h5" align="center" gutterBottom>
            Scouting Reports
          </Typography>
          <ul>
            {filteredReports.map((report, index) => (
              <li key={index}>
                <strong>{report.scout}</strong> - {report.playerName}: {report.reportContent}
              </li>
            ))}
          </ul>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}> {/* Add elevation for box shadow */}
          <Typography variant="h5" align="center" gutterBottom>
            Games
          </Typography>
          <ul>
            {games.map((game, index) => (
              <li key={index}>
                <Button onClick={() => console.log(game)}>Game {index + 1}</Button>
              </li>
            ))}
          </ul>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TeamPage;
