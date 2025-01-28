import { Instagram, Twitter, Facebook } from "lucide-react";
function Footer() {
  return (
    <div>
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
}

export default Footer;
