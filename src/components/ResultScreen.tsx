import * as React from "react";
import { motion } from 'framer-motion';
import { RefreshCw, Sparkles, BookOpen } from 'lucide-react';
import { Food } from '../types';

interface ResultScreenProps {
  matchedFoods: Food[];
  onRestart: () => void;
  onTeachMe: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ matchedFoods, onRestart, onTeachMe }) => {
  const hasMatch = matchedFoods.length > 0;
  const isExactMatch = matchedFoods.length === 1;

  const getFoodEmoji = (name: string) => {
    const emojiRegex = /[\u{1F300}-\u{1FAFF}]/gu;
    const match = name.match(emojiRegex);
    return match ? match[0] : '🍽️';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Success sparkles */}
      {hasMatch && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-300"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
                rotate: 0
              }}
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                y: [0, -50, -100]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            >
              <Sparkles size={20} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-3xl w-full text-center">
        {hasMatch ? (
          <>
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl font-bold text-white mb-8"
            >
              {isExactMatch ? "I think you want..." : "Here are your options..."}
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {matchedFoods.map((food, index) => (
                <motion.div
                  key={food.name}
                  initial={{ y: 50, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.3 + index * 0.15, 
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3
                  }}
                  className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{getFoodEmoji(food.name)}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {food.name.replace(/[\u{1F300}-\u{1FAFF}]/gu, '').trim()}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {food.attributes.map((attr) => (
                      <span
                        key={attr}
                        className="bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium capitalize"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-8xl mb-6"
            >
              🤔
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold text-white mb-6"
            >
              I'm not sure about that one!
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-blue-200 mb-12"
            >
              Let me learn from you! What were you actually craving?
            </motion.p>
          </>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {hasMatch && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onTeachMe}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:from-blue-400 hover:to-purple-500 transition-all duration-300 inline-flex items-center gap-3"
            >
              <BookOpen size={20} />
              That's not it!
            </motion.button>
          )}
          
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: hasMatch ? 0.9 : 0.8, duration: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={hasMatch ? onRestart : onTeachMe}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-flex items-center gap-3"
          >
            {hasMatch ? (
              <>
                <RefreshCw size={20} />
                Try Again
              </>
            ) : (
              <>
                <BookOpen size={20} />
                Teach Me!
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultScreen;
