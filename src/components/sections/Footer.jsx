import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      href: "https://wa.me/923076462714",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "text-green-400",
      bgColor: "bg-green-500",
    },
    {
      href: "https://github.com/ashaanmushtaq",
      icon: <FaGithub />,
      label: "GitHub",
      color: "text-gray-200",
      bgColor: "bg-gray-700",
    },
    {
      href: "https://linkedin.com/in/muhammad-ashaan",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "text-blue-300",
      bgColor: "bg-blue-600",
    },
    {
      href: "https://facebook.com/ashaanmushtaq",
      icon: <FaFacebook />,
      label: "Facebook",
      color: "text-blue-200",
      bgColor: "bg-blue-800",
    },
    {
      href: "https://instagram.com/ashaanmushtaq",
      icon: <FaInstagram />,
      label: "Instagram",
      color: "text-pink-300",
      bgColor: "bg-pink-600",
    },
    {
      href: "https://twitter.com/ashaanmushtaq",
      icon: <FaTwitter />,
      label: "Twitter",
      color: "text-blue-400",
      bgColor: "bg-blue-500",
    },
    {
      href: "https://snapchat.com/add/ashaanmushtaq",
      icon: <FaSnapchatGhost />,
      label: "Snapchat",
      color: "text-yellow-300",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <>
      {/* Floating WhatsApp Button - Minimal & Clean */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="fixed bottom-5 right-5 z-40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Expanded Social Links - Appears on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col items-center space-y-3 mb-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className={`w-10 h-10 rounded-full ${social.bgColor} flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow duration-200`}
              >
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Main Floating Button - WhatsApp changes to cross on hover */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group relative"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => setIsHovered(!isHovered)}
        >
          <motion.div
            animate={{ rotate: isHovered ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isHovered ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaWhatsapp className="text-white text-2xl" />
            )}
          </motion.div>
          
          {/* Hover Tooltip */}
          <span className="absolute -top-8 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {isHovered ? "Close menu" : "Chat on WhatsApp"}
          </span>
        </motion.div>
      </motion.div>

      {/* Main Footer - Clean without social icons */}
      <footer className="bg-black text-white py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Single row layout */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-blue-400 mb-1">
                Muhammad Ashaan
              </h3>
              <p className="text-sm text-gray-400">
                Mobile App Developer & UI/UX Designer
              </p>
            </div>

            {/* Center: Quick Contact */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 mb-2">
                Available for freelance projects and collaborations
              </p>
              <p className="text-gray-400 font-medium">
                Kickstart your ecommerce business with a professional website – contact me today!
              </p>
            </div>

            {/* Right: Copyright */}
            <div className="text-center md:text-right">
              <div className="order-1">
                <h3 className="text-xl font-bold mb-1">
                  <span className="text-white">Bellanix</span>
                  <span className="text-blue-400">Tech</span>
                </h3>
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Made with ❤️ by Muhammad Ashaan
              </p>
            </div>
            </div>

          {/* Bottom: Back to Top */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <motion.span
                animate={{ y: [0, -5, 0] }} // arrow moves up and down
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <FaArrowUp className="text-xs" />
              </motion.span>
              Back to Top
            </a>
            <p className="text-xs text-gray-600 mt-2">
              Click the WhatsApp button for quick communication
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;