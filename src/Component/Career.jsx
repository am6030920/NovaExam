import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Career.css';
import "./Home.css"

const Career = () => {
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
    <div style={{ padding: "0", margin: "0", background: "white" }}>
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


      <div className="career" style={{ background: '#d8f6f0ff' ,marginTop:'15.5vh'}}>
        <div className="career-banner">
          <div className="banner-text">
            <h1>
              NovaExam is growing quickly.<br />
              Finding the right career for<br />
              everyone starts here....
            </h1>
            <p style={{ marginTop: "2vh" }}>At NovaExam, we believe in unlocking potential through the power of knowledge and opportunity. As we continue to grow, we’re opening doors for passionate individuals who want to make a real impact in the world of online education. Whether you're a developer, educator, designer, or strategist — there's a place for you here. Join us on this exciting journey and shape the future of learning, together.</p>
          </div>
          <div className="banner-image">
            <img src="https://examonline.in/wp-content/uploads/2023/03/Secure-and-Convenient.svg" alt="Career Illustration" />
          </div>
        </div>
      </div>
      <div >
        <div className="button-wrapper">
          <button className="explore-btn">How To Work</button>
        </div>
        <h3 style={{
          display: "flex", justifyContent: "center",
          paddingTop: "2vh", fontSize: "26px", paddingBottom: "2vh"
        }}>Learn about our work</h3>
        <div className="underline" style={{ width: "45vh" }} ></div>
      </div>
      <div className="what-we-do-section">
        <div className="info-card">
          <h3>What we do</h3>
          <p>
            NovaExam helps students prepare for online exams through interactive quizzes, timed tests, and instant results. We make learning easier, smarter, and more effective by tracking progress and offering subject-wise practice.
          </p>
        </div>
        <div className="info-card">
          <h3>The NovaExam Advantage</h3>
          <p>
            NovaExam offers a simple and powerful way to prepare for exams with timed quizzes, instant scoring, and subject-wise tests. Our platform is built to boost your confidence and help you succeed—anytime, anywhere.
          </p>
        </div>
        <div className="info-card">
          <h3>How NovaExam Helps You</h3>
          <p>
          NovaExam provides easy-to-use practice tests with timers and instant results, helping you track your progress and improve your skills. Our platform supports various subjects to prepare you effectively for your exams.
          </p>
        </div>
      </div>
      {/* second box */}
      <div style={{paddingTop:"15vh"}}>
      <h3 style={{
          display: "flex", justifyContent: "center",
          paddingTop: "2vh", fontSize: "26px", paddingBottom: "2vh"
        }}>What we believe in</h3>
        <div className="underline" style={{ width: "45vh" }} ></div>
      <div className="what-we-do-section">
        <div className="info-card">
          <h3>Innovation</h3>
          <p>
            At NovaExam, we continuously innovate to create engaging and efficient learning experiences. By combining technology with smart testing methods, we make exam preparation faster, easier, and more effective for every learner.
          </p>
        </div>
        <div className="info-card">
          <h3>Mission</h3>
          <p>
            Our mission at NovaExam is to empower learners by providing accessible, reliable, and effective online exam tools that boost confidence and help achieve academic success.
          </p>
        </div>
        <div className="info-card">
          <h3>Diversity</h3>
          <p>
          At NovaExam, we celebrate diversity by offering inclusive learning materials that cater to students from all backgrounds, ensuring equal opportunities for success.
          </p>
        </div>
      </div>
      </div>
      {/* third box */}
      <div style={{paddingTop:"15vh"}}>
      <h3 style={{
          display: "flex", justifyContent: "center",
          paddingTop: "2vh", fontSize: "26px", paddingBottom: "2vh"
        }}>Benefits that work for you</h3>
        <div className="underline" style={{ width: "45vh" }} ></div>
      <div className="what-we-do-section">
        <div className="info-card">
          <h3>Flexible Learning</h3>
         <ul>
          <li>Access tests 24/7—no time restrictions or deadlines.</li>
          <li>Practice at your own speed, pause and resume when you’re ready.</li>
          <li>Prepare from anywhere—home, library, or on the go.</li>
         </ul>
        </div>
        <div className="info-card">
          <h3>User-Friendly Design</h3>
         <ul>
          <li>imple layout that keeps you focused on learning, not navigating.</li>
          <li>No ads or pop-ups—just pure exam practice</li>
          <li>Effortlessly switch between questions and sections</li>
         </ul>
        </div>
        <div className="info-card">
          <h3>Detailed Result Summary</h3>
         <ul><li>
          View your score immediately after submitting the test.</li>
          <li>Understand the logic behind each correct answer (if provided).</li>
          <li>Analyze your strengths and weaknesses by category.</li>
          </ul>
        </div>
      </div>
      </div>
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
              <a href="https://in.linkedin.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="LinkedIn" width="40" height="30" /></a>
              <a href="https://www.facebook.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgEDLSHcm4l3PcMHNa2Nojf2jTs1jqEdxuA&s" alt="Facebook" width="40" height="30" /></a>
              <a href="https://www.youtube.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/62/YouTube_social_white_square_%282024%29.svg" alt="YouTube" width="40" height="30" /></a>
              <a href="https://www.instagram.com/?hl=en"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png" alt="Instagram" width="40" height="30" /></a>
              <a href="https://x.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/640px-Logo_of_Twitter.svg.png" alt="Twitter" width="40" height="30" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2025 NovaExam</p>
        </div>
       
      </footer>

    </div>
  );
};

export default Career;


