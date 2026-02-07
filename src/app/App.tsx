import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<'initial' | 'areYouSure' | 'celebration'>('initial');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setShowConfetti(true);
    setScreen('celebration');
  };

  const handleNo = () => {
    setScreen('areYouSure');
  };

  const handleFinalNo = () => {
    // Redirect to Yes anyway!
    setShowConfetti(true);
    setScreen('celebration');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-red-50">
      {/* Floating rose petals background */}
      <FloatingPetals />

      {/* Decorative hearts */}
      <DecorativeHearts />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AnimatePresence mode="wait">
          {screen === 'initial' && (
            <InitialScreen key="initial" onYes={handleYes} onNo={handleNo} />
          )}
          {screen === 'areYouSure' && (
            <AreYouSureScreen key="areYouSure" onYes={handleYes} onNo={handleFinalNo} />
          )}
          {screen === 'celebration' && (
            <CelebrationScreen key="celebration" />
          )}
        </AnimatePresence>
      </div>

      {/* Confetti animation */}
      {showConfetti && <HeartConfetti />}
    </div>
  );
}

function InitialScreen({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-lg"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200">
        {/* Decorative bow */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-6xl text-center mb-6"
        >
          🎀
        </motion.div>

        {/* Title */}
        <motion.h1
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-5xl md:text-6xl text-center text-rose-600 mb-4"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Will You Be My Valentine?
        </motion.h1>

        {/* Subtitle */}
        <p className="text-center text-pink-700 text-lg md:text-xl mb-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          I've been meaning to ask… 💕
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(244, 63, 94, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Yes 💗
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(156, 163, 175, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onNo}
            className="px-8 py-4 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            No 🙃
          </motion.button>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-8 text-3xl">
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>💖</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>🌸</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>💕</motion.span>
        </div>
      </div>
    </motion.div>
  );
}

function AreYouSureScreen({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-lg"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-red-300">
        {/* Pleading emoji */}
        <motion.div
          animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-7xl text-center mb-6"
        >
          🥺
        </motion.div>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl text-center text-rose-600 mb-4"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Are you sure?
        </h2>

        {/* Pleading text */}
        <p className="text-center text-pink-700 text-lg md:text-xl mb-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Please reconsider... 💔
          <br />
          <span className="text-base">I promise it'll be worth it! 🌹✨</span>
        </p>

        {/* Pulsing hearts */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
            >
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 10px 40px rgba(244, 63, 94, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            onClick={onYes}
            className="px-10 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Yes! 💗💗💗
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 0.95, opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            onClick={onNo}
            className="px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto opacity-60"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Still no... 😢
          </motion.button>
        </div>

        {/* More decorative elements */}
        <div className="flex justify-center gap-3 mt-8 text-2xl">
          <span>💝</span>
          <span>💘</span>
          <span>💗</span>
          <span>💓</span>
          <span>💞</span>
        </div>
      </div>
    </motion.div>
  );
}

function CelebrationScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-2xl"
    >
      <div className="bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-rose-400">
        {/* Celebration emojis */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-8xl text-center mb-6"
        >
          💕
        </motion.div>

        {/* Success message */}
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-5xl md:text-7xl text-center text-rose-700 mb-6"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Yay!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-rose-800 text-2xl md:text-3xl mb-8"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          Happy Valentine's Day! 💖
        </motion.p>

        {/* Sparkle effects */}
        <div className="flex justify-center gap-4 mb-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: 360,
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1, repeat: Infinity, delay: i * 0.2 }
              }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* More celebration emojis */}
        <div className="text-center text-4xl space-x-2">
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }}>🌹</motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.1 }}>💐</motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>🌺</motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}>🌸</motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>🌷</motion.span>
        </div>

        {/* Sweet message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-rose-700 text-lg mt-8"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          I knew you'd say yes! ✨💘
        </motion.p>
      </div>
    </motion.div>
  );
}

function FloatingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: -50,
            rotate: Math.random() * 360
          }}
          animate={{
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
            rotate: 360 + Math.random() * 360
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear'
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}

function DecorativeHearts() {
  const positions = [
    { top: '10%', left: '5%' },
    { top: '20%', right: '8%' },
    { bottom: '15%', left: '10%' },
    { bottom: '25%', right: '5%' },
    { top: '50%', left: '3%' },
    { top: '60%', right: '6%' },
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-20"
          style={pos}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        >
          💖
        </motion.div>
      ))}
    </>
  );
}

function HeartConfetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => {
        const emojis = ['💕', '💖', '💗', '💓', '💝', '💘', '🌹', '✨', '🎀', '💐'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        return (
          <motion.div
            key={i}
            className="absolute text-3xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -50,
              rotate: Math.random() * 360,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{
              y: window.innerHeight + 50,
              x: Math.random() * window.innerWidth,
              rotate: 360 + Math.random() * 720
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              ease: 'linear'
            }}
          >
            {randomEmoji}
          </motion.div>
        );
      })}
    </div>
  );
}
