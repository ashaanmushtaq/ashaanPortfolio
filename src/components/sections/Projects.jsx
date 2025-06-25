import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Final Year Project – Plant Identification and Care App</h3>
              <p className="text-gray-400 mb-4">
              A mobile application that helps users identify plants through images 
              and provides care tips based on plant type.
              </p> My Role <p className="text-gray-400 mb-4"> {" "}
              Designed user-friendly UI using Figma. 
              Developed mobile app screens using React Native. 
              Integrated Firebase for user authentication and data storage. 
              Trained a MobileNet AI model for plant recognition. 
              Created Software Requirements Specification (SRS) document. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Js","React Native", "Firebase", "Figma", "Python","Tensorflow","Star UML"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">ACADEMIC PROJECTS</h3>
              <p className="text-gray-400 mb-4">
              Worked on various software projects during university life cycle, 
              including Student Registration System, Hospital Management System,
              Medicine Tracker App, Online_Education App, Employee Management System, 
              and more. Worked on system
              documentation, quality testing, and software design projects. Gained 
              experience in team-based development, presentations, and 
              technical report writing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java","OOP","DSA", "React Js", "React Native","JavaScript", "Figma" ,"Frappe HR", 
                "Cisco", "Signavio", "Visco", "Agile", "Firebase","MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {/* <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
              Designed a modern, user-friendly e-commerce interface with 
              smooth navigation, clean layout, and responsive design. 
              Focused on creating an intuitive shopping experience and 
              easy product discovery.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Figma", "Adobe XD", "Design Systems", "User Flow & Wireframing"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                {/* <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Employee Management System</h3>
              <p className="text-gray-400 mb-4">
              A role-based ERP solution for managing employee records, attendance, 
              payroll, and performance in real-time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Frappe Framework", "ERPNext", "Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center ">
                {/* <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>

            </div>

            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <h3 className="text-xl font-bold mb-2">NexLink - Social Community App</h3>
              <p className="text-gray-400 mb-4">
                A mobile application designed to connect users through community features such as posts, 
                comments, real-time chat, and profile management. Focused on providing a modern and engaging 
                social experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Firebase", "Expo", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};