
import { useNavigate } from 'react-router-dom';
import './Higher.css';
import { FaLaptop, FaChalkboardTeacher, FaCogs, FaChartLine, FaChartPie, FaMoneyBillWave } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';



const College = () => {
  const navigate = useNavigate();

  return (
    <div style={{background:'white'}}>
    <div className="contact-header">
      <div className="contact-textt">
        <h1>College Level Test</h1>

        <p>
          College-level education today is a transformative experience that blends academic rigor with real-world relevance. Modern institutions emphasize interdisciplinary learning, critical thinking, and practical skills to prepare students for a rapidly evolving global workforce. With cutting-edge technology, industry-aligned curricula, and hands-on projects, students engage in a dynamic environment that fosters innovation, collaboration, and problem-solving. Emphasis on research, digital literacy, and experiential learning equips graduates to adapt and lead in fields ranging from engineering and business to the arts and sciences. This future-focused approach ensures education is not just informative, but empowering and deeply connected to tomorrow’s opportunities.


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
          <h4>Interdisciplinary Curriculum

</h4>
          <p>Combines multiple fields to foster innovative thinking.</p>
        </div>

        <div className="feature-item">
          <FaChalkboardTeacher className="feature-icon" />
          <h4>Internship & Industry Exposure

</h4>
          <p>Hands-on internships provide valuable real-world industry experience.
</p>
        </div>

        <div className="feature-item">
          <FaCogs className="feature-icon" />
          <h4>Technology-Enhanced Learning

</h4>
          <p>Technology-enhanced learning creates flexible, interactive, personalized education.
</p>
        </div>

        <div className="feature-item">
          <FaChartLine className="feature-icon" />
          <h4>Ensure Scalability</h4>
          <p>Handle large student populations with ease.</p>
        </div>

        <div className="feature-item">
          <FaChartPie className="feature-icon" />
          <h4>Research & Innovation Opportunities
same </h4>
          <p>Encourages creativity through hands-on research and innovation.
</p>
        </div>

        <div className="feature-item">
          <FaMoneyBillWave className="feature-icon" />
          <h4>Soft Skills & Communication Development</h4>
          <p>encourage your soft skills and communication skills</p>
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

export default College;