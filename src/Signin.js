import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleSignUpClick = (e) => {
    e.preventDefault(); // Prevent form submission

    // Example sign-up validation logic
    if (email && password) {
      // Call your sign-up API or logic here (mock success)
      onLogin(); // Update the login state
      navigate('/dashboard'); // Navigate to the dashboard after login
    } else {
      setErrorMessage('Please enter both email and password'); // Show error message
    }
  };

  return (
    <div className="signup-form">
      <h2>SIGN UP</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSignUpClick}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="USERNAME"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="toggle-password">👁</span>
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
      <div className="separator">or</div>
      <button className="signup-btn" onClick={() => navigate('/signUp')}>
        Back to Register
      </button>
    </div>
  );
};

export default Signin;
