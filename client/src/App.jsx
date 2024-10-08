import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Signup from "./components/LoginSignup/SignUp";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for Login page */}
          <Route path="/login" element={<LoginSignup/>} />
          {/* Route for Signup page */}
          <Route path="/signup" element={<Signup />} />
          {/* Optionally, set a default route */}
          <Route path="/" element={<LoginSignup />} /> {/* Redirect to Login if no path matches */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;