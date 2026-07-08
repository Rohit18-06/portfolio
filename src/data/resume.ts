export const resume = {
  name: "Oruganti Venkata Rohit",
  shortName: "Rohit Oruganti",
  title: "Computer Science Student · Full-Stack & Cloud Enthusiast",
  tagline: "I build data-driven web experiences with AI, cloud and clean engineering.",
  location: "Hyderabad, India",
  email: "orugantivenkatarohit2005@gmail.com",
  phone: "+91 8790066630",
  linkedin: "https://linkedin.com/in/rohit-oruganti",
  resumeUrl: "/Rohit_Oruganti_Resume.pdf",
  about: {
    summary:
      "Computer Science undergraduate at GITAM Deemed to be University with hands-on experience across full-stack development, data analytics and cloud solution architecture. I enjoy turning complex problems into clean, reliable software — from AI-powered chatbots to end-to-end management systems.",
    objective:
      "Looking for internships and early-career roles where I can ship real products, learn from strong engineers and grow across the modern web, data and cloud stack.",
    strengths: [
      "Problem-Solving",
      "Analytical & Critical Thinking",
      "Strong Communication",
      "Team Player",
      "Adaptability",
    ],
  },
  stats: [
    { label: "CGPA", value: "7.57", suffix: "/10" },
    { label: "Projects Shipped", value: "2", suffix: "+" },
    { label: "Certifications", value: "4", suffix: "" },
    { label: "Hackathons", value: "1", suffix: "" },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 78 },
        { name: "C", level: 72 },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", level: 88 },
        { name: "CSS", level: 82 },
        { name: "REST APIs", level: 80 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "SQL", level: 82 },
        { name: "MySQL", level: 82 },
        { name: "DBMS", level: 85 },
      ],
    },
    {
      category: "AI / Data",
      items: [
        { name: "Gemini API", level: 78 },
        { name: "Data Analysis", level: 75 },
        { name: "DSA", level: 80 },
      ],
    },
    {
      category: "Cloud & Networking",
      items: [
        { name: "AWS Architecture", level: 72 },
        { name: "Cisco Packet Tracer", level: 78 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: 82 },
        { name: "VS Code", level: 90 },
        { name: "Cisco NetAcad", level: 75 },
      ],
    },
    {
      category: "Core CS",
      items: [
        { name: "OOP", level: 85 },
        { name: "Operating Systems", level: 78 },
        { name: "Computer Networks", level: 78 },
        { name: "Software Engineering", level: 80 },
      ],
    },
  ],
  experience: [
    {
      company: "Deloitte (via Forage)",
      role: "Data Analytics Job Simulation",
      period: "January 2026",
      bullets: [
        "Analyzed real client datasets to surface actionable business insights.",
        "Built dashboards and visualizations communicating findings to stakeholders.",
        "Practiced Deloitte's data-driven consulting workflow end-to-end.",
      ],
      tech: ["Data Analysis", "Dashboards", "Storytelling"],
    },
    {
      company: "Amazon Web Services (via Forage)",
      role: "Solution Architecture Job Simulation",
      period: "January 2026",
      bullets: [
        "Designed cloud architectures using AWS best practices for scalability and cost.",
        "Translated customer requirements into hosting and service recommendations.",
        "Documented architecture decisions and trade-offs like a real SA.",
      ],
      tech: ["AWS", "Solution Architecture", "Cloud Design"],
    },
  ],
  projects: [
    {
      name: "Live Crypto Market Analysis Chatbot",
      description:
        "AI-powered chatbot delivering real-time cryptocurrency market insights by pairing live web data feeds with the Gemini API.",
      features: [
        "Real-time market data ingestion pipeline",
        "Technical chart interpretation & pattern recognition",
        "Automated trend analysis with strategy suggestions",
      ],
      tech: ["Python", "Gemini API", "REST API", "Web Integration"],
    },
    {
      name: "Hospital Management System",
      description:
        "Full-stack hospital management application with admin controls, patient registration, secure login and appointment booking.",
      features: [
        "Role-based admin and patient workflows",
        "Secure Python backend with MySQL persistence",
        "Automated appointment and record management",
      ],
      tech: ["Python", "MySQL", "Full Stack"],
    },
  ],
  education: [
    {
      degree: "B.Tech, Computer Science",
      school: "GITAM Deemed to be University",
      period: "2023 – 2027",
      score: "CGPA 7.57 / 10",
      coursework: [
        "Data Structures & Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Object-Oriented Programming",
      ],
    },
  ],
  certifications: [
    { name: "Data Analytics Job Simulation", issuer: "Deloitte · Forage" },
    { name: "Solution Architecture Job Simulation", issuer: "AWS · Forage" },
    { name: "Networking Basics", issuer: "Cisco Networking Academy · Coursera" },
    { name: "Introduction to Packet Tracer", issuer: "Cisco Networking Academy · Coursera" },
  ],
  achievements: [
    {
      title: "Smart India Hackathon — 24hr Internal Round",
      org: "GITAM University",
      date: "September 2024",
    },
    {
      title: "Certified in Data Analytics",
      org: "Deloitte · Forage",
      date: "January 2026",
    },
    {
      title: "AWS Solution Architecture Certified",
      org: "Amazon Web Services · Forage",
      date: "January 2026",
    },
  ],
} as const;

export type Resume = typeof resume;
