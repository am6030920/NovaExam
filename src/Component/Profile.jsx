import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'NovaExam',
    Email: 'email@gmail.com',
    phone: '+91 00-000-00000',
    mobile: '+91 00-000-00000',
    address: 'Enter Your Address',
    College: 'Enter Your College',
    Github: 'Enter Your Link',
    Linkedin: 'Enter Your Link'
  });

  const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/3135/3135715.png");
  const [editing, setEditing] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [examHistory, setExamHistory] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("examHistory")) || [];
    setExamHistory(history);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {

      navigate("/");
    }
  };

  const goHome = () => {
    if (window.confirm("Back To Home...")) {
    
      navigate("/Home");
    }
  };

  return (
    <div className='bg'>
      <p className="profile-title">
        Your <span className="profile-highlight">Profile ❤️</span>
      </p>

      <div className="profile-container">

        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-image">
            <img src={image} alt="Profile" />
            <label className="edit-btn" htmlFor="upload-photo">✏️</label>
            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <div className="profile-basic-info">
            <h1>{formData.name} 🤗</h1>
            <h4>{formData.Email}</h4>
            <p>Student</p>
          </div>

          <div className="buttons">
            <button className="history-btn" onClick={() => setShowHistory(!showHistory)}>
              {showHistory ? "Hide History" : "View History"}
            </button>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <button className="home-btn" onClick={goHome}>Home</button>
          </div>

          {showHistory && (
            <div className="exam-history">
              <h3>📚 Exam History</h3>
              {examHistory.length === 0 ? (
                <p className="no-exams">No exams taken yet.</p>
              ) : (
                <table className="exam-table">
                  <thead>
                    <tr>
                      <th>Exam</th>
                      <th>Score</th>
                      <th>Completed At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examHistory.map((exam, index) => (
                      <tr key={index}>
                        <td>{exam.examName}</td>
                        <td>{exam.score} / {exam.total}</td>
                        <td>{exam.completedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          {Object.keys(formData).map((field, idx) => (
            <div className="detail-row" key={idx}>
              <strong>{field.charAt(0).toUpperCase() + field.slice(1)}</strong>
              {editing ? (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              ) : (
                <span>{formData[field]}</span>
              )}
            </div>
          ))}
          <button className="edit-button" onClick={() => setEditing(!editing)}>
            {editing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
