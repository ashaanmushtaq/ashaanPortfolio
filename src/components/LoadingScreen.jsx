import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "<Initializing Ashaan Portfolio... />";

  useEffect(() => {
    let index = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(textInterval);
      }
    }, 100);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && text === fullText) {
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  }, [progress, text, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Logo/Brand */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          <span className="text-white">Bellanix</span>
          <span className="text-cyan-400">Tech</span>
        </h1>
        <p className="text-gray-400 text-sm mt-2 font-mono">Designing the future of work.</p>
      </div>

      {/* Typewriter Text */}
      <div className="mb-8 text-lg sm:text-xl md:text-2xl font-mono font-medium text-center">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Modern Progress Bar */}
      <div className="w-full max-w-md mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Loading System...</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2.5 bg-gray-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-full transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-sm"></div>
            
            {/* Moving highlight */}
            <div className="absolute top-0 left-0 h-full w-8 bg-white/40 animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Loading Dots Animation */}
      <div className="flex space-x-2 mt-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>

      {/* Status Messages */}
      <div className="mt-6 text-gray-500 text-sm font-mono text-center">
        {progress < 30 && "Initializing modules..."}
        {progress >= 30 && progress < 60 && "Loading components..."}
        {progress >= 60 && progress < 90 && "Compiling assets..."}
        {progress >= 90 && progress < 100 && "Finalizing setup..."}
        {progress === 100 && "Ready!"}
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 text-gray-600 text-xs text-center">
        <p>© {new Date().getFullYear()} BellanixTech. All rights reserved.</p>
      </div>
    </div>
  );
};