import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Initializing AshaanPortfolio... />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      {/* Responsive Typewriter Text */}
      <div className="mb-6 text-xl sm:text-2xl md:text-4xl font-mono font-bold text-center break-words">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Responsive Progress Bar */}
      <div className="w-full max-w-[200px] h-[3px] bg-gray-800 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
