import React from 'react';
import { Link } from 'react-router-dom';
import plantImage from '../assests/images/plant.png';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">We appreciate your visit. Please come again!</p>

        <img
             src={plantImage}
            alt="Plant Icon"
            className="confirmation-image mx-auto"
          />

        <p className="text-base text-gray-700">
          We hope to see you again soon! If you have any questions, feel free to contact us.
        </p>
        <Link to={`/`}>
        <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Back to Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
