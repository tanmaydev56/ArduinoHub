import { useState } from "react";
import { Download, ZoomIn, ZoomOut, Maximize, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Circuitdiagram() {
  const [scale, setScale] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 1));
  const openImage = () => setIsOpen(true);
  const closeImage = () => setIsOpen(false);

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h2 className="text-blue-600 text-xl font-bold mb-4">Circuit Diagram</h2>
      <div className="relative border rounded-lg overflow-hidden p-2 bg-gray-100">
        <motion.img
          src="/Ckt.jpg"
          alt="Circuit Diagram"
          className="w-full cursor-pointer"
          style={{ transform: `scale(${scale})` }}
          initial={{ scale: 1 }}
          animate={{ scale }}
          transition={{ duration: 0.3 }}
          onClick={openImage}
        />
        <button
          onClick={openImage}
          className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
        >
          <Maximize size={20} />
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={zoomIn}
          className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2"
        >
          <ZoomIn size={18} /> Zoom In
        </button>
        <button
          onClick={zoomOut}
          className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2"
        >
          <ZoomOut size={18} /> Zoom Out
        </button>
        <a
          href="/Ckt.jpg"
          download="Circuit_Diagram.jpg"
          className="bg-green-600 text-white px-3 py-2 rounded flex items-center gap-2"
        >
          <Download size={18} /> Download
        </a>
      </div>

      {/* Full-Screen Image Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src="/Ckt.jpg"
              alt="Circuit Diagram"
              className="max-w-full max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              onClick={closeImage}
              className="absolute top-5 right-5 bg-red-600 text-white p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
