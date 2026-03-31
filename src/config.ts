// ===== Astro Sakura Blog — Site Configuration =====
// Edit this file to personalize your blog.
// All site info is centralized here — no need to touch other files.

export const siteConfig = {
  // ===== Basic Info =====
  name: "Sakura Blog",
  description: "A beautiful Astro blog with cherry blossom aesthetics.",
  url: "https://example.com",
  language: "en",

  // ===== Author =====
  author: {
    name: "Your Name",
    tagline: "Writer / Developer / Creator",
    avatar: "/images/avatar.png",
    motto: "The best time to start is now.",
  },

  // ===== Navigation =====
  nav: [
    { href: "/", label: "Home", icon: "home" },
    { href: "/projects", label: "Projects", icon: "projects" },
    { href: "/blog", label: "Blog", icon: "blog" },
    { href: "/about", label: "About", icon: "about" },
  ],

  // ===== Hero Section (Homepage) =====
  hero: {
    heading: "Welcome to<br/>My Blog",
    subheading: "Writer / Developer / Creator",
    description: "A place for my thoughts, projects, and creative experiments.",
    ctaPrimary: { text: "View Projects →", href: "/projects" },
    ctaSecondary: { text: "Read Blog →", href: "/blog" },
  },

  // ===== Quotes (Homepage) =====
  quotes: {
    items: [
      "The only way to do great work is to love what you do.",
      "Stay hungry, stay foolish.",
      "In the middle of difficulty lies opportunity.",
    ],
    source: "",
  },

  // ===== Sidebar =====
  sidebar: {
    announcement: "Welcome to my blog! Feel free to explore.",
    musicNote: "Music player is active. Click the player in the bottom-right corner.",
  },

  // ===== Projects (shown on homepage & projects page) =====
  projects: [
    {
      title: "My Project",
      description: "A short description of your project. What it does and why it matters.",
      status: "In Progress",
      tech: "Astro",
      image: "/images/covers/cover-1.webp",
      link: "/projects",
    },
  ],

  // ===== Social Links (footer & about page) =====
  // Set to "" to hide a link
  social: {
    github: "https://github.com/your-username",
    twitter: "",
    bilibili: "",
    email: "you@example.com",
    rss: true,
  },

  // ===== Footer =====
  footer: {
    copyright: "Sakura Blog",
    poweredBy: true,
  },

  // ===== Comments (Waline) =====
  // Set serverURL to "" to disable comments
  comments: {
    serverURL: "",
    emoji: ["/emojis/bilibili", "/emojis/tieba"],
  },

  // ===== Analytics =====
  // Set provider to "" to disable
  analytics: {
    provider: "",   // "51la" | "google" | ""
    id: "",
  },

  // ===== Loading Screen =====
  loadingScreen: {
    enabled: true,
    text: "Sakura Blog",
  },

  // ===== About Page =====
  about: {
    bio: "Write your bio here. Tell visitors about yourself, your interests, and what they can expect from this blog.",
    skills: ["Astro", "Tailwind CSS", "TypeScript"],
    timeline: [
      { date: "2026.03", event: "Started my blog", status: "" },
    ],
    contact: {
      email: "you@example.com",
      github: "your-username",
      extra: "",
    },
  },
};
