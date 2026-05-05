import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateBug from './pages/CreateBug';
import BugDetails from './pages/BugDetails';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      {user && (
        <nav className="nav-bar">
          <div className="nav-logo" onClick={() => window.location.href = '/'}>Mini Jira</div>
          <div>
            <span style={{ marginRight: '16px' }}>{user.username} ({user.role})</span>
            <button onClick={handleLogout} style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}>Logout</button>
          </div>
        </nav>
      )}
      <div className="container">
        <Routes>
          <Route path="/login" element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/create-bug" element={user ? <CreateBug user={user} /> : <Navigate to="/login" />} />
          <Route path="/bug/:id" element={user ? <BugDetails user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
