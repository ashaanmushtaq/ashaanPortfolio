import { motion } from "framer-motion";

export const About = () => {
  // Updated skill arrays based on your professional summary
  const mobileDevSkills = ["React Native", "JavaScript", "Expo", "Firebase (Auth, Firestore)", "Mobile UI/UX"];
  const designSkills = ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"];
  const businessTechSkills = ["Shopify/E-commerce", "ERPNext/Frappe HR", "Git/GitHub", "Agile/Scrum", "MySQL", "SRS Documentation"];

  // Animation variants for skills
  const skillItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-center">
            Software Engineer specializing in mobile development, UI/UX design, e-commerce solutions, and AI-powered automation
          </p>
        </motion.div>

        {/* Main Card with Introduction - Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 shadow-2xl hover:shadow-blue-900/20 transition-shadow duration-300 mb-12"
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue-500 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue-500 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-blue-500 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500 rounded-br-lg"></div>

          {/* IMPROVED INTRODUCTION TEXT */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            I transform complex business challenges into seamless digital solutions. As a <span className="text-blue-400 font-semibold">Software Engineer</span>, I excel in building <span className="text-cyan-400">mobile applications</span> with React Native and Firebase, designing <span className="text-blue-400">intuitive user interfaces</span> with Figma and Adobe XD, and implementing <span className="text-cyan-400">smart business systems</span> including Shopify stores and ERP solutions. My approach combines technical precision with creative problem-solving to deliver applications that are not only functional but also engaging and user-centric.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm passionate about leveraging <span className="text-blue-400 font-semibold">AI and automation</span> to create intelligent workflows that enhance efficiency and user experiences. Whether it's developing a feature-rich mobile app, designing a conversion-optimized e-commerce platform, or building custom business tools, I focus on delivering solutions that drive measurable results and exceed client expectations.
          </p>
        </motion.div>

        {/* Skills Section with Staggered Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Mobile Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                <span className="text-blue-400 text-xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Mobile Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {mobileDevSkills.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={skillItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-300 py-2 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* UI/UX Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-4">
                <span className="text-cyan-400 text-xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-white">UI/UX Design</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={skillItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Business & E-commerce Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-4">
                <span className="text-green-400 text-xl">🛒</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Business Solutions</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {businessTechSkills.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={skillItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 text-green-300 py-2 px-4 rounded-full text-sm font-medium border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/20 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education & Experience with Staggered Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                <span className="text-blue-400 text-xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="relative pl-6 pb-4 border-l-2 border-blue-500/30">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <h4 className="text-lg font-semibold text-white mb-1">B.S. Software Engineering</h4>
                <p className="text-blue-400 mb-2">Gift University, Gujranwala • 2021-2025</p>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    <span>Relevant Coursework: OOP, Data Structures, Database, Networking, Web Development, Mobile Computing, AI/ML</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    <span>Academic Projects: 10+ completed projects in software development</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-4">
                <span className="text-cyan-400 text-xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  company: "DevelopersHub Corporation",
                  role: "React Native Developer Intern",
                  period: "Apr - May 2025",
                  description: "Developed mobile app features using React Native, implemented responsive UI components, and contributed to feature integration."
                },
                {
                  company: "Frappe HR Solutions",
                  role: "ERP Systems Intern",
                  period: "Oct - Dec 2024",
                  description: "Gained expertise in ERPNext modules including HR management, payroll systems, and attendance tracking."
                },
                {
                  company: "BAHES TECH",
                  role: "Mobile App Developer Intern",
                  period: "Jul - Aug 2024",
                  description: "Designed and developed mobile app interfaces using React Native and Figma, focusing on user experience."
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                  className="relative pl-6 pb-4 border-l-2 border-cyan-500/30"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.role}</h4>
                  <p className="text-cyan-400 mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Final Call-to-Action with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 rounded-2xl p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">🚀 Ready to Build Your Digital Solution</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Whether you need a custom mobile app, a professional Shopify store, or a complete e-commerce solution, 
            I combine technical expertise with business understanding to deliver projects that meet your specific goals. 
            Let's collaborate to bring your ideas to life with clean, efficient, and user-focused development.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors font-semibold"
          >
            Start your project today
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};