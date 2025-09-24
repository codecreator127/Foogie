import * as React from "react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { BookOpen, Save, ArrowLeft, Sparkles } from 'lucide-react';

interface LearningScreenProps {
  userAnswers: string[];
  onSaveFood: (foodName: string) => void;
  onBack: () => void;
}

const LearningScreen: React.FC<LearningScreenProps> = ({ 
  userAnswers, 
  onSaveFood, 
  onBack 
}) => {
  const [foodName, setFoodName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!foodName.trim()) return;

    setIsSubmitting(true);
    
    // Simulate saving delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onSaveFood(foodName.trim());
    setShowSuccess(true);
    
    // Auto redirect after success
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const getAttributeEmoji = (attr: string) => {
    const emojiMap: { [key: string]: string } = {
      breakfast: '🌅',
      brunch: '🥂',
      lunch: '☀️',
      dinner: '🌙',
      dessert: '🍰',
      savory: '🧄',
      sweet: '🍯',
      spicy: '🌶️',
      sour: '🍋',
      umami: '🍄',
      bitter: '☕',
      american: '🍔',
      italian: '🍝',
      mexican: '🌮',
      chinese: '🥢',
      japanese: '🍣',
      indian: '🍛',
      thai: '🌶️',
      french: '🥖',
      mediterranean: '🫒',
      korean: '🥢',
      vietnamese: '🍜',
      'middle-eastern': '🕌'
    };
    return emojiMap[attr] || '🍽️';
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-6 relative overflow-hidden"
      >
        {/* Success sparkles */}
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

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="text-8xl mb-6">🧞‍♂️</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Thank you for teaching me!
          </h1>
          <p className="text-xl text-blue-200">
            I've learned about "{foodName}" and will remember it for next time!
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-6"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-blue-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg"
            >
              <BookOpen size={32} className="text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Help me learn! 🧞‍♂️
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-blue-200 text-lg"
            >
              What food were you actually craving?
            </motion.p>
          </div>

          {/* Show user's choices */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-6"
          >
            <p className="text-white/80 text-sm mb-3 text-center">
              Based on your choices:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {userAnswers.map((answer, index) => (
                <span
                  key={index}
                  className="bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium capitalize inline-flex items-center gap-2"
                >
                  <span>{getAttributeEmoji(answer)}</span>
                  {answer}
                </span>
              ))}
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                placeholder="e.g., Chicken Tikka Masala, Pho, Chocolate Croissant..."
                className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                disabled={isSubmitting}
                autoFocus
              />
            </motion.div>

            <div className="flex gap-4">
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                type="button"
                onClick={onBack}
                disabled={isSubmitting}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <ArrowLeft size={20} />
                Back
              </motion.button>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                type="submit"
                disabled={!foodName.trim() || isSubmitting}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-6 py-4 rounded-xl font-bold text-lg shadow-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Save size={20} />
                    </motion.div>
                    Teaching...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Teach Foogie
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LearningScreen;