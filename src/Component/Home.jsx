import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const navigate = useNavigate();

  const handleAboutChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }
  };

  const handleProgrammingChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }

  };
  const handleGkChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }

  };
    const handleTimedChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }

  };
    const handlePracticeChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }

  };
 const handleTechnicalChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }

  };
  const handleTriviaChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }   
};
    const handleMlChange = (e) => {
    const selectedValue = e.target.value;   
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }
};
  return (
    <div>
      <div
        className="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          margin: 0,
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background:
            'linear-gradient(270deg, rgb(255, 245, 202), rgb(84, 209, 101), rgb(255, 245, 202))',
          backgroundSize: '400% 400%',
          height: '10vh',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto"
            alt="NovaExam Logo"
            style={{
              width: '100px',
              height: '75px',
              marginLeft: '-19px',
              padding: 0,
              margin: 0,
            }}
          />
          <h1 style={{ display: 'flex', color: '#00b386', marginLeft: '10px' }}>
            Nova
            <span style={{ fontWeight: '150', color: 'rgba(2, 113, 97, 0.732)' }}>Exam</span>
          </h1>
        </div>

        <div className="type">
          <label htmlFor="Exams" style={{ display: 'none' }}>
            Choose Exam Type
          </label>
          <select
            id="Exams"
            name="exams"
            defaultValue=""
            required
            className="exams"
            onChange={handleProgrammingChange}
          >
            <option value="" disabled>
              Choose a Type of Test
            </option>
            <option value="/Programming">Programming Exams</option>
            <option value="/Gk">General Knowledge</option>
            <option value="/Timed">Timed Quiz</option>
            <option value="/Practice">Practice Test</option>
            <option value="/Technical">Technical Quizzes</option>
            <option value="/Trivia">Trivia Quizzes</option>
            <option value="/Ml">Machine Learning</option>
          </select>

          <label htmlFor="Industry" style={{ display: 'none' }}>
            Choose Industry
          </label>
          <select id="Industry" name="industry" defaultValue="" required className="exams">
            <option value="" disabled>
              Industry
            </option>
            <option value="higher">Higher Education Sector</option>
            <option value="school">College-Level</option>
            <option value="edtech">Competitive Exam Preparation</option>
            <option value="training">IT & Coding Training</option>
            <option value="testprep">General Knowledge & Current Affairs</option>
          </select>

          <label htmlFor="Aboutus" style={{ display: 'none' }}>
            About Us
          </label>
          <select
            id="Aboutus"
            name="AboutUs"
            defaultValue=""
            required
            className="exams"
            onChange={handleAboutChange}
          >
            <option value="" disabled>
              About Us
            </option>
            <option value="/company">Company</option>
            <option value="/About">AboutUs</option>
            <option value="/contact">Contact Us</option>
          </select>
        </div>
      </div>

      <div className="main-content">
        <div className="banner">
          <div className="text-content">
            <h1>
              Test your knowledge with
              <br />
              <span>NovaExam and grow smarter..!🤌</span>
            </h1>
            <p>
              Explore expertly crafted quizzes and practice tests designed for all
              <br />
              levels—from beginners to advanced learners....🫣
            </p>
            <button
              className="btn"
              style={{ color: '#0f6b54ff', fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => navigate('/signup')}
            >
              Get Started
            </button>
          </div>
          <div className="image-content">
            <img src="home.png" alt="NovaExam Illustration" />
          </div>
        </div>
      </div>

      <div
        className="why-choose"
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '25px',
          color: '#0f6b54ff',
          fontFamily: 'futura, sans-serif',
          paddingTop: '10px',
        }}
      >
        <span>
          Still thinking about <strong>NovaExam?</strong> Let us show you why it's worth it....
        </span>
      </div>

      <div
        className="circle-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '20px',
          gap: '75px',
          paddingTop: '10px',
          paddingBottom: '80px',
        }}
      >
        <div className="circle">
          <p>
            Gives instant <br />
            feedback so you can
            <br />
            improve fast
          </p>
        </div>
        <div className="circle">
          <p>
            Offers many types <br />
            of tests to match your
            <br />
            needs
          </p>
        </div>
        <div className="circle">
          <p>
            Simulates real
            <br />
            exam conditions to boost
            <br />
            confidence
          </p>
        </div>
        <div className="circle">
          <p>
            Leaderboard and
            <br />
            scores to challenge your friends
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Types Of Exams</h4>
            <ul>
              <li className="li">Programming Exams</li>
              <li className="li">General Knowledge</li>
              <li className="li">Timed Quiz</li>
              <li className="li">Practice Test</li>
              <li className="li">Technical Quizzes</li>
              <li className="li">Trivia Quizzes</li>
              <li className="li">Machine Learning</li>
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
              <li>
                <Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>
                  About Us
                </Link>
              </li>
              <li>Company</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>Contact Us:</h4>
            <p>
              <strong>Sales Department:</strong>
            </p>
            <p className="sales">Sales: +91 9831403680</p>
            <p className="sales">✉ am6030920@gmail.com</p>
            <br />
            <p>
              <strong>Support Department:</strong>
            </p>
            <p className="sales">📞 Support: +91 9831403680</p>
            <p className="sales">✉ am6030920@gmail.com</p>
            <p>Support All time</p>
            <br />
            <p>
              <strong>Find Us On:</strong>
            </p>
            <div className="social-icons">
              <a href="https://in.linkedin.com/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
                  alt="LinkedIn"
                  width="40"
                  height="30"
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgEDLSHcm4l3PcMHNa2Nojf2jTs1jqEdxuA&s"
                  alt="Facebook"
                  width="40"
                  height="30"
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/YouTube_social_white_square_%282024%29.svg"
                  alt="YouTube"
                  width="40"
                  height="30"
                />
              </a>
              <a href="https://www.instagram.com/?hl=en">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png"
                  alt="Instagram"
                  width="40"
                  height="30"
                />
              </a>
              <a href="https://x.com/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/640px-Logo_of_Twitter.svg.png"
                  alt="Twitter"
                  width="40"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2025 NovaExam</p>
        </div>
        <div className="chat-support">
        <a href="javascript:void(0);" className="chat-button">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOB60gV5qGtk_mKoCCPR36uhcA8jI_COmqOtovYLN1ef40fdp2d2jXTGz5al8TVcOoGM&usqp=CAU" alt="Chat Support" />
        </a>
      </div>
      </footer>
    </div>
  );
}

export default Home;
