import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const headingTranslations = [
    "Meet The Team Behind NovaExam",
    "नोवाएग्जाम के पीछे की टीम से मिलें",
    "Познакомьтесь с командой NovaExam"
  ];

  const thankYouTranslations = [
    { text: "Thank you", font: "Poppins" },
    { text: "धन्यवाद", font: "Noto Sans Devanagari" },
    { text: "Gracias", font: "Roboto" },
    { text: "ありがとうございます", font: "Noto Sans JP" }
  ];

  const [headingIndex, setHeadingIndex] = useState(0);
  const [thankYouIndex, setThankYouIndex] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headingTranslations.length);
    }, 3000);
    const interval2 = setInterval(() => {
      setThankYouIndex((prev) => (prev + 1) % thankYouTranslations.length);
    }, 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

   const currentThankYou = thankYouTranslations[thankYouIndex];
  const firstPart = currentThankYou.text.split(" ")[0];
  const secondPart = currentThankYou.text.split(" ")[1] || "";

  return (
    <div className='About' style={{ background: '#fff', margin: '0', padding: '0' }}>
      <div className="First-Box" style={{
        background: 'linear-gradient(90deg, #d5e2f6ff, #d8eaf2ff, #f2f9f7ff, #dff4ecff, #edf0f7ff, #e2e2e2)',
        fontFamily: 'futura,sans-serif', margin: '8px 30px', borderRadius: '20px', height: '550px'

      }}>
        <h1 className='First-H1 animated-heading'>{headingTranslations[headingIndex]}</h1>
        <p className="First-p">To make exam preparation smart, simple, and accessible for every learner</p>
        <div class="container">
          <div class="cardd">
            <h3>Smarter Growth..!💭</h3>
            <div class="circle-chart">
              <div class="text-inside" >80%<br /></div>
            </div>
          </div>

          <div class="image-card">
            <img src="/images/gr.jpeg" alt="Team Meeting" />
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

        <p style={{ paddingTop: '25px', marginLeft: '115px', fontSize: '20px', color: '#5d5f5fff' }}>Credits</p>
        <p style={{ paddingTop: '0px', marginLeft: '5px', fontSize: '55px', color: '#6da1a1ff', margin: '8px 160px' }}>Developed & Designed <span style={{ color: 'rgba(5, 65, 56, 0.73)' }}>by: Team <br />PrismNova all Members</span></p>
        <div style={{ paddingLeft: '165px', marginTop: '-10px', paddingBottom: '100px',fontSize:'16px' }}>We proudly present NovaExam as a result of dedication, creativity, and teamwork. Every line of code and every design <br />element reflects our shared passion for learning and innovation.</div>

      </div>


      <div className="profile-container"  style={{background:'transparent',marginTop:'-100px'}}>
        <div className="thirdddd" style={{marginRight:'-80px',paddingTop:'180px'}}>
      <span style={{fontSize:'70px',marginLeft:'100px',color:'#94f099ff',fontFamily: 'Poppins',}}>Leading with Vision,<br/><span style={{fontSize:'50px',marginLeft:'100px',color:'#24ac6bff'}}> Building with Code</span></span>
      </div>
        <div className="third" style={{ paddingBottom: '100px'}}>
          <img src="/images/Akash.png.jpg" alt="Akash Maity" />
          <div className="details">Akash Maity....
            <span>Project Head | Lead Developer....</span>
          </div>
        </div>
      </div>
             <div className="profile-containerr" >
        <div className="thirdd" style={{ paddingBottom: '100px' }}>
          <img src="/images/rohan.jpg" alt="Rohan Mishra" />
          <div className="detailss">Rohan Mishra...
            <span>Frontend Developer....</span>
          </div>
        </div>
         <div className="thirdd" style={{ paddingBottom: '100px' }}>
          <img src="/images/indranil.jpg" alt="Indranil Das" />
          <div className="detailss">Indranil Das...
            <span>Frontend Developer.....</span>
          </div>
          </div>
          <div className="thirddd" style={{paddingleft:'100px'}}><p style={{fontSize:'50px',paddingTop:'250px',}}><span style={{color:'#94f099ff',fontSize:'65px'}}>Bringing Ideas </span><span style={{color:'#2c99f9ff'}}>to Life with Code </span><span style={{color:'#24ac6bff'}}>& Creativity..</span></p><p style={{fontFamily:'Poppins',color:'#2f2f30ff'}}>We turn imagination into interaction by crafting sleek, responsive, and user-focused interfaces with the perfect blend of design and code.</p></div>

      </div>

       <div className="profile-containerr5" style={{marginTop:'10px',}}>
         <div className="thirddd" >
         <p style={{fontSize:'50px',paddingTop:'100px',marginLeft:'25px'}}><span style={{color:'#94f099ff',fontSize:'65px'}}>Powering the Core </span><span style={{color:'#2c99f9ff'}}>of Every</span> <span style={{color:'#72bc98ff'}}>Experience</span> </p><p style={{fontFamily:'Poppins',color:'#2f2f30ff',marginLeft:'25px'}}>Our backend team ensures everything works fast, secure, and seamlessly — building the logic that powers every feature from behind the scenes.</p></div>
        <div className="thirdd" style={{ paddingBottom: '100px' }}>
          <img src="/images/sourodeep.jpg" alt="Souradeep Sasmal" />
          <div className="detailss" style={{marginLeft:'28px'}}>Souradeep Sasmal
            <span style={{marginRight:'28px'}}>Backend Developer.....</span>
          </div>
          </div>
           <div className="thirdd" style={{ paddingBottom: '100px' }}>
          <img src="/images/Pranshu .jpg" alt="Pranshu Dey" />
          <div className="detailss" style={{marginLeft:'28px'}}>Pranshu Dey..........
            <span style={{marginRight:'28px'}}>Backend Developer.....</span>
          </div>
          </div>
            </div>

            {/* /*team name*/ }
             <p style={{ fontSize: '100px', marginLeft: '35px', fontFamily: 'Monaco', color: '#00b386',textDecoration:'none',paddingBottom:'65px'}}>
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
</p>
            <div className='first-card' style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '100px' ,paddingTop:'45px'}}>
        {/* First Card */}
        <div className="boxxx" >
          <div className="imgBoxxx">
            <img src="hi.jpg" alt="Profile of Akash Maity" style={{width:'590px'}}/>
          </div>
          <div className="socialIconnn">
            <ul>
              <li><a href="https://www.facebook.com/profile.php?id=100087296771864"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://x.com/Akash3724"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/_phobicc.akash?igsh=NWoycWpmZTg2cHJv"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://github.com/am6030920"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/akash-maity-7b0211372/"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="details-animated">

            <p style={{color:'rgba(5, 65, 56, 0.73)',fontWeight:'bold',fontFamily:'Poppins'}}>Akash Maity<span style={{color:'blue',fontSize:'14px',fontWeight:'400'}}>Project head...</span></p>
          </div>
        </div>
        { /* second person  */}
         <div className="boxxx" >
          <div className="imgBoxxx">
            <img src="/images/rohan.jpg" alt="Profile of Rohan Mishra" style={{width:'590px'}}/>
          </div>
          <div className="socialIconnn">
            <ul>
              <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://github.com/Rohan2004002"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/rohan-mishra-400138376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="details-animated">
            <p style={{color:'rgba(5, 65, 56, 0.73)',fontWeight:'bold',fontFamily:'Poppins'}}>Rohan Mishra</p>
          </div>
        </div>
        {/* third person */}
         <div className="boxxx" >
          <div className="imgBoxxx">
            <img src="/images/indranil.jpg" alt="Profile of Indranil Das" style={{width:'590px'}}/>
          </div>
          <div className="socialIconnn">
            <ul>
              <li><a href="https://www.facebook.com/share/1EzK94eZVJ/"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/_indranil12?igsh=MTRjNXp0N2FzcDV3Nw=="><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/indranil-das-686baa206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appp"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="details-animated">
            <p style={{color:'rgba(5, 65, 56, 0.73)',fontWeight:'bold',fontFamily:'Poppins'}}>Indranil Das</p>
          </div>
        </div>

    </div>
   {/* 4th person */}
    <div className='first-card' style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '100px' ,paddingTop:'45px'}}>
    <div className="boxxx" >
          <div className="imgBoxxx">
            <img src="/images/sourodeep1.jpg" alt="Profile of Souradeep Sasmal" style={{width:'590px'}}/>
          </div>
          <div className="socialIconnn">
            <ul>
              <li><a href="https://www.facebook.com/share/1AHrSJLYkZ/"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://x.com/s87Souradeep?t=5Jrvd7duZPM2MyvqvoZmHQ&s=08"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/soura__d__s?igsh=dGhvd2hqdjFudXh3"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://github.com/sasmal877"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/souradeep-sasmal-17337631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="details-animated">
            <p style={{color:'rgba(5, 65, 56, 0.73)',fontWeight:'bold',fontFamily:'Poppins'}}>Souradeep Sasmal</p>
          </div>
        </div>
        {/* 5th person */}
        <div className="boxxx" >
          <div className="imgBoxxx">
            <img src="/images/Pranshu1.jpg" alt="Profile of Pranshu Dey" style={{width:'590px'}}/>
          </div>
          <div className="socialIconnn">
            <ul>
              <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/itz_pranshu_004?igsh=MXEzb24xMnYwOXoxeg=="><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="details-animated">
            <p style={{color:'rgba(5, 65, 56, 0.73)',fontWeight:'bold',fontFamily:'Poppins'}}>Pranshu Dey</p>
          </div>
        </div>
      </div>
    <div
        className="thakyou"
        style={{
          fontSize: '150px',
          display: 'flex',
          justifyContent: 'center',
          fontFamily: currentThankYou.font,
          color: '#00b386',
          paddingTop: '100px',
          paddingBottom: '100px',
          transition: 'all 0.5s ease-in-out'
        }}
      >
        {firstPart}
        <span style={{ color: '#4d4f4eff', marginLeft: '10px' }}>{secondPart}</span>
      </div>
      <footer style={{background:'black',height:'35px',color:'#fff'}}><p style={{paddingTop:'8px',fontSize:'14px',marginLeft:'15px'}}>©2025 NovaExam</p></footer>
    </div>
  );
};

export default About;
