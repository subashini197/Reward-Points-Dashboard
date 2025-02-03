
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Rpnontech.css';

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
          <h2>Reward Points Secured &gt; Non Technical</h2>
          <input type="text" placeholder="Press/to search" className="search-input" />
          <table className="event-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>EVENT NAME</th>
                <th>REWARD POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ARTIMUS 2024</td>
                <td>500</td>
              </tr>
              <tr>
                <td>2</td>
                <td>FLARENDO'24</td>
                <td>450</td>
              </tr>
              <tr>
                <td>3</td>
                <td>PRESTO V1'24</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>CHEMSPARX'24</td>
                <td>750</td>
              </tr>
              <tr>
                <td>5</td>
                <td>JETMECH-CIVCON 2024</td>
                <td>800</td>
              </tr>
            </tbody>
          </table>
        </div>      </div>

    </div>
  );
}

export default App;