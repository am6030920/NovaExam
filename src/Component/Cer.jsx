import { useNavigate } from "react-router-dom";

const Certificate = () => {
  const navigate = useNavigate(); 

  return (
  <div id="certificate" style={{
          width: '800px',
          padding: '40px',
          border: '10px solid #00594c',
          textAlign: 'center',
          fontFamily: 'Georgia, serif',
          backgroundColor: 'white',
          margin: 'auto',
          display: 'none'
        }}>
          <h1 style={{ fontSize: '32px', color: '#00594c', }}>🎓 Certificate of Completion</h1>
          <p>This certifies that</p>
          <h2>{userName}</h2>
          <p>has successfully completed the <strong>{examName}</strong> with a score of</p>
          <h3>{score} / {questionsData.length}</h3>
          <p>Grade: <strong>{getGrade(score)}</strong></p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <div style={{ marginTop: '40px' }}>
            <p style={{ fontWeight: 'bold' }}>Akash Maity</p>
            <p>Founder & Project Head, NovaExam</p>
            {/* https://www.camonk.com/s/courses/646b3eaee4b0e1d9e7733f52/images/3a6ZYsamplecertificate.jpg */}
          </div>
        </div>
  );
};

export default Certificate;
