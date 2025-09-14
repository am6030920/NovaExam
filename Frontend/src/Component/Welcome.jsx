import React from 'react'
import { useNavigate } from "react-router-dom";

import "./Welcome.css"


const features = [
  { src: 'https://cdn-icons-png.flaticon.com/512/7700/7700576.png', alt: 'Cloud Based System', title: ['Cloud Based', 'System'] },
  { src: 'https://media.istockphoto.com/id/1388911169/vector/scalability-icon-scalable-symbol-sign-scale-enlarge-vector.jpg?s=612x612&w=0&k=20&c=ZTV-r3WBq5Se3pPOekCiOXQOUmHSPgB3Rruf5ynsLJw=', alt: 'Scalable', title: ['Scalable'] },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8U3R6ZxanRe4kCrz3KOszsB2Y4o5m-3quA&s', alt: 'Auto Authorization', title: ['Auto', 'Authorization'] },
  { src: 'https://cdn-icons-png.flaticon.com/512/7571/7571835.png', alt: 'Facial Detection', title: ['Facial', 'Detection'] },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg', alt: 'Audio Analytics', title: ['Audio', 'Analytics'] },
  { src: 'https://cdn-icons-png.flaticon.com/512/3214/3214744.png', alt: 'Secure Browser', title: ['Secure', 'Browser'] },
];


