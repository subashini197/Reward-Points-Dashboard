import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Front.css';

const Front = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <h1 className="dashboard-title">REWARD POINTS DASHBOARD</h1>
        <input type="text" placeholder="Press / to search" className="search-bar" />
        <div className="header-icons">
          <span className="icon">💻</span>
          <span className="icon">🔔</span>
          <span className="user-info">
            <span className="user-icon">👤</span>
            <span>ANU S</span>
          </span>
          <span className="icon" onClick={onLogout}>↗️ Logout</span>
        </div>
      </header>

      <div className="content">
        <div className="sidebar">
          <div className="sidebar-item" onClick={() => navigate('/dashboard')}>
            🏠 Main
          </div>
          <div className="sidebar-item">🏆 Events</div>
          <div className="sidebar-item" onClick={() => navigate('/technical')}>
            Technical
          </div>
          <div className="sidebar-item" onClick={() => navigate('/non-technical')}>
            Non-Technical
          </div>
          <div className="sidebar-item" onClick={() => navigate('/eventlog')}>
            📜 Event Log
          </div>
          <div className="sidebar-item">🌟 Reward Points Secured</div>
          <div className="sidebar-item" onClick={() => navigate('/rp-technical')}>
            Technical
          </div>
          <div className="sidebar-item" onClick={() => navigate('/rp-non-technical')}>
            Non-Technical
          </div>
          
        </div>

        <div className="main-content">
          <div className="welcome-box">
            <h2>Welcome, Anu </h2>
          </div>
          <div className="dashboard-box">
            <h2>Dashboard</h2>
            <p>
              Login: <a onClick={() => navigate('/dashboard-view')}>Dashboard</a> to view your individual performance
            </p>
          </div>
          <div className="support-box">
            <h2>For Any Support</h2>
            <p>
              Login: <a href="https://supportdesk.ac.in">https://supportdesk.ac.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
