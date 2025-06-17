"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { Key } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Github, ExternalLink,  } from "lucide-react";
import { Badge } from "./badge";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  type: string;
  color: string;
  technologies: string[];
}
// type Props = {
//   projects: Project[];
// };

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div ref={sliderRef} className="keen-slider">
            
        {projects.map((project, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="aspect-video bg-slate-700 relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild className="bg-slate-800/80 text-white border-0">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1" size={16} />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className={`bg-gradient-to-r ${project.color} border-0`}>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1" size={16} />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className={`text-xs bg-gradient-to-r ${project.color} text-white border-0`}
                    >
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-slate-700/50 text-slate-200 border-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
