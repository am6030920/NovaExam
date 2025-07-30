// import React from 'react';
// import './Certificate.css';

// const Certificate = ({ name, score, date }) => {
//   // Handle fallback/defaults
//   const finalName = name || "Student Name";
//   const finalScore = score !== undefined ? score : 0;
//   const finalDate = date || new Date().toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   // Grade logic based on score
//   const grade =
//     finalScore >= 27
//       ? "A+"
//       : finalScore >= 21
//       ? "A"
//       : finalScore >= 15
//       ? "B"
//       : "C";

//   return (
//     <div className="certificate-container">
//       <div className="certificate">
//         <img className="logo" src="/images/novaexam-logo.png" alt="NovaExam Logo" />
//         <h1 className="certificate-title">Certificate of Completion</h1>
//         <p className="description">This is to certify that</p>
//         <h2 className="student-name">{finalName}</h2>
//         <p className="description">
//           has successfully completed the <strong>Online Assessment</strong> on NovaExam
//         </p>
//         <p className="details">
//           Score: <strong>{finalScore}/30</strong> &nbsp; | &nbsp; Grade: <strong>{grade}</strong>
//         </p>
//         <p className="date">Date: {finalDate}</p>

//         <div className="signature-section">
//           <div className="sign-box">
//             <p className="sign-line">__________________</p>
//             <p className="sign-name">Akash Maity</p>
//             <p className="sign-role">Founder & Project Head,<br />NovaExam</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificate;
