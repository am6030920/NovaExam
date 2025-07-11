import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
    errorMessage: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
      errorMessage: '',
    });
  };

  const validatePassword = (password) => {
    if (password.length < 8) return 'Password must be at least 8 characters long.';
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
    if (!/[0-9]/.test(password)) return 'Password must contain at least one number.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFormData({ ...formData, errorMessage: 'Passwords do not match!' });
      return;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setFormData({ ...formData, errorMessage: passwordError });
      return;
    }

    if (!formData.agree) {
      setFormData({ ...formData, errorMessage: 'You must agree to the terms.' });
      return;
    }

    console.log('NovaExam Signup Data:', formData);

    // Reset
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
      errorMessage: '',
    });
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1 className="logo">NovaExam</h1>
        <h2 className="title">Let's, <span>Get Started ! 🚀</span></h2>
        <p className="subtitle">Sign up now and put your knowledge to the test!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <div className="input-group">
            <i className="fa fa-user icon"></i>
            <input
              type="text"
              name="name"
              placeholder="Akash"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <label>Email</label>
          <div className="input-group">
            <i className="fa fa-envelope icon"></i>
            <input
              type="email"
              name="email"
              placeholder="am6030920@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <label>Password</label>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <label>Confirm Password</label>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />{' '}
            I agree to the terms and conditions
          </label>

          {formData.errorMessage && (
            <p className="error-message">{formData.errorMessage}</p>
          )}

          <button type="submit" className="create-account">Create An Account 🚀</button>
          <Link to="#" className="forgot-password">Forgot Password</Link>
        </form>

        
      </div>

      <div className="right-panel">
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740" alt="Signup Illustration" />
      </div>
    </div>
  );
}

export default SignupPage;
