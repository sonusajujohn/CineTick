import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginSignup.css';
import { assets } from '../../assets/assets';

const LoginSignup = () => {
  const [username, setUsername] = useState('');  // For username
  const [email, setEmail] = useState('');  // For signup email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const navigate = useNavigate();

  const gotohome = () => {

      navigate('/');
  }

  // Login handler (using username instead of email)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', 
        { username, password },  // Send username instead of email
        { headers: { "Content-Type": "application/json" }}
      );
      const { token, role } = response.data;
      localStorage.setItem('token', token);
      role === 'admin' ? navigate('/admin/dashboard') : navigate('/');
    } catch (err) {
      console.error("Login error:", err);
      setError('Invalid credentials or server error.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', 
        { username, email, password },  // Send username, email, and password
        { headers: { "Content-Type": "application/json" }}
      );
      console.log('Signup success:', response.data);
      alert("Sign Up Successful");
      window.location.reload(); 
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response) {
        if (err.response.status === 400) {
          setError('Please fill in all required fields correctly.');
        } else if (err.response.status === 409) {
          setError('This email is already registered.');
        } else {
          setError('Server error during signup. Please try again later.');
        }
      } else {
        setError('Network error. Check your connection.');
      }
    }
  };

  // Switch to Signup Panel
  const handleSignUpClick = () => {
    setRightPanelActive(true);
    setError('');
  };

  // Switch to Login Panel
  const handleSignInClick = () => {
    setRightPanelActive(false);
    setError('');
  };

  return (
    <div className="login-page">
      <button onClick={gotohome} id="backbut">Go Back To Home</button>
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        {/* Signup Form */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <div className="social-container">
              <img src={assets.facebookicon} alt="Facebookicon" className="social" />
              <img src={assets.instagramicon} alt="Instagramicon" className="social" />
              <img src={assets.twittericon} alt="Twittericon" className="social" />
            </div>

            <input
              type="text"
              placeholder="Username"  // Username field for signup
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Login Form */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="social-container">
              <img src={assets.facebookicon} alt="Facebookicon" className="social" />
              <img src={assets.instagramicon} alt="Instagramicon" className="social" />
              <img src={assets.twittericon} alt="Twittericon" className="social" />
            </div>
            <input
              type="text"
              placeholder="Username"  // Username field for login
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>

        {/* Overlay for Animation */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Get Your Seats Now!</h1>
              <p>Sign in to continue booking your favorite movies with CineTick!</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Cinephile!</h1>
              <p>Sign up to unlock an unforgettable movie experience with CineTick.<br />Get your tickets and enjoy the show!</p>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Created for CineTick <i className="fa fa-heart"></i> by <a href="#">Sonu Saju John</a>
        </p>
      </footer>
    </div>
  );
};

export default LoginSignup;
