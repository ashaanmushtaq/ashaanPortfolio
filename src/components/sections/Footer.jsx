import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start md:items-center">
        
        {/* Left: Brand */}
        <div className="order-1">
          <h3 className="text-2xl font-bold text-blue-500 font-mono mb-2">
            Belanix.tech
          </h3>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center: Follow Me with animated icons */}
        <div className="order-3 md:order-2 flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-3 text-white">Follow Me</h4>
          <div className="flex space-x-5 text-2xl text-gray-400">
            {[
              {
                href: "https://github.com/ashaanmushtaq",
                icon: <FaGithub />,
              },
              {
                href: "https://linkedin.com/in/muhammad-ashaan",
                icon: <FaLinkedin />,
              },
              {
                href: "https://twitter.com/ashaanmushtaq",
                icon: <FaTwitter />,
              },
              {
                href: "https://instagram.com/ashaanmushtaq",
                icon: <FaInstagram />,
              },
              {
                href: "mailto:ashaanmushtaq@gmail.com",
                icon: <FaEnvelope />,
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)] duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Credit */}
        <div className="order-2 md:order-3 md:text-right">
          <p className="text-sm text-gray-400">
            Made with ❤️ by{" "}
            <span className="text-white">Muhammad Ashaan</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 text-center text-sm text-gray-500 flex flex-col items-center gap-2 border-t border-white/10">
        <a
          href="#home"
          className="flex items-center gap-1 text-blue-400 hover:text-white transition"
        >
          <FaArrowUp className="animate-bounce" /> Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
