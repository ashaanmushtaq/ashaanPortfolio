import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </motion.h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {["name", "email", "message"].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i }}
                className="relative"
              >
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    required
                    value={formData[field]}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-400/40"
                    placeholder={
                      field === "name" ? "Name..." : "example@gmail.com"
                    }
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                ) : (
                  <textarea
                    id={field}
                    name={field}
                    required
                    rows={5}
                    value={formData[field]}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-400/40"
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded font-medium transition hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="justify-center flex items-center hover:-translate-y-1 transition-all mt-6"
        >
          <p className="text-gray-300">
            Contact Me:{" "}
            <a
              href="mailto:ashaanmushtaq@gmail.com"
              className="text-gray-400 underline hover:text-blue-400 transition"
            >
              ashaanmushtaq@gmail.com
            </a>
          </p>
        </motion.div> */}
      </RevealOnScroll>
    </section>
  );
};
