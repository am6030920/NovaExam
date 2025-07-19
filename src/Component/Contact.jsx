import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; 


const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="contact-page">

        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-text">
            <h1>Get in touch</h1>
            <div className="underline" style={{ marginLeft: '-1px', width: '350px' }}></div>
            <p>
              Want to get in touch? We'd love to hear from you! Whether you <br />
              have a question, feedback, or just want to say hello — <br />
              we're all ears. Here's how you can reach us... ❤️
            </p>


            <button className='home-btn' style={{marginTop:'28px'}} onClick={() => navigate('/Home')}>Home</button>
          </div>
          <div className="contact-image">
            <img src="Team.png" alt="Team Working" style={{ borderRadius: '10%' }} />
          </div>
        </div>

        {/* Cards Section */}
        <div className="contact-cards">

          {/* Sales Card */}
          <div className="contact-card">
            <div className="icon">☎️</div>
            <h3 style={{ paddingBottom: '25px', color: '#3258d2', fontSize: '30px' }}>
              Talk to Sales☄️
            </h3>
            <p>
              Interested in NovaExam’s platform? Just pick up the phone to chat
              with a member of our <strong>Sales Team</strong> 🫂
            </p>
            <a href="#" className="email-link">WhatsApp: +91 9831403680</a><br />
            <a href="mailto:am6030920@gmail.com" className="email-link">Gmail: am6030920@gmail.com</a>
          </div>

          {/* Support Card */}
          <div className="contact-card">
            <div className="icon">💭</div>
            <h3 style={{ paddingBottom: '25px', color: '#3258d2', fontSize: '30px' }}>
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
        <footer className="footer-blackbox">
          <p style={{textDecoration:'underline'}}>©2025 NovaExam</p>
          <div className="chat-support">
            <a href="javascript:void(0);" className="chat-button">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOB60gV5qGtk_mKoCCPR36uhcA8jI_COmqOtovYLN1ef40fdp2d2jXTGz5al8TVcOoGM&usqp=CAU" 
                alt="Chat Support" 
              />
            </a>
          </div>
          <p style={{paddingTop:'20px'}}>Empowering your exam journey with NovaExam!</p>
        </footer>

      </div>
    </div>
  );
};

export default Contact;
