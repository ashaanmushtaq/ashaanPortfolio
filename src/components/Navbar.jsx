import { useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen, activeSection, setActiveSection }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }

          if (scrollPosition < 100) {
            currentSection = "home";
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, setActiveSection]);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ 
        top: element.offsetTop - 20, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => handleNavClick("home")}
            className="text-xl md:text-2xl font-bold group flex-shrink-0 cursor-pointer text-left"
          >
            <span className="text-white font-mono">Bellanix</span>
            <span className="text-cyan-400 font-mono">Tech</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 rounded-lg text-sm transition-all duration-300 ${activeSection === link.id ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30" : "text-gray-300 hover:text-white hover:bg-gray-900/50"}`}
              >
                {/* Animated Rectangular Border */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none"
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
                    strokeDashoffset={activeSection === link.id ? "0" : "512"}
                    style={{
                      transition: 'stroke-dashoffset 0.8s ease-in-out',
                      transitionDelay: `${1.5 + (index * 0.2)}s`,
                    }}
                  />
                </svg>

                {link.label}

                {/* Active Dot Animation */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="desktopActiveDot"
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 flex items-center justify-center relative z-50"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute top-2 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "top-2 -rotate-45" : "top-4"}`} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
