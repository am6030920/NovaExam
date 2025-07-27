import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Trivia.css';

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
    question: "Who was the first emperor of the Maurya Dynasty in India?",
    options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Harsha"],
    correctAnswer: "Chandragupta Maurya",
  },
  {
    question: "The Battle of Plassey in 1757 was fought between the British East India Company and which Indian ruler?",
    options: ["Tipu Sultan", "Mir Qasim", "Siraj-ud-Daulah", "Bahadur Shah Zafar"],
    correctAnswer: "Siraj-ud-Daulah",
  },
  {
    question: "Which empire built the famous Hagia Sophia before it became a mosque?",
    options: ["Ottoman Empire", "Roman Empire", "Byzantine Empire", "Persian Empire"],
    correctAnswer: "Byzantine Empire",
  },
  {
    question: "Which Indian freedom fighter formed the Azad Hind Fauj?",
    options: ["Bhagat Singh", "Subhas Chandra Bose", "Jawaharlal Nehru", "Bal Gangadhar Tilak"],
    correctAnswer: "Subhas Chandra Bose",
  },

  // Sports
  {
    question: "Who holds the record for the most goals scored in international football (as of 2024)?",
    options: ["Lionel Messi", "Sunil Chhetri", "Cristiano Ronaldo", "Pele"],
    correctAnswer: "Cristiano Ronaldo",
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Qatar", "Russia", "USA", "Brazil"],
    correctAnswer: "Qatar",
  },
  {
    question: "Who is the only cricketer to score 100 international centuries?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Steve Smith", "Ricky Ponting"],
    correctAnswer: "Sachin Tendulkar",
  },
  {
    question: "How many players are there on a basketball team on the court at one time (per team)?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5",
  },

  // Movies
  {
    question: "Which movie won the Academy Award for Best Picture in 2023?",
    options: ["Everything Everywhere All at Once", "Avatar: The Way of Water", "Top Gun: Maverick", "The Fabelmans"],
    correctAnswer: "Everything Everywhere All at Once",
  },
  {
    question: "Who directed the film 'Inception'?",
    options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Quentin Tarantino"],
    correctAnswer: "Christopher Nolan",
  },
  {
    question: "Which Indian film was nominated for an Oscar in the Best Original Song category for 'Naatu Naatu'?",
    options: ["RRR", "Pushpa", "Baahubali", "Lagaan"],
    correctAnswer: "RRR",
  },
  {
    question: "Which actor played the role of Joker in 'The Dark Knight' (2008)?",
    options: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Tom Hardy"],
    correctAnswer: "Heath Ledger",
  },

  // Science
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correctAnswer: "Mitochondria",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "What is the chemical symbol of gold?",
    options: ["G", "Au", "Ag", "Go"],
    correctAnswer: "Au",
  },
  {
    question: "Which planet in the solar system has the most moons (as of 2024)?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn",
  },

  // Literature
  {
    question: "Who wrote the epic 'Paradise Lost'?",
    options: ["William Shakespeare", "John Milton", "Geoffrey Chaucer", "Alexander Pope"],
    correctAnswer: "John Milton",
  },
  {
    question: "Which of the following novels was written by George Orwell?",
    options: ["To the Lighthouse", "Animal Farm", "Great Expectations", "The Catcher in the Rye"],
    correctAnswer: "Animal Farm",
  },
  {
    question: "Who is the author of the 'Harry Potter' series?",
    options: ["J.K. Rowling", "Suzanne Collins", "J.R.R. Tolkien", "Rick Riordan"],
    correctAnswer: "J.K. Rowling",
  },
  {
    question: "Which play features the character 'Iago'?",
    options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
    correctAnswer: "Othello",
  },

  // Current Events
  {
    question: "Who is the current President of the United States (as of 2024)?",
    options: ["Donald Trump", "Joe Biden", "Barack Obama", "Ron DeSantis"],
    correctAnswer: "Joe Biden",
  },
  {
    question: "Which country became the newest member of BRICS in 2023?",
    options: ["Saudi Arabia", "Iran", "Egypt", "Argentina"],
    correctAnswer: "Argentina",
  },
  {
    question: "Which country launched the Chandrayaan-3 mission?",
    options: ["China", "Russia", "India", "Japan"],
    correctAnswer: "India",
  },
  {
    question: "Which tech company acquired Twitter in 2022?",
    options: ["Meta", "Microsoft", "Tesla", "Elon Musk"],
    correctAnswer: "Elon Musk",
  },

  // Pop Culture
  {
    question: "Which artist holds the record for most streamed song on Spotify as of 2024?",
    options: ["Ed Sheeran", "Taylor Swift", "The Weeknd", "BTS"],
    correctAnswer: "The Weeknd",
  },
  {
    question: "Who won the Miss Universe title in 2023?",
    options: ["R'Bonney Gabriel", "Harnaaz Sandhu", "Amanda Dudamel", "Andrea Meza"],
    correctAnswer: "R'Bonney Gabriel",
  },
  {
    question: "Which K-pop band has the largest fanbase globally (as of 2024)?",
    options: ["Blackpink", "BTS", "EXO", "Seventeen"],
    correctAnswer: "BTS",
  },
  {
    question: "Which social media platform introduced 'Reels'?",
    options: ["TikTok", "Instagram", "Snapchat", "YouTube"],
    correctAnswer: "Instagram",
  }
];

const Trivia = () => {
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
    saveResultToLocal("Trivia Test", finalScore, questionsData.length);
    setShowResult(true);
  };

  const handleResultClose = () => {
    navigate('/home');
  };

  return (
    <div className='keyboard'>
      <div className="quiz-container">
        <span className="quiz-title">
          Programming<p className="quiz-subtitle">Test💁</p>
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

            <div className="progress-bar" aria-label="Question progress">
              <div
                className="progress-bar-fill"
                style={{width: `${((currentQ + 1) / questionsData.length) * 100}%`}}
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

export default Trivia;
