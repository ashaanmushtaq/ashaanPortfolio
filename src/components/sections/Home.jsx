import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "/home/user/ashaanportfolio/src/assets/profilePic.jpeg";

export const Home = () => {
  const headingRef = useRef(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);  // ⭐ Added
  const fullText = "Hi, I'm Muhammad Ashaan";
  const [text, setText] = useState("");

  // Reset animations when section comes into view
  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {

          // ⭐ Pehli baar 5 sec delay, baad me 0 delay
          const delayTime = isFirstVisit ? 4000 : 0;

          // Reset states for fresh animation
          setText("");
          setIsProfileVisible(false);
          setAreButtonsVisible(false);

          // Start typing animation with delay
          setTimeout(() => {
            typeWriter();
          }, delayTime);

          // Start profile circle animation
          setTimeout(() => {
            setIsProfileVisible(true);
          }, delayTime + 500);

          // Start buttons animation after profile
          setTimeout(() => {
            setAreButtonsVisible(true);
          }, delayTime + 1500);

          setHasAnimated(true);
          setIsFirstVisit(false);   // ⭐ Next time NO delay

        } else if (!entry.isIntersecting) {
          setHasAnimated(false);
          setIsProfileVisible(false);   // ⭐ Required for redraw
          setAreButtonsVisible(false);  // ⭐ Required for redraw
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(homeSection);

    return () => {
      observer.unobserve(homeSection);
    };
  }, [hasAnimated, isFirstVisit]);

  // Typing effect
  const typeWriter = (i = 0) => {
    if (i <= fullText.length) {
      setText(fullText.slice(0, i));
      setTimeout(() => typeWriter(i + 1), 100);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden 
           bg-black
           pt-24 sm:pt-28 md:pt-32 lg:pt-36"
    >
      {/* Subtle Particle Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          {/* Profile Picture Container with Drawing Animation - Increased Size */}
          <div className="relative group w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 mb-10">
            {/* Circle Outline Drawing Animation - FIXED */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="314"
                strokeDashoffset={isProfileVisible ? "0" : "314"}
                style={{
                  transition: 'stroke-dashoffset 1.5s ease-in-out',
                  transitionDelay: '0.5s'
                }}
              />
            </svg>

            {/* Ultra Rays Effect - Behind the image on hover */}
            <div className="absolute inset-0 -z-10 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-blue-400/80 via-cyan-300/90 to-purple-400/80"
                  style={{
                    width: "2px",
                    height: "85%",
                    top: "7.5%",
                    left: "50%",
                    transformOrigin: "center bottom",
                    transform: `rotate(${i * 10}deg)`,
                    opacity: 0,
                    filter: 'blur(1px) drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))',
                    animation: `ultraRayExpand 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                    animationDelay: `${i * 0.02}s`,
                  }}
                ></div>
              ))}
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 via-cyan-400/50 to-purple-500/40 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-1000 animate-pulse-slow"></div>
              
              <div className="absolute inset-8 rounded-full border-2 border-cyan-300/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Profile Picture */}
            <motion.div
              className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-blue-500 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isProfileVisible ? 1 : 0,
                scale: isProfileVisible ? 1 : 0.8 
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 1.5 },
                scale: { duration: 0.5, delay: 1.5 }
              }}
              whileHover={{ 
                scale: 1.15,
                rotate: 2,
                transition: { 
                  scale: { duration: 0.3, type: "spring", stiffness: 300 },
                  rotate: { duration: 0.5 }
                }
              }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover rounded-full group-hover:brightness-110 transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </div>

          {/* Headline */}
          <motion.h1
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-gray-100 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {text}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I craft visually compelling, intuitive, and high-performing digital experiences that delight users and drive business results.
          </motion.p>

          {/* Buttons with Enhanced Animation */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10">
            {[
              { text: "View Projects", href: "#projects" },
              { text: "Contact Me", href: "#contact" },
            ].map((btn, index) => (
              <div key={index} className="relative group">
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="196"
                    height="56"
                    rx="10"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="512"
                    strokeDashoffset={areButtonsVisible ? "0" : "512"}
                    style={{
                      transition: 'stroke-dashoffset 0.8s ease-in-out',
                      transitionDelay: `${1.5 + (index * 0.2)}s`,
                    }}
                  />
                </svg>

                <div className="absolute inset-0 -z-20 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-gradient-to-r from-blue-400/70 via-cyan-300/80 to-purple-400/70"
                      style={{
                        width: "1.5px",
                        height: "140%",
                        top: "-20%",
                        left: "50%",
                        transformOrigin: "center center",
                        transform: `rotate(${i * 22.5}deg)`,
                        opacity: 0,
                        filter: 'blur(0.8px) drop-shadow(0 0 4px rgba(59, 130, 246, 0.7))',
                        animation: `ultraRayExpand 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                        animationDelay: `${i * 0.03}s`,
                      }}
                    ></div>
                  ))}
                  
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/30 via-cyan-400/40 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-1000"></div>
                </div>

                <motion.a
                  href={btn.href}
                  className="relative group w-full sm:w-auto text-white py-4 px-10 rounded-xl font-medium overflow-hidden block z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: areButtonsVisible ? 1 : 0,
                    y: areButtonsVisible ? 0 : 20
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 2 + (index * 0.2) },
                    y: { duration: 0.5, delay: 2 + (index * 0.2) }
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -5,
                    transition: { 
                      scale: { duration: 0.2 },
                      y: { duration: 0.2 }
                    }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black rounded-xl border border-blue-500/60 group-hover:border-cyan-400/80 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: areButtonsVisible ? 1 : 0 
                    }}
                    transition={{ 
                      opacity: { duration: 0.3, delay: 2.3 + (index * 0.2) }
                    }}
                  />

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-purple-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  <span 
                    className="relative z-10 font-bold text-base sm:text-lg text-white group-hover:text-cyan-200 transition-colors duration-300 flex items-center justify-center gap-2"
                    style={{
                      opacity: areButtonsVisible ? 1 : 0,
                      transition: 'opacity 0.3s',
                      transitionDelay: `${2.3 + (index * 0.2)}s`,
                    }}
                  >
                    {btn.text}
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.6; }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }

          @keyframes rayExpand {
            0% { 
              transform: rotate(var(--rotation)) scaleY(0); 
              opacity: 0; 
            }
            50% { 
              opacity: 0.6; 
            }
            100% { 
              transform: rotate(var(--rotation)) scaleY(1); 
              opacity: 0.4; 
            }
          }

          @keyframes ultraRayExpand {
            0% { 
              transform: rotate(var(--rotation)) scaleY(0) scaleX(0.5); 
              opacity: 0; 
            }
            30% { 
              opacity: 0.9; 
              transform: rotate(var(--rotation)) scaleY(0.7) scaleX(1.2);
            }
            100% { 
              transform: rotate(var(--rotation)) scaleY(1) scaleX(1); 
              opacity: 0.7; 
            }
          }

          @keyframes ultraPulse {
            0%, 100% { 
              opacity: 0.3; 
              transform: scale(0.95);
            }
            50% { 
              opacity: 0.7; 
              transform: scale(1.05);
            }
          }

          .animate-ultraPulse {
            animation: ultraPulse 2s ease-in-out infinite;
          }

          .group:hover div:nth-child(1) { --rotation: 0deg; }
          .group:hover div:nth-child(2) { --rotation: 10deg; }
          .group:hover div:nth-child(3) { --rotation: 20deg; }
          .group:hover div:nth-child(4) { --rotation: 30deg; }
          .group:hover div:nth-child(5) { --rotation: 40deg; }
          .group:hover div:nth-child(6) { --rotation: 50deg; }
          .group:hover div:nth-child(7) { --rotation: 60deg; }
          .group:hover div:nth-child(8) { --rotation: 70deg; }
          .group:hover div:nth-child(9) { --rotation: 80deg; }
          .group:hover div:nth-child(10) { --rotation: 90deg; }
          .group:hover div:nth-child(11) { --rotation: 100deg; }
          .group:hover div:nth-child(12) { --rotation: 110deg; }
          .group:hover div:nth-child(13) { --rotation: 120deg; }
          .group:hover div:nth-child(14) { --rotation: 130deg; }
          .group:hover div:nth-child(15) { --rotation: 140deg; }
          .group:hover div:nth-child(16) { --rotation: 150deg; }
          .group:hover div:nth-child(17) { --rotation: 160deg; }
          .group:hover div:nth-child(18) { --rotation: 170deg; }
          .group:hover div:nth-child(19) { --rotation: 180deg; }
          .group:hover div:nth-child(20) { --rotation: 190deg; }
          .group:hover div:nth-child(21) { --rotation: 200deg; }
          .group:hover div:nth-child(22) { --rotation: 210deg; }
          .group:hover div:nth-child(23) { --rotation: 220deg; }
          .group:hover div:nth-child(24) { --rotation: 230deg; }
          .group:hover div:nth-child(25) { --rotation: 240deg; }
          .group:hover div:nth-child(26) { --rotation: 250deg; }
          .group:hover div:nth-child(27) { --rotation: 260deg; }
          .group:hover div:nth-child(28) { --rotation: 270deg; }
          .group:hover div:nth-child(29) { --rotation: 280deg; }
          .group:hover div:nth-child(30) { --rotation: 290deg; }
          .group:hover div:nth-child(31) { --rotation: 300deg; }
          .group:hover div:nth-child(32) { --rotation: 310deg; }
          .group:hover div:nth-child(33) { --rotation: 320deg; }
          .group:hover div:nth-child(34) { --rotation: 330deg; }
          .group:hover div:nth-child(35) { --rotation: 340deg; }
          .group:hover div:nth-child(36) { --rotation: 350deg; }
        `}
      </style>
    </section>
  );
};
