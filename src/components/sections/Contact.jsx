import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhone, FaCheck, FaExclamationCircle } from "react-icons/fa";

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
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
          >
            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center"
                  >
                    <FaCheck className="text-green-400" />
                  </motion.div>
                  <p className="text-green-300 font-medium">Message sent successfully!</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30"
              >
                <div className="flex items-center gap-3">
                  <FaExclamationCircle className="text-red-400" />
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
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{
                  background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
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

              <p className="text-center text-gray-500 text-sm">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Boxes Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:shadow-lg group-hover:shadow-blue-500/20"
                >
                  <FaEnvelope className="text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
                <p className="text-gray-400 mb-2">Send me a direct email:</p>
                <a
                  href="mailto:ashaanmushtaq@gmail.com"
                  className="text-blue-400 hover:text-cyan-400 font-medium transition-colors"
                >
                  ashaanmushtaq@gmail.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                >
                  <FaPhone className="text-cyan-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
                <p className="text-gray-400 mb-2">Available during business hours:</p>
                <a
                  href="tel:+923076462714"
                  className="text-cyan-400 hover:text-blue-400 font-medium block mb-2 transition-colors"
                >
                  +92 307 6462714
                </a>
                <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                  <span>🕓</span>
                  <span>Mon–Fri: 10am - 6pm</span>
                </p>
              </motion.div>
            </div>

            {/* Expectation Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                What to Expect
              </h3>

              <div className="space-y-6">
                {[ 
                  { num: 1, title: "Quick Response", text: "I respond within 24 hours." },
                  { num: 2, title: "Free Consultation", text: "Discuss your project requirements." },
                  { num: 3, title: "Detailed Proposal", text: "Full plan with timeline & pricing." }
                ].map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-4 text-sm font-bold text-blue-400 flex-shrink-0"
                    >
                      {item.num}
                    </motion.div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                Let's Create Something Amazing!
              </h3>
              <p className="text-gray-300 text-sm">
                Your vision + my expertise = Outstanding results
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};