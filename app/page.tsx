"use client"

import type React from "react"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import {
  AlertCircle,
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronDown,
  Code,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Send,
  Smartphone,
  Sparkles,
} from "lucide-react"
import { useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

import { sendContactEmail } from "./action"

type SectionId = "home" | "about" | "capabilities" | "work" | "experience" | "contact"

type ContactFormState = {
  name: string
  email: string
  message: string
}

type SubmitState = {
  type: "success" | "error" | ""
  message: string
}

type Project = {
  title: string
  type: string
  summary: string
  focus: string
  technologies: string[]
  image: string
  github: string
  demo?: string
  demoLabel?: string
  accent: string
  gradient: string
}

const navigation: Array<{ id: SectionId; label: string }> = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "capabilities", label: "Capabilities" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
]

const projects: Project[] = [
  {
    title: "Jma Couture",
    type: "Fashion Commerce",
    summary:
      "A polished fashion storefront built to showcase collections, manage inventory updates, and keep shopping interactions simple across screen sizes.",
    focus: "React storefront, Firebase-backed product data, and a cleaner purchase flow.",
    technologies: ["React", "Chakra UI", "Firebase", "React Router", "Firestore"],
    image: "/jma.png",
    github: "https://github.com/Ade1fe?tab=repositories",
    demo: "https://jma-rich.vercel.app",
    demoLabel: "Visit site",
    accent: "#c6633f",
    gradient: "linear-gradient(135deg, rgba(198, 99, 63, 0.18), rgba(255, 255, 255, 0.8))",
  },
  {
    title: "FinoSell Approvals",
    type: "Mobile Finance",
    summary:
      "A finance and approvals app for sending funds, reviewing requests, and downloading receipts without overwhelming the user with operational detail.",
    focus: "Flutter mobile flows for approvals, money movement, and activity visibility.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    image: "/approvals.png",
    github: "https://github.com/Ade1fe?tab=repositories",
    accent: "#295f86",
    gradient: "linear-gradient(135deg, rgba(41, 95, 134, 0.18), rgba(255, 255, 255, 0.8))",
  },
  {
    title: "FinoSell Dashboard",
    type: "Operations Dashboard",
    summary:
      "A web dashboard for executives to manage teams, workflows, and role-based approvals with a structure that supports ongoing product growth.",
    focus: "Admin UX, scalable layout patterns, and access-controlled business tooling.",
    technologies: ["React", "Chakra UI", "Firebase", "React Router", "Firestore"],
    image: "/finosell.png",
    github: "https://github.com/Ade1fe?tab=repositories",
    accent: "#8a5836",
    gradient: "linear-gradient(135deg, rgba(138, 88, 54, 0.16), rgba(255, 255, 255, 0.82))",
  },
  {
    title: "MediSwift App",
    type: "Healthcare Logistics",
    summary:
      "A rider-focused mobile workflow for delivering medical supplies with real-time status updates, task handling, and dependable handoff communication.",
    focus: "Flutter delivery UX tuned for urgency, status clarity, and day-to-day reliability.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    image: "/mediswift.png",
    github: "https://github.com/Ade1fe?tab=repositories",
    accent: "#4d7c6e",
    gradient: "linear-gradient(135deg, rgba(77, 124, 110, 0.18), rgba(255, 255, 255, 0.8))",
  },
  {
    title: "Smart Learning Academy",
    type: "Education Platform",
    summary:
      "An education platform connecting tutors, students, and parents with tools for classes, reporting, and academic progress tracking.",
    focus: "Responsive learning workflows with role-aware views and Firebase services.",
    technologies: ["React", "Chakra UI", "Firebase", "React Router", "Firestore"],
    image: "/school.png",
    github: "https://github.com/Ade1fe?tab=repositories",
    accent: "#7a6a2f",
    gradient: "linear-gradient(135deg, rgba(122, 106, 47, 0.16), rgba(255, 255, 255, 0.82))",
  },
  {
    title: "Cut2Fit Moda",
    type: "E-commerce Build",
    summary:
      "An e-commerce experience for custom and ready-to-wear fashion products with dynamic inventory views and customer-friendly navigation.",
    focus: "React commerce UI with dashboards, cart flow, and polished product discovery.",
    technologies: ["React", "Chakra UI", "Firebase", "React Router", "Firestore"],
    image: "/cut2fit.png",
    github: "https://github.com/Ade1fe?tab=repositories",
    demo: "https://cut2fit-moda.netlify.app",
    demoLabel: "View live",
    accent: "#b1545f",
    gradient: "linear-gradient(135deg, rgba(177, 84, 95, 0.18), rgba(255, 255, 255, 0.8))",
  },
  {
    title: "Gomine Food",
    type: "Recipe App",
    summary:
      "A mobile recipe product using external API data, Firebase services, and clean content browsing to keep discovery fast and intuitive.",
    focus: "Search, browse, and detail flows backed by MealDB API integration.",
    technologies: ["Flutter", "Dart", "MealDB API", "Firebase", "GoRouter"],
    image: "/gominefood.png",
    github: "https://github.com/Ade1fe/gomine-food-2.0",
    demo: "https://drive.google.com/file/d/1G5JwRtUCNM7t87egQcDoGAKM_lwIof3P/view?usp=sharing",
    demoLabel: "Watch demo",
    accent: "#d38a33",
    gradient: "linear-gradient(135deg, rgba(211, 138, 51, 0.18), rgba(255, 255, 255, 0.78))",
  },
  {
    title: "Kin",
    type: "Fintech Landing Page",
    summary:
      "A conversion-focused landing page for a fintech concept, designed to communicate product value quickly and capture waitlist interest.",
    focus: "Tailwind landing page system with product messaging and waitlist conversion.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    image: "/kin.png",
    github: "https://github.com/Ade1fe/kin",
    demo: "https://ki-n.netlify.app",
    demoLabel: "Open site",
    accent: "#6d5ca9",
    gradient: "linear-gradient(135deg, rgba(109, 92, 169, 0.18), rgba(255, 255, 255, 0.8))",
  },
  {
    title: "Momentum",
    type: "Productivity App",
    summary:
      "A task manager that combines reminders, categorization, and real-time syncing to support consistent personal productivity on mobile.",
    focus: "Flutter productivity patterns with Firebase services and state management.",
    technologies: ["Flutter", "Dart", "Firebase", "Provider"],
    image: "/momentum.png",
    github: "https://github.com/Ade1fe/event_flow",
    demo: "https://drive.google.com/file/d/1r7wMqivM54BqzuQV50bbvhyT8Hc0axNr/view?usp=sharing",
    demoLabel: "Watch demo",
    accent: "#5f8d53",
    gradient: "linear-gradient(135deg, rgba(95, 141, 83, 0.18), rgba(255, 255, 255, 0.78))",
  },
]

