import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Binance from "../assets/binance.png";
import Adress from "../assets/adress.jfif";
import Paypal from "../assets/paypal.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

const Donations: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Support Intelculator
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Thank you for using Intelculator! Your support helps us keep
            improving the app and providing a great experience for all our
            users. If you’d like to contribute, we’d be incredibly grateful!
          </p>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Why Donate?
            </h2>
            <p className="text-gray-600 mb-4">Your donations help us:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Maintain and improve the platform</li>
              <li>Develop new features and enhancements</li>
              <li>Keep the app ad-free for a better user experience</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Every contribution, no matter the size, makes a difference!
            </p>

            <div className="flex flex-row items-center justify-center gap-8 ">
              <a
                href="https://www.paypal.com/donate" // Replace with your donation link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition duration-200 flex gap-2"
              >
                <img src={Paypal} alt="" className="w-6" />
                Paypal
              </a>
              <AlertDialog>
                <AlertDialogTrigger className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition duration-200 flex gap-2">
                  <img src={Binance} alt="" className="w-6" />
                  Binance
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-center">
                      Support Science & Intelligence <br /> Donate to
                      Intelculator!
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <img
                    src={Adress}
                    alt=""
                    className="w-72 mx-auto rounded-lg"
                  />
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Done</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* <a
                href="https://www.paypal.com/donate" // Replace with your donation link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition duration-200 flex gap-2"
              >
                <img src={Binance} alt="" className="w-6" />
                Binance
              </a> */}
            </div>
          </div>

          <div className="text-center mt-12 text-gray-600">
            <p>
              <strong>Thank you for your generosity!</strong> We’re excited to
              have you as part of our journey to make Intelculator the best it
              can be.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donations;
