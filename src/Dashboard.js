import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <main className="content">
        <header className="header">
          <h1 className="dashboard-title">Reward Points Dashboard</h1>
          <input type="text" placeholder="Press / to search" className="search-bar" />
          <div className="header-icons">
            <span className="icon">💻</span>
            <span className="icon">🔔</span>
            <span className="user-info">
              <span className="user-icon">👤</span>
              <span>ANU S</span>
            </span>
            <span className="icon" onClick={() => navigate('/')}>↗️ Logout</span>
          </div>
        </header>

        <section className="details-section">
          <div className="user-details">
            <div className="profile-icon">👤</div>
            <p><b>ANU S</b></p>
            <p>7376222BT197</p>
            <p>SEMESTER 5</p>
            <p>B.Tech Biotechnology</p>
            <p>Mentor: SANDHYARANI R ( BT10988 )</p>
            <p>Special Lab: SPECIAL LAB - INACTIVE | SUNDAR S</p>
            <p>Boarding: Hostel: STATELITE, Room No: 126</p>
            <p>Warden: Ms. CAROLINE VINNETIA S</p>
          </div>

          <div className="chart-section">
            <h3>Events Reward Points Average</h3>
            <div className="bar-chart">
              <div className="bar" style={{ height: '150px', backgroundColor: '#f7c7c7' }}>1000</div>
              <div className="bar" style={{ height: '125px', backgroundColor: '#a3c7f7' }}>800</div>
              <div className="bar" style={{ height: '200px', backgroundColor: '#f7d7a3' }}>1800</div>
            </div>
            <div className="legend">
              <div><span className="dot" style={{ backgroundColor: '#f7c7c7' }}></span> Technical</div>
              <div><span className="dot" style={{ backgroundColor: '#a3c7f7' }}></span> Non Technical</div>
              <div><span className="dot" style={{ backgroundColor: '#f7d7a3' }}></span> Total Reward Points</div>
            </div>
          </div>
        </section>

        <section className="event-count">
          <div className="event-card">Technical Events : <b>6</b></div>
          <div className="event-card">Non Technical Events : <b>4</b></div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
