import React from "react";

const Summary = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      
     

      {/* Overview Box */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-blue-600">🤖 Project Overview</h3>
        <p className="text-gray-700 text-lg mt-2">
          This autonomous robot is designed for remote control via a mobile app and can navigate 
          dangerous environments detecting obstacles, gas leaks, and temperature changes.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-600">🔹 Key Features</h3>
          <ul className="space-y-3 text-gray-700 mt-3">
            <li>✅ <span className="font-bold">Remote Control:</span> Operate via Bluetooth.</li>
            <li>🛑 <span className="font-bold">Obstacle Avoidance:</span> Ultrasonic sensor detects barriers.</li>
            <li>🔥 <span className="font-bold">LPG Detection:</span> MQ-6 sensor alerts gas leaks.</li>
            <li>🌡 <span className="font-bold">Temperature Monitoring:</span> Real-time environmental tracking.</li>
          </ul>
        </div>

        {/* Components Box */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-600">🛠️ Components Used</h3>
          <ul className="space-y-3 text-gray-700 mt-3">
            <li>⚡ <span className="font-bold">Arduino Uno:</span> Main microcontroller.</li>
            <li>📡 <span className="font-bold">HC-05 Bluetooth:</span> Enables wireless control.</li>
            <li>🚨 <span className="font-bold">MQ-6 Sensor:</span> Detects LPG gas leaks.</li>
            <li>🛞 <span className="font-bold">DC Motors:</span> Provide movement and mobility.</li>
          </ul>
        </div>
      </div>

      {/* Final Step Box */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-blue-600">🚀 Final Step – Run the Robot!</h3>
        <p className="text-gray-700 text-lg mt-2">
          🎯 Upload the Arduino code and power up the robot. 
          Ensure all sensors, motors, and Bluetooth are properly working.  
          Once everything is set, your robot is ready to operate autonomously.
        </p>
      </div>

    </div>
  );
};

export default Summary;