const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className='welcome-container'>
      <div className='bal' >
        <h1 className='main'>Smart Exam Platform with AI-Based</h1>
        <h1 className='main1'> Remote Monitoring!📌</h1>
        <div>
          <p className='main2'>

            NovaExam is a modern AI-powered exam software designed to simplify and secure the process of conducting online tests.
            With NovaExam, you can efficiently manage candidate registration, schedule exams, and monitor students remotely using advanced AI-based proctoring tools. Whether you're organizing small assessments or large-scale examinations, NovaExam provides the flexibility and control you need to maintain integrity and transparency throughout the testing process.
            Our smart remote proctoring system uses webcam access and intelligent behavior detection to help identify suspicious activities during exams, ensuring a fair experience for every candidate. The platform is easy to use for both administrators and students, with a clean interface and real-time monitoring features that reduce the chances of malpractice.
            Designed specifically for educational institutions, coaching centers, and training platforms, NovaExam removes the traditional limitations of exam halls and brings assessments into the digital age — all while maintaining the same level of trust and reliability expected from physical exams.
            Start conducting secure, scalable, and smart online exams with NovaExam — where technology meets integrity.🏅

           

          </p>

        </div>
        <div className="image1">
            <img className='fine'
              width={550}
              
              src='/images/exams.jpg'
              alt="ExamOnline Illustration"
            />
          </div>
      </div>
      <h2 className='opp'>Proctor, Evaluate & Conduct Exams, All on One Integrated Platform
      </h2>
      <div class="green-line"></div>
      <p className='p'>Deliver a smooth and hassle-free exam experience from registration to result</p>
      <div className="card-container">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <img src={feature.src} alt={feature.alt} />
            <div className="card-title">
              {feature.title.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < feature.title.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="section">
        <h1 style={{fontSize:"5vh"}}><span style={{color:'rgba(75, 75, 75, 0.98)'}}>Complete Online</span><span style={{color:'rgba(7, 106, 99, 0.98)'}}>Exam Management </span><span style={{color:'rgba(77, 109, 183, 0.98)'}}>Lifecycle Built-in a</span><span style={{color:'rgba(86, 81, 224, 0.56)'}}> Single Software🧑‍💻</span></h1>
        <div className="underline" style={{width:'130vh'}}></div>

        <div className="cards12">
          <div className="card12">
            <img  src="https://c8.alamy.com/comp/2AXT9E6/exam-test-knowledge-icon-vector-isolated-contour-symbol-illustration-2AXT9E6.jpg" alt="Pre Exams Icon" />
            <h3>Pre-Exams</h3>
            <ul>
              <li>Create And Schedule Exams</li>
              <li>Setup Anti-Cheating Tools</li>
              <li>Setup Evaluation Rules</li>
            </ul>
          </div>
          <div className="card12">
            <img  src="https://c8.alamy.com/comp/2AKEJJN/student-stress-exam-preparation-icon-cartoon-of-student-stress-exam-preparation-vector-icon-for-web-design-isolated-on-white-background-2AKEJJN.jpg" alt="During Exams Icon" />
            <h3>During Exams</h3>
            <ul>
              <li>Conduct Exams Digitally</li>
              <li>Proctor Using AI Technology</li>
              <li>Generate Student’s Credibility Reports</li>
            </ul>
          </div>
          <div className="card12">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/309686756/UY/ZB/SO/8675179/online-exam-software-service-provider.png" alt="Post Exams Icon" />
            <h3>Post-Exams</h3>
            <ul>
              <li>Assign Answer-Sheets To Evaluators</li>
              <li>Monitor And Manage Evaluation Process</li>
              <li>Declare Results Online</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="why-choose-section">
        <h2 style={{fontSize:"6vh"}}>Why Choose ExamOnline🤷‍♂️</h2>
        <div className="underline1"></div>

        <div className="container">
          <div className="features" style={{marginTop:"-10vh"}}>
            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt="Check Icon"
                className="icon1"
              />
              <p>
                <strong>Eliminate Physical Proctor:</strong> Embrace auto-proctor
                tests with artificial intelligence (AI) capabilities that use face
                recognition and digital IDs to conduct tests in secure
                environments.
              </p>
            </div>

            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt="Check Icon"
                className="icon1"
              />
              <p>
                <strong>Utilize Advanced Reporting:</strong> Get reports for
                exams, including scorecards, computational analysis, and detailed
                analytics on all the candidates blazing fast.
              </p>
            </div>

            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt="Check Icon"
                className="icon1"
              />
              <p>
                <strong>Secure Your Data:</strong> Protect your data and ensure
                your intellectual property is never compromised through data
                encryption and secure hosting.
              </p>
            </div>

            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt="Check Icon"
                className="icon1"
              />
              <p>
                <strong>Flexible Exam Modes:</strong> Conduct exams in multiple
                modes—remote, center-based, or hybrid—offering convenience and
                adaptability for institutions and candidates alike.
              </p>
            </div>
          </div>

          <div className="image">
            <img className='fine'
              width={500}

              src="https://examonline.in/wp-content/uploads/2023/03/staffing_2-1.png"
              alt="ExamOnline Illustration"
            />
          </div>
        </div>
      </div>

      <div className='test'>
        <div className="hlw">
          <h2>
            Test Student Online for a variety of Exam
          </h2>
          <div className="underline2"></div>
          <span>We support the following Question Types and many more</span>
        </div>
        <div className="content">
          <div className="features1">
            <div className="feature-column">
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Multiple Choice Questions</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Short Answer Type Question</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Fill In The Blank Questions</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Long Answer Type Questions</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Diagram Type Question</span>
              </div>
            </div>

            <div className="feature-column">
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Audio/ Video Recording Questions</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Create Diagrams As Responses</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Video Recording Questions</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Upload Files As Responses</span>
              </div>
              <div className="feature1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="Check Icon"
                  className="icon1"
                />
                <span>Coding Questions</span>
              </div>
            </div>
          </div>

          <div className="image4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcQN0IHC6HrreysP1E3JOSemfHs73AGBXfw&s"
              alt="Question Types Illustration"
            />
          </div>
        </div>
      </div>
      <div className="benefit">
        <h2>Benefits of ExamOnline's Remote Proctoring System</h2>
        <div className="underline3"></div>
        <div className="feature3">
          <img
            src="https://www.pngplay.com/wp-content/uploads/12/Check-Mark-Tick-PNG-HD-Free-File-Download.png"
            alt="Check Icon"
            className="icon1"
          />
          <p>
            <strong> Cheating Prevention with AI Monitoring:</strong> Uses face detection, browser activity tracking, and suspicious movement alerts to maintain exam integrity.
          </p>
        </div>
        <div className="feature3">
          <img
            src="https://www.pngplay.com/wp-content/uploads/12/Check-Mark-Tick-PNG-HD-Free-File-Download.png"
            alt="Check Icon"
            className="icon1"
          />
          <p>
            <strong> Live & Recorded Proctoring Options:</strong> Choose between real-time human invigilation or reviewable video recordings to match your exam needs.
          </p>
        </div>
        <div className="feature3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Check Icon"
            className="icon1"
          />
          <p>
            <strong>Multi-Layer Security:</strong> Disables screen sharing, blocks unauthorized tabs, and detects device switching or unusual behavior instantly.
          </p>
        </div>
        <div className="feature3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Check Icon"
            className="icon1"
          />
          <p>
            <strong>Real-Time Alerts & Notifications:</strong> Proctors receive instant flags for eye movement, background noise, or multiple people detection.
          </p>
        </div>
        <div className="feature3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Check Icon"
            className="icon1"
          />
          <p>
            <strong>Device & Location Flexibility:</strong> Candidates can appear for exams from anywhere using a laptop or desktop—with full security.
          </p>
        </div>
        <div className="feature3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Check Icon"
            className="icon1"
          />
          <p>
            <strong>Detailed Reporting & Analytics:</strong> Gain valuable insights into exam performance with our comprehensive reporting features, all within the online exam invigilation software.
          </p>
        </div>
      </div>
    


           <div className="section1">
      <div className="title">
        <h2>Our Remote proctoring covers all your online exam needs.</h2>
      </div>
      <div className="underline5"></div>

      <div className="content">
        <div className="text2">
          <ul className='ul'>
            <li>
              🧿    Conduct secure online exams with our industry-leading remote proctoring system.
            </li>
            <li> 
              🧿    Simplify exam creation, delivery, and grading with our user-friendly online proctoring platform.
            </li>
            <li>
              🧿    Ensure exam integrity with AI-powered monitoring and advanced security features within the online exam invigilation software.
            </li>
            <li>
              🧿  Detailed insights into exam performance with our detailed reporting and analytics.
            </li>
          </ul>
        </div>

        <div className="image6">
          <img
            src="https://www.shutterstock.com/image-vector/online-examination-evaluation-knowledge-test-260nw-2151440737.jpg"
            alt="Remote Proctoring Illustration"
          />
        </div>
      </div>
    </div>
        

        <div style={{  background: "linear-gradient(90deg, #1c7ee1ff 0%, #60c9c4ff 100%)",
   }}>
          <h1 style={{padding:"10px 40vh",display:"flex",justifyContent:"center",fontSize:"5vh",color:"#fff"}}>Make It Easier for You and Your Candidates to Conduct</h1>
          <h1 style={{display:"flex",justifyContent:"center",marginTop:"-3vh",fontSize:"5vh",color:"#fff"

          }}> and Take Exams 🚩</h1>
          <div className='underline' style={{width:"88vh"}}></div>
          <p style={{padding:"10px 40vh",display:"flex",textAlign:"center",fontSize:"2.2vh",color:""}}>Make it easier for you and your candidates to conduct and take exams with NovaExam's comprehensive online examination platform. Our solution streamlines the entire process, starting from effortless exam scheduling and secure candidate registration to robust remote proctoring that guarantees exam integrity.</p>
         <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    paddingTop: "8vh",
    paddingBottom: "2vh",
    
  }}
