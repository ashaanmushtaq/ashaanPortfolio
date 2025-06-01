import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  useEffect(() => {
    const heading = document.querySelector(".animate-typewriter");

    const resetTypewriterAnimation = () => {
      heading.classList.remove("animate-typewriter");
      void heading.offsetWidth; // Force reflow
      heading.classList.add("animate-typewriter");
    };

    const handleScroll = () => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        resetTypewriterAnimation();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-10"
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Responsive Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight animate-typewriter">
            Hi, I'm Muhammad Ashaan
          </h1>

          {/* Responsive Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto px-2">
            I'm a UI/UX designer passionate about creating simple, beautiful, and user-friendly designs. 
            I focus on making sure users have a smooth and enjoyable experience. I'm also excited to explore 
            mobile app development to bring my designs to life and reach more users.
          </p>

          {/* Responsive Button Group */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded font-medium transition 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
