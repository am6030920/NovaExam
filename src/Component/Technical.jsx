import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Technical.css';

const questionsData = [
{
    question: "Which data structure provides O(1) time complexity for insertion, deletion, and search in the average case?",
    options: ["Binary Search Tree", "Hash Table", "Linked List", "Stack"],
    correctAnswer: "Hash Table",
  },
  {
    question: "In Operating Systems, what does the 'thrashing' phenomenon indicate?",
    options: ["Deadlock", "Excessive swapping", "High throughput", "Context switching"],
    correctAnswer: "Excessive swapping",
  },
  {
    question: "Which SQL statement is used to revoke previously granted privileges?",
    options: ["DELETE", "REVOKE", "ROLLBACK", "GRANT"],
    correctAnswer: "REVOKE",
  },
  {
    question: "Which normal form eliminates transitive dependencies in a relational database?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: "3NF",
  },
  {
    question: "What is the time complexity of heap sort in the worst case?",
    options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"],
    correctAnswer: "O(n log n)",
  },
  {
    question: "Which protocol is used to send emails from a client to a mail server?",
    options: ["IMAP", "FTP", "SMTP", "POP3"],
    correctAnswer: "SMTP",
  },
  {
    question: "Which Java concept allows you to define a method in a subclass that already exists in the superclass?",
    options: ["Inheritance", "Overriding", "Abstraction", "Encapsulation"],
    correctAnswer: "Overriding",
  },
  {
    question: "Which of the following algorithms is not a comparison-based sorting algorithm?",
    options: ["Merge Sort", "Quick Sort", "Counting Sort", "Heap Sort"],
    correctAnswer: "Counting Sort",
  },
  {
    question: "Which scheduling algorithm gives minimum average waiting time for a set of processes?",
    options: ["FCFS", "SJF", "Round Robin", "Priority"],
    correctAnswer: "SJF",
  },
  {
    question: "In C++, which concept restricts access to class members?",
    options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"],
    correctAnswer: "Encapsulation",
  },
  {
    question: "Which memory management technique uses segmentation and paging together?",
    options: ["Contiguous allocation", "Demand paging", "Virtual memory", "Segmented paging"],
    correctAnswer: "Segmented paging",
  },
  {
    question: "Which of the following represents the order of execution in the OS boot process?",
    options: ["Kernel → BIOS → Bootloader → OS", "BIOS → Bootloader → Kernel → OS", "Bootloader → BIOS → Kernel → OS", "BIOS → Kernel → Bootloader → OS"],
    correctAnswer: "BIOS → Bootloader → Kernel → OS",
  },
  {
    question: "Which SQL keyword is used to ensure a column only accepts unique values?",
    options: ["NOT NULL", "DEFAULT", "UNIQUE", "PRIMARY KEY"],
    correctAnswer: "UNIQUE",
  },
  {
    question: "Which Python keyword is used to create an anonymous function?",
    options: ["def", "lambda", "func", "anonymous"],
    correctAnswer: "lambda",
  },
  {
    question: "Which of the following is true about the TCP protocol?",
    options: ["It is connectionless", "It does not guarantee delivery", "It ensures ordered delivery", "It is faster than UDP"],
    correctAnswer: "It ensures ordered delivery",
  },
  {
    question: "Which data structure is used in the implementation of recursion?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    correctAnswer: "Stack",
  },
  {
    question: "Which OSI layer is responsible for logical addressing?",
    options: ["Transport", "Data Link", "Network", "Physical"],
    correctAnswer: "Network",
  },
  {
    question: "Which component converts high-level code into machine code at runtime in Java?",
    options: ["JDK", "JRE", "JVM", "JIT Compiler"],
    correctAnswer: "JIT Compiler",
  },
  {
    question: "Which of the following is used for version control?",
    options: ["Oracle", "Git", "Linux", "Docker"],
    correctAnswer: "Git",
  },
  {
    question: "Which command is used in Linux to find the current directory you’re in?",
    options: ["ls", "cd", "pwd", "dir"],
    correctAnswer: "pwd",
  },
  {
    question: "Which HTML element is used to embed JavaScript code?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correctAnswer: "<script>",
  },
  {
    question: "In DBMS, what is the primary purpose of a transaction log?",
    options: ["Store metadata", "Improve performance", "Recovery and rollback", "Maintain table schema"],
    correctAnswer: "Recovery and rollback",
  },
  {
    question: "What does the ACID property in databases stand for?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Durability", "Atomicity, Concurrency, Integration, Durability", "Access, Consistency, Isolation, Deployment"],
    correctAnswer: "Atomicity, Consistency, Isolation, Durability",
  },
  {
    question: "Which of the following data structures is used in BFS (Breadth-First Search)?",
    options: ["Stack", "Queue", "Priority Queue", "Set"],
    correctAnswer: "Queue",
  },
  {
    question: "Which bitwise operator is used to set a specific bit to 1 in C?",
    options: ["&", "|", "^", "~"],
    correctAnswer: "|",
  },
  {
    question: "Which C storage class stores a variable in the CPU register?",
    options: ["auto", "static", "extern", "register"],
    correctAnswer: "register",
  },
  {
    question: "Which of the following is an example of asymmetric encryption?",
    options: ["AES", "DES", "RSA", "Blowfish"],
    correctAnswer: "RSA",
  },
  {
    question: "Which of the following software models is based on iterative development and customer feedback?",
    options: ["Waterfall", "V-Model", "Agile", "Spiral"],
    correctAnswer: "Agile",
  },
  {
    question: "What does DNS stand for in networking?",
    options: ["Digital Network System", "Domain Naming System", "Domain Name System", "Distributed Network Setup"],
    correctAnswer: "Domain Name System",
  },
  {
    question: "Which cloud service model provides a platform allowing customers to develop, run, and manage apps?",
    options: ["IaaS", "PaaS", "SaaS", "DBaaS"],
    correctAnswer: "PaaS",
  }
];

const Technical = () => {
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
          Technical Mcq<p className="quiz-subtitle">Test💻</p>
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

export default Technical;
