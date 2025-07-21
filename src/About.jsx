import { FaGithub, FaLinkedin } from "react-icons/fa";
import ashu from './assets/ashu.jpg';


function About(){
    return(
    <div>
<section id="about" className="flex flex-col md:flex-row items-center justify-center text-center md:text-left my-12 p-8 bg-white shadow-lg rounded-lg">
  <img 
    src={ashu} 
    alt="Ashu Saini" 
    className="w-40 h-40 md:w-52 md:h-24 rounded-full shadow-md"
  />
  
  <div className="md:ml-8 mt-6 md:mt-0">
    <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
   <p>I'm Ashu, a web developer passionate about creating clean, responsive, and user-friendly websites. I enjoy working withs <span className="font-bold"> React, JavaScript, Typescript, Tailwind CSS and Redux </span> and I’m always eager to learn and grow as a developer.

</p>

    <div className="mt-4 flex gap-4 justify-center md:justify-start">
      <a href="https://github.com/Ashu8140?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl hover:text-gray-700 transition duration-200" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-200" />
      </a>
    </div>
  </div>
</section>

    </div>
    )
}
export default About