import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhone, FaCheck, FaExclamationCircle, FaWhatsapp, FaClock } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header with improved animation */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block relative"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl rounded-full"
            />
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Get In Touch
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full mb-6 relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Form with glass effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-blue-900/30 transition-all duration-300"
          >
            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <FaCheck className="text-green-400" />
                  </motion.div>
                  <div>
                    <p className="text-green-300 font-medium">Message sent successfully!</p>
                    <p className="text-green-400/80 text-sm">I'll get back to you soon.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <FaExclamationCircle className="text-red-400 text-xl" />
                  <p className="text-red-300 font-medium">Failed to send message. Try again.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <motion.div whileHover={{ scale: 1.005 }}>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaPaperPlane className="text-sm" />
                    </motion.div>
                  </>
                )}
              </motion.button>

              <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
                <FaClock className="text-blue-400" />
                I typically respond within 12-24 hours
              </p>
            </form>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Boxes Row - Updated with WhatsApp */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500 transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:shadow-lg group-hover:shadow-blue-500/20"
                >
                  <FaEnvelope className="text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
                <p className="text-gray-400 mb-2">For detailed inquiries</p>
                <a
                  href="mailto:ashaanmushtaq@gmail.com"
                  className="text-blue-400 hover:text-cyan-400 font-medium transition-colors hover:underline"
                >
                  ashaanmushtaq@gmail.com
                </a>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-green-500 transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:shadow-lg group-hover:shadow-green-500/20"
                >
                  <FaWhatsapp className="text-green-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-400 mb-2">Quick chat & calls</p>
                <a
                  href="https://wa.me/923076462714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-emerald-300 font-medium transition-colors hover:underline"
                >
                  +92 307 6462714
                </a>
              </motion.div>
            </div>

            {/* Expectation Box - Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">★</span>
                What to Expect
              </h3>

              <div className="space-y-6">
                {[ 
                  { 
                    num: 1, 
                    title: "Quick Response", 
                    text: "I respond within 24 hours.",
                    icon: "⚡"
                  },
                  { 
                    num: 2, 
                    title: "Free Consultation", 
                    text: "Discuss your project requirements.",
                    icon: "💬"
                  },
                  { 
                    num: 3, 
                    title: "Detailed Proposal", 
                    text: "Full plan with timeline & pricing.",
                    icon: "📋"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-4 text-lg font-bold text-blue-400 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300"
                    >
                      <span className="text-xl">{item.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Box - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/30 text-center relative overflow-hidden group"
            >
              {/* Animated background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-8 -top-8 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -left-8 -bottom-8 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl"
              />
              
              <h3 className="text-lg font-semibold text-white mb-3 relative">
                Let's Create Something Amazing!
              </h3>
              <p className="text-gray-300 text-sm relative">
                Your vision + my expertise = Outstanding results
              </p>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-4 inline-block text-blue-400"
              >
                ↓
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Add CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};