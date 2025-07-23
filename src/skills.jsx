import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub, // ✅ Added
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-black text-5xl" /> }, // ✅ Added
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 px-6 bg-gray-50 rounded-2xl shadow-lg max-w-6xl mx-auto mt-12"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">My Skills</h2>
      <p className="text-center text-gray-600 mt-2">
        Technologies I use to build projects
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            {skill.icon}
            <p className="mt-2 text-md font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
