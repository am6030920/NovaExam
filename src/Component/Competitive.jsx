import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Higher.css';
import { FaLaptop, FaChalkboardTeacher, FaCogs, FaChartLine, FaChartPie, FaMoneyBillWave } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';



const Compatitive = () => {
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
      <div style={{background:'white'}}>
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
  
    <div className="contact-header" style={{marginTop:'15vh'}}>
      <div className="contact-textt">
        <h1>Competitive Exams </h1>

        <p>
          Comprehensive solution for Olympiads and Competitive Exams that helps institutions conduct impactful assessments, recognize talent, and drive academic excellence.
        </p>


        <button
  className="contact-btn"
  onClick={() => navigate('/Contact')}
>
  Contact Us
</button>


      </div>
      <div className="contact-image">
        <img src="https://examonline.in/wp-content/uploads/2025/04/16-1024x1024.png" alt="Team Working" />
      </div>
    </div>
      {/* second */}
      <div className="features-section">
      <button className="features-label">Features</button>
      <h1 style={{fontFamily:'Trebuchet MS'}}>With NovaExam,you can enjoy a range of benefits</h1>
      <div className="underline2"></div>

      <div className="features-grid">
        <div className="feature-item">
          <FaLaptop className="feature-icon" />
          <h4>Automated Exam
Management</h4>
          <p>

Manage registration, scheduling, grading, and results automatically with minimal manual effort.</p>
        </div>

        <div className="feature-item">
          <FaChalkboardTeacher className="feature-icon" />
          <h4>Comprehensive Analytics
& Reporting</h4>
          <p>
Access real-time insights and detailed reports to track and improve student performance.</p>
        </div>

        <div className="feature-item">
          <FaCogs className="feature-icon" />
          <h4>Streamline Workflows</h4>
          <p>Save time and resources with efficient exam creation and marking tools.</p>
        </div>

        <div className="feature-item">
          <FaChartLine className="feature-icon" />
          <h4>User-Friendly Interface</h4>
          <p>Simple, intuitive design for students and administrators.</p>
        </div>

        <div className="feature-item">
          <FaChartPie className="feature-icon" />
          <h4>Detailed Analytics & Reports</h4>
          <p>Visual performance dashboards for deep insights and progress tracking.</p>
        </div>

        <div className="feature-item">
          <FaMoneyBillWave className="feature-icon" />
          <h4>Student-Friendly Timer & Navigation</h4>
          <p>Clear time tracking and easy question switching for stress-free experience.</p>
        </div>
      </div>
    </div> 
      {/* third */}
         <div className="proctoring-section">
      <div className="proctoring-content">
        <button className="proctoring-label">Proctoring As A Service</button>
        <p className="proctoring-description">
          NovaExam offers a range of proctoring services to meet the diverse needs of your institution.
        </p>

        <ul className="proctoring-list">
          <li>
            <FaCheckCircle className="check-icon" />
            <strong>Automated Proctoring:</strong> Conduct exams with fully automated proctoring for convenience and efficiency.
          </li>
          
          <li>
            <FaCheckCircle className="check-icon" />
            <strong>Secure Browser:</strong> Utilize a 100% safe anti-cheating lockdown browser.
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            <strong>Compatibility:</strong> Works seamlessly on any device and with low internet connectivity.
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            <strong>Candidate Verification:</strong> Prevent candidate impersonation with robust verification tools.
          </li>
        </ul>
      </div>

      <div className="proctoring-image">
        <img src="https://examonline.in/wp-content/uploads/2025/04/13.png" alt="Proctoring Illustration" />
      </div>
    </div>
    {/* last */}
    <div className="last" style={{marginTop:'10vh',background:'#e8ebeaff'}}>
      <p style={{fontSize:'3vh',display:'flex',justifyContent:'center',color:'black',fontFamily:'Trebuchet MS'}}>Revolutionize Your Online Assessments using ExamOnline. Contact us now for a complimentary demo and consultation.</p>
        <div style={{display:'flex',justifyContent:'center',marginTop:'3vh'}}>
        <button
        style={{width:'25vh',height:'6vh'}}
  className="contact-btn"
  onClick={() => navigate('/Contact')}
>
  Contact Us
</button>
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

export default Compatitive;