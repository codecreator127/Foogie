import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import LearningScreen from './components/LearningScreen';
import { AppState, Food } from './types';
import { foods } from './data/foods';
import { questions } from './data/questions';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [availableFoods, setAvailableFoods] = useState<Food[]>(foods);
  const [learnedFoods, setLearnedFoods] = useState<Food[]>([]);

  const handleStart = () => {
    setCurrentState('questions');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    // Include learned foods in the available foods
    setAvailableFoods([...foods, ...learnedFoods]);
  };

const handleAnswer = (answer: string) => {
  const newAnswers = [...userAnswers, answer];
  setUserAnswers(newAnswers);

  let nextQuestion = questions[currentQuestionIndex + 1];

  // Dynamic filtering: remove 'umami' flavor if dessert was chosen
  if (answer === "dessert" && nextQuestion?.id === "flavor") {
    nextQuestion = {
      ...nextQuestion,
      options: nextQuestion.options.filter(opt => opt.value !== "umami")
    };
  }

  // Move to next question or show results
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else {
    setCurrentState('result');
  }

  // Filter foods

  var filteredFoods = availableFoods;

  if (answer != "none") {
  
  filteredFoods = availableFoods.filter(food => 
    food.attributes.includes(answer)
  );
  }

  setAvailableFoods(filteredFoods);
};


  const handleRestart = () => {
    setCurrentState('welcome');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setAvailableFoods([...foods, ...learnedFoods]);
  };

  const handleTeachMe = () => {
    setCurrentState('learning');
  };

  const handleSaveFood = (foodName: string) => {
    // Create new food with user's answers as attributes
    const newFood: Food = {
      name: foodName,
      attributes: userAnswers
    };
    
    // Add to learned foods (in a real app, this would be saved to a database)
    setLearnedFoods(prev => [...prev, newFood]);
    
    // Store in localStorage for persistence
    const updatedLearnedFoods = [...learnedFoods, newFood];
    localStorage.setItem('foogie-learned-foods', JSON.stringify(updatedLearnedFoods));
  };

  const handleBackFromLearning = () => {
    setCurrentState('welcome');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setAvailableFoods([...foods, ...learnedFoods]);
  };

  // Load learned foods from localStorage on component mount
  React.useEffect(() => {
    const savedFoods = localStorage.getItem('foogie-learned-foods');
    if (savedFoods) {
      try {
        const parsed = JSON.parse(savedFoods);
        setLearnedFoods(parsed);
      } catch (error) {
        console.error('Error loading learned foods:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentState === 'welcome' && (
          <motion.div key="welcome">
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}

        {currentState === 'questions' && (
          <motion.div key="questions">
            <QuestionScreen
              question={questions[currentQuestionIndex]}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          </motion.div>
        )}

        {currentState === 'result' && (
          <motion.div key="result">
            <ResultScreen
              matchedFoods={availableFoods}
              onRestart={handleRestart}
              onTeachMe={handleTeachMe}
            />
          </motion.div>
        )}

        {currentState === 'learning' && (
          <motion.div key="learning">
            <LearningScreen
              userAnswers={userAnswers}
              onSaveFood={handleSaveFood}
              onBack={handleBackFromLearning}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;