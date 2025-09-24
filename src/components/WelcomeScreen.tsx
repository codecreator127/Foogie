import * as React from "react";
import { motion } from 'framer-motion';
import { Sparkles, ChefHat } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={16} />
          </motion.div>
        ))}
      </div>

      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="bg-yellow-400 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-2xl">
            <ChefHat size={48} className="text-purple-900" />
          </div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Foogie
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl text-blue-200 mb-12 font-medium"
          >
            Tell me your cravings, I'll find your dish!
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
        >
          Start the Magic ✨
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;