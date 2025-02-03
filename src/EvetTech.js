
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EvetTech.css';

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
          <div className="sidebar-item" onClick={() => navigate('/technical')}>
            Technical
          </div>
          <div className="sidebar-item" onClick={() => navigate('/non-technical')}>
            Non-Technical
          </div>
          
        </div>

        <div className="events-section">
          <h2>Events &gt; Technical</h2>
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
                <td>YUGAM'2K24(CLASH OF CAD)</td>
                <td>Kumaraguru College of Technology</td>
              </tr>
              <tr>
                <td>2</td>
                <td>TATA INNOVENT 2024</td>
                <td>TATA Technologies</td>
              </tr>
              <tr>
                <td>3</td>
                <td>IBM CODE GLOBAL CHALLENGE</td>
                <td>IBM</td>
              </tr>
              <tr>
                <td>4</td>
                <td>FLIPKART GRID 6.0 - ROBOTICS CHALLENGE</td>
                <td>Flipkart</td>
              </tr>
              <tr>
                <td>5</td>
                <td>AARUTHI 2024 (FINALS)</td>
                <td>Dassault Systems</td>
              </tr>
            </tbody>
          </table>
        </div>      </div>
    </div>
  );
}

export default App;