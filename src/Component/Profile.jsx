import React from 'react';
import './Profile.css'; // <-- import CSS here

const Profile = () => {
  const user = {
    name: 'Akash Maity',
    email: 'akashmaity@gmail.com',
    role: 'Student',
    image: 'Akash3.jpg',
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.image} alt={user.name} className="profile-image" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-role">{user.role}</p>
        <p className="profile-email"><strong>Email:</strong> {user.email}</p>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
