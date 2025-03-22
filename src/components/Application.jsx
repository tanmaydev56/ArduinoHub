import React from "react";

const Application = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 ">
  


      {/* Grid Layout for Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Applications */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Applications</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="p-3 bg-gray-200 rounded-lg">Home Security</li>
            <li className="p-3 bg-gray-200 rounded-lg">Industrial Safety</li>
            <li className="p-3 bg-gray-200 rounded-lg">Medical Assistance</li>
            <li className="p-3 bg-gray-200 rounded-lg">Disaster Response</li>
            <li className="p-3 bg-gray-200 rounded-lg">Environmental Monitoring</li>
          </ul>
        </div>

        {/* Use Cases */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Use Cases</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="p-3 bg-gray-200 rounded-lg">Remote Surveillance</li>
            <li className="p-3 bg-gray-200 rounded-lg">Autonomous Navigation</li>
            <li className="p-3 bg-gray-200 rounded-lg">Fire & Gas Leak Detection</li>
            <li className="p-3 bg-gray-200 rounded-lg">Energy Efficiency</li>
            <li className="p-3 bg-gray-200 rounded-lg">AI Integration(Future Improvement)</li>
          </ul>
        </div>

        {/* Features */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-200 rounded-lg">Wireless Bluetooth Control</div>
            <div className="p-4 bg-gray-200 rounded-lg">Ultrasonic Obstacle Detection</div>
            <div className="p-4 bg-gray-200 rounded-lg">Real-time Environmental Monitoring</div>
            <div className="p-4 bg-gray-200 rounded-lg">Modular & Upgradeable Design</div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Application;
