// In App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Announcements from './pages/Announcements';
import Winners from './pages/Winners';
import Scoreboard from './pages/Scoreboard';
import Gallery from './pages/Gallery';
import OfficeBearers from './pages/OfficeBearers';
//import ProtectedRoute from './routes/ProtectedRoute';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/office-bearers" element={<OfficeBearers />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
