import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import Contact from "./components/Contact";
import History from "./components/History";
const App: React.FC = () => {
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
