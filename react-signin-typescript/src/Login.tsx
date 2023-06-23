import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem('email') || '')
  const [password, setPassword] = useState(localStorage.getItem('password') || '')

  const navigateToDashboard = () => {
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    navigate('/dashboard');
  }

  return (
    <div className="Login-container">
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name='email-address'
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password-field"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={navigateToDashboard} disabled={email?.length <= 0 || password.length <= 0} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
