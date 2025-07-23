import { FaGithub, FaLinkedin } from "react-icons/fa";
import ashu from "./assets/ashu.jpg";

function About() {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          <img
            src={ashu}
            alt="Ashu Saini"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Hi, I'm Ashu 👋</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              A passionate <span className="font-semibold text-blue-600">Frontend Developer</span> with experience in
              building responsive and interactive web apps using <span className="font-medium">React, TypeScript, Tailwind, and Redux</span>. 
              I love crafting intuitive UI and learning new tech to enhance the user experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <a
                href="https://github.com/Ashu8140?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black text-2xl"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-2xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="/resume.docx"
                download
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Download Resume
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
