import React, { useState } from "react";
import background from "../assets/bg.jpg";
import wiq from "../assets/wiq.jpg";

import score from "../assets/score.png";
import countries from "../assets/countries.jpg";
import "../index.css";
import { Instagram, Twitter, Facebook, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home: React.FC = () => {
  const [iqScore, setIqScore] = useState<number | string>(""); // To store the IQ score
  const [errorMessage, setErrorMessage] = useState<string>(""); // To store error message
  const [percentile, setPercentile] = useState<number | string>(""); // To store IQ percentile
  const [classification, setClassification] = useState<string>(""); // To store IQ classification

  const handleIqChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIqScore(e.target.value);
    setErrorMessage(""); // Clear error message when user starts typing
  };

  const handleCalculate = () => {
    const iq = parseInt(iqScore.toString());

    // Validate IQ score
    if (iq < 0 || iq > 200) {
      setErrorMessage("Please enter a valid IQ score between 0 and 200.");
      setPercentile("");
      setClassification("");
      return;
    }

    // Calculate the percentile and classification based on the IQ score
    const percentile = calculatePercentile(iq);
    const classification = getClassification(iq);

    setPercentile(percentile);
    setClassification(classification);
  };

  const calculatePercentile = (iq: number): number => {
    // Simple logic to calculate percentile, you can refine this
    if (iq < 70) return 2;
    if (iq < 85) return 16;
    if (iq < 115) return 50;
    if (iq < 130) return 84;
    return 98;
  };

  const getClassification = (iq: number): string => {
    if (iq < 70) return "Intellectual Disability";
    if (iq < 85) return "Below Average";
    if (iq < 115) return "Average";
    if (iq < 130) return "Above Average";
    return "Gifted";
  };

  return (
    <div className="">
      {/* Dynamic Navbar */}
      <Navbar />
      <div className="absolute top-1/2 left-32 transform -translate-y-1/4 flex flex-col items-center gap-6">
        <h1 className="text-white font-semibold text-3xl max-w-xl text-left">
          Discover your IQ in just 10 minutes with our{" "}
          <span className="text-green-500 uppercase font-black">free</span>{" "}
          scientifically-validated test!
        </h1>
        <Link to="/test">
          <button className="px-4 py-3 bg-orange-500 rounded-lg text-white font-semibold text-2xl select-none ">
            Test Now
          </button>
        </Link>
      </div>

      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="inset-0 w-full object-cover"
      />

      {/* Content Layer */}
      <div className="bg-blue-50">
        <div className="h-screen flex flex-col max-w-5xl justify-center m-auto">
          <h1 className="text-gray-700 text-4xl font-bold self-center pt-24 relative">
            What is IQ?
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 border-b-4 border-orange-500"></span>
          </h1>
          <div className="flex justify-center gap-16 max-w-6xl mx-auto items-center h-full">
            <p className="max-w-xl text-base text-gray-600">
              IQ, or Intelligence Quotient, measures a person’s cognitive
              abilities compared to others in their age group. Derived from
              standardized tests, it assesses skills like reasoning,
              problem-solving, and understanding complex ideas.
              <br /> <br />
              The average IQ score is 100, with most people scoring between 85
              and 115. While useful for identifying cognitive strengths, IQ
              doesn’t measure creativity, emotional intelligence, or practical
              skills. It offers a partial view of intelligence, reflecting
              specific mental abilities rather than the full range of human
              potential.
            </p>
            <img src={wiq} alt="What is IQ?" className="max-w-xl" />
          </div>
        </div>
      </div>

      {/* Average IQ by Country */}

      <div className=" flex flex-col max-w-5xl justify-center m-auto">
        <img
          src={countries}
          alt="Average IQ by Country"
          className="w-[1280px] py-24"
        />
        <div className="flex items-center max-w-6xl justify-between pb-24">
          <div>
            <h1 className="relative text-gray-700 text-4xl font-bold  py-6 ">
              Average IQ by Country :
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              The average IQ differs across nations, shaped by factors like
              education, nutrition, healthcare, and socioeconomic conditions.
              Some countries have higher averages, often linked to better access
              to resources, while others may have lower averages due to systemic
              challenges.
              <br />
              <br /> While IQ scores provide a general view of cognitive
              performance, they are influenced by cultural, environmental, and
              economic factors. It’s important to remember that these averages
              do not define individual abilities and reflect only specific
              aspects of intelligence rather than the full range of human
              potential.
            </p>
          </div>
          <div className="flex flex-col  gap-2   items-center h-full ">
            <h1 className="font-bold text-sm">
              Top 10 Countries with the Highest Average IQ
            </h1>
            <div className="m-0 max-h-[60vh] overflow-auto rounded-xl border border-gray-300 p-0">
              <table>
                <thead className="relative z-40 bg-sky-50 px-0 py-0 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="sticky top-0 border-b border-gray-200 bg-sky-50 bg-clip-padding px-3 py-2 align-bottom leading-4 text-gray-600 md:px-4">
                      <div className="flex items-center cursor-pointer select-none">
                        Country
                      </div>
                    </th>
                    <th className="sticky top-0 border-b border-gray-200 bg-sky-50 bg-clip-padding px-3 py-2 align-bottom leading-4 text-gray-600 md:px-4">
                      <div className="flex items-center cursor-pointer select-none">
                        IQ (Lynn/Becker)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="relative z-10 text-sm">
                  {[
                    { country: "Japan", iq: 106.48 },
                    { country: "Taiwan", iq: 106.47 },
                    { country: "Singapore", iq: 105.89 },
                    { country: "Hong Kong", iq: 105.37 },
                    { country: "China", iq: 104.1 },
                    { country: "South Korea", iq: 102.35 },
                    { country: "Belarus", iq: 101.6 },
                    { country: "Finland", iq: 101.2 },
                    { country: "Liechtenstein", iq: 101.07 },
                    { country: "Germany", iq: 100.74 },
                  ].map((item, index) => (
                    <tr className="table-row" key={index}>
                      <th className="px-3 py-1.5 text-left align-middle text-sm text-gray-900 md:px-4">
                        <a href={`/countries/${item.country.toLowerCase()}`}>
                          {item.country}
                        </a>
                      </th>
                      <td className="px-3 py-1.5 text-sm text-gray-600 md:px-4">
                        {item.iq}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Content Layer */}
      <div className="bg-zinc-100 h-screen">
        <div className=" flex items-center max-w-5xl justify-between pb-24 mx-auto">
          <div className="flex flex-col gap-10 items-center mx-auto bg-yellow-400 p-2 rounded-xl pt-8">
            <div className="flex-col flex ">
              <div className="flex gap-2 mb-2 ">
                <h1 className="font-semibold">IQ Score :</h1>
                <input
                  className="rounded-md text-lg w-20 m-auto border-2 border-gray-500"
                  type="number"
                  value={iqScore}
                  onChange={handleIqChange}
                />
              </div>
              <button
                className="rounded-lg bg-orange-600 p-2 text-white font-semibold flex gap-2 items-center justify-center w-42"
                onClick={handleCalculate}
              >
                Calculate <Calculator />
              </button>
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>
            <div className=" px-8 rounded-3xl w-96 py-10">
              <h1 className="font-bold text-2xl">Results :</h1>
              <div className="flex flex-col items-center">
                <h1 className="font-semibold">IQ Percentile:</h1>
                <input
                  className="rounded-md bg-yellow-400 text-lg w-20 m-auto border-2 border-yellow-400 "
                  type="number"
                  value={percentile}
                  disabled
                />
                <h1 className="font-semibold">Classification :</h1>
                <input
                  className="rounded-md bg-yellow-400 text-lg w-44 border-yellow-400 m-auto border-2 "
                  type="text"
                  value={classification}
                  disabled
                />
              </div>
            </div>
          </div>
          <img
            src={score}
            alt="Average IQ by Country"
            className="w-[580px] py-24"
          />
        </div>
      </div>
      <div className="bg-[#030303] py-8 px-44 text-white">
        {/* Notification Section */}
        <div className="max-w-5xl mx-auto pt-5 pb-32">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-medium">
              Get notified when we launch
            </div>
            <div className="flex gap-4">
              <input
                className="bg-[#030303] border border-gray-500 p-1 rounded-md px-4 pr-12"
                type="email"
                placeholder="Enter your email"
              />
              <button className="border border-gray-500 p-1 px-4 rounded-md bg-gray-800 hover:bg-gray-600 transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-100">
            Stay up to date with the latest news, announcements, and articles.
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-12 mx-auto">
          {/* Company Info */}
          <div className="mb-6 col-span-2">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              About Intelculator
            </h2>
            <p
              className="text-sm text-gray-100"
              style={{ lineHeight: "1.6em" }}
            >
              Intelculator is your trusted platform for accurate, engaging IQ
              tests. Designed for all ages, our science-backed tests deliver
              instant results, insights, and fun. Explore average IQs by country
              and detailed analytics in an interactive experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h2 className="text-xl text-gray-100 font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  IQ Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  History of IQ
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl text-gray-100 font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  IQ Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  History of IQ
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/intelculator"
                target="_blank"
                className="hover:text-gray-400"
              >
                <Facebook color="#f5f5f5" />
              </a>
              <a
                href="https://www.x.com/intelculator"
                target="_blank"
                className="hover:text-gray-400"
              >
                <Twitter color="#f5f5f5" />
              </a>

              <a
                href="https://www.instagram.com/intelculator"
                target="_blank"
                className="hover:text-gray-400"
              >
                <Instagram color="#f5f5f5" />
              </a>
            </div>
          </div>
        </div>

        {/* Clean HR Styling */}
        <hr className="max-w-5xl mx-auto border-t border-gray-600 mt-12 mb-8" />

        {/* Privacy Policy and Terms of Service Links */}

        <div className="flex justify-between max-w-5xl mx-auto">
          <div className="text-center text-sm text-gray-100 mb-6">
            <a href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-of-service" className="hover:text-gray-400">
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <h1>© Intelculator 2024. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
