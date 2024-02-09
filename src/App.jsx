import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamSchedulePage from './pages/TeamSchedulePage';
import GamePage from './pages/GamePage';
import TeamPage from './pages/TeamPage';
import GameStatusPage from './pages/GameStatusPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import PlayerStatsPage from './pages/PlayerStatsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TeamSchedulePage />} />
        <Route path="/game/:index" element={<GamePage />} />
        <Route path="/TeamPage" element={<TeamPage />} />
        <Route path="/gamestatus" element={<GameStatusPage />} />
        <Route path="/PlayerStats" element={<PlayerStatsPage />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
