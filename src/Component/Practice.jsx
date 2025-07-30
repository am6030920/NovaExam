import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Practice.css';
// mongodb for vsCode

const saveResultToLocal = (examName, score, total) => {
  const existing = JSON.parse(localStorage.getItem("examHistory")) || [];
  const now = new Date().toLocaleString();
  const updated = [
    ...existing,
    { examName, score, total, completedAt: now }
  ];
  localStorage.setItem("examHistory", JSON.stringify(updated));
};

const questionsData = [
{
    question: "In Java, which keyword best describes the mechanism to derive a new class from an existing class, enabling reuse of code and polymorphism?",
    options: ["implement", "inherits", "extends", "interface"],
    correctAnswer: "extends",
  },
  {
    question: "Evaluate the expression in Python: 4 + 3 * 2. What is the result considering operator precedence?",
    options: ["14", "10", "7", "8"],
    correctAnswer: "10",
  },
  {
    question: "Using the Pythagorean theorem, find the value of (3² + 4²). What does this represent?",
    options: ["12", "16", "25", "21"],
    correctAnswer: "25",
  },
  {
    question: "Who holds the office of Prime Minister of India as of 2024, leading the central government?",
    options: ["Amit Shah", "Narendra Modi", "Rahul Gandhi", "Yogi Adityanath"],
    correctAnswer: "Narendra Modi",
  },
  {
    question: "In arid desert regions, which animal is traditionally referred to as the 'Ship of the Desert' due to its adaptability?",
    options: ["Horse", "Camel", "Elephant", "Donkey"],
    correctAnswer: "Camel",
  },
  {
    question: "Identify the game that does not belong to the Battle Royale genre among the following options.",
    options: ["Free Fire", "Fortnite", "Counter-Strike", "PUBG"],
    correctAnswer: "Counter-Strike",
  },
  {
    question: "Among the world’s oceans, which is the largest in surface area and volume?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "The 2024 Summer Olympics was hosted by which city, renowned for its iconic architecture and culture?",
    options: ["Tokyo", "Los Angeles", "Paris", "London"],
    correctAnswer: "Paris",
  },
  {
    question: "Which data structure operates on the First-In-First-Out (FIFO) principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue",
  },
  {
    question: "Among the following data types in C++, which one is invalid or non-existent?",
    options: ["int", "float", "real", "char"],
    correctAnswer: "real",
  },
  {
    question: "In SQL, which clause is primarily used to specify a condition to filter records during a query?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    correctAnswer: "WHERE",
  },
  {
    question: "Which of these memory types is considered volatile, losing its contents when power is turned off?",
    options: ["ROM", "SSD", "RAM", "Hard Disk"],
    correctAnswer: "RAM",
  },
  {
    question: "In the OSI model, which layer is mainly responsible for error detection and handling?",
    options: ["Network", "Transport", "Data Link", "Application"],
    correctAnswer: "Data Link",
  },
  {
    question: "Calculate the area of a circle given radius r = 3 units. Use π as a constant.",
    options: ["18π", "9π", "6π", "3π"],
    correctAnswer: "9π",
  },
  {
    question: "Which of these numbers is a prime number?",
    options: ["9", "15", "7", "21"],
    correctAnswer: "7",
  },
  {
    question: "Which planet in our solar system is famously known as the 'Red Planet' due to its iron oxide surface?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "In the URL 'www.example.com', what does the acronym 'www' stand for?",
    options: ["World Wide Web", "Web World Wide", "Wide Web World", "World Web Wide"],
    correctAnswer: "World Wide Web",
  },
  {
    question: "Which Indian physicist was awarded the Nobel Prize in 1930 for his work on the scattering of light?",
    options: ["APJ Abdul Kalam", "CV Raman", "Homi Bhabha", "Vikram Sarabhai"],
    correctAnswer: "CV Raman",
  },
  {
    question: "The 'Ship of the Desert' is a nickname for which animal known for its resilience in harsh climates?",
    options: ["Horse", "Camel", "Elephant", "Donkey"],
    correctAnswer: "Camel",
  },
  {
    question: "Who composed the Indian National Anthem 'Jana Gana Mana'?",
    options: ["Bankim Chandra", "Rabindranath Tagore", "Subhash Chandra Bose", "Sarojini Naidu"],
    correctAnswer: "Rabindranath Tagore",
  },
  {
    question: "Who authored the book 'Discovery of India', which explores the history and culture of India?",
    options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Rabindranath Tagore", "Jawaharlal Nehru"],
    correctAnswer: "Jawaharlal Nehru",
  },
  {
    question: "The 2020 Summer Olympics (held in 2021 due to pandemic) were hosted by which city?",
    options: ["Tokyo", "Beijing", "Rio de Janeiro", "London"],
    correctAnswer: "Tokyo",
  },
  {
    question: "What is the chemical formula of ozone, the molecule that protects Earth from UV rays?",
    options: ["O2", "O3", "CO2", "O4"],
    correctAnswer: "O3",
  },
  {
    question: "Which river is popularly known as the 'Ganga of the South' due to its cultural significance?",
    options: ["Godavari", "Krishna", "Kaveri", "Tungabhadra"],
    correctAnswer: "Godavari",
  },
  {
    question: "Who was the first Indian to win an individual Olympic gold medal?",
    options: ["Abhinav Bindra", "Leander Paes", "Sushil Kumar", "Milkha Singh"],
    correctAnswer: "Abhinav Bindra",
  },
  {
    question: "Which Indian city is famously known as the 'City of Lakes'?",
    options: ["Udaipur", "Jaipur", "Nainital", "Bhopal"],
    correctAnswer: "Udaipur",
  },
  {
    question: "In gaming, which title features the main character named 'Kratos'?",
    options: ["Call of Duty", "God of War", "Halo", "PUBG"],
    correctAnswer: "God of War",
  },
  {
    question: "Which company developed the popular sandbox game Minecraft?",
    options: ["Mojang", "Epic Games", "Valve", "EA"],
    correctAnswer: "Mojang",
  },
  {
    question: "In which year was the Constitution of India officially adopted?",
    options: ["1947", "1950", "1949", "1952"],
    correctAnswer: "1949",
  },
  {
    question: "Which country is commonly referred to as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan",
  }
];

const Practice = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questionsData.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
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

  // ⏳ Format time MM:SS
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
    saveResultToLocal("Practice Test", finalScore, questionsData.length);
  };

  const handleResultClose = () => {
    navigate('/home');
  };

  return (
    <div className='keyboard'>
      <div className="quiz-container">
        <span className="quiz-title">
          Practice<p className="quiz-subtitle">Test📈</p>
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

            {/* Progress Bar */}
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

export default Practice;
