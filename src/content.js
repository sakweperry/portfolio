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

    about: `I'm Bomene Perry Sakwe, a Full-Stack Developer and Bachelor of Computer Applications (BCA) student passionate about building secure, responsive, and modern web applications — end to end.

Currently pursuing my BCA at Swami Vivekanand Group of Institutes in Punjab, India, I'm continuously expanding my skills across the stack — from Java and Spring Boot backends to React and Tailwind frontends — while 
working on projects that sharpen my technical and problem-solving abilities.

I believe great software is built by people who never stop learning. I'm always eager to improve, embrace new challenges, and collaborate with others to create impactful digital solutions.

My journey into technology began with a software development internship at Landmark Software Solution in Cameroon, where I worked with HTML, CSS, and JavaScript to build web applications, develop new features, fix bugs,
 test software, and maintain existing codebases. That experience strengthened my passion for creating clean, functional, and engaging digital products — and led me to build my flagship project, SCF Media, a secure full-stack photo platform where only the rightful owner can download their images.`,

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