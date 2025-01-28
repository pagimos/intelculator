import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import History from "./pages/History";
import IqArticles from "./pages/IqArticles";
import Donations from "./pages/Donations";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history-of-iq" element={<History />} />
        <Route path="/iq-articles" element={<IqArticles />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </Router>
  );
};

export default App;
