import { motion } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen, activeSection, setActiveSection }) => {
  
  const handleMobileClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      // Add a small delay for smoother transition
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 20,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{
        opacity: menuOpen ? 1 : 0,
        y: menuOpen ? "0%" : "100%",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl z-40 flex flex-col items-center justify-center"
      style={{ 
        display: menuOpen ? "flex" : "none",
        pointerEvents: menuOpen ? "auto" : "none"
      }}
    >
      {/* Close Button with Animation */}
      <motion.button
        onClick={() => setMenuOpen(false)}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: menuOpen ? 1 : 0, rotate: menuOpen ? 0 : -90 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="absolute top-8 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-900/80 transition-all duration-300 group z-50"
        aria-label="Close menu"
      >
        <svg 
          className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute -top-8 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Close Menu
        </span>
      </motion.button>

      {/* Menu Links with Enhanced Styling */}
      <div className="flex flex-col items-center justify-center space-y-6 px-8">
        {links.map((link, i) => (
          <motion.button
            key={i}
            onClick={() => handleMobileClick(link.id)}
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              x: menuOpen ? 0 : -30,
            }}
            transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-full max-w-xs px-8 py-4 rounded-xl text-2xl font-semibold transition-all duration-300 ${
              activeSection === link.id
                ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border border-blue-500/50 shadow-lg shadow-blue-500/20'
                : 'bg-gray-900/50 text-gray-300 hover:text-white hover:bg-gray-800/70 hover:border hover:border-gray-700'
            }`}
          >
            {/* Active Indicator Dot */}
            {activeSection === link.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            )}
            
            {/* Removed icon and kept only the label */}
            <span>{link.label}</span>
            
            {/* Hover Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-6 top-1/2 transform -translate-y-1/2"
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 0.5 : 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute bottom-8 text-center text-gray-500 text-sm"
      >
        <p>BellanixTech</p>
        <p className="text-xs mt-1">© {new Date().getFullYear()} All rights reserved</p>
      </motion.div>
    </motion.div>
  );
};