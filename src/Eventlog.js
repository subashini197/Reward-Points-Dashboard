import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Eventlog.css';

function App() {
    const navigate = useNavigate(); // Initialize navigation
  return (
    <div className="app">
      <header className="header">
        <h1 className="dashboard-title">Reward Points Dashboard</h1>
        <input type="text" placeholder="Press/to search" className="search-bar" />
        <div className="header-icons">
          <span className="icon">💻</span>
          <span className="icon">🔔</span>
          <span className="user-info">
            <span className="user-icon">👤</span>
            <span>ANU S</span>
          </span>
          <span className="icon">↗️</span>
        </div>
      </header>

      <div className="content">
      <div className="sidebar">
          <div className="sidebar-item" onClick={() => navigate('/dashboard')}>
            🏠  Main
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

        <div className="events-section">
          <h2>Event Log</h2>
          <input type="text" placeholder="Press/to search" className="search-input" />
          <table className="event-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>EVENT NAME</th>
                <th>EVENT CATEGORY</th>
                <th>VERIFICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>YUGAM’2K24(CLASH OF CAD)</td>
                <td>Technical</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>2</td>
                <td>FLARENDO'24</td>
                <td>Non Technical</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>3</td>
                <td>IBM CODE GLOBAL CHALLENGE</td>
                <td>Technical</td>
                <td>Rejected</td>
              </tr>
              <tr>
                <td>4</td>
                <td>FLIPKART GRID 6.0 - ROBOTICS CHALLENGE</td>
                <td>Technical</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>5</td>
                <td>JETMECH-CIVCON 2024</td>
                <td>Non Technical</td>
                <td>Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>      </div>
    </div>
  );
}

export default App;