import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import supabase from "../config/supabaseClient";
import countries from "../data/countries";

// Timer Component
const Timer = ({
  duration,
  onComplete,
}: {
  duration: number;
  onComplete: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-lg font-bold text-center bg-red-100 p-2 rounded-md shadow-md mb-4">
      Time Left: {formatTime(timeLeft)}
    </div>
  );
};

// Form Component
const Form = ({
  onSubmit,
}: {
  onSubmit: (data: { country: string }) => void;
}) => {
  const [country, setCountry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ country });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-md w-full max-w-md mx-auto mt-8"
    >
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Start Your Test
      </h1>
      <label className="block mb-2 font-medium text-gray-600">Name</label>
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter your full name"
        required
      />
      <label className="block mb-2 font-medium text-gray-600">Age</label>
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter your age"
        required
      />
      <label className="block mb-2 font-medium text-gray-600">Gender</label>
      <select className="border p-2 rounded w-full mb-4" required>
        <option value="">Select your gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <label className="block mb-2 font-medium text-gray-600">Country</label>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        required
      >
        <option value="">Select your country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Start Test
      </button>
    </form>
  );
};

// Test Component
const Test = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [iqScore, setIqScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase.from("questions").select("*");
      if (error) {
        console.error("Error fetching questions:", error);
      } else {
        setQuestions(data);
      }
    };
    fetchQuestions();
  }, []);

  const calculateIQ = (score: number, maxScore = 25) => {
    const minIQ = 55;
    const maxIQ = 145;
    return minIQ + (score / maxScore) * (maxIQ - minIQ);
  };

  const handleAnswerSelect = (answer: string) => {
    if (timeUp) {
      alert("Time's up! You cannot change your answers.");
      return;
    }
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  const handleNextQuestion = () => {
    if (!selectedAnswers[currentQuestionIndex] && !timeUp) {
      alert("Please select an answer before proceeding.");
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleTestComplete = () => {
    setTimeUp(true);
  };

  const handleSubmit = () => {
    const totalCorrectAnswers = questions.reduce(
      (correctCount, question, index) => {
        const correctOption = question.correct_option;
        const userAnswer = selectedAnswers[index];
        return userAnswer === correctOption ? correctCount + 1 : correctCount;
      },
      0
    );

    const calculatedIQ = calculateIQ(totalCorrectAnswers, questions.length);
    setIqScore(calculatedIQ);
    setTestSubmitted(true);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  if (!formSubmitted) {
    return <Form onSubmit={handleFormSubmit} />;
  }

  if (testSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-green-500 mb-4">
            Test Complete!
          </h1>
          <p className="text-xl text-gray-700">Your IQ Score:</p>
          <p className="text-6xl font-bold text-blue-500 my-4">{iqScore}</p>
          <p className="text-gray-500">Thank you for taking the test!</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="bg-white shadow-md p-4 rounded-md w-full max-w-xl">
        <Timer duration={600} onComplete={handleTestComplete} />

        <div className="text-gray-600 text-sm font-medium mb-4 text-center">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>

        <div className="min-h-[80px] mb-4 flex items-center justify-center">
          <h2 className="text-xl font-bold text-gray-800 text-center leading-relaxed">
            {questions[currentQuestionIndex]?.question_text}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {(questions[currentQuestionIndex]?.options?.options).map(
            (option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={timeUp}
                className={`flex items-center justify-center w-full h-24 rounded-md text-center shadow-sm transition duration-300 ${
                  selectedAnswers[currentQuestionIndex] === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                } ${timeUp ? "cursor-not-allowed bg-gray-300" : ""}`}
              >
                {option}
              </button>
            )
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={
              timeUp || currentQuestionIndex === questions.length - 1
                ? handleSubmit
                : handleNextQuestion
            }
            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          >
            {timeUp || currentQuestionIndex === questions.length - 1
              ? "Submit"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <Test />
    </div>
  );
};

export default App;
