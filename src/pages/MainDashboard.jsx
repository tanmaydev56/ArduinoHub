import React from "react";

const MainDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to ArduinoHub 
      </h1>
  
      <p className="text-lg text-gray-700 mb-6">
        Your one-stop destination for Arduino projects, tutorials, and resources.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">About Our Website</h2>
        <p className="text-gray-700">
          Our platform is dedicated to helping enthusiasts and developers build amazing 
          Arduino-based projects. Whether you're a beginner or an expert, you'll find 
          step-by-step guides, detailed component breakdowns, and real-world applications 
          of Arduino technology.
        </p>
      </div>

      <div className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">What You Can Do Here?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Explore Arduino projects with complete circuit diagrams and code.</li>
          <li>Learn about various sensors, modules, and microcontrollers.</li>
          <li>Read in-depth blog articles on automation, robotics, and IoT.</li>
          <li>Get hands-on experience by following our guided tutorials.</li>
        </ul>
      </div>

      <p className="mt-6 text-lg font-semibold text-gray-800">
        Start your Arduino journey with us today! 🔥
      </p>
    </div>
  );
};

export default MainDashboard;
