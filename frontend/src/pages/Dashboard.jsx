import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Dashboard({ user }) {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      // Both admin and tester can see all bugs for better collaboration
      const response = await api.get('/bugs');
      setBugs(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="action-bar">
        <h1>Dashboard</h1>
        <Link to="/create-bug">
          <button>+ Create Bug</button>
        </Link>
      </div>
      
      <div className="bug-grid">
        {bugs.map(bug => (
          <Link to={`/bug/${bug.id}`} key={bug.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="glass-panel bug-card">
              <span className={`status-badge status-${bug.status}`}>
                {bug.status.replace('_', ' ')}
              </span>
              <h3>{bug.title}</h3>
              <p>{bug.description.substring(0, 100)}{bug.description.length > 100 ? '...' : ''}</p>
              <div className="meta-info">
                Assignee: {bug.assignee ? bug.assignee.username : 'Unassigned'}
              </div>
            </div>
          </Link>
        ))}
        {bugs.length === 0 && (
          <p>No bugs found. Create one!</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
