import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate(); 
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

        <div className="events-section">
          <h2>Events &gt; Non Technical</h2>
          <input type="text" placeholder="Press/to search" className="search-input" />
          <table className="event-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>EVENT NAME</th>
                <th>EVENT ORGANIZER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ARTIMUS 2024</td>
                <td>Kings Engineering College</td>
              </tr>
              <tr>
                <td>2</td>
                <td>FLARENDO'24</td>
                <td>Sri Sairam Engineering College</td>
              </tr>
              <tr>
                <td>3</td>
                <td>PRESTO V1'24</td>
                <td>Sri Krishna Engineering College</td>
              </tr>
              <tr>
                <td>4</td>
                <td>CHEMSPARX'24</td>
                <td>St. Joseph's College of Engineering</td>
              </tr>
              <tr>
                <td>5</td>
                <td>JETMECH-CIVCON 2024</td>
                <td>St. Joseph's College of Engineering</td>
              </tr>
            </tbody>
          </table>
        </div>      </div>
    </div>
  );
}

export default App;