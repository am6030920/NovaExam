import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Signup.css';

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
    errorMessage: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      errorMessage: '',
    }));
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name) || name.trim() === '') {
      return 'Name must contain only letters and spaces.';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      return 'Email must be a valid @gmail.com address.';
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
    if (loading) return;
    setLoading(true);

    // Validate inputs
    const nameError = validateName(formData.name);
    if (nameError) {
      setFormData((prev) => ({ ...prev, errorMessage: nameError }));
      setLoading(false);
      return;
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      setFormData((prev) => ({ ...prev, errorMessage: emailError }));
      setLoading(false);
      return;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setFormData((prev) => ({ ...prev, errorMessage: passwordError }));
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormData((prev) => ({ ...prev, errorMessage: 'Passwords do not match!' }));
      setLoading(false);
      return;
    }

    if (!formData.agree) {
      setFormData((prev) => ({ ...prev, errorMessage: 'You must agree to the terms.' }));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormData((prev) => ({ ...prev, errorMessage: data.error || 'Signup failed' }));
        setLoading(false);
        return;
      }

      // Save locally if needed
      // localStorage.setItem('userEmail', formData.email);
      // localStorage.setItem('studentName', formData.name);
      // localStorage.setItem('studentEmail', formData.email);

      // Send welcome email using emailjs
      emailjs
        .send(
          'service_11dsjyb', // your EmailJS service ID
          'template_7yf1jaa', // your EmailJS template ID
          {
            name: formData.name,
            email: formData.email,
            title: 'Welcome to Nova Exam!',
            message: 'Thank you for signing up. Your Nova Exam journey begins now!',
            time: new Date().toLocaleString(),
          },
          'wUUdTr3NqsHRWW5XG' // your EmailJS public key
        )
        .then(() => {
          console.log('📧 Email sent successfully.');
        })
        .catch((err) => {
          console.error('❌ Email sending failed:', err);
          alert('Signup succeeded, but welcome email could not be sent.');
        });

      alert('🎉 Signup Successful! Please go to login.');

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false,
        errorMessage: '',
      });

      setLoading(false);
      navigate('/login');
    } catch (error) {
      setFormData((prev) => ({ ...prev, errorMessage: 'Server error. Please try again later.' }));
      setLoading(false);
    }
  };


  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1 className="logo" style={{ marginTop: '1vh', marginLeft: '-15vh' }}>
          <img
            className="logo1"
            src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto"
            alt="NovaExam"
          />
          NovaExam
        </h1>
        <h6 className="title" style={{ marginTop: '-0.1vh' }}>
          Let's, <span style={{ marginTop: '-1vh', display: 'inline-block' }}>Get Started!✈️</span>
        </h6>
        <p className="subtitle" style={{ marginTop: '-1vh' }}>
          Create your account and put your knowledge to the test!🗯️
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <div className="input-group">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24">
              <path
                d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z"
                style={{ fill: 'white' }}
              />
            </svg>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nova Exam"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <label htmlFor="email">Email</label>
          <div className="input-group">
            <svg width="20px" height="20px" viewBox="0 0 24 24">
              <polygon
                points="17 19 21 19 21 7.43 17 10.86 17 19"
                style={{
                  fill: 'none',
                  stroke: 'white',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <polygon
                points="7 10.86 3 7.43 3 19 7 19 7 10.86"
                style={{
                  fill: 'black',
                  stroke: 'white',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <path
                d="M21,7.43h0l-4,3.43-5,4.28L7,10.86,3,7.43H3A2.42,2.42,0,0,1,7,5.59H7l5,4.29,5-4.29h0A2.42,2.42,0,0,1,21,7.43Z"
                style={{
                  fill: 'white',
                  stroke: 'rgb(44, 169, 188)',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
            </svg>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="AM6030920@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-group">
            <svg width="20px" height="20px" viewBox="0 0 15 15">
              <path
                d="M12.5 8.5V7.5C12.5 6.94772 12.0523 6.5 11.5 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.5M12.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H12.5M12.5 8.5C13.6046 8.5 14.5 9.39543 14.5 10.5C14.5 11.6046 13.6046 12.5 12.5 12.5M3.5 6.5V3.5C3.5 1.84315 4.84315 0.5 6.5 0.5C8.15685 0.5 9.5 1.84315 9.5 3.5V6.5M12 10.5H13M10 10.5H11M8 10.5H9"
                stroke="white"
              />
            </svg>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer', marginLeft: '8px', color: 'white' }}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword);
              }}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-group">
            <svg width="20px" height="20px" viewBox="0 0 15 15">
              <path
                d="M12.5 8.5V7.5C12.5 6.94772 12.0523 6.5 11.5 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.5M12.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H12.5M12.5 8.5C13.6046 8.5 14.5 9.39543 14.5 10.5C14.5 11.6046 13.6046 12.5 12.5 12.5M3.5 6.5V3.5C3.5 1.84315 4.84315 0.5 6.5 0.5C8.15685 0.5 9.5 1.84315 9.5 3.5V6.5M12 10.5H13M10 10.5H11M8 10.5H9"
                stroke="white"
              />
            </svg>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ cursor: 'pointer', marginLeft: '8px', color: 'white' }}
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="checkbox-container" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" style={{ margin: 0 }}>
              I agree to the terms and conditions
            </label>
          </div>

          <div style={{ marginTop: '8px' }}>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          {formData.errorMessage && (
            <p className="error-message" role="alert" style={{ marginTop: '10px' }}>
              {formData.errorMessage}
            </p>
          )}

          <button type="submit" className="create-account" disabled={loading} style={{ marginTop: '1rem' }}>
            {loading ? 'Signing up...' : 'Get Started💭'}
          </button>

          <div className="have" style={{ marginTop: '1rem' }}>
            <span>
              Already have an Account? <Link to="/login" className="log">Log-In</Link>
            </span>
          </div>
        </form>
      </div>

      <div className="right-panel">
        <img className="logini" src="/images/log1.png" alt="Signup Illustration" />
      </div>
    </div>
  );
}

export default SignupPage;
