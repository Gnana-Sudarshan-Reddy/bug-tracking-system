import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function BugDetails({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bug, setBug] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBugDetails();
    if (user.role === 'ADMIN') {
      fetchUsers();
    }
  }, [id]);

  const fetchBugDetails = async () => {
    try {
      const response = await api.get(`/bugs/${id}`);
      setBug(response.data);
    } catch (err) {
      console.error(err);
      alert('Bug not found');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (e) => {
    try {
      const newStatus = e.target.value;
      await api.put(`/bugs/${id}/status?status=${newStatus}`);
      setBug({ ...bug, status: newStatus });
    } catch (err) {
      console.error(err);
      alert('Failed to update status');
    }
  };

  const handleAssigneeChange = async (e) => {
    try {
      const assigneeId = e.target.value;
      if (assigneeId) {
        await api.put(`/bugs/${id}/assign/${assigneeId}`);
        const assignee = users.find(u => u.id.toString() === assigneeId);
        setBug({ ...bug, assignee });
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update assignee');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!bug) return <div>Bug not found</div>;

  const isAdmin = user.role === 'ADMIN';

  return (
    <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>← Back to Dashboard</button>
      
      <div className="details-grid">
        <div>
          <h2>{bug.title}</h2>
          <span className={`status-badge status-${bug.status}`}>
            {bug.status.replace('_', ' ')}
          </span>
          <div style={{ marginTop: '24px' }}>
            <h3>Description</h3>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{bug.description}</p>
          </div>
        </div>

        <div className="glass-panel" style={{ background: 'rgba(0,0,0,0.2)' }}>
          <h3>Details</h3>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '8px' }}>Status</label>
            <select 
              value={bug.status} 
              onChange={handleStatusChange}
              disabled={!isAdmin && user.id !== bug.assignee?.id}
            >
              <option value="OPEN">Open</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '8px' }}>Assignee</label>
            {isAdmin ? (
              <select 
                value={bug.assignee?.id || ''} 
                onChange={handleAssigneeChange}
              >
                <option value="">Unassigned</option>
                {users.map(u => (
                  <option key={u.id} value={u.id}>{u.username} ({u.role})</option>
                ))}
              </select>
            ) : (
              <div style={{ padding: '12px', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '8px' }}>
                {bug.assignee ? bug.assignee.username : 'Unassigned'}
              </div>
            )}
          </div>

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="meta-info">Created by: {bug.creator?.username}</p>
            <p className="meta-info">Created at: {new Date(bug.createdAt).toLocaleString()}</p>
            <p className="meta-info">Last updated: {new Date(bug.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BugDetails;
