import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !status) {
      alert('Please enter your name and select a status.');
      return;
    }
    setUserInfo(name, status);
    setName('');
    setStatus('');
  };

  return (
    <div className="user-form">
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label><br />
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="">-- select status --</option>
            <option value="online">online</option>
            <option value="offline">offline</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default connect(null, { setUserInfo })(UserForm);
