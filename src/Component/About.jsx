import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const translations = [
    "Meet The Team Behind NovaExam",
    "Познакомьтесь с командой NovaExam",
    "NovaExamのチームメンバー"

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % translations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='About' style={{ background: '#fff', margin: '0', padding: '0' }}>
      <div className="First-Box" style={{
        background: 'linear-gradient(90deg, #d5e2f6ff, #d8eaf2ff, #f2f9f7ff, #dff4ecff, #edf0f7ff, #e2e2e2)',
        fontFamily: 'futura,sans-serif', margin: '8px 30px', borderRadius: '20px', height: '550px'

      }}>
        <h1 className='First-H1 animated-heading'>{translations[index]}</h1>
        <p className="First-p">To make exam preparation smart, simple, and accessible for every learner</p>
        <div class="container">
          <div class="cardd">
            <h3>Smarter Growth..!💭</h3>
            <div class="circle-chart">
              <div class="text-inside" >80%<br /></div>
            </div>
          </div>

          <div class="image-card">
            <img src="https://assets.techrepublic.com/uploads/2023/06/tr6823-project-management-linux.jpeg" alt="Team Meeting" />
          </div>

          <div class="card-support">
            <div class="icon-box">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <rect width="24" height="24" fill="none" />
                <g transform="translate(2, 1)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#5C85DE"
                    d="M10 0.2c1.7 0 3 1.4 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM13.8 9.5v12h-3v-6H9.2v6h-3v-12H-0.6v-3h21v3h-7.2z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#3367D6"
                    d="M13.8 9.5v12h-3v-6H10v-9h10.5v3H13.8zM10 5.8v-6c1.7 0 3 1.4 3 3s-1.3 3-3 3z"
                  />
                </g>
              </svg>
            </div>
            <h3>24/7 Customer<br />Support Available by Phone & Email</h3>
          </div>
        </div>
      </div>
      <div className="second">
        <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', fontSize: '200px', gap: '9px', color: '#00b386', paddingBottom: '0px', fontFamily: 'Poppins' }}>About <span style={{ color: 'rgba(2, 113, 97, 0.732)' }}>Us</span></h1>
        <p style={{ display: 'flex', justifyItems: 'center', margin: '8px 150px', fontFamily: 'Montserrat', fontSize: '17px', marginTop: '-10px' }}>At NovaExam, we are more than just a platform—we are a passionate team of students, developers, and creative thinkers working together to revolutionize the online exam    experience. Built by a dedicated group of BCA students, our goal is to create an exam system that’s smart, secure, and student-friendly. From UI design to backend logic, every part of NovaExam reflects our shared vision for better digital education.</p>
        <p style={{ paddingTop: '45px', marginLeft: '45px', fontSize: '20px', color: '#6d6d6dff' }}>Our History</p>
        <p style={{ flefontFamily: 'Poppins', color: 'rgba(2, 113, 106, 0.98)', fontSize: '46px', marginLeft: '65px', paddingTop: '8px', marginRight: '235px' }}><span style={{ color: '#00b386' }}> NovaExam is a student-built platform offering a wide variety of exams and MCQs at all difficulty levels.</span>From Programming to GK and Technical tests, NovaExam helps learners prepare smarter with <span style={{ color: '#7ad1adff' }}>timed quizzes, instant results, and secure login—making exam practice easy and effective for everyone....</span></p>
        <div style={{ paddingTop: '10px', paddingBottom: '100px', marginLeft: '65px' }}>
          <button style={{ background: '#7ad1adff', width: '155px', height: '50px', color: '#fff', fontSize: '17px', border: 'none', borderRadius: '10px', }} >Learn More...</button>
        </div>
        {/* <p style={{ fontSize: '100px', marginLeft: '35px', fontFamily: 'Monaco', color: '#00b386',textDecoration:'none'}}>
  Team <span style={{ color: 'rgba(5, 65, 56, 0.73)' }}>PrismNova</span>
  <svg
    width="60px"
    height="60px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: 'middle', marginLeft: '15px' }}
  >
    <title>group</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="invisible_box" data-name="invisible box">
        <rect width={48} height={48} fill="none" />
      </g>
      <g id="icons_Q2" data-name="icons Q2">
        <path d="M39,29.3V18.7A8,8,0,0,0,37,3a8,8,0,0,0-7.7,6H18.7A8,8,0,0,0,3,11a8,8,0,0,0,6,7.7V29.3A8,8,0,0,0,11,45a8,8,0,0,0,7.7-6H29.3A8,8,0,1,0,39,29.3ZM37,7a4,4,0,1,1-4,4A4,4,0,0,1,37,7ZM7,11a4,4,0,1,1,4,4A4,4,0,0,1,7,11Zm4,30a4,4,0,1,1,4-4A4,4,0,0,1,11,41Zm18.3-6H18.7A7.9,7.9,0,0,0,13,29.3V18.7A7.9,7.9,0,0,0,18.7,13H29.3A7.9,7.9,0,0,0,35,18.7V29.3A7.9,7.9,0,0,0,29.3,35ZM37,41a4,4,0,1,1,4-4A4,4,0,0,1,37,41Z" />
      </g>
    </g>
  </svg>
</p> */}
        <p style={{ paddingTop: '25px', marginLeft: '115px', fontSize: '20px', color: '#5d5f5fff' }}>Credits</p>
        <p style={{ paddingTop: '0px', marginLeft: '5px', fontSize: '55px', color: '#6da1a1ff', margin: '8px 160px' }}>Developed & Designed <span style={{ color: 'rgba(5, 65, 56, 0.73)' }}>by: Team <br />PrismNova all Members</span></p>
        <div style={{ paddingLeft: '165px', marginTop: '-10px', paddingBottom: '100px',fontSize:'16px' }}>We proudly present NovaExam as a result of dedication, creativity, and teamwork. Every line of code and every design <br />element reflects our shared passion for learning and innovation.</div>
      </div>
      <div className="profile-container" >
        <div className="third" style={{ paddingBottom: '100px' }}>
          <img src="Akash.png.jpg" alt="Akash Maity" />
          <div className="details">Akash Maity....
            <span>Project Head | Lead Developer....</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