const leadProject = projects[0]
const supportingProjects = projects.slice(1, 4)
const moreProjects = projects.slice(4)

const frontendSkills = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Chakra UI",
  "Material UI",
  "Redux",
  "Responsive Web Design",
  "SEO Best Practices",
]

const mobileSkills = [
  "Flutter",
  "Dart",
  "Firebase",
  "Android Development",
  "iOS Development",
  "GoRouter",
  "State Management",
  "Cross-platform Development",
]

const toolSkills = ["Git & GitHub", "Figma", "REST APIs", "Cloud Firestore", "Firebase Auth", "Node.js", "Code Review"]

const principles = [
  "Interfaces should feel clean before they feel clever.",
  "Responsive behavior is part of the design, not a retrofit.",
  "Reusable systems make product work faster after launch.",
  "Animation should clarify movement and focus, not distract from it.",
]

const experience = [
  {
    title: "Frontend Developer",
    company: "Pivelar",
    location: "Ikeja, Lagos",
    period: "September 2023 - February 2024",
    description:
      "Built modular React features with Chakra UI, improving interface responsiveness and making the frontend easier to scale and demo to clients.",
    achievements: [
      "Improved load times and interface responsiveness",
      "Built reusable UI patterns for faster feature delivery",
      "Supported design handoff reviews and client demonstrations",
      "Contributed through code review and team collaboration",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Freelance Projects",
    location: "Remote",
    period: "January 2023 - Present",
    description:
      "Delivered cross-platform mobile builds for commerce, productivity, and operations workflows with Firebase-backed features and polished UI.",
    achievements: [
      "Developed responsive layouts across a range of mobile sizes",
      "Integrated Firebase Auth and Firestore services",
      "Shipped smoother interactions and animations after debugging bottlenecks",
      "Published production-ready Android builds",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "InBrandPr",
    location: "Ogba, Lagos",
    period: "March 2022 - December 2022",
    description:
      "Translated Figma work into production React interfaces, dashboards, and landing pages with responsive behavior and real-time data support.",
    achievements: [
      "Built dashboard components with live Firebase data",
      "Turned design files into responsive UI with closer visual fidelity",
      "Worked inside agile routines with standups and sprint delivery",
      "Supported production deployment workflows",
    ],
  },
]

const education = [
  {
    title: "Ordinary National Diploma (OND)",
    school: "Speedway Polytechnic",
    location: "Ojodu Berger",
    period: "April 2022 - Present",
  },
  {
    title: "Diploma in Core Java & Web Development",
    school: "Nigeria Institute of Information Technology",
    location: "Nigeria",
    period: "April 2022 - October 2023",
  },
]

const training = [
  "Frontend Development - freeCodeCamp",
  "Flutter App Development Bootcamp - Udemy",
  "React.js Crash Course - Traversy Media",
  "JavaScript Algorithms & Data Structures - freeCodeCamp",
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ade1fe", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/damilola-adeife-oluwadamisi-699325235/?trk=contact-info",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:addypearl09@gmail.com", icon: Mail },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oluwadamisi Damilola",
  alternateName: "Damisi Damilola",
  jobTitle: "Frontend and Mobile App Developer",
  email: "addypearl09@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: socialLinks.map((link) => link.href).filter((href) => href.startsWith("http")),
  url: "https://deife.netlify.app",
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <div className="section-kicker">{eyebrow}</div>
      <h2 className="section-title max-w-xl text-balance">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
    >
      <Card className="glass-panel group overflow-hidden rounded-[30px] border-0 sm:rounded-[34px]">
        <div className="relative aspect-[5/6] overflow-hidden bg-stone-200/70 sm:aspect-[16/13] lg:aspect-[16/9]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 80vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(22,18,16,0.72))]" />
          <div className="absolute inset-x-0 top-0 flex flex-wrap items-center justify-between gap-2 p-4 sm:p-6">
            <Badge
              variant="outline"
              className="rounded-full border-white/30 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-stone-50 backdrop-blur-md"
            >
              Lead project
            </Badge>
            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-stone-100 backdrop-blur-md">
              {project.type}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl space-y-3">
              <h3 className="font-[family-name:var(--font-display)] text-[2.35rem] leading-none text-stone-50 sm:text-5xl">
                {project.title}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-stone-100/92 sm:text-base">
                {project.summary}
              </p>
            </div>
          </div>
        </div>

        <CardContent className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">What this project does well</p>
            <p className="max-w-2xl text-[15px] leading-7 text-stone-700 sm:text-base sm:leading-8">{project.focus}</p>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="rounded-full border-stone-300 bg-stone-100/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-stone-950 px-5 text-stone-50 hover:bg-stone-800">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github />
                  Code
                </a>
              </Button>
              {project.demo ? (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-stone-300 bg-white/70 px-5 text-stone-900 hover:bg-white"
                >
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink />
                    {project.demoLabel ?? "Preview"}
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Card className="glass-panel group flex h-full flex-col overflow-hidden rounded-[28px] border-0 sm:rounded-[32px]">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-200/70">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1280px) 26vw, (min-width: 768px) 40vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(22,18,16,0.52))]" />
          <div className="absolute left-4 top-4">
            <Badge
              variant="outline"
              className="rounded-full border-white/25 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-stone-50 backdrop-blur-md"
            >
              {project.type}
            </Badge>
          </div>
          <div
            className="absolute bottom-4 right-4 h-12 w-12 rounded-full border border-white/35 backdrop-blur-md"
            style={{ background: project.gradient }}
          />
        </div>

        <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[2rem] leading-none text-stone-950 sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <p className="text-sm leading-6 text-stone-600 sm:leading-7">{project.summary}</p>
            <p className="text-sm leading-6 text-stone-800 sm:leading-7">{project.focus}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-full border-stone-300 bg-stone-100/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone-700"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-stone-950 px-5 text-stone-50 hover:bg-stone-800">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github />
                Code
              </a>
            </Button>
            {project.demo ? (
              <Button
                asChild
                variant="outline"
                className="rounded-full border-stone-300 bg-white/70 px-5 text-stone-900 hover:bg-white"
              >
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink />
                  {project.demoLabel ?? "Preview"}
                </a>
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  )
}

function CompactProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Card className="glass-panel h-full rounded-[28px] border-0 sm:rounded-[30px]">
        <CardContent className="grid gap-5 p-5 sm:grid-cols-[124px_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-stone-200/60">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="124px"
            />
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                {String(index + 5).padStart(2, "0")}
              </p>
              <Badge
                variant="outline"
                className="rounded-full border-stone-300 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone-700"
              >
                {project.type}
              </Badge>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-[2rem] leading-none text-stone-950 sm:text-3xl">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-stone-600">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="rounded-full border-stone-300 bg-stone-100/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-stone-300 bg-white/70 text-stone-900 hover:bg-white"
              >
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github />
                  Code
                </a>
              </Button>
              {project.demo ? (
                <Button asChild className="rounded-full bg-stone-950 text-stone-50 hover:bg-stone-800">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink />
                    {project.demoLabel ?? "Preview"}
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  )
}

export default function Portfolio() {
  const reduceMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>("home")
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id as SectionId)
        }
      },
      {
        rootMargin: "-18% 0px -48% 0px",
        threshold: [0.2, 0.35, 0.55],
      },
    )

    navigation.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const metrics = [
    { value: `${projects.length}+`, label: "portfolio builds" },
    { value: `${experience.length}`, label: "professional roles" },
    { value: "Web + Mobile", label: "product delivery" },
  ]

  const scrollToSection = (sectionId: SectionId) => {
    setIsMenuOpen(false)

    const element = document.getElementById(sectionId)
    if (!element) return

    const yOffset = -88
    const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    })
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv/Oluwadamisi_Damilola_CV.pdf"
    link.download = "Oluwadamisi_Damilola_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const openMailFallback = (mailtoData: { to: string; subject: string; body: string }) => {
    const params = new URLSearchParams({
      subject: mailtoData.subject,
      body: mailtoData.body,
    })

    window.location.href = `mailto:${mailtoData.to}?${params.toString()}`
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState({ type: "", message: "" })

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        if (result.fallback && result.mailtoData) {
          openMailFallback(result.mailtoData)
        }

        setFormData({ name: "", email: "", message: "" })
        setSubmitState({ type: "success", message: result.message })
      } else {
        setSubmitState({
          type: "error",
          message: result.message || "I could not send your message. Please try again later.",
        })
      }
    } catch {
      setSubmitState({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative overflow-hidden pb-16">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-orb left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] bg-[radial-gradient(circle,_rgba(199,95,55,0.24),_transparent_68%)]" />
        <div className="ambient-orb right-[-10rem] top-[18rem] h-[26rem] w-[26rem] bg-[radial-gradient(circle,_rgba(34,89,138,0.18),_transparent_66%)]" />
        <div className="ambient-orb bottom-[-12rem] left-[18%] h-[30rem] w-[30rem] bg-[radial-gradient(circle,_rgba(95,141,83,0.18),_transparent_68%)]" />
      </div>

      <nav className="sticky top-3 z-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass-panel flex items-center justify-between rounded-[24px] px-3 py-3 sm:rounded-[30px] sm:px-4">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 rounded-full px-2 py-1 text-left"
              aria-label="Scroll to home"
            >
              <span className="font-[family-name:var(--font-display)] text-2xl italic tracking-wide text-stone-950">
                Deife
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-stone-500 sm:inline">
                Portfolio 2026
              </span>
            </button>

            <div className="hidden lg:flex">
              <div className="flex items-center gap-1 rounded-full border border-stone-800/10 bg-white/60 p-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      activeSection === item.id
                        ? "bg-stone-950 text-stone-50"
                        : "text-stone-600 hover:bg-white hover:text-stone-950"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden items-center gap-3 xl:flex">
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="rounded-full border-stone-300 bg-white/60 text-stone-900 hover:bg-white"
              >
                <Download />
                Resume
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-stone-950 text-stone-50 hover:bg-stone-800"
              >
                <Mail />
                Hire me
              </Button>
            </div>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/70 text-stone-900 lg:hidden"
                  aria-label="Open navigation"
                >
                  <Menu />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88vw] border-l-stone-200 bg-[#f6efe6] p-0 text-stone-900 sm:max-w-sm"
              >
                <div className="flex h-full flex-col">
                  <SheetHeader className="border-b border-stone-200 px-6 py-6 text-left">
                    <SheetTitle className="font-[family-name:var(--font-display)] text-4xl leading-none text-stone-950">
                      Navigate
                    </SheetTitle>
                    <SheetDescription className="text-sm leading-6 text-stone-600">
                      Jump to any section or open your resume directly.
                    </SheetDescription>
                  </SheetHeader>

                  <div className="flex-1 space-y-2 px-4 py-5">
                    {navigation.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex w-full items-center justify-between rounded-[22px] px-4 py-4 text-left text-base transition ${
                          activeSection === item.id
                            ? "bg-stone-950 text-stone-50"
                            : "bg-white/70 text-stone-700 hover:bg-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-stone-200 px-4 py-4">
                    <div className="grid gap-2">
                      <Button
                        variant="outline"
                        onClick={handleDownloadCV}
                        className="h-12 rounded-[22px] border-stone-300 bg-white/80 text-stone-900 hover:bg-white"
                      >
                        <Download />
                        Download CV
                      </Button>
                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="h-12 rounded-[22px] bg-stone-950 text-stone-50 hover:bg-stone-800"
                      >
                        <Mail />
                        Start a conversation
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="scroll-mt-28 px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-stone-700">
              <Sparkles className="h-4 w-4 text-[#c6633f]" />
              React and Flutter product developer
            </div>

            <div className="space-y-5">
              <p className="max-w-xl text-sm uppercase tracking-[0.3em] text-stone-500">Lagos based. Remote ready.</p>
              <h1 className="w-full font-[family-name:var(--font-display)] text-[3.7rem] leading-[0.94] text-stone-950 sm:text-[4.75rem] lg:text-[5.15rem]  xl:text-[5.6rem]">
                Building digital products that feel composed, fast, and easy to use.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg lg:text-xl">
                I design and build frontend interfaces for the web and Flutter experiences for mobile teams, with a
                focus on responsive systems, clean interaction design, and production-ready implementation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                onClick={() => scrollToSection("work")}
                className="rounded-full bg-stone-950 px-6 text-stone-50 hover:bg-stone-800"
              >
                View selected work
                <ArrowRight />
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="rounded-full border-stone-300 bg-white/60 px-6 text-stone-900 hover:bg-white"
              >
                <Download />
                Download CV
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-stone-300 bg-transparent px-6 text-stone-900 hover:bg-white/70"
              >
                <a href="/cv/Oluwadamisi_Damilola_CV.pdf" target="_blank" rel="noreferrer">
                  <FileText />
                  Open CV
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
                  className="glass-panel rounded-[26px] p-5"
                >
                  <div className="text-2xl font-semibold text-stone-950">{metric.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-500">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-stone-950"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-4xl xl:max-w-none"
          >
            <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr] xl:grid-cols-[1.2fr_0.8fr]">
              <div className="glass-panel overflow-hidden rounded-[30px] p-3 sm:rounded-[34px]">
                <div className="relative overflow-hidden rounded-[28px]">
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-[rgba(34,26,21,0.78)] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-stone-100 sm:left-4 sm:top-4 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
                    Available for freelance and product teams
                  </div>
                  <div className="relative aspect-[4/4.8] sm:aspect-[4/5]">
                    <Image
                      src="/aboutme.jpg"
                      alt="Oluwadamisi Damilola portrait"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1280px) 34vw, (min-width: 768px) 48vw, 90vw"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Card className="glass-panel rounded-[26px] border-0 sm:rounded-[30px]">
                  <CardHeader className="pb-3 p-5 sm:p-6 sm:pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg text-stone-950 sm:text-xl">
                      <Monitor className="h-5 w-5 text-[#c6633f]" />
                      Frontend systems
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-stone-600">
                      React interfaces with responsive layouts, reusable components, and cleaner handoff to product teams.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="glass-panel rounded-[26px] border-0 sm:rounded-[30px]">
                  <CardHeader className="pb-3 p-5 sm:p-6 sm:pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg text-stone-950 sm:text-xl">
                      <Smartphone className="h-5 w-5 text-[#295f86]" />
                      Mobile delivery
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-stone-600">
                      Flutter builds for finance, healthcare logistics, commerce, and productivity products.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -10, 0],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }
                  }
                  className="glass-panel rounded-[26px] p-5 sm:rounded-[30px] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-stone-950 p-3 text-stone-50">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Current base</p>
                      <p className="text-lg font-semibold text-stone-950">Lagos, Nigeria</p>
                      <p className="text-sm leading-6 text-stone-600">
                        Working across web and mobile products with a design-aware approach to implementation.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={() => scrollToSection("about")}
          className="mx-auto mt-12 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-500 transition hover:text-stone-950"
        >
          Scroll for more
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={reduceMotion ? undefined : { duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.button>
      </section>

      <section id="about" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionHeading
            eyebrow="About"
            title="A portfolio should read like a product story, not a stack of screenshots."
            description="I work across design-aware frontend and mobile delivery, focusing on interfaces that feel calm, usable, and ready for actual users. That means better hierarchy, cleaner component structure, and enough engineering discipline to make future changes easier."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="glass-panel rounded-[30px] border-0 sm:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-950">What I bring to teams</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3 rounded-[24px] bg-white/60 p-5">
                  <div className="flex items-center gap-3 text-stone-950">
                    <Code className="h-5 w-5 text-[#c6633f]" />
                    <span className="font-medium">Implementation with taste</span>
                  </div>
                  <p className="text-sm leading-6 text-stone-600">
                    Clean layout systems, restrained animation, and clearer interaction states instead of generic UI.
                  </p>
                </div>
                <div className="space-y-3 rounded-[24px] bg-white/60 p-5">
                  <div className="flex items-center gap-3 text-stone-950">
                    <Briefcase className="h-5 w-5 text-[#295f86]" />
                    <span className="font-medium">Product-minded thinking</span>
                  </div>
                  <p className="text-sm leading-6 text-stone-600">
                    Interfaces are shaped around the user task first, not just technical delivery.
                  </p>
                </div>
                <div className="space-y-3 rounded-[24px] bg-white/60 p-5">
                  <div className="flex items-center gap-3 text-stone-950">
                    <CheckCircle className="h-5 w-5 text-[#5f8d53]" />
                    <span className="font-medium">Reliable collaboration</span>
                  </div>
                  <p className="text-sm leading-6 text-stone-600">
                    Comfortable with handoff reviews, feedback loops, debugging, and keeping features production-ready.
                  </p>
                </div>
                <div className="space-y-3 rounded-[24px] bg-white/60 p-5">
                  <div className="flex items-center gap-3 text-stone-950">
                    <Mail className="h-5 w-5 text-[#7a6a2f]" />
                    <span className="font-medium">Clear communication</span>
                  </div>
                  <p className="text-sm leading-6 text-stone-600">
                    Direct updates, strong implementation details, and fewer surprises during delivery.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel rounded-[30px] border-0 sm:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-950">Working principles</CardTitle>
                <CardDescription className="text-stone-600">
                  The standards I keep when shipping interfaces and mobile flows.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-start gap-3 rounded-[22px] bg-white/60 p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-stone-950" />
                    <p className="text-sm leading-6 text-stone-700">{principle}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Capabilities"
            title="The strongest work sits where interface craft and implementation discipline meet."
            description="I work across responsive web interfaces, cross-platform mobile apps, and the toolchain needed to keep product teams moving."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-panel rounded-[30px] border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-stone-950">
                  <Monitor className="h-5 w-5 text-[#c6633f]" />
                  Frontend engineering
                </CardTitle>
                <CardDescription className="text-stone-600">
                  React-first interface work for dashboards, landing pages, and product surfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full border-stone-300 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-panel rounded-[30px] border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-stone-950">
                  <Smartphone className="h-5 w-5 text-[#295f86]" />
                  Mobile product delivery
                </CardTitle>
                <CardDescription className="text-stone-600">
                  Flutter apps tuned for clarity, performance, and consistent behavior across devices.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {mobileSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full border-stone-300 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-panel rounded-[30px] border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-stone-950">
                  <Sparkles className="h-5 w-5 text-[#5f8d53]" />
                  Tools and workflow
                </CardTitle>
                <CardDescription className="text-stone-600">
                  The supporting stack for collaboration, backend integration, and delivery quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {toolSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full border-stone-300 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-stone-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects across fashion, fintech, logistics, education, and productivity."
              description="The work spans customer-facing websites, admin dashboards, and mobile products. The common thread is cleaner UX backed by stable implementation."
            />
            <div className="max-w-sm rounded-[28px] border border-stone-800/10 bg-white/60 p-5 text-sm leading-6 text-stone-600">
              I focus on products that need better structure, stronger storytelling, and fewer rough edges across devices.
            </div>
          </div>

          <FeaturedProjectCard project={leadProject} />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 1} />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {moreProjects.map((project, index) => (
              <CompactProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Experience"
            title="A growing track record across agency, internship, and freelance product work."
            description="My path covers React delivery, Flutter builds, and the practical realities of working inside teams, client reviews, and shipping cycles."
          />

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.period}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-panel rounded-[30px] p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-stone-950">{item.title}</h3>
                      <p className="text-base text-stone-700">
                        {item.company} <span className="text-stone-400">•</span> {item.location}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-600">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{item.description}</p>
                  <div className="mt-5 grid gap-3">
                    {item.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3 rounded-[22px] bg-white/60 p-4">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-[#5f8d53]" />
                        <p className="text-sm leading-6 text-stone-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="glass-panel rounded-[30px] border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-950">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((item) => (
                    <div key={`${item.school}-${item.period}`} className="rounded-[22px] bg-white/60 p-5">
                      <p className="text-sm uppercase tracking-[0.16em] text-stone-500">{item.period}</p>
                      <h3 className="mt-2 text-lg font-semibold text-stone-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-stone-600">
                        {item.school} • {item.location}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-panel rounded-[30px] border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-stone-950">
                    <Award className="h-5 w-5 text-[#c6633f]" />
                    Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {training.map((item) => (
                    <div key={item} className="rounded-[22px] bg-white/60 p-4 text-sm leading-6 text-stone-700">
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="If the product needs a sharper interface, let’s talk."
              description="I’m open to frontend roles, Flutter work, freelance builds, and product collaborations that need clean execution and thoughtful UI."
            />

            <Card className="glass-panel rounded-[30px] border-0">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-stone-950 p-3 text-stone-50">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Email</p>
                    <a href="mailto:addypearl09@gmail.com" className="mt-1 block text-lg text-stone-950 hover:underline">
                      addypearl09@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-stone-950 p-3 text-stone-50">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Location</p>
                    <p className="mt-1 text-lg text-stone-950">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="rounded-[24px] bg-white/60 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Best fit</p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">
                    Product teams that care about polish, performance, and shipping interfaces that users can understand quickly.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon

                    return (
                      <Button
                        key={link.label}
                        asChild
                        variant="outline"
                        className="rounded-full border-stone-300 bg-white/70 text-stone-900 hover:bg-white"
                      >
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          <Icon />
                          {link.label}
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-panel rounded-[34px] border-0">
            <CardHeader className="space-y-3">
              <CardTitle className="text-3xl text-stone-950">Start a conversation</CardTitle>
              <CardDescription className="max-w-xl text-base leading-7 text-stone-600">
                Share the product, the role, or the feature set you need help with. I’ll respond with a clear next step.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="h-12 rounded-2xl border-stone-300 bg-white/80 text-stone-950 placeholder:text-stone-400 focus-visible:ring-stone-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="h-12 rounded-2xl border-stone-300 bg-white/80 text-stone-950 placeholder:text-stone-400 focus-visible:ring-stone-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-stone-700">
                    Project details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me what you're building and what kind of help you need."
                    className="min-h-[180px] rounded-[24px] border-stone-300 bg-white/80 text-stone-950 placeholder:text-stone-400 focus-visible:ring-stone-900"
                  />
                </div>

                {submitState.message ? (
                  <div
                    className={`flex items-start gap-3 rounded-[22px] border px-4 py-4 text-sm leading-6 ${
                      submitState.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-rose-200 bg-rose-50 text-rose-900"
                    }`}
                  >
                    {submitState.type === "success" ? (
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-none" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
                    )}
                    <span>{submitState.message}</span>
                  </div>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-stone-500">
                    Prefer email? You can also reach me directly at{" "}
                    <a href="mailto:addypearl09@gmail.com" className="text-stone-950 underline">
                      addypearl09@gmail.com
                    </a>
                    .
                  </p>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-stone-950 px-6 text-stone-50 hover:bg-stone-800"
                  >
                    <Send />
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-stone-800/10 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed and built for a sharper first impression.</p>
          <p>Oluwadamisi Damilola • Frontend and Mobile App Developer</p>
        </div>
      </footer>
    </main>
  )
}
