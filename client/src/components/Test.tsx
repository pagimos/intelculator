import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import supabase from "../config/supabaseClient"; // Ensure this is configured
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

    if (timeLeft === 0) {
      clearInterval(timer);
      onComplete();
    }

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-lg font-bold">Time Left: {formatTime(timeLeft)}</div>
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
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">Name</label>
      <input
        onChange={(e) => setCountry(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="enter your fullname"
        required
      ></input>
      <label className="block mb-2">Age</label>
      <input
        onChange={(e) => setCountry(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="enter your age"
        required
      ></input>
      <label className="block mb-2">Gender</label>
      <select
        onChange={(e) => setCountry(e.target.value)}
        className="border p-2 rounded w-full"
        required
      >
        <option value="">Select your gender</option>

        <option>Male</option>
        <option>Female</option>
      </select>
      <label className="block mb-2">Country</label>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="border p-2 rounded w-full"
        required
      >
        <option value="">Select your country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Start Test
      </button>
    </form>
  );
};

// Navbar Component

// Test Component
const Test = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestionIndex]?.correct_option) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }

      setSelectedAnswer(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Test completed!");
      }
    } else {
      alert("Please select an answer.");
    }
  };

  const handleTestComplete = () => {
    alert("Time's up! Submitting your answers.");
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  if (!formSubmitted) {
    return <Form onSubmit={handleFormSubmit} />;
  }

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }
  console.log("hhhhhh", questions[currentQuestionIndex]?.options?.options);
  return (
    <div className="p-4">
      <Timer duration={600} onComplete={handleTestComplete} />
      <h2 className="text-xl font-bold mb-4">
        {questions[currentQuestionIndex]?.question_text}
      </h2>

      <div>
        {(questions[currentQuestionIndex]?.options?.options).map(
          (option: string, index: number) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => handleAnswerSelect(option)}
                className={`w-full p-2 rounded-md ${
                  selectedAnswer === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {option}
              </button>
            </div>
          )
        )}
      </div>
      <button
        onClick={handleNextQuestion}
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        {currentQuestionIndex < questions.length - 1
          ? "Next Question"
          : "Finish"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Test />
      </div>
    </div>
  );
};

export default App;
