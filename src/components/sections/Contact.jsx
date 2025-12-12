import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { motion } from "framer-motion";

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
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 shadow-xl"
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
              >
                <p className="text-green-300 font-medium">Message sent successfully!</p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30"
              >
                <p className="text-red-300 font-medium">Failed to send message. Try again.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{
                  background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-center text-gray-500 text-sm">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Boxes Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all text-center">
                <div className="w-16 h-16 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  📧
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
                <p className="text-gray-400 mb-2">Send me a direct email:</p>
                <a
                  href="mailto:ashaanmushtaq@gmail.com"
                  className="text-blue-400 hover:text-cyan-400 font-medium"
                >
                  ashaanmushtaq@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-all text-center">
                <div className="w-16 h-16 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  📱
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
                <p className="text-gray-400 mb-2">Available during business hours:</p>
                <a
                  href="tel:+923076462714"
                  className="text-cyan-400 hover:text-blue-400 font-medium block mb-2"
                >
                  +92 307 6462714
                </a>
                <p className="text-gray-400 text-sm">🕓 Mon–Fri: 10am - 6pm</p>
              </div>
            </div>

            {/* Expectation Box */}
            <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">
                What to Expect
              </h3>

              <div className="space-y-4">
                {[ 
                  { num: 1, title: "Quick Response", text: "I respond within 24 hours." },
                  { num: 2, title: "Free Consultation", text: "Discuss your project requirements." },
                  { num: 3, title: "Detailed Proposal", text: "Full plan with timeline & pricing." }
                ].map((item) => (
                  <div key={item.num} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 font-semibold">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
