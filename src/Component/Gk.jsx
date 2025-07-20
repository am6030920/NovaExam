import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gk.css';

const questionsData = [
 {
    question: "Who is the current President of India (2025)?",
    options: ["Ram Nath Kovind", "Droupadi Murmu", "Narendra Modi", "Venkaiah Naidu"],
    correctAnswer: "Droupadi Murmu",
  },
  {
    question: "Which country is the largest producer of coffee in the world?",
    options: ["Vietnam", "India", "Brazil", "Colombia"],
    correctAnswer: "Brazil",
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    question: "The Battle of Plassey was fought in which year?",
    options: ["1757", "1857", "1761", "1600"],
    correctAnswer: "1757",
  },
  {
    question: "Which gas is used in the preparation of soda water?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "Which element has the chemical symbol ‘Fe’?",
    options: ["Fluorine", "Ferrous", "Iron", "Francium"],
    correctAnswer: "Iron",
  },
{
  question: "Is love worth the time, or just an emotional Rollercoaster..?💔",
  options: ["Hell yeah", "Yes Rollercoaster", "I agree", "All of the above"],
  correctAnswer: ["Hell yeah", "Yes Rollercoaster", "I agree", "All of the above"]
},

  {
    question: "Who was the founder of the Maurya Empire?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harshavardhana"],
    correctAnswer: "Chandragupta Maurya",
  },
  {
    question: "Which organ purifies blood in the human body?",
    options: ["Heart", "Lungs", "Kidney", "Liver"],
    correctAnswer: "Kidney",
  },
  {
    question: "Which Indian state has the longest coastline?",
    options: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    correctAnswer: "Gujarat",
  },
  {
    question: "Which Mughal emperor built the Red Fort?",
    options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
    correctAnswer: "Shah Jahan",
  },
  {
    question: "What is the SI unit of pressure?",
    options: ["Pascal", "Joule", "Watt", "Newton"],
    correctAnswer: "Pascal",
  },
  {
    question: "The headquarters of UNO is situated at:",
    options: ["Paris", "Geneva", "New York", "London"],
    correctAnswer: "New York",
  },
  {
    question: "Which Indian state is known as the 'Land of Five Rivers'?",
    options: ["Haryana", "Punjab", "Bihar", "Assam"],
    correctAnswer: "Punjab",
  },
  {
    question: "Which is the highest civilian award in India?",
    options: ["Padma Shri", "Padma Bhushan", "Padma Vibhushan", "Bharat Ratna"],
    correctAnswer: "Bharat Ratna",
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Gallium", "Sodium", "Lead"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the meaning of 'www' in website URLs?",
    options: ["World Wide Web", "Web World Wide", "Wide Web World", "World Web Wide"],
    correctAnswer: "World Wide Web",
  },
  {
    question: "Which Indian scientist won the Nobel Prize in Physics in 1930?",
    options: ["APJ Abdul Kalam", "CV Raman", "Homi Bhabha", "Vikram Sarabhai"],
    correctAnswer: "CV Raman",
  },
  {
    question: "Which city is known as the Silicon Valley of India?",
    options: ["Hyderabad", "Bengaluru", "Pune", "Delhi"],
    correctAnswer: "Bengaluru",
  },
  {
    question: "Which state is famous for the dance form Kathakali?",
    options: ["Tamil Nadu", "Karnataka", "Kerala", "Odisha"],
    correctAnswer: "Kerala",
  },
  {
    question: "Who wrote ‘Discovery of India’?",
    options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Rabindranath Tagore", "Jawaharlal Nehru"],
    correctAnswer: "Jawaharlal Nehru",
  },
  {
    question: "Which city hosted the 2020 Summer Olympics (held in 2021)?",
    options: ["Tokyo", "Beijing", "Rio de Janeiro", "London"],
    correctAnswer: "Tokyo",
  },
  {
    question: "What is the chemical formula of ozone?",
    options: ["O2", "O3", "CO2", "O4"],
    correctAnswer: "O3",
  },
  {
    question: "Which river is known as the Ganga of the South?",
    options: ["Godavari", "Krishna", "Kaveri", "Tungabhadra"],
    correctAnswer: "Godavari",
  },
  {
    question: "Which Indian won the first individual Olympic gold medal?",
    options: ["Abhinav Bindra", "Leander Paes", "Sushil Kumar", "Milkha Singh"],
    correctAnswer: "Abhinav Bindra",
  },
  {
    question: "Which Indian city is called the City of Lakes?",
    options: ["Udaipur", "Jaipur", "Nainital", "Bhopal"],
    correctAnswer: "Udaipur",
  },
  {
    question: "Which article of the Indian Constitution deals with emergency provisions?",
    options: ["Article 356", "Article 370", "Article 352", "Article 368"],
    correctAnswer: "Article 352",
  },
  {
    question: "Which country won the ICC Cricket World Cup in 2019?",
    options: ["India", "England", "Australia", "New Zealand"],
    correctAnswer: "England",
  },
  {
    question: "In which year was the Indian Constitution adopted?",
    options: ["1947", "1950", "1949", "1952"],
    correctAnswer: "1949",
  },
  {
    question: "Which festival is known as the Festival of Lights?",
    options: ["Holi", "Dussehra", "Diwali", "Eid"],
    correctAnswer: "Diwali",
  }
];

