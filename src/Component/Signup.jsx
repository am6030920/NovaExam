import React, { useState } from 'react';
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
      errorMessage: '', // Clear any error messages when user makes a change
    });
  };

  const validatePassword = (password) => {
    // Add custom validation rules here, like checking for a minimum length, uppercase, etc.
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation example
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
    // TODO: Send data to backend API
    // Reset form on successful submission
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
      errorMessage: '',
    });

    // You could redirect or show a success message here
  };

  return (
    <div className="signup-root">
      <div className="signup-card">
        <img
          src="/images/novaexam-logo.png"
          alt="NovaExam Logo"
          className="logo"
        />
        <h1>Create Your NovaExam Account</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label className="checkbox-container" htmlFor="agree">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </label>

          {formData.errorMessage && (
            <p className="error-message">{formData.errorMessage}</p>
          )}

          <button type="submit" className="btn-signup">Sign Up</button>
          <p className="signin-link">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
