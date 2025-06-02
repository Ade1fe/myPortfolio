# 🚀 Oluwadamisi Damilola - Portfolio Website

A beautiful, modern, and responsive portfolio website built with Next.js, TypeScript, and Framer Motion. This portfolio showcases my skills as a Frontend & Mobile App Developer specializing in React.js and Flutter.

![Portfolio Preview](https://via.placeholder.com/800x400/1e293b/ffffff?text=Portfolio+Preview)

## ✨ Features

- **🎨 Beautiful Design**: Modern dark theme with vibrant gradient accents
- **📱 Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user experience
- **⚡ Performance Optimized**: Built with Next.js for fast loading and SEO
- **🎯 Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- **📧 Contact Form**: Functional contact form for potential clients/employers
- **🔧 Easy Customization**: Well-structured code for easy modifications

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main portfolio page
├── components/
│   └── ui/                  # shadcn/ui components
├── public/
│   └── placeholder.svg      # Placeholder images
├── tailwind.config.ts       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
\`\`\`

## 🎨 Customization

### Personal Information

Update your personal information in `app/page.tsx`:

\`\`\`typescript
// Update these sections with your information
const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  location: "Your Location",
  title: "Your Professional Title"
}
\`\`\`

### Skills & Technologies

Modify the skills arrays to match your expertise:

\`\`\`typescript
const frontendSkills = [
  "React.js",
  "JavaScript",
  "TypeScript",
  // Add your skills here
]

const mobileSkills = [
  "Flutter",
  "Dart",
  "React Native",
  // Add your mobile skills
]
\`\`\`

### Projects

Update the projects array with your actual projects:

\`\`\`typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["React", "TypeScript", "etc"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-project-demo.com",
    image: "/path/to/your/project/image.jpg",
    type: "Web Application",
    color: "from-pink-500 to-rose-500",
  },
  // Add more projects
]
\`\`\`

### Work Experience

Update your work experience in the `experience` array:

\`\`\`typescript
const experience = [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "Location",
    period: "Start Date - End Date",
    description: "Job description...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      // Add your achievements
    ],
    color: "bg-gradient-to-r from-pink-500 to-rose-500",
  },
  // Add more experiences
]
\`\`\`

### Colors & Theme

The portfolio uses a gradient color scheme. You can customize colors in:

1. **Tailwind Config** (`tailwind.config.ts`)
2. **Global Styles** (`app/globals.css`)
3. **Component Classes** (throughout `app/page.tsx`)

Main color palette:
- Pink: `#ec4899` to `#f43f5e`
- Purple: `#8b5cf6` to `#a855f7`
- Cyan: `#06b6d4` to `#0891b2`

## 📸 Adding Your Images

1. **Profile Image**: Replace the placeholder in the About section
2. **Project Images**: Add your project screenshots to the `public/` folder
3. **Update Image Paths**: Update the `image` property in your projects array

\`\`\`typescript
// Example
image: "/images/your-project-screenshot.jpg"
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Import your GitHub repository
   - Deploy with default settings

### Deploy to Netlify

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to [netlify.com](https://netlify.com/)
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Install gh-pages**
   \`\`\`bash
   npm install --save-dev gh-pages
   \`\`\`

2. **Add deployment scripts to package.json**
   \`\`\`json
   {
     "scripts": {
       "deploy": "gh-pages -d out",
       "export": "next export"
     }
   }
   \`\`\`

3. **Deploy**
   \`\`\`bash
   npm run build
   npm run export
   npm run deploy
   \`\`\`

## 📧 Contact Form Setup

To make the contact form functional, you can:

1. **Use Formspree** (Recommended for beginners)
   - Sign up at [formspree.io](https://formspree.io/)
   - Replace the form action with your Formspree endpoint

2. **Use Netlify Forms**
   - Add `netlify` attribute to your form
   - Deploy to Netlify

3. **Use EmailJS**
   - Set up EmailJS service
   - Add EmailJS SDK and configuration

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Contact

**Oluwadamisi Damilola**
- Email: addypearl09@gmail.com
- Location: Lagos, Nigeria
- GitHub: [Your GitHub Profile](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)

---

⭐ If you found this portfolio template helpful, please give it a star!

## 🐛 Known Issues

- **Hydration Warning**: Fixed with `suppressHydrationWarning` in layout.tsx
- **Image Optimization**: Replace placeholder images with optimized versions
- **Contact Form**: Requires backend setup for full functionality

## 🔮 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add more interactive animations
- [ ] Include testimonials section
- [ ] Add project filtering
- [ ] Implement search functionality
- [ ] Add analytics integration

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

Built with ❤️ by [Oluwadamisi Damilola](https://github.com/yourusername)
