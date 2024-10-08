import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './LoginSignup.css';

const LoginSignup = () => {
  return (
    <div>
      <h1>Login/Signup</h1>
      <div className="form-container">
        <form>
          {/* Username field with icon */}
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="text" placeholder="Username" />
          </div>

          {/* Password field with icon */}
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type="password" placeholder="Password" />
          </div>

          {/* Login button with icon */}
          <button type="submit" className="btn-login">
            <FontAwesomeIcon icon={faSignInAlt} className="icon" /> Login
          </button>

          {/* Signup button with icon */}
          <button type="submit" className="btn-signup">
            <FontAwesomeIcon icon={faUserPlus} className="icon" /> Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
