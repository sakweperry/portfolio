export const content = {
  name: "Perry Sakwe",
  title: "Full-Stack Developer",
  tagline:
    "I build secure, real-world web apps end-to-end — from Java & Spring Boot backends to React & Tailwind frontends.",
  email: "sakweperry231@gmail.com",
  phone: "+91 7696278360",
  location: "Patiala, Punjab, India",
  links: {
    github: "https://github.com/sakweperry",
    linkedin: "https://www.linkedin.com/in/bomeneperry",
    perryfinder: "https://perryfinder.netlify.app/",
  },

  about: `I'm an entry-level full-stack developer based between Cameroon and India, currently studying Computer Applications while building real software on the side.

I didn't start with a CS degree. I started by shipping things — an internship at Landmark Software Solution, freelance client work, and solo projects like SCF Media. Along the way I learned that the best way to grow as an engineer is to build something real and finish it.

I work across the stack: Java and Spring Boot on the backend, React and Tailwind on the frontend, SQL in between. I care about clean code, secure systems, and shipping things that actually work.

When I'm not coding, I'm on the football pitch or deep in a game — both taught me more about teamwork and patience than I expected.`,

  skills: {
    Languages: ["Java", "JavaScript", "SQL", "HTML", "CSS", "C", "C++"],
    Frameworks: ["Spring Boot", "React", "Tailwind CSS", "Bootstrap"],
    Databases: ["SQL"],
    Tools: ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
    Concepts: [
      "REST APIs",
      "Authentication & Authorization",
      "Responsive Design",
    ],
  },

  projects: [
    {
      id: "scf-media",
      name: "SCF Media",
      subtitle: "Secure Photo Sharing Platform",
      role: "Full-Stack Developer",
      stack: ["React", "Tailwind", "Java", "Spring Boot", "SQL"],
      problem:
        "People share photos across dozens of platforms with no control over who can actually download them. Once uploaded, images are fair game.",
      solution:
        "A full-stack platform where users upload photos and only the rightful owner can download them. Built the React frontend, the Spring Boot REST API, and the SQL schema from scratch.",
      outcome:
        "Shipped end-to-end solo. Delivered on time to a client in India.",
      featured: true,
      link: null,
    },
    {
      id: "landmark",
      name: "Landmark Software Solution",
      subtitle: "Software Development Intern",
      role: "Software Development Intern",
      stack: ["HTML", "CSS", "JavaScript"],
      problem: null,
      solution:
        "Contributed to a live codebase — building new features, fixing bugs, and maintaining existing modules. Ran QA testing and documented software requirements with the team.",
      outcome:
        "Shipped production features as an intern and learned how real codebases are structured, reviewed, and maintained.",
      featured: true,
      link: null,
    },
    {
      id: "perryfinder",
      name: "PerryFinder",
      subtitle: "Local Services Connector",
      role: "Frontend Developer",
      stack: ["HTML", "Tailwind"],
      problem: null,
      solution:
        "A landing platform that connects people to local service providers — plumbers, electricians, and more. Built the responsive UI and service-browsing experience.",
      outcome: "Designed and deployed a clean, mobile-first interface.",
      featured: true,
      link: "https://perryfinder.netlify.app/",
    },
  ],

  blog: [
    {
      slug: "scf-media",
      title:
        "How I Built SCF Media (and What I Learned About Secure File Access)",
      date: "Coming soon",
      excerpt:
        "The problem, why I chose Spring Boot, how the auth and download logic works, and what I'd do differently next time.",
    },
    {
      slug: "spring-boot-mental-model",
      title: "Java + Spring Boot for Beginners: The Mental Model I Wish I Had",
      date: "Coming soon",
      excerpt:
        "Controllers, services, and repositories explained simply — using examples from my own projects.",
    },
    {
      slug: "tailwind-vs-bootstrap",
      title: "Why I Chose Tailwind Over Bootstrap (and When I Still Use Bootstrap)",
      date: "Coming soon",
      excerpt:
        "A short, honest take on utility-first CSS and when a component library still wins.",
    },
  ],
};