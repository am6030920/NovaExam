import React from 'react';
import './Higher.css';

const Higher = () => {
  return (
    <div className="higher-education">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Transforming Higher Education with NovaExam</h1>
          <p>
            Empowering universities, colleges, and institutions with scalable, secure, and smart assessment solutions.
          </p>
        </div>
      </section>

      {/* Why NovaExam */}
      <section className="section">
        <div className="container">
          <h2>Why NovaExam for Higher Education?</h2>
          <p>
            NovaExam bridges the gap between academic excellence and digital innovation. Our platform enables seamless online assessments,
            robust analytics, and a secure testing environment tailored for higher education institutions.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section features">
        <div className="container">
          <pre>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpPaxK_KJ3zSbQ-O9oMdrCGjglq4L9JzAhw&s" alt="HIGHER EDUCATION WITH US" />
          <h1>Key Features</h1>
          </pre>
          <ul>
            <li><strong>Scalable Platform:</strong> Support thousands of students simultaneously.</li>
            <li><strong>AI Proctoring:</strong> Maintain academic integrity with intelligent monitoring.</li>
            <li><strong>Flexible Assessment Types:</strong> MCQs, essays, coding, and project evaluations.</li>
            <li><strong>Seamless Integrations:</strong> Integrate with LMS and SIS effortlessly.</li>
            <li><strong>Real-time Analytics:</strong> Get actionable performance insights instantly.</li>
          </ul>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <h2>Benefits for Institutions</h2>
          <ul>
            <li>Reduce administrative workload with automation.</li>
            <li>Support remote, hybrid, and in-person learning environments.</li>
            <li>Improve learning outcomes with insightful analytics.</li>
            <li>Ensure fairness and transparency in assessments.</li>
          </ul>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>Ready to Modernize Your Exams?</h2>
          <p>Join leading institutions that trust NovaExam for secure and intelligent assessment delivery.</p>
          <button className="cta-button">Request a Demo</button>
        </div>
      </section>
    </div>
  );
};

export default Higher;