import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [isShrunk, setIsShrunk] = useState(false);

  const handleExamNavigation = (e) => {
    const selectedPath = e.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const handleAboutChange = (e) => {
    const selectedPath = e.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsShrunk(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="body">
      {/* Navbar */}
      <div className={`nova-navbar ${isShrunk ? 'shrink' : ''}`} style={{ fontFamily: "Poppins" }}>
        <div className="logo-section">
          <img
            src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto"
            alt="NovaExam Logo"
            className="logo"
          />
          <h1 className="site-title">
            Nova<span className="light-title">Exam</span>
          </h1>
        </div>

        <div className="dropdown-section" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <select defaultValue="" required className="custom-select" onChange={handleExamNavigation}>
            <option value="" disabled>Type of Test</option>
            <option value="/Programming">Programming Test</option>
            <option value="/Gk">GK Test</option>
            <option value="/Timed">Timed Quiz</option>
            <option value="/Practice">Practice MCQ</option>
            <option value="/Technical">Technical Test</option>
            <option value="/Trivia">Trivia Exam</option>
            <option value="/Ml">Machine Learning Test</option>
          </select>

          <select defaultValue="" required className="custom-select" onChange={handleAboutChange}>
            <option value="" disabled>Industry</option>
            <option value="/Higher">Higher Education</option>
            <option value="/College">College-Level</option>
            <option value="/Competitive">Competitive Prep</option>
            <option value="/It">IT Training</option>
            <option value="/Genaral">Innovation & Development</option>
          </select>

          <select defaultValue="" required className="custom-select" onChange={handleAboutChange}>
            <option value="" disabled>About Us</option>
            <option value="/company">Company</option>
            <option value="/About">Our Team</option>
            <option value="/contact">Contact</option>
            <option value="/career">Career</option>
            <option value="/home">Home</option>
          </select>

          <div
            className="profile-icon"
            onClick={() => navigate('/Profile')}
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: '#e4f8f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Your Profile"
          >
            👤
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-page">
        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-text">
            <h1 style={{ marginTop: "18vh", color: 'rgba(102, 107, 104, 1)' }}>Get in touch</h1>
            <div className="underline" style={{ marginLeft: '-1px', width: '350px' }}></div>
            <p>
              Want to get in touch? We'd love to hear from you! Whether you <br />
              have a question, feedback, or just want to say hello — <br />
              we're all ears. Here's how you can reach us... ❤️
            </p>

            <button className='home-btn' style={{ marginTop: '28px' }} onClick={() => navigate('/Home')}>Home</button>
          </div>

          <div className="contact-imagqe">
            <img
              src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png"
              alt="Contact Us Illustration"
              style={{ borderRadius: '10%' }}
            />
          </div>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon">☎️</div>
            <h3 style={{ paddingBottom: '25px', color: '#494949ff', fontSize: '30px' }}>
              Talk to Sales☄️
            </h3>
            <p>
              Interested in NovaExam’s platform? Just pick up the phone to chat
              with a member of our <strong>Sales Team</strong> 🫂
            </p>
            <a href="#" className="email-link">WhatsApp: +91 9831403680</a><br />
            <a href="mailto:am6030920@gmail.com" className="email-link">Gmail: am6030920@gmail.com</a>
          </div>

          <div className="contact-card">
            <div className="icon">💭</div>
            <h3 style={{ paddingBottom: '25px', color: '#46474bff', fontSize: '30px' }}>
              Contact Customer Support
            </h3>
            <p>
              Need help? Our support team is always here for you. Just drop an email — <br />
              we're happy to assist you anytime 🙋
            </p>
            <a href="mailto:am6030920@gmail.com" className="email-link">Gmail: am6030920@gmail.com</a>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>Types Of Exams</h4>
              <ul>
                <li>Programming Exams</li>
                <li>General Knowledge</li>
                <li>Timed Quiz</li>
                <li>Practice Test</li>
                <li>Technical Quizzes</li>
                <li>Trivia Quizzes</li>
                <li>Machine Learning</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>INDUSTRY</h4>
              <ul>
                <li>Higher Education Sector</li>
                <li>College-Level</li>
                <li>Competitive Exam Preparation</li>
                <li>IT & Coding Training</li>
                <li>General Knowledge & Current Affairs</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>About Us</h4>
              <ul>
                <li>AboutUs</li>
                <li>Company</li>
                <li>Our Team</li>
              </ul>
            </div>

            <div className="footer-section contact">
              <h4>Contact Us:</h4>
              <p><strong>Sales Department:</strong></p>
              <p className="sales">Sales: +91 9831403680</p>
              <p className="sales">✉ am6030920@gmail.com</p>
              <br />
              <p><strong>Support Department:</strong></p>
              <p className="sales">📞 Support: +91 9831403680</p>
              <p className="sales">✉ am6030920@gmail.com</p>
              <p>Support All time</p>
              <br />
              <p><strong>Find Us On:</strong></p>
              <div className="social-icons">
                <a href="https://in.linkedin.com/">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="LinkedIn" width="40" height="30" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgEDLSHcm4l3PcMHNa2Nojf2jTs1jqEdxuA&s" alt="Facebook" width="40" height="30" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/YouTube_social_white_square_%282024%29.svg" alt="YouTube" width="40" height="30" />
                </a>
                <a href="https://www.instagram.com/?hl=en">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png" alt="Instagram" width="40" height="30" />
                </a>
                <a href="https://x.com/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/640px-Logo_of_Twitter.svg.png" alt="Twitter" width="40" height="30" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>©2025 NovaExam</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
