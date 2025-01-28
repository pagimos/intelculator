import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const IqArticles: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 text-gray-800 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Understanding IQ: Articles and Insights
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/iq-basics.jpg"
                alt="IQ Basics"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">What is IQ?</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the fundamentals of IQ, its history, and what it
                  really measures.
                </p>
                <a
                  href="/articles/what-is-iq"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/iq-tests.jpg"
                alt="IQ Tests"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  How IQ Tests Work
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Learn about the structure of IQ tests and how results are
                  interpreted.
                </p>
                <a
                  href="/articles/iq-tests"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/iq-society.jpg"
                alt="IQ in Society"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">IQ and Society</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Discover how IQ influences education, career paths, and
                  societal roles.
                </p>
                <a
                  href="/articles/iq-society"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IqArticles;
