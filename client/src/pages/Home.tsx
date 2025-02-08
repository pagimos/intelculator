import React, { useState } from "react";
import background from "../assets/bg.jpg";
import wiq from "../assets/wiq.jpg";
import Footer from "../components/Footer";
import score from "../assets/score.png";
import countries from "../assets/countries.jpg";
import "../index.css";
import { Calculator } from "lucide-react";
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
      {/* <div className="bg-zinc-100 h-screen">
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
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
