import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Timed.css';

const questionsData = [
 {
    question: "Which ancient civilization is credited with the first known written language?",
    options: ["Babylonian", "Sumerian", "Egyptian", "Persian"],
    correctAnswer: "Sumerian",
  },
  {
    question: "In which year was the Treaty of Versailles signed?",
    options: ["1919", "1918", "1920", "1921"],
    correctAnswer: "1919",
  },
  {
    question: "What is the capital of Burkina Faso?",
    options: ["Lusaka", "Ouagadougou", "Accra", "Bamako"],
    correctAnswer: "Ouagadougou",
  },
  {
    question: "Who is the author of the book 'The Interpretation of Dreams'?",
    options: ["Carl Jung", "Sigmund Freud", "B.F. Skinner", "Erik Erikson"],
    correctAnswer: "Sigmund Freud",
  },
  {
    question: "Which Indian classical dance form originated in Assam?",
    options: ["Kathakali", "Odissi", "Sattriya", "Manipuri"],
    correctAnswer: "Sattriya",
  },
  {
    question: "Which Nobel laureate discovered the structure of penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Howard Florey", "James Watson"],
    correctAnswer: "Alexander Fleming",
  },
  {
    question: "Who coined the term 'Zero' in mathematics?",
    options: ["Aryabhata", "Bhaskara I", "Brahmagupta", "Pingala"],
    correctAnswer: "Brahmagupta",
  },
  {
    question: "What is the name of the world’s deepest underwater trench?",
    options: ["Java Trench", "Puerto Rico Trench", "Tonga Trench", "Mariana Trench"],
    correctAnswer: "Mariana Trench",
  },
  {
    question: "Which enzyme is responsible for the digestion of protein in the stomach?",
    options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
    correctAnswer: "Pepsin",
  },
  {
    question: "Which chemical element is used in the control rods of nuclear reactors?",
    options: ["Boron", "Uranium", "Plutonium", "Thorium"],
    correctAnswer: "Boron",
  },
  {
    question: "Who was the first female ruler of India?",
    options: ["Rani Lakshmi Bai", "Razia Sultana", "Chand Bibi", "Ahilyabai Holkar"],
    correctAnswer: "Razia Sultana",
  },
  {
    question: "Which metal has the highest electrical conductivity?",
    options: ["Gold", "Aluminium", "Copper", "Silver"],
    correctAnswer: "Silver",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn",
  },
  {
    question: "The famous 'Kurukshetra War' was fought for how many days?",
    options: ["12", "18", "20", "16"],
    correctAnswer: "18",
  },
  {
    question: "Who was the first Indian to win a Nobel Prize?",
    options: ["CV Raman", "Mother Teresa", "Rabindranath Tagore", "Amartya Sen"],
    correctAnswer: "Rabindranath Tagore",
  },
  {
    question: "Which African country has never been colonized?",
    options: ["Kenya", "Ethiopia", "Ghana", "Morocco"],
    correctAnswer: "Ethiopia",
  },
  {
    question: "Which Indian leader was also known as ‘Lokmanya’?",
    options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Sardar Patel", "Bhagat Singh"],
    correctAnswer: "Bal Gangadhar Tilak",
  },
  {
    question: "Which gas is used to fill weather balloons?",
    options: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
    correctAnswer: "Helium",
  },
  {
    question: "Who was the first Indian woman to climb Mount Everest?",
    options: ["Bachendri Pal", "Premlata Agarwal", "Santosh Yadav", "Tenzing Norgay"],
    correctAnswer: "Bachendri Pal",
  },
  {
    question: "Which Indian river is known as the 'Sorrow of Bengal'?",
    options: ["Ganga", "Damodar", "Hooghly", "Teesta"],
    correctAnswer: "Damodar",
  },
  {
    question: "Which satellite was India's first moon mission?",
    options: ["Chandrayaan-1", "Mangalyaan", "INSAT-1A", "Gaganyaan"],
    correctAnswer: "Chandrayaan-1",
  },
  {
    question: "Which Indian scientist is known for the Green Revolution?",
    options: ["MS Swaminathan", "Homi Bhabha", "APJ Abdul Kalam", "CNR Rao"],
    correctAnswer: "MS Swaminathan",
  },
  {
    question: "Which part of the Constitution of India deals with Fundamental Rights?",
    options: ["Part III", "Part IV", "Part II", "Part V"],
    correctAnswer: "Part III",
  },
  {
    question: "What is the name of the galaxy closest to the Milky Way?",
    options: ["Andromeda", "Centaurus A", "Whirlpool", "Messier 87"],
    correctAnswer: "Andromeda",
  },
  {
    question: "Which organ is called the 'Graveyard of RBCs'?",
    options: ["Liver", "Spleen", "Kidney", "Lung"],
    correctAnswer: "Spleen",
  },
  {
    question: "Which global organization has the motto 'Never Again'?",
    options: ["UNESCO", "UNHRC", "International Red Cross", "United Nations"],
    correctAnswer: "United Nations",
  },
  {
    question: "Who wrote 'Poverty and Un-British Rule in India'?",
    options: ["Dadabhai Naoroji", "Gopal Krishna Gokhale", "M.G. Ranade", "R.C. Dutt"],
    correctAnswer: "Dadabhai Naoroji",
  },
  {
    question: "Which was the first Indian satellite launched into space?",
    options: ["Aryabhata", "INSAT-1A", "Rohini", "Bhaskara"],
    correctAnswer: "Aryabhata",
  },
  {
    question: "Which Indian state has the most UNESCO World Heritage Sites?",
    options: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Tamil Nadu"],
    correctAnswer: "Maharashtra",
  },
  {
    question: "Who was the first speaker of the Lok Sabha?",
    options: ["GV Mavalankar", "Hukum Singh", "N. Sanjeeva Reddy", "Balram Jakhar"],
    correctAnswer: "GV Mavalankar",
  }
];

const Timed = () => {
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
          Timed Quiz<p className="quiz-subtitle">Test🛸</p>
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
            <h2>Test Completed!🎉♥️</h2>
            <p>Your Score: <strong>{score} / {questionsData.length}</strong>👌🏻</p>
            <p>Percentage: <strong>{((score / questionsData.length) * 100).toFixed(2)}%</strong>🔥</p>
            <button className="ok-btn" onClick={handleResultClose}>OK🙂</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timed;
