import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errorMessage: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errorMessage: '',
    });
  };

  const validateEmail = (email) => {
    if (!email.endsWith('@gmail.com')) {
      return 'Email must end with @gmail.com';
    }
    return '';
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return 'Password must be at least 8 characters and include 1 uppercase letter, 1 number, and 1 special character.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError || passwordError) {
      setFormData({
        ...formData,
        errorMessage: emailError || passwordError,
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email.trim(),
        password: formData.password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('email', response.data.email);
        navigate('/home');
      } else {
        setFormData({ ...formData, errorMessage: 'Invalid response from server.' });
      }
    } catch (err) {
      setFormData({
        ...formData,
        errorMessage: err.response?.data?.message || 'Login failed. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <div className="logo2" style={{ marginTop: '2vh', marginLeft: '-6vh' }}>
          <h1 className="logo">
            <img
              className="logo1"
              src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto"
              alt="NovaExam Logo"
            />
            NovaExam
          </h1>
        </div>

        <h6 className="title" style={{ marginTop: '-5vh' }}>You’re back....👀</h6>
        <span className="span" style={{ marginTop: '-3vh' }}>Welcome!</span>
        <p className="subtitle">Access your account and continue your journey....🧠</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <div className="input-group" style={{ height: '4vh' }}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="am6030920@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer', marginLeft: '8px', color: 'white' }}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="have1">
            <Link to="/forgot-password" className="logp">Forgot Password?</Link>
          </div>

          <button type="submit" className="create-account" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Submit'}
          </button>

          <div className="have">
            <span>Don't have an account? <Link to="/signup" className="log">Create one</Link></span>
          </div>

          {formData.errorMessage && (
            <div className="custom-alert" style={{
              marginTop: '15px',
              color: 'white',
              background: '#444',
              padding: '10px',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              {formData.errorMessage}
            </div>
          )}
        </form>
      </div>

      <div className="right-panel">
        <img className="logini" src="/images/log1.png" alt="Login Illustration" />
      </div>
    </div>
  );
}

export default LoginPage;
