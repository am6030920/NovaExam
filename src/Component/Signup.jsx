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
    const errors = [];
    if (password.length < 8) errors.push('at least 8 characters');
    if (!/[A-Z]/.test(password)) errors.push('one uppercase letter');
    if (!/[0-9]/.test(password)) errors.push('one number');
    return errors.length ? 'Password must contain ' + errors.join(', ') + '.' : '';
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
        <h6 className="title">Let's, <h6>Get Started ! 🚀</h6></h6>
        <p className="subtitle">Create your account and put your knowledge to the test!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <label>Name</label>
          <div className="input-group">
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon flat-color"
            >
              <path
                d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z"
                style={{ fill: 'white' }}
              />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Akash"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <label>Email</label>
          <div className="input-group">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line-color"
            >
              <polygon
                points="17 19 21 19 21 7.43 17 10.86 17 19"
                style={{
                  fill: "none",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
              <polygon
                points="7 10.86 3 7.43 3 19 7 19 7 10.86"
                style={{
                  fill: "black",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
              <path
                d="M21,7.43h0l-4,3.43-5,4.28L7,10.86,3,7.43H3A2.42,2.42,0,0,1,7,5.59H7l5,4.29,5-4.29h0A2.42,2.42,0,0,1,21,7.43Z"
                style={{
                  fill: "white",
                  stroke: "rgb(44, 169, 188)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="am6030920@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <label>Password</label>
          <div className="input-group">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 8.5V7.5C12.5 6.94772 12.0523 6.5 11.5 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.5M12.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H12.5M12.5 8.5C13.6046 8.5 14.5 9.39543 14.5 10.5C14.5 11.6046 13.6046 12.5 12.5 12.5M3.5 6.5V3.5C3.5 1.84315 4.84315 0.5 6.5 0.5C8.15685 0.5 9.5 1.84315 9.5 3.5V6.5M12 10.5H13M10 10.5H11M8 10.5H9"
                stroke="white"
              />
            </svg>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <label>Confirm Password</label>
          <div className="input-group">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 8.5V7.5C12.5 6.94772 12.0523 6.5 11.5 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.5M12.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H12.5M12.5 8.5C13.6046 8.5 14.5 9.39543 14.5 10.5C14.5 11.6046 13.6046 12.5 12.5 12.5M3.5 6.5V3.5C3.5 1.84315 4.84315 0.5 6.5 0.5C8.15685 0.5 9.5 1.84315 9.5 3.5V6.5M12 10.5H13M10 10.5H11M8 10.5H9"
                stroke="white"
              />
            </svg>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Checkbox */}
          <label className="checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>I agree to the terms and conditions</span>
          </label>

          {/* Error Message */}
          {formData.errorMessage && (
            <p className="error-message">{formData.errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="create-account"
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.password ||
              !formData.confirmPassword ||
              !formData.agree
            }
          >
            Create An Account 🚀
          </button>

          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </form>
      </div>

      <div className="right-panel">
        <img className='logini'
          src="log1.png"
          alt="Signup Illustration"
        />
      </div>
    </div>
  );
}

export default SignupPage;
