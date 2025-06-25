import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js", "React Native", "TailwindCSS"];
  const backendSkills = ["Node.js","Java", "Python", "Firebase", "PHP", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Motivated and passionate fresh graduate in BS Software Engineering with a growing
              interest in React Native, UI/UX design, and ERP systems through academic projects 
              and internships. I enjoy learning through hands-on projects
              and love building clean, user-friendly web and mobile apps.
              Though I’m still gaining experience, I’m excited to grow,
              contribute, and create solutions that are both effective and easy
              to use.
            </p>

            {/* ✅ Download CV Button */}
            <div className="mt-6 flex justify-center">
            <a
  href="/ashaan_resume.pdf"
  download="ashaan_resume.pdf"
  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
>
  Download CV
</a>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Software Engineering</strong> - Gift
                  University, Gujranwala (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Object-Oriented Programming, Data
                  Structures, Database, Web Development, Mobile Computing, 
                  Data Communication & Computer Networks, Information Security,
                  Artificial Intelligence, Machine Learning, Software Documentation, and
                  more.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    BAHES TECH | Internship | July - Aug 2024
                  </h4>
                  <p>
                    Helped design and develop mobile app screens using React
                    Native and Figma.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Frappe HR Solutions | Internship | Oct - Dec 2024
                  </h4>
                  <p>
                    Learned about ERPNext modules including HR, payroll, and
                    attendance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    DevelopersHub Corporation | Internship | April - May 2025
                  </h4>
                  <p>
                    Worked on React Native mobile app development, contributing to UI implementation and feature integration.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
