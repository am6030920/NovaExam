import { Navigate, useNavigate } from 'react-router-dom';
import './Company.css';

const Company = () => {
  const navigate =useNavigate();   
  return (
    <div className="company-page">
      
      <div className="section intro" >
        <div className="image">
          <img src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto" alt="Exam" />
        </div>
        <div className="content">
          <h1>We Are Nova Exam</h1>
          <p>
            Welcome to NOVA EXAM, the innovative remote proctoring solution that’s transforming the way online exams are conducted. <br />
            Our mission is to provide the most secure, efficient, and cost-effective solution to educational institutions and corporations across the world.
          </p>
          <div style={{paddingTop:"15px",marginLeft:"15px"}}>
          {/* <button style={{width:"20vh",height:"5vh",background:"#4078f1ff",color:"#fff",border:"none",fontWeight:"bold",}}>OUR MISSION</button> */}
          <button
          onClick={() =>navigate('/Contact')}
          style={{width:"20vh",height:"5vh",background:"#4078f1ff",color:"#fff",border:"none",fontWeight:"bold",}}>
            Contact Us
            </button>
            
          </div>
        </div>
      </div>

      <section className="section about">
        <div className="content">
          <h1>ABOUT NOVA EXAM</h1>
          <p>
            NOVA EXAM was created with the vision of transforming the traditional approach to exam administration. <br />
            Our founders recognized the need for a secure, reliable, and easy-to-use remote proctoring solution. <br />
            We began developing a product that would meet the evolving demands of modern-day exams.
          </p>
        </div>
        <div className="image">
          <img src="/images/exam1.jpg" alt="Online Exams" />
        </div>
      </section>

      
      <section className="section mission">
        <div className="image">
          <img src="/images/mission.jpg" alt="Goal Representation" />
        </div>
        <div className="content">
          <h1>OUR MISSION</h1>
          <p>
            At NOVA EXAM, we believe that remote proctoring can level the playing field and provide equal opportunities to students and job applicants. <br />
            Our mission is to empower educational institutions and corporations with advanced technology to conduct online exams with confidence. <br />
            We are committed to security, reliability, and accessibility — delivering custom solutions tailored to our clients' unique needs.
          </p>
          <div style={{paddingTop:"15px",marginLeft:"15px"}}>
          <button style={{width:"20vh",height:"5vh",background:"#4078f1ff",color:"#fff",border:"none",fontWeight:"bold",}}>OUR MISSION</button>
          </div>
        </div>
      </section>

     
      <section className="section team">
        <div className="content">
          <h1>OUR TEAM</h1>
          <p>
            Our team comprises passionate professionals in technology and education. <br />
            We blend expertise in software development, security, and education to build an innovative and effective platform. <br />
            We collaborate closely with clients to understand their needs and deliver customized solutions — always striving to stay ahead in technology and security.
          </p>
            <div style={{paddingTop:"15px",marginLeft:"15px"}}>
          <button style={{width:"20vh",height:"5vh",background:"#4078f1ff",color:"#fff",border:"none",fontWeight:"bold",}}>TEAM</button>
        </div>
        </div>
        <div className="image">
          <img src="/images/our team.jpg" alt="Our Team" />
        </div>
      </section>

    
      <section className="section commitment">
        <div className="content">
          <h1>OUR COMMITMENT TO SECURITY</h1>
          <p>
            At NOVA EXAM, exam security is our top priority. <br />
            We use advanced AI algorithms to detect and prevent cheating and train proctors to monitor suspicious behavior. <br />
            Our platform incorporates features like two-factor authentication and data encryption to ensure security and protect client data.
          </p>
            <div style={{paddingTop:"15px",marginLeft:"15px"}}>
          <button style={{width:"20vh",height:"5vh",background:"#4078f1ff",color:"#fff",border:"none",fontWeight:"bold",}}>COMMITMENT</button>
          </div>
        </div>
        <div className="image">
          <img src="/images/security.jpg" alt="Security" />
        </div>
      </section>

      
      <section className="thankyou">
        <p>
          Thank you for choosing NOVA EXAM as your trusted remote proctoring solution. <br />
          For questions or support, feel free to contact us — we're always here to help.
        </p>
      </section>
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

export default Company;
