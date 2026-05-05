import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function CreateBug({ user }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/bugs', {
        title,
        description,
        status: 'OPEN',
        creator: { id: user.id }
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Failed to create bug');
    }
  };

  return (
    <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Create New Bug</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description</label>
          <textarea 
            rows="6"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button type="submit">Submit Bug</button>
          <button type="button" onClick={() => navigate('/')} style={{ background: 'var(--surface-color)', border: '1px solid rgba(255,255,255,0.2)' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBug;
