import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signin from './Signin';
import Front from './Front';
import EvetTech from './EvetTech';
import Evenontech from './Evenontech';
import Eventlog from './Eventlog';
import Rptech from './Rptech';
import Rpnontech from './Rpnontech';
import Dashboard from './Dashboard';
import SignUp from './signUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<Login />} /> 
          {/* Signup Page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Login Page */}
          <Route
            path="/Login"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
          />

          {/* Signin Page */}
          <Route
            path="/signin"
            element={<Signin onLogin={handleLogin} />}
          />

          {/* Front Dashboard (Main Page) */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Front onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Technical Events Page */}
          <Route
            path="/technical"
            element={isLoggedIn ? <EvetTech /> : <Navigate to="/login" />}
          />

          {/* Non-Technical Events Page */}
          <Route
            path="/non-technical"
            element={isLoggedIn ? <Evenontech /> : <Navigate to="/login" />}
          />

          {/* Event Log */}
          <Route
            path="/eventlog"
            element={isLoggedIn ? <Eventlog /> : <Navigate to="/login" />}
          />

          {/* Reward Points for Technical Events */}
          <Route
            path="/rp-technical"
            element={isLoggedIn ? <Rptech /> : <Navigate to="/login" />}
          />

          {/* Reward Points for Non-Technical Events */}
          <Route
            path="/rp-non-technical"
            element={isLoggedIn ? <Rpnontech /> : <Navigate to="/login" />}
          />

          {/* Dashboard View */}
          <Route
            path="/dashboard-view"
            element={
              isLoggedIn ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
