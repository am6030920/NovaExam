import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleExamNavigation = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      const examName = selectedValue.slice(1).replace(/([A-Z])/g, ' $1').trim();
      const confirmGo = window.confirm(`Are you sure you want to enter the ${examName} Exam?`);
      if (confirmGo) {
        navigate(selectedValue);
      }
    }
  };

  const handleAboutChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.startsWith('/')) {
      navigate(selectedValue);
    } else {
      alert(`Selected: ${selectedValue}`);
    }
  };

  return (
    <div style={{ background: 'white' }}>
    <div className="nova-navbar" style={{ fontFamily: "Poppins" }}>
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
      <option value="/Programming"> Programming Test</option>
      <option value="/Gk">GK Test</option>
      <option value="/Timed">Timed Quiz</option>
      <option value="/Practice">Practice MCQ</option>
      <option value="/Technical">Technicaly Test</option>
      <option value="/Trivia">Trivia Exam</option>
      <option value="/Ml">Machine Learning Test</option>
    </select>
     <select defaultValue="" required className="custom-select" onChange={handleExamNavigation}>
      <option value="" disabled>Industry</option>
      <option value="/Higher">Higher Education</option>
      <option value="/College">College-Level</option>
      <option value="/Competitive">Competitive Prep</option>
      <option value="/It">IT Training</option>
      <option value="/Genaral">GK & Current Affairs</option>
    </select>
    <select defaultValue="" required className="custom-select" onChange={handleAboutChange}>
      <option value="" disabled>About Us</option>
      <option value="/company">Company</option>
      <option value="/About">Our Team</option>
      <option value="/contact">Contact</option>
      <option value="/career">Career</option>
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





      <div className="okeyy">
        <div className="main-content">
          <div className="banner">
            <div className="text-content">
              <h1 style={{ fontFamily: 'Futura, sans-serif', color: '#343333ff' ,fontSize:"48px",textShadow: '1px 1px 4px rgba(0,0,0,0.2)'}}>
                Test your knowledge with<br />
                <span style={{fontSize:"44px"}}>NovaExam and grow smarter..!💭</span>
              </h1>
              <p style={{ fontSize: '17px', fontFamily: 'futura, sans-serif' }}>
                Explore expertly crafted quizzes and practice tests designed for all<br />
                levels—from beginners to advanced learners....🫣
              </p>
              
            </div>
            <div className="image-content">
              <img src="/images/home.png" alt="NovaExam Illustration" />
            </div>
          </div>
        </div>

        <div className="why-choose" style={{
          textAlign: 'center', marginTop: '20px', fontSize: '25px',
          color: '#0f6b54ff', fontFamily: 'futura, sans-serif', paddingTop: '10px',
        }}>
          <span>
            Still thinking about <strong>NovaExam?</strong> Let us show you why it's worth it....💨
          </span>
        </div>

        <div className="circle-container" style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
          marginTop: '20px', gap: '75px', paddingTop: '10px', paddingBottom: '80px',
        }}>
          <div className="circle">
            <p>Gives instant <br />feedback so you can<br />improve fast</p>
          </div>
          <div className="circle">
            <p>Offers many types <br />of tests to match your<br />needs</p>
          </div>
          <div className="circle">
            <p>Simulates real<br />exam conditions to boost<br />confidence</p>
          </div>
          <div className="circle">
            <p>Leaderboard and<br />scores to challenge your friends</p>
          </div>
        </div>
      </div>
     <div className="featured-exams" style={{ padding: '60px 20px', backgroundColor: '#fffefeff' }}>
  <h1 style={{ textAlign: 'center', color: '#027161', fontFamily: 'Futura' }}>Featured Exams 📌</h1>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '30px' }}>
    {[
      { name: "Java Programming", icon: "💻" },
      { name: "Aptitude Test", icon: "🧠" },
      { name: "AI Basics", icon: "🤖" },
      {name: "Web 3.0 & Blockchain Fundamentals",icon: "💻"}
    ].map((exam, idx) => (
      <div
        key={idx}
        onClick={() => alert(`${exam.name} is coming soon!`)} // Replace with navigate(exam.route) if needed
        style={{
          background: 'linear-gradient(to right, #ffffff, #f9f9f9)',
          border: '1px solid #d4f1ec',
          borderRadius: '20px',
          padding: '30px 25px',
          width: '280px',
          height: '210px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.07)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.07)";
        }}
      >
        <div style={{
          fontSize: '40px',
          marginBottom: '10px'
        }}>{exam.icon}</div>
        <h3 style={{ color: '#027161', fontWeight: '700', fontSize: '20px', marginBottom: '8px', textAlign: 'center' }}>{exam.name}</h3>
        <p style={{ fontSize: '14px', color: '#444', textAlign: 'center' }}>Wait... this exam is coming soon!</p>
      </div>
    ))}
  </div>
</div>

<div style={{ backgroundColor: '#f5fef9ff', padding: '60px 20px' }}>
  <h1
  style={{
    textAlign: 'center',
    fontFamily: 'Futura, sans-serif',
    color: '#00594c',
    fontSize: '2.8rem',
    letterSpacing: '1px',
    marginTop: '40px',
    marginBottom: '20px',
    textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
    animation: 'fadeIn 1s ease-out',
    opacity: 0,
    animationFillMode: 'forwards'
  }}
>
  What Our <span style={{ color: "#7497e8ff", textShadow: '1px 1px 4px rgba(0,0,0,0.2)' }}>Users</span> Say 💭
</h1>
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', marginTop: '40px' }}>
    {[
      { name: "Ankit Sharma", feedback: "NovaExam helped me prepare for my BCA semester—timed exams are amazing!" },
      { name: "Riya Das", feedback: "Very helpful for mock tests and the leaderboard motivates me a lot!" },
      { name: "Kunal Roy", feedback: "Clean interface and lots of variety in questions. Loved it!" },
      { name: "Akash Maity", feedback: "It feels just like a real exam. Loved the timer, navigation, and the overall vibe!" }
    ].map((user, i) => (
      <div key={i} style={{
        background: '#fff',
        padding: '25px 20px',
        borderRadius: '16px',
        width: '300px',
        height: '180px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease-in-out'
      }}>
        <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#333' }}>"{user.feedback}"</p>
        <p style={{ fontWeight: 'bold', marginTop: '10px', color: '#027161' }}>— {user.name}</p>
      </div>
    ))}
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
}

export default Home;
