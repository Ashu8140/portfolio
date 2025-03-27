

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./Button";
import projects from "./UserData";
import { Card, CardContent } from "./card";


export default function Portfolio() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div>
      <h1 className="text-3xl font-bold text-center">My Project</h1>
      </div>

      {/* Projects Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-3">
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
