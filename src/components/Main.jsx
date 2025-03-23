import React from 'react';

const Main = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen p-10">
      
      {/* Heading Section */}
      <div className="w-full max-w-6xl text-center bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-600 leading-tight">
          Arduino-Based Obstacle Avoiding & LPG Detection Robot
        </h1>
        <p className="text-gray-700 mt-3 text-lg">
          A smart robotic system designed for safety and automation.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-3xl mt-10">
        <img 
          src="/Car.jpg" 
          alt="Robot Image" 
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

    </div>
  );
};

export default Main;
