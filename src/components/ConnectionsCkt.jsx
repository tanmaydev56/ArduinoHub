import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const connections = [
  {
    title: "Servo Motor Connections",
    details: ["Signal Pin: Digital Pin 10", "Power: 5V", "Ground: GND"],
  },
  {
    title: "Ultrasonic Sensor Connections",
    details: ["Trigger Pin: A5", "Echo Pin: A4", "Power: 5V", "Ground: GND"],
  },
  {
    title: "Temperature Sensor Connections",
    details: ["Analog Output: A2", "Power: 5V", "Ground: GND"],
  },
  {
    title: "Gas Sensor Connections",
    details: ["Analog Output: A1", "Power: 5V", "Ground: GND"],
  },
  {
    title: "Motor Shield (L293D) Connections",
    details: [
      "Motor 1: M1 Terminal",
      "Motor 2: M2 Terminal",
      "Motor 3: M3 Terminal",
      "Motor 4: M4 Terminal",
      "Power: External Power Source (e.g., Battery Pack)",
      "Ground: Common GND",
    ],
  },
  {
    title: "LED Warning System",
    details: ["LED Pin: Digital Pin 9", "Power: 5V", "Ground: GND"],
  },
];

export default function ConnectionsList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-blue-600  text-xl font-bold mb-4">
        Robot Component Connections
      </h2>
      <div className="space-y-3">
        {connections.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 bg-gray-100 shadow-md"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleDropdown(index)}
            >
              <span className="font-semibold">{item.title}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-2 space-y-1 overflow-hidden"
                >
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      - {detail}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
