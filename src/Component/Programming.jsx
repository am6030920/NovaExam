import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Programming.css';

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
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "Object", "def", "structure"],
    correctAnswer: "class",
  },
  {
    question: "Which of the following is not a Java primitive type?",
    options: ["int", "float", "String", "char"],
    correctAnswer: "String",
  },
  {
    question: `#include <iostream>
using namespace std;
int main() {
  int a = 5, b = 10;
  cout << a + b;
  return 0;
}`,
    options: ["15", "510", "5 + 10", "Error"],
    correctAnswer: "15"
  },
  {
    question: "Which method is used to start a thread in Java?",
    options: ["start()", "run()", "init()", "main()"],
    correctAnswer: "start()",
  },
  {
    question: `#include <stdio.h>
int main() {
  int a = 5;
  int *p = &a;
  *p += 2;
  printf("%d", a);
  return 0;
}`,
    options: ["5", "2", "7", "Garbage value"],
    correctAnswer: "7"
  },
  {
    question: "What is the output of printf(\"%d\", 10+20);?",
    options: ["10", "20", "30", "Error"],
    correctAnswer: "30",
  },
  {
    question: "Which of the following is used to comment a single line in C?",
    options: ["//", "#", "/* */", "--"],
    correctAnswer: "//",
  },
  {
    question: "Which data type is used to store decimal numbers in C?",
    options: ["int", "float", "char", "bool"],
    correctAnswer: "float",
  },
  {
    question: `#include <stdio.h>
int main() {
  int a = 10;
  if (a = 0)
    printf("Zero");
  else
    printf("Non-zero");
  return 0;
}`,
    options: ["Zero", "Non-zero", "Error", "Nothing"],
    correctAnswer: "Non-zero"
  },
  {
    question: "Which header file is used for input/output in C?",
    options: ["conio.h", "stdlib.h", "stdio.h", "io.h"],
    correctAnswer: "stdio.h",
  },
  {
    question: "C++ is an extension of which language?",
    options: ["C", "Java", "Python", "HTML"],
    correctAnswer: "C",
  },
  {
    question: "Which concept allows the use of the same function name with different parameters?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Overloading"],
    correctAnswer: "Overloading",
  },
  {
    question: `public class Test {
  public static void main(String[] args) {
    int a = 5;
    System.out.println(a++ + ++a);
  }
}`,
    options: ["11", "12", "10", "Error"],
    correctAnswer: "12"
  },
  {
    question: "Which operator is used to access class members in C++?",
    options: [".", "::", ":", "#"],
    correctAnswer: ".",
  },
  {
    question: `public class Test {
  public static void main(String[] args) {
    try {
      int a = 5 / 0;
    } catch (ArithmeticException e) {
      System.out.println("Exception");
    }
  }
}`,
    options: ["Exception", "Error", "RuntimeException", "Nothing"],
    correctAnswer: "Exception"
  },
  {
    question: `for i in range(3):
    print(i)
else:
    print("Done")`,
    options: ["0 1 2", "0 1 2 Done", "Done", "Error"],
    correctAnswer: "0\n1\n2\nDone"
  },
  {
    question: "How do you start a comment in Python?",
    options: ["//", "#", "<!--", "/*"],
    correctAnswer: "#",
  },
  {
    question: "Which of these is a valid Python data type?",
    options: ["number", "integer", "int", "decimal"],
    correctAnswer: "int",
  },
  {
    question: "What will `print(type([]))` output?",
    options: ["<class 'list'>", "<type 'list'>", "list", "<class>"],
    correctAnswer: "<class 'list'>",
  },
  {
    question: "How do you define a variable in Python?",
    options: ["int x = 5", "x = 5", "var x = 5", "define x = 5"],
    correctAnswer: "x = 5",
  },
  {
    question: "Which language is known for its simplicity and indentation rules?",
    options: ["C", "C++", "Java", "Python"],
    correctAnswer: "Python",
  },
  {
    question: `public class Test {
  public static void main(String[] args) {
    System.out.println(10 + 20 + "Hello" + 10 + 20);
  }
}`,
    options: ["30Hello30", "30Hello1020", "Hello1020", "Error"],
    correctAnswer: "30Hello1020"
  },
  {
    question: "Which of the following is used to take input in C++?",
    options: ["cin", "cout", "input()", "scanf"],
    correctAnswer: "cin",
  },
  {
    question: "What is the extension of Java compiled bytecode files?",
    options: [".java", ".class", ".exe", ".obj"],
    correctAnswer: ".class",
  },
  {
    question: "Which function is used to get input from user in C?",
    options: ["input()", "gets()", "scanf()", "cin"],
    correctAnswer: "scanf()",
  },
  {
    question: "Which keyword is used to stop a loop in Python?",
    options: ["stop", "exit", "break", "return"],
    correctAnswer: "break",
  },
  {
    question: `#include <stdio.h>
int main() {
  printf("Hello, World!");
  return 0;
}`,
    options: ["Hello, World!", "hello world", "Error", "Nothing"],
    correctAnswer: "Hello, World!"
  },
  {
    question: "Which concept hides internal details in OOP?",
    options: ["Polymorphism", "Abstraction", "Encapsulation", "Inheritance"],
    correctAnswer: "Abstraction",
  },
  {
    question: `x = 10
y = 20
print(x + y)`,
    options: ["30", "1020", "Error", "0"],
    correctAnswer: "30"
  },
  {
    question: "Which language does not support pointers directly?",
    options: ["C", "C++", "Java", "Python"],
    correctAnswer: "Java",
  }
];

const Programming = () => {
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

    // Save to localStorage
    saveResultToLocal("Programming Test", finalScore, questionsData.length);
  };

  const handleResultClose = () => {
    navigate('/home');
  };

  return (
    <div className='keyboard'>
      <div className="quiz-container">
        <span className="quiz-title">
          Programming <p className="quiz-subtitle">Test 💁</p>
        </span>
        <div className="underline3" style={{ width: '405px' }}></div>
        <p className="timer">⏳Time Left: {formatTime(timeLeft)} ⏰</p>

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

            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${((currentQ + 1) / questionsData.length) * 100}%` }}
              />
            </div>

            <div className="button-group">
              <button className="btn prev-btn" onClick={handlePrevious} disabled={currentQ === 0}>
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
            <h2>Test Completed! 🎉</h2>
            <p>Your Score: <strong>{score} / {questionsData.length}</strong> 👌🏻</p>
            <p>Percentage: <strong>{((score / questionsData.length) * 100).toFixed(2)}%</strong> 🔥</p>
            <button className="ok-btn" onClick={handleResultClose}>Go To Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programming;
