import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
const supplies = [
  {
    name: "Arduino Uno",
    description: "The Arduino Uno is a microcontroller board based on the ATmega328P chip. It operates at a clock speed of 16 MHz and includes 32 KB of Flash memory. The board features 14 digital I/O pins and 6 analog input pins. It is widely used in robotics, IoT projects, and educational settings due to its ease of use and versatility."
  },
  {
    name: "Ultrasonic Sensor(HC-04)",
    description: "An ultrasonic sensor is an electronic device that measures distance by emitting ultrasonic sound waves and converting the reflected sound into electrical signals. It operates by sending high-frequency sound waves that bounce back from objects, allowing it to calculate distances accurately. Ultrasonic sensors are widely used in applications such as obstacle detection, liquid level monitoring, and automotive safety systems. They offer advantages like independence from light conditions and resistance to environmental interference, making them versatile in various settings."
  },
  {
    name: "Temperature Sensor(DH-12)",
    description: "The DHT12 is a compact temperature and humidity sensor with a temperature range of -20 to +60°C and humidity range of 20-95% RH. It offers high precision with a temperature resolution of 0.1°C and humidity resolution of 0.1% RH. The sensor operates at low power consumption and supports both I2C and single bus communication. It is suitable for applications requiring precise environmental monitoring."
  },
  {
    name: "Servo Motor",
    description: "A servo motor is used for precise angular movement, commonly in robotics and automation. It operates using PWM signals to control its position, typically rotating between 0 to 180 degrees. Servo motors are known for their high torque and low speed, making them ideal for applications requiring precise control. They are widely used in robotics, drones, and other mechanical systems."
  },
  {
    name: "Arduino Motor Driver Shield",
    description: "The Arduino Motor Driver Shield is designed to control DC motors, stepper motors, and servo motors. It features dual H-bridge circuits for bidirectional motor control and supports PWM for speed adjustment. The shield can handle a wide voltage range and includes protection diodes against back EMF. It is a versatile tool for robotics and mechatronics projects."
  },
  {
    name: "Gas Sensor (MQ-6)",
    description: "The MQ-6 gas sensor detects LPG, propane, and other combustible gases with high sensitivity. It operates at a simple drive circuit with analog and TTL output signals. The sensor is suitable for home gas leakage detection and offers long life and reliability. It provides fast response and recovery characteristics, making it ideal for safety applications."
  },
  {
    name: "Jumper Wires",
    description: "Jumper wires are used for connecting components in electronic circuits. They provide a flexible and easy way to establish temporary or permanent connections. Jumper wires are essential for prototyping and testing electronic projects. They come in various colors to help identify different connections."
  },
  {
    name: "18650 Lithium-ion Cells (x2)",
    description: "18650 lithium-ion cells are used to power electronic devices, offering a reliable and efficient energy source. They provide a high capacity and long lifespan, making them suitable for portable devices. These cells are commonly used in robotics, drones, and other battery-powered systems. They require proper charging and handling to ensure safety and longevity."
  },
  {
    name: "LEDs",
    description: "LEDs are used to indicate system status, warnings, or feedback in electronic devices. They are energy-efficient and come in various colors to convey different information. LEDs are widely used in robotics, automation, and consumer electronics. They provide a simple yet effective way to communicate with users."
  },
  {
    name: "Gear Motors (x4)",
    description: "Gear motors provide movement and torque to wheels in robotic systems. They consist of a motor and gearbox, which reduces speed while increasing torque. Gear motors are essential for robots that require significant mechanical power. They are designed to handle heavy loads and provide stable movement."
  },
  {
    name: "Wheels (x4)",
    description: "Wheels are attached to gear motors to enable movement in robotic systems. They provide traction and stability, allowing robots to navigate various surfaces. Wheels come in different sizes and materials, suited for specific applications. They are crucial for robots that need to move efficiently and reliably."
  },
];


const SuppliesDesc = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center p-6 ">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">Supplies Used</h2>
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
      {supplies.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex items-center w-full text-left focus:outline-none"
            onClick={() => toggleDescription(index)}
          >
            <span className="text-blue-500 text-lg font-semibold mr-2">
              {openIndex === index ? "❌" : "🔽"}
            </span>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-gray-600 text-sm mt-2 bg-gray-200 p-2 rounded-md overflow-hidden"
              >
                {item.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SuppliesDesc;
