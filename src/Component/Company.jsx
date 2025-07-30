
import { useNavigate } from 'react-router-dom';
import './Company.css';

const Company = () => {
  return (
    <div className="company-page">
      
      <section className="section intro">
        <div className="image">
          <img src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto" alt="Exam" />
        </div>
        <div className="content">
          <h1>We Are Nova Exam</h1>
          <p>
            Welcome to NOVA EXAM, the innovative remote proctoring solution that’s transforming the way online exams are conducted. <br />
            Our mission is to provide the most secure, efficient, and cost-effective solution to educational institutions and corporations across the world.
          </p>
          <button className="btn">OUR MISSION</button>
        </div>
      </section>

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
          <button className="btn">OUR MISSION</button>
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
          <button className="btn">TEAM</button>
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
          <button className="btn">COMMITMENT</button>
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
    </div>
  );
};


export default Company