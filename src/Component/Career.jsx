import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div style={{ padding: "0", margin: "0", background: "white" }}>

      <div className="career" style={{ background: '#cff0eaff' }}>
        <div className="career-banner">
          <div className="banner-text">
            <h1>
              <strong>ExamOnline</strong> is growing quickly.<br />
              Finding the right career for<br />
              everyone starts here....
            </h1>
            <p style={{ marginTop: "2vh" }}>At ExamOnline, we believe in unlocking potential through the power of knowledge and opportunity. As we continue to grow, we’re opening doors for passionate individuals who want to make a real impact in the world of online education. Whether you're a developer, educator, designer, or strategist — there's a place for you here. Join us on this exciting journey and shape the future of learning, together.</p>
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
      <div style={{paddingTop:"15vh",background:"#cff0eaff"}}>
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
    </div>
  );
};

export default Career;
