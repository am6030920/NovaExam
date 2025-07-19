import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ml.css';

const questionsData = [
  {
    question: "Which of the following statements best describes the 'bias-variance trade-off'?",
    options: [
      "High bias leads to high variance",
      "Reducing bias always reduces variance",
      "Increasing model complexity decreases bias but increases variance",
      "Bias and variance are unrelated in model performance"
    ],
    correctAnswer: "Increasing model complexity decreases bias but increases variance",
  },
  {
    question: "Which of the following algorithms is most suitable for non-linearly separable data?",
    options: ["Logistic Regression", "Linear SVM", "Naive Bayes", "Kernel SVM"],
    correctAnswer: "Kernel SVM",
  },
  {
    question: "What does a high value of R² signify in a regression model?",
    options: [
      "Model explains most of the variability of the response data",
      "Model has multicollinearity",
      "Model suffers from underfitting",
      "Model has high variance"
    ],
    correctAnswer: "Model explains most of the variability of the response data",
  },
  {
    question: "Which of the following methods helps prevent overfitting in deep neural networks?",
    options: ["Weight initialization", "Dropout", "Batch Normalization", "Learning rate decay"],
    correctAnswer: "Dropout",
  },
  {
    question: "In the context of decision trees, what does 'information gain' measure?",
    options: [
      "Reduction in entropy",
      "Increase in Gini Index",
      "Number of leaf nodes",
      "Accuracy improvement"
    ],
    correctAnswer: "Reduction in entropy",
  },
  {
    question: "Which activation function is prone to vanishing gradient problem?",
    options: ["ReLU", "Sigmoid", "Tanh", "Leaky ReLU"],
    correctAnswer: "Sigmoid",
  },
  {
    question: "Which technique is used to handle imbalanced datasets in classification problems?",
    options: ["Feature scaling", "SMOTE", "Gradient clipping", "Hyperparameter tuning"],
    correctAnswer: "SMOTE",
  },
  {
    question: "Which of the following evaluation metrics is most appropriate for a highly imbalanced binary classification?",
    options: ["Accuracy", "F1 Score", "Mean Squared Error", "R² Score"],
    correctAnswer: "F1 Score",
  },
  {
    question: "What does PCA (Principal Component Analysis) aim to do?",
    options: [
      "Reduce features by removing correlated data points",
      "Reduce dimensionality by projecting data into new orthogonal basis",
      "Cluster similar data points",
      "Increase the classification margin"
    ],
    correctAnswer: "Reduce dimensionality by projecting data into new orthogonal basis",
  },
  {
    question: "What does the term 'curse of dimensionality' refer to in ML?",
    options: [
      "Too many missing values",
      "Overfitting due to deep networks",
      "Increased feature space reduces performance of distance-based algorithms",
      "Difficulty in visualization"
    ],
    correctAnswer: "Increased feature space reduces performance of distance-based algorithms",
  },
  {
    question: "Which ensemble method combines models sequentially, where each model tries to reduce the errors of the previous one?",
    options: ["Random Forest", "Bagging", "AdaBoost", "Voting"],
    correctAnswer: "AdaBoost",
  },
  {
    question: "Which kernel trick is used in SVMs to separate data in higher dimensions?",
    options: ["Radial Basis Function", "Polynomial", "Linear", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Which loss function is used for binary classification in logistic regression?",
    options: ["MSE", "Cross-Entropy", "Hinge Loss", "Huber Loss"],
    correctAnswer: "Cross-Entropy",
  },
  {
    question: "Which machine learning algorithm is best suited for solving the XOR problem?",
    options: ["Linear Regression", "Perceptron", "MLP", "KNN"],
    correctAnswer: "MLP",
  },
  {
    question: "In k-means clustering, what is a major disadvantage?",
    options: [
      "Cannot handle non-numeric data",
      "Requires labeled data",
      "Sensitive to initialization and outliers",
      "Computationally expensive for small datasets"
    ],
    correctAnswer: "Sensitive to initialization and outliers",
  },
  {
    question: "Which of the following is a disadvantage of L1 regularization over L2?",
    options: [
      "Does not induce sparsity",
      "Computationally more expensive",
      "Can cause instability in solutions",
      "Does not help in feature selection"
    ],
    correctAnswer: "Can cause instability in solutions",
  },
  {
    question: "Which deep learning architecture is most appropriate for image classification tasks?",
    options: ["RNN", "GAN", "CNN", "Autoencoder"],
    correctAnswer: "CNN",
  },
  {
    question: "Which method is used to reduce internal covariate shift in deep learning?",
    options: ["Weight decay", "Batch Normalization", "Dropout", "Momentum"],
    correctAnswer: "Batch Normalization",
  },
  {
    question: "What is the primary goal of unsupervised learning?",
    options: ["Label prediction", "Parameter optimization", "Structure discovery", "Loss minimization"],
    correctAnswer: "Structure discovery",
  },
  {
    question: "Which optimizer uses exponentially decaying average of past gradients?",
    options: ["SGD", "Momentum", "Adam", "RMSprop"],
    correctAnswer: "Adam",
  },
  {
    question: "Which type of neural network is suitable for time-series forecasting?",
    options: ["CNN", "RNN", "GAN", "Autoencoder"],
    correctAnswer: "RNN",
  },
  {
    question: "Which model is most prone to overfitting if training data is small and complex?",
    options: ["Decision Tree", "Logistic Regression", "Naive Bayes", "Linear Regression"],
    correctAnswer: "Decision Tree",
  },
  {
    question: "Which function measures the distance between actual and predicted probability distributions?",
    options: ["Hinge Loss", "Binary Cross-Entropy", "Kullback-Leibler Divergence", "MSE"],
    correctAnswer: "Kullback-Leibler Divergence",
  },
  {
    question: "Which regularization technique penalizes the sum of the absolute weights?",
    options: ["Ridge", "Lasso", "Elastic Net", "None"],
    correctAnswer: "Lasso",
  },
  {
    question: "In reinforcement learning, what does the Bellman Equation represent?",
    options: [
      "Value of a state as expected future rewards",
      "Penalty term in loss",
      "Hyperparameter optimization",
      "Agent's exploration rate"
    ],
    correctAnswer: "Value of a state as expected future rewards",
  },
  {
    question: "Which ML concept is described by 'generalizing from examples'?",
    options: ["Overfitting", "Supervised learning", "Inductive learning", "Reinforcement learning"],
    correctAnswer: "Inductive learning",
  },
  {
    question: "Which of the following is not an assumption of Linear Regression?",
    options: [
      "Homoscedasticity",
      "Normality of errors",
      "Independence of errors",
      "Multicollinearity"
    ],
    correctAnswer: "Multicollinearity",
  },
  {
    question: "Which unsupervised learning algorithm creates a hierarchy of clusters?",
    options: ["K-means", "Agglomerative Clustering", "DBSCAN", "PCA"],
    correctAnswer: "Agglomerative Clustering",
  },
  {
    question: "Which method is used for dimensionality reduction while preserving class separability?",
    options: ["PCA", "LDA", "t-SNE", "Autoencoder"],
    correctAnswer: "LDA",
  },
  {
    question: "Which model uses prior probability and likelihood to make predictions?",
    options: ["SVM", "Naive Bayes", "KNN", "Linear Regression"],
    correctAnswer: "Naive Bayes",
  }
];

const Ml = () => {
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
          Machine Learning<p className="quiz-subtitle">Test🎯</p>
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

export default Ml;