const Gk = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questionsData.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(900); 
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (showResult) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          calculateResult();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showResult]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (option) => {
    const updated = [...selectedOptions];
    updated[currentQ] = option;
    setSelectedOptions(updated);
  };

  const handleNext = () => {
    if (currentQ < questionsData.length - 1) {
      setCurrentQ(currentQ + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const calculateResult = () => {
    const finalScore = selectedOptions.reduce(
      (acc, ans, i) => (ans === questionsData[i].correctAnswer ? acc + 1 : acc),
      0
    );
    setScore(finalScore);
    setShowResult(true);
  };

  const handleResultClose = () => {
    navigate('/home');
  };

  return (
    <div className='keyboard'>
      <div className="quiz-container">
        <span className="quiz-title">
         General knowledge<p className="quiz-subtitle">Test🌍</p>
        </span>
        <div className="underline3" style={{ width: '405px' }}></div>
        <p className="timer">⏳Time Left: {formatTime(timeLeft)}⏰</p>

        {!showResult && (
          <>
            <div className="question-block">
              <h3>Q{currentQ + 1}. {questionsData[currentQ].question}</h3>
              {questionsData[currentQ].options.map((opt, i) => {
                const inputId = `q${currentQ}_opt${i}`;
                return (
                  <div key={i} className="option">
                    <input
                      type="radio"
                      id={inputId}
                      name={`q${currentQ}`}
                      checked={selectedOptions[currentQ] === opt}
                      onChange={() => handleOptionSelect(opt)}
                    />
                    <label htmlFor={inputId}>{opt}</label>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar added here */}
            <div className="progress-bar" aria-label="Question progress">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${((currentQ + 1) / questionsData.length) * 100}%`
                }}
              />
            </div>

            <div className="button-group">
              <button
                className="btn prev-btn"
                onClick={handlePrevious}
                disabled={currentQ === 0}
              >
                Previous
              </button>
              <button
                className="btn next-btn"
                onClick={handleNext}
                disabled={selectedOptions[currentQ] === null}
              >
                {currentQ === questionsData.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        )}

        {showResult && (
          <div className="result-modal">
            <h2>Test Completed!🎉</h2>
            <p>Your Score: <strong>{score} / {questionsData.length}</strong>👌🏻</p>
            <p>Percentage: <strong>{((score / questionsData.length) * 100).toFixed(2)}%</strong>🔥</p>
            <button className="ok-btn" onClick={handleResultClose}>Go To Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gk;
