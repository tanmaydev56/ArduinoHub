import React from "react";

const materials = [
  { name: "Arduino Uno", image: "Arduino.webp" },
  { name: "Ultrasonic Sensor", image: "/Ultrasonic.webp" },
  { name: "Temperature Sensor", image: "/Temp.webp" },
  { name: "Servo Motor", image: "/Servo.webp" },
  { name: "Motor Driver Shield", image: "/Shield.webp" },
  { name: "Gas Sensor (MQ-6)", image: "/MQ.webp" },
  { name: "Jumper Wires", image: "/Jumpers.webp" },
  { name: "Lithium-ion Cells", image: "/Batt.webp" },
  { name: "LEDs", image: "/Led.webp" },
  { name: "Gear Motors", image: "/gear-motor.webp" },
  { name: "Wheels", image: "/wheels.webp" },
];

const MaterialsPhotos = () => {
  return (
    <div className="w-full p-6 bg-gray-100 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Materials & Components</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {materials.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-md"
            />
            <p className="text-gray-800 font-semibold mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialsPhotos;
