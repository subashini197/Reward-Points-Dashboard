import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import Axios for API calls
import './signUp.css'; // Import CSS for styling

function SignUp() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.message); // Display success message
      navigate('/Signin'); // Redirect to login page
    } catch (error) {
      alert('Error registering user: ' + (error.response?.data?.details || error.message));
    }
  };

  return (
    <div className="First-container">
      <h1 className="First-title">REWARD POINTS DASHBOARD</h1>
      <h2 className="First-subtitle">Sign up</h2>
      <p className="First-link">
        or <a href="/Signin">sign in to your account</a>
      </p>
      <form onSubmit={handleSubmit} className="First-form">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="label">
            Email address<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label">
            Password<span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword" className="label">
            Confirm password<span className="required">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <button type="submit" className="First-button" onClick={() => navigate('/signUp')}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
