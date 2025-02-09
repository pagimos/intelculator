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
    <div className="text-lg font-bold bg-red-100 p-2 rounded-md shadow-md absolute top-4 right-4">
      Time Left: {formatTime(timeLeft)}
      {timeLeft === 0 && (
        <div className="text-sm text-red-600 mt-1">
          Time's up! Finish the test.
        </div>
      )}
    </div>
  );
};

// Form Component
const Form = ({
  onSubmit,
}: {
  onSubmit: (data: {
    name: string;
    age: string;
    gender: string;
    country: string;
  }) => Promise<void>;
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ name, age, gender, country });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-md w-full max-w-md mx-auto mt-8"
    >
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Submit Your Details
      </h1>
      <label className="block mb-2 font-medium text-gray-600">Name</label>
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className="block mb-2 font-medium text-gray-600">Age</label>
      <input
        type="number"
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        min="1"
        max="120"
      />
      <label className="block mb-2 font-medium text-gray-600">Gender</label>
      <select
        className="border p-2 rounded w-full mb-4"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
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
        Submit
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
  const [timeUp, setTimeUp] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [iqScore, setIqScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.error("Error fetching questions:", error);
      } else {
        setQuestions(data);
      }
    };
    fetchQuestions();
  }, []);

  const calculateIQ = (score: number, maxScore: number) => {
    const minIQ = 75;
    const maxIQ = 125;
    return Math.round(minIQ + (score / maxScore) * (maxIQ - minIQ));
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
      setTestFinished(true);
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

  const handleFormSubmit = async (data: {
    name: string;
    age: string;
    gender: string;
    country: string;
  }) => {
    const totalCorrectAnswers = questions.reduce(
      (correctCount, question, index) => {
        const correctOption = question.correct_option;
        const userAnswer = selectedAnswers[index];
        return userAnswer === correctOption
          ? correctCount + question.difficulty
          : correctCount;
      },
      0
    );

    const maxPossibleScore = questions.reduce(
      (sum, question) => sum + question.difficulty,
      0
    );

    const calculatedIQ = calculateIQ(totalCorrectAnswers, maxPossibleScore);

    try {
      const { error } = await supabase.from("results").insert([
        {
          name: data.name,
          age: parseInt(data.age, 10),
          gender: data.gender,
          country: data.country,
          iq_score: calculatedIQ,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setIqScore(calculatedIQ);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error saving result:", error);
      alert("Failed to save your result. Please try again.");
    }
  };

  const ContentRenderer = ({
    content,
    size,
  }: {
    content: string;
    size?: string;
  }) => {
    const isImage =
      content?.startsWith("http://") || content?.startsWith("https://");

    const imageUrl = isImage
      ? content
      : content?.startsWith("www.")
      ? `https://${content}`
      : content;

    return isImage || content?.startsWith("www.") ? (
      <img
        src={imageUrl}
        alt="Question"
        className={`${size || "w-full h-auto"} object-contain`}
      />
    ) : (
      <span
        className="break-words"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex] || {};
  const questionText = currentQuestion.question_text || "";
  const questionImageUrl = currentQuestion.image_url || "";
  const questionOptions = currentQuestion.options || [];

  if (formSubmitted) {
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

  if (testFinished || timeUp) {
    return <Form onSubmit={handleFormSubmit} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <Timer duration={600} onComplete={handleTestComplete} />

      <div className="bg-white shadow-md p-6 rounded-md w-full max-w-2xl">
        <div className="text-gray-600 text-sm font-medium mb-4 text-center">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>

        {questionImageUrl ? (
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden">
              <div className="w-[300px] h-[300px]">
                <ContentRenderer content={questionImageUrl} />
              </div>
              <div className="text-center mb-6">
                <p className="text-xl font-medium text-gray-700 mt-10">
                  {questionText}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mb-6">
            <p className="text-xl font-medium text-gray-700">
              <ContentRenderer content={questionText} />
            </p>
          </div>
        )}

        <div
          className={`grid ${
            questionImageUrl ? "grid-cols-6" : "grid-cols-2"
          } gap-2 justify-items-center`}
        >
          {questionOptions.map((option: string, index: number) => (
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
              <div className="flex items-center justify-center">
                <ContentRenderer content={option} size="w-28 h-28" />
              </div>
            </button>
          ))}
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
            onClick={handleNextQuestion}
            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          >
            {currentQuestionIndex === questions.length - 1 || timeUp
              ? "Finish Test"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <Test />
    </div>
  );
};

export default App;
