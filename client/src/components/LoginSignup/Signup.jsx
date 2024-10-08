import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';

const Signup = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      // Submit form data (e.g., send to backend)
      console.log('Form Submitted', formData);
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Display error if passwords don't match */}
          {error && <p className="error-message">{error}</p>}

          {/* Signup Button */}
          <button type="submit" className="btn-signup">
            <FontAwesomeIcon icon={faUserPlus} className="icon" /> Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
