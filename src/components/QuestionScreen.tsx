import * as React from "react";
import { motion } from 'framer-motion';
import { Question, QuestionOption } from '../types';

interface QuestionScreenProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer
}) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const getOptionEmoji = (option: string) => {
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
      'middle-eastern': '🕌',
      vegetarian: '🥦',
      vegan: '🌱',
      'gluten-free': '🌾❌',
      'lactose-intolerant': '🥛❌',
      pescatarian: '🐟'
    };
    return emojiMap[option] || '🍽️';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-6"
    >
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 mx-auto max-w-md"
          transition={{ duration: 0.5 }}
        />
        
        <div className="text-center mb-4">
          <span className="text-blue-200 text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-white mb-8 text-center leading-relaxed"
          >
            {question.text}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((optionObj: QuestionOption, index: number) => (
              <motion.button
                key={optionObj.value}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAnswer(optionObj.value)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 min-h-[64px]"
              >
                <span className="text-2xl">{getOptionEmoji(optionObj.value)}</span>
                <span>{optionObj.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuestionScreen;
