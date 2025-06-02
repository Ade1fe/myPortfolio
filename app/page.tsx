

"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Smartphone,
  Monitor,
  Award,
  Eye,
  Star,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const progressRef = useRef(null)
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const frontendSkills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Chakra UI",
    "Material UI",
    "Responsive Design",
  ]

  const mobileSkills = [
    "Flutter",
    "Dart",
    "Firebase",
    "Android Development",
    "iOS Development",
    "Cross-platform Development",
  ]

  const toolsSkills = [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Figma",
    "Firebase Auth",
    "Firestore",
    "Node.js",
    "REST APIs",
  ]

  const projects = [
    {
      title: "React Task Manager",
      description:
        "A comprehensive task management SPA built with React, featuring custom hooks, Firebase integration, and optimized performance with 40% reduction in unnecessary re-renders.",
      technologies: ["React", "Chakra UI", "Firebase", "Custom Hooks"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=300",
      type: "Web Application",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Flutter E-Commerce App",
      description:
        "Beautiful and responsive e-commerce mobile application with product listings, search filters, shopping cart, and real-time data updates using Firebase.",
      technologies: ["Flutter", "Dart", "Firebase", "Material Design"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=300",
      type: "Mobile Application",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Professional portfolio website showcasing development work with contact form, resume download, and project galleries. Achieving 300+ views per month.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=300",
      type: "Web Application",
      color: "from-violet-500 to-purple-500",
    },
  ]

  const experience = [
    {
      title: "Frontend Developer",
      company: "Pivelar",
      location: "Ikeja, Lagos",
      period: "September 2023 - February 2024",
      description:
        "Engineered multiple frontend features using React.js with Chakra UI, improving load times and interface responsiveness. Implemented reusable components and modular structure for scalable frontend code.",
      achievements: [
        "Improved load times and interface responsiveness",
        "Built reusable components and modular architecture",
        "Contributed to design handoff reviews and client demonstrations",
        "Mentored junior developers through code reviews",
      ],
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
      title: "Flutter Developer (Freelance)",
      company: "Remote Projects",
      location: "Remote",
      period: "January 2023 - Present",
      description:
        "Built and deployed Flutter apps for Android, including e-commerce UI and personal expense tracker. Used Firebase Auth & Firestore for authentication and cloud storage.",
      achievements: [
        "Developed responsive UIs compatible across multiple screen sizes",
        "Integrated Firebase Auth & Firestore for backend services",
        "Debugged performance issues and implemented smooth animations",
        "Successfully deployed apps to Android platform",
      ],
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      title: "Frontend Developer (Intern)",
      company: "InBrandPr",
      location: "Ogba, Lagos",
      period: "March 2022 - December 2022",
      description:
        "Built functional dashboards and landing pages using React + Firebase stack. Translated Figma designs into pixel-perfect components with responsive behavior.",
      achievements: [
        "Created custom components with real-time data sync",
        "Translated Figma designs into pixel-perfect components",
        "Participated in daily standups and agile sprints",
        "Deployed production-ready builds",
      ],
      color: "bg-gradient-to-r from-violet-500 to-purple-500",
    },
  ]

  const achievements = [
    {
      title: "Performance Optimization",
      description: "Reduced unnecessary re-renders by 40% using memoization and lazy loading in React Task Manager",
      icon: <Award className="text-pink-500" size={24} />,
      color: "border-l-pink-500",
    },
    {
      title: "Mobile App Success",
      description: "Achieved smooth UX and integrated real-time data updates with Firebase in Flutter e-commerce app",
      icon: <Smartphone className="text-cyan-500" size={24} />,
      color: "border-l-cyan-500",
    },
    {
      title: "Online Visibility",
      description: "Increased online visibility with over 300 views/month for personal portfolio website",
      icon: <Eye className="text-violet-500" size={24} />,
      color: "border-l-violet-500",
    },
  ]

  const education = [
    {
      institution: "Speedway Polytechnic",
      degree: "Ordinary National Diploma (OND)",
      location: "Ojodu Berger",
      period: "April 2022 - Present",
      color: "from-pink-500 to-rose-500",
    },
    {
      institution: "Nigeria Institute of Information Technology",
      degree: "Diploma in Core Java & Web Development",
      location: "Nigeria",
      period: "April 2022 - October 2023",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  const courses = [
    {
      name: "Frontend Development - freeCodeCamp",
      color: "text-pink-500",
    },
    {
      name: "Flutter App Development Bootcamp - Udemy (Angela Yu)",
      color: "text-cyan-500",
    },
    {
      name: "React.js Crash Course - YouTube / Traversy Media",
      color: "text-violet-500",
    },
    {
      name: "JavaScript Algorithms & Data Structures - freeCodeCamp (In Progress)",
      color: "text-amber-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-700 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
          style={{ width: progressHeight }}
          ref={progressRef}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            >
              {"<Damisi />"}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden py-4 border-t border-slate-700"
              >
                {["home", "about", "skills", "projects", "experience", "achievements", "contact"].map((item) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 capitalize text-slate-300 hover:text-white"
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Monitor size={24} className="text-pink-500" />
                    <Smartphone size={24} className="text-cyan-500" />
                  </div>
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
              >
                Oluwadamisi Damilola
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xl md:text-2xl text-slate-300 mb-8"
              >
                Frontend & Mobile App Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-lg text-slate-400 max-w-2xl mx-auto mb-8"
              >
                Creative and performance-driven developer specialized in building intuitive, responsive, and scalable
                applications using React.js for web and Flutter for mobile platforms.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex justify-center space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com"
                className="text-slate-400 hover:text-pink-500 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com"
                className="text-slate-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:addypearl09@gmail.com"
                className="text-slate-400 hover:text-cyan-500 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-16"
            >
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ChevronDown size={32} className="mx-auto text-slate-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg blur-sm"></div>
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                  <img src="/placeholder.svg?height=400&width=400" alt="Profile" className="w-full max-w-md mx-auto" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Hello! I'm Damisi, a passionate Frontend & Mobile Developer.
              </h3>
              <p className="text-slate-300 mb-6">
                I am passionate about creating seamless user experiences, implementing clean code practices, and
                continuously improving development workflows. As an enthusiastic team player, I have strong
                collaboration, debugging, and design interpretation skills.
              </p>
              <p className="text-slate-300 mb-6">
                I specialize in React.js for web development and Flutter for cross-platform mobile applications, always
                focusing on performance optimization and user experience.
              </p>

              <div className="grid grid-cols-1 gap-4 text-sm text-slate-300">
                <div className="flex items-center">
                  <MapPin className="mr-2 text-pink-500" size={16} />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-purple-500" size={16} />
                  <span>addypearl09@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-2 text-cyan-500" size={16} />
                  <span>React.js & Flutter Specialist</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-200 mb-3">Core Strengths:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-slate-700/50 p-2 rounded-md"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>Creative Problem Solving
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-slate-700/50 p-2 rounded-md"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Time Management
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-slate-700/50 p-2 rounded-md"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>Attention to Detail
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-slate-700/50 p-2 rounded-md"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Fast Learner
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-slate-700/50 p-2 rounded-md"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Team Collaboration
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Monitor className="mr-2 text-pink-500" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-slate-700/50 text-slate-200 border-pink-500/50 hover:bg-pink-500/10"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Smartphone className="mr-2 text-cyan-500" />
                    Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mobileSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-slate-700/50 text-slate-200 border-cyan-500/50 hover:bg-cyan-500/10"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-violet-500 to-purple-500"></div>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Code className="mr-2 text-violet-500" />
                    Tools & Others
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {toolsSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-slate-700/50 text-slate-200 border-violet-500/50 hover:bg-violet-500/10"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
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
                        <Badge key={tech} variant="outline" className="bg-slate-700/50 text-slate-200 border-slate-600">
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

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index !== experience.length - 1 && (
                  <div className="absolute left-4 top-12 w-0.5 h-full bg-slate-700"></div>
                )}
                <div className="flex items-start mb-12">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${job.color}`}>
                    <Briefcase size={16} className="text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-medium">
                      {job.company}
                    </p>
                    <p className="text-slate-400 text-sm flex items-center mb-2">
                      <Calendar className="mr-1" size={14} />
                      {job.period} • {job.location}
                    </p>
                    <p className="text-slate-300 mb-3">{job.description}</p>
                    <ul className="list-none text-slate-300 text-sm space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
                          className="flex items-start"
                        >
                          <Star size={14} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              Education
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{edu.degree}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {edu.institution} • {edu.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {edu.period}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div className="mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              Training & Courses
            </motion.h3>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-slate-300 bg-slate-800/30 p-3 rounded-lg border-l-4 hover:bg-slate-800/50 transition-colors"
                    style={{ borderLeftColor: `rgb(${index * 50}, 100, 255)` }}
                  >
                    <Award className={`mr-3 ${course.color}`} size={16} />
                    {course.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
              Key Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden h-full border-l-4 hover:bg-slate-800/80 transition-colors">
                  <CardHeader>
                    <div className="mx-auto mb-4">{achievement.icon}</div>
                    <CardTitle className="text-lg text-white text-center">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-center">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mr-4">
                    <Mail className="text-pink-500" size={20} />
                  </div>
                  <span className="text-slate-300">addypearl09@gmail.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <MapPin className="text-purple-500" size={20} />
                  </div>
                  <span className="text-slate-300">Lagos, Nigeria</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                    <Code className="text-cyan-500" size={20} />
                  </div>
                  <span className="text-slate-300">Available for Remote Work</span>
                </motion.div>
              </div>

              <Separator className="my-6 bg-slate-700" />

              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-slate-800/50 border-pink-500/50 text-pink-500 hover:bg-pink-500/10"
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      GitHub
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-slate-800/50 border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10"
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={16} />
                      LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white border-0"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>&copy; 2024 Oluwadamisi Damilola. All rights reserved.</p>
            <p className="text-slate-400 mt-2">
              Built with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                React, TypeScript, and Next.js
              </span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
