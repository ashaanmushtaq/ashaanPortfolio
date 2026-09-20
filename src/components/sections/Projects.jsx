import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useState, useEffect, useRef } from "react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Karobit — Wholesale Admin Dashboard",
      subtitle: "Enterprise ERP & Business Management",
      description: "A comprehensive, high-performance admin dashboard built for Pakistani wholesale businesses to manage inventory, orders, suppliers, customers, and analytics — all from a single powerful interface. This was my highest-paid project, delivering enterprise-grade solutions for large-scale wholesale operations.",
      features: [
        "Real-time inventory management with low-stock alerts",
        "Advanced order processing & tracking system",
        "Supplier & customer relationship management",
        "Detailed analytics dashboard with charts & KPIs",
        "Role-based access control for multiple admin levels",
        "Invoice generation & payment tracking",
        "Bulk product upload/export functionality"
      ],
      technologies: ["React", "Supabase", "PostgreSQL", "Supabase Auth", "Chart.js", "Redux", "REST API", "CSS Modules"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Karobit — POS Dashboard",
      subtitle: "Point of Sale System",
      description: "A lightning-fast, intuitive Point of Sale dashboard designed for Pakistani retail and wholesale counters. Enables quick billing, real-time stock sync, multiple payment modes, offline mode support, and instant receipt generation — built to handle high-volume transactions with zero lag, even without internet.",
      features: [
        "Barcode scanning & quick product search",
        "Real-time cart management",
        "Multiple payment modes (Cash, Card, Credit)",
        "Full offline mode support with local data sync",
        "Instant thermal receipt printing",
        "Hold/park bill & resume functionality",
        "Daily sales summary & cash drawer management",
        "Real-time inventory deduction on sale",
        "Customer loyalty points & discount engine"
      ],
      technologies: ["React", "Electron", "Supabase", "PostgreSQL", "Socket.io", "CSS Modules", "Thermal Printer API", "Barcode Scanner SDK", "IndexedDB"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Karobit — Workers App",
      subtitle: "Mobile Workforce Management",
      description: "A powerful mobile application for field workers and staff to manage daily tasks, attendance, stock updates, and delivery tracking. Built to connect the workforce with the admin dashboard in real-time, ensuring seamless communication and operational efficiency for Pakistani businesses.",
      features: [
        "Attendance & check-in/check-out system",
        "Task assignment & status update workflow",
        "Real-time stock update & inventory sync",
        "Delivery tracking with status updates",
        "Push notifications for new tasks & announcements",
        "Offline-first architecture with data sync",
        "Image upload for proof of delivery/completion"
      ],
      technologies: ["React Native", "Expo", "Supabase", "Supabase Auth", "PostgreSQL", "Push Notifications", "AsyncStorage", "REST API", "Redux"],
      link: "#",
      featured: true
    },
    {
      id: 4,
      title: "Plant Identification & Care App",
      subtitle: "Final Year Project",
      description: "A mobile application that helps users identify plants through images and provides care tips based on plant type.",
      role: [
        "Designed user-friendly UI using Figma",
        "Developed mobile app screens using React Native",
        "Integrated Firebase for authentication and storage",
        "Trained MobileNet AI model for plant recognition",
        "Created SRS documentation",
        "Applied Agile methodology for project management",
        "Collaborated with team members on manual testing (Black Box Testing) and documentation of test cases"
      ],
      technologies: ["React Native", "Firebase", "Figma", "Python", "TensorFlow", "MobileNet", "Star UML"],
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "Academic Projects Portfolio",
      subtitle: "University Coursework",
      description: "Comprehensive software projects developed during university including various management systems and mobile applications.",
      projectsList: [
        "Student Registration System",
        "Hospital Management System", 
        "Medicine Tracker App",
        "Online Education Platform",
        "Employee Management System"
      ],
      technologies: ["Java", "OOP", "React Native", "JavaScript", "Figma", "Frappe HR", "MySQL", "Agile", "Firebase"],
      featured: false
    },
    {
      id: 6,
      title: "Modern E-Commerce Platform",
      subtitle: "UI/UX Design Project",
      description: "Designed a modern, user-friendly e-commerce interface with smooth navigation, clean layout, and responsive design focused on intuitive shopping experience.",
      features: ["Product Discovery", "Shopping Cart", "Checkout Flow", "User Dashboard", "Admin Panel"],
      technologies: ["Figma", "Adobe XD", "Design Systems", "User Flow", "Wireframing"],
      link: "#",
      featured: false
    },
    {
      id: 7,
      title: "ERP Employee Management System",
      subtitle: "ERP Implementation",
      description: "A role-based ERP solution for managing employee records, attendance, payroll, and performance in real-time.",
      features: ["Role-based Access", "Real-time Attendance", "Payroll Processing", "Performance Tracking", "Reporting"],
      technologies: ["Frappe Framework", "ERPNext", "Python", "MySQL", "JavaScript"],
      link: "#",
      featured: false
    },
    {
      id: 8,
      title: "NexLink Social Community",
      subtitle: "Mobile Social Platform",
      description: "A mobile application connecting users through community features including posts, comments, real-time chat, and profile management.",
      features: ["Real-time Chat", "Post Sharing", "Community Groups", "Profile Management", "Notifications"],
      technologies: ["React Native", "Firebase", "Expo", "JavaScript", "Firestore"],
      link: "#",
      featured: false
    },
    {
      id: 9,
      title: "Qalbia Islamic App",
      subtitle: "Wird Tracker & Digital Tasbih",
      description: "A spiritually-focused Islamic mobile app built to help users stay consistent with their daily Zikr and Wird. Features a digital Tasbih counter where the current Zikr is displayed on top so users never lose track or make mistakes while reciting. Includes complete history tracking, daily Wird reminders, and prayer time reminders — designed to make daily worship effortless and organized.",
      features: [
        "Digital Tasbih counter with active Zikr displayed on top to prevent mistakes",
        "Complete Wird & Zikr history tracking with date-wise records",
        "Daily Wird reminders with customizable schedules",
        "Prayer time reminders with location-based notifications",
        "Custom Zikr entries so users can add their own Wird",
        "Progress tracking to help users stay consistent daily",
        "Haptic feedback & smooth animations for engaging Tasbih experience",
        "Offline-first architecture so all Zikr data works without internet"
      ],
      technologies: ["React Native", "Expo", "AsyncStorage", "Push Notifications", "Local Notifications", "Haptic Feedback", "React Navigation", "Context API"],
      link: "#",
      featured: true
    }
  ];

  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection Observer callback to set state when section is in view
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setInView(true);
      // Reset hasAnimated when coming back into view
      setHasAnimated(false);
    } else {
      setInView(false);
      // Mark as animated when leaving view
      if (inView) {
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Lower threshold for better detection
      rootMargin: '50px' // Add some margin for smoother trigger
    });

    const section = statsRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Reset animation when coming back into view
  useEffect(() => {
    if (inView && hasAnimated) {
      // Small delay to ensure component re-renders properly
      const timer = setTimeout(() => {
        setHasAnimated(false);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated]);

  const statistics = [
    { label: "Projects Completed", value: 15 },
    { label: "Technologies Used", value: 20 },
    { label: "Team Projects", value: 8 },
    { label: "Solo Projects", value: 7 }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise through practical implementations and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden border border-gray-800 
                ${project.featured ? 'bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20' : 'bg-gradient-to-br from-gray-900 via-black to-gray-900'}
                hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500`}
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Project Content */}
              <div className="relative z-10 p-6 md:p-8">
                {/* Subtitle */}
                <div className="flex items-center mb-3">
                  <div className={`w-2 h-2 rounded-full ${project.featured ? 'bg-cyan-500' : 'bg-blue-500'} mr-2`}></div>
                  <span className="text-sm font-medium text-cyan-400">{project.subtitle}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Role/Features/Projects List */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    {project.role ? 'My Role:' : project.features ? 'Key Features:' : 'Projects:'}
                  </h4>
                  <ul className="space-y-1">
                    {(project.role || project.features || project.projectsList)?.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-400 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 
                                 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/20 
                                 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Want to See More?</h3>
            <p className="text-gray-400 mb-6 max-w-md text-sm md:text-base">
              I have additional projects, case studies, and detailed documentation available upon request.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              Request Full Portfolio
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Project Statistics with ref */}
        <div ref={statsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Changed to false for re-triggering
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
          >
            {statistics.map((stat, index) => (
              <div key={index} className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {inView ? (
                    <CountUp
                      key={`${stat.label}-${hasAnimated ? 'reset' : 'normal'}`} // Key change forces re-render
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      delay={0}
                      decimals={0}
                      redraw={true} // Allow redraw
                    />
                  ) : (
                    <span>0</span> // Show 0 when not in view
                  )}
                  +
                </div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
