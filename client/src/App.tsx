<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import Contact from "./components/Contact";
import History from "./components/History";
const App: React.FC = () => {
=======
import "./App.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Instagram } from "lucide-react";

function App() {
  // Set a fixed end time for the countdown
  const fixedEndTime: number = new Date("2025-01-15T00:00:00Z").getTime();

>>>>>>> 5ee3a25f8cd29fb4b81e048a1a10015b34ea7e34
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history-of-iq" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