>
  <button
    style={{
      width: "22vh",
      height: "6vh",
      border: "2px solid #0056b3",
      borderRadius: "35px",
      background: "#fff",
      color: "#0056b3",
      fontSize: "17px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
        onMouseOver={(e) => {
          e.target.style.background = "#0056b3";
          e.target.style.color = "#fff";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "#fff";
          e.target.style.color = "#0056b3";
        }}
        onClick={() => navigate("/Signup")}
      >
        Get Started
      </button>

  <button
    style={{
      width: "22vh",
      height: "6vh",
      border: "2px solid #28a745",
      borderRadius: "35px",
      background: "#fff",
      color: "#28a745",
      fontSize: "17px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "#28a745";
      e.target.style.color = "#fff";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "#fff";
      e.target.style.color = "#28a745";
    }}
  >
    Schedule Demo
  </button>
</div>


          <div class="try-wrapper">
        <div className="try"> <span>🎓Try it for free</span>
        <span>🎓Try it for free</span>
        <span>🎓Try it for free</span>
        <span>🎓Try it for free</span>
        <span>🎓Try it for free</span>
        <span>🎓Try it for free</span>
        </div>
</div>
        </div>
       
             <footer className="footer6">
      <div className="footer-content6">
        <div className="footer-left6">
          <div className="last">
            NOVA EXAM🔥
            
          </div>
          <p className='power'>It sounds like you want to check something on your Nova Exam Portal, which is used for computer-based online exams (from candidate registration to result processing). However, since I don't have direct access to external sites or portals, I can guide you through the general steps you might take to check your exam details or access the platform.</p>
          <p>&copy; 2025 NovaExam. Terms and Conditions Apply. All Rights Reserved.🎓</p>
        </div>
        <div className="footer-right6">
          <h4>Contacts📞</h4>
          <p><a className='lo' href="mailto:contact@examonline.in">am6030920@gmail.com</a></p>
          <div className="social-icons6">
            <img className='face' src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt="LinkedIn" />
            <img className='face' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook" />
            <img className='face' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" />
            <img className='face' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter" />
          </div>
        </div>
      </div>
    
    </footer>



    </div>
  )
}

export default Welcome