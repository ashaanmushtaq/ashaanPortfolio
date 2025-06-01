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
  FaHeart,
  FaRocket,
  FaCode,
  FaPaintBrush,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSocial, setActiveSocial] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://wa.me/923076462714",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "text-green-400",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      hoverColor: "hover:shadow-green-500/50",
    },
    {
      href: "https://github.com/ashaanmushtaq",
      icon: <FaGithub />,
      label: "GitHub",
      color: "text-gray-200",
      bgColor: "bg-gradient-to-br from-gray-800 to-black",
      hoverColor: "hover:shadow-gray-500/50",
    },
    {
      href: "https://linkedin.com/in/muhammad-ashaan",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "text-blue-300",
      bgColor: "bg-gradient-to-br from-blue-700 to-blue-900",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      href: "https://facebook.com/ashaan.65",
      icon: <FaFacebook />,
      label: "Facebook",
      color: "text-blue-200",
      bgColor: "bg-gradient-to-br from-blue-800 to-blue-900",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      href: "https://instagram.com/ashaanmushtaq",
      icon: <FaInstagram />,
      label: "Instagram",
      color: "text-pink-300",
      bgColor: "bg-gradient-to-br from-pink-600 to-purple-600",
      hoverColor: "hover:shadow-pink-500/50",
    },
    {
      href: "https://twitter.com/ashaanmushtaq",
      icon: <FaTwitter />,
      label: "Twitter",
      color: "text-blue-400",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-400/50",
    },
    {
      href: "https://snapchat.com/add/ashaan_mushtaq",
      icon: <FaSnapchatGhost />,
      label: "Snapchat",
      color: "text-yellow-300",
      bgColor: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      hoverColor: "hover:shadow-yellow-500/50",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleMainButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsHovered(true);
    }
  };

  const handleSocialIconClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
  };

  return (
    <>
      {/* Floating Social Media Menu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          if (!isMenuOpen) {
            setIsHovered(false);
            setActiveSocial(null);
          }
        }}
      >
        {/* Social Media Bubble Menu */}
        {(isHovered || isMenuOpen) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 mb-4 flex flex-col items-center space-y-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={(e) => {
              // Don't close if mouse moves to social icons
              if (!e.relatedTarget?.closest('.social-icon')) {
                if (!isMenuOpen) {
                  setIsHovered(false);
                }
              }
            }}
          >
            {/* Connecting Lines */}
            <div className="absolute h-20 w-0.5 bg-gradient-to-t from-cyan-500/50 to-transparent -bottom-20"></div>
            
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                onMouseEnter={() => setActiveSocial(index)}
                onMouseLeave={() => setActiveSocial(null)}
                className="relative group social-icon"
                onClick={handleSocialIconClick}
              >
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ 
                    opacity: activeSocial === index ? 1 : 0,
                    y: activeSocial === index ? 0 : 5
                  }}
                  className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap pointer-events-none border border-gray-700 shadow-xl z-50"
                >
                  <span className="font-semibold text-cyan-300">{social.label}</span>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45 border-r border-b border-gray-700"></div>
                </motion.div>

                {/* Social Icon */}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full ${social.bgColor} flex items-center justify-center text-white shadow-lg ${social.hoverColor} hover:shadow-xl border border-white/10 transition-all duration-300 z-40`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing when clicking social icon
                    handleSocialIconClick(e);
                  }}
                >
                  <motion.span
                    animate={{ scale: activeSocial === index ? 1.2 : 1 }}
                    className="text-xl"
                  >
                    {social.icon}
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Main Floating Action Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Outer Glow Effect */}
          <motion.div
            animate={{ 
              scale: (isHovered || isMenuOpen) ? [1, 1.2, 1] : 1,
              opacity: (isHovered || isMenuOpen) ? [0.3, 0.5, 0.3] : 0
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md"
          />

          {/* Main Button */}
          <motion.button
            onClick={handleMainButtonClick}
            className={`relative w-14 h-14 rounded-full ${(isHovered || isMenuOpen) ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-500 to-emerald-600'} flex items-center justify-center text-white shadow-2xl border border-white/20 backdrop-blur-sm transition-all duration-300 z-50`}
          >
            <motion.div
              animate={{ rotate: (isHovered || isMenuOpen) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              {(isHovered || isMenuOpen) ? (
                <FaTimes className="text-gray-300" />
              ) : (
                <FaWhatsapp className="text-white" />
              )}
            </motion.div>
            
            {/* Pulsing Dot */}
            {!(isHovered || isMenuOpen) && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"
              />
            )}
          </motion.button>

          {/* Button Tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-700 shadow-xl">
            {(isHovered || isMenuOpen) ? "Close Social Menu" : "Connect with me"}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900/90 rotate-45 border-b border-r border-gray-700"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Footer */}
      <footer className="relative bg-gradient-to-t from-black via-gray-900/95 to-black pt-16 pb-8 overflow-hidden border-t border-white/5">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Muhammad Ashaan
                  </h3>
                  <p className="text-sm text-gray-400">Crafting Digital Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming ideas into elegant digital solutions with modern technologies and creative design.
              </p>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center justify-center gap-2">
                <FaPaintBrush className="text-cyan-400" />
                My Expertise
              </h4>
              <div className="space-y-3">
                {['Mobile App Development', 'UI/UX Design', 'E-commerce Solutions', 'Frontend Development', 'Digital Transformation'].map((service, idx) => (
                  <motion.p
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 text-sm hover:text-cyan-300 transition-colors cursor-default"
                  >
                    • {service}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold">
                  <span className="text-white">Bellanix</span>
                  <span className="text-cyan-400">Tech</span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your partner in digital innovation and growth
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ashaanmushtaq@gmail.com?subject=Project Inquiry&body=Hello Ashaan, I would like to discuss a project with you."
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              >
                <FaEnvelope />
                Start a Project
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black flex items-center justify-center border border-gray-800">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} BellanixTech. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Made with <FaHeart className="text-red-500 animate-pulse" /> by Muhammad Ashaan
              </p>
            </motion.div>

            {/* Quick Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-400 text-sm max-w-md">
                Ready to elevate your digital presence? Let's build something amazing together!
              </p>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center md:text-right"
            >
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition-colors text-sm"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors"
                >
                  <FaArrowUp className="text-xs" />
                </motion.div>
                <span>Back to Top</span>
              </button>
            </motion.div>
          </div>

          {/* Final Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-6 border-t border-white/5"
          >
            <p className="text-gray-600 text-xs">
              <span className="text-cyan-400">Pro Tip:</span> Click the floating button to connect instantly
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;