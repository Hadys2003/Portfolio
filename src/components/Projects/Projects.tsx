import styles from "./Projects.module.css";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "OptiFlow",
    kicker: "Full Stack • AI Automation (2025)",
    description:
      "AI-powered workflow automation platform that turns natural-language instructions into editable workflows, integrates with cloud tools, and supports human-in-the-loop approvals.",
    stack: ["TypeScript",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Firebase",
    "Firestore",
    "Docker",
    "Google Gemini API",
    "Microsoft Graph API"],
    repo: "https://github.com/Hadys2003/optiflow", // Recheck when official
    image: "/assets/optiflow.png",     // Files path in public/assets
    imageFit: "contain",            // or "contain" not cropped, cover is the default
  },
  {
    title: "Travel Companion App",
    kicker: "Full Stack Web App (2025)",
    description:
    "Responsive travel platform providing real-time city data, business listings, and local information for hotels, rentals, restaurants, attractions, weather, and events.",
    stack: [ "HTML",
    "CSS",
    "JavaScript",
    "REST API",
    "localStorage",],
    repo: "https://github.com/Hadys2003/TravelCompanionApp",
    image: "/assets/TravelCompanionApp.png",
    imageFit: "contain",
  },
  {
    title: "CPU Simulation & Custom Language",
    kicker: "C++ • Systems Programming (2023)",
    description:
    "Simulated CPU with a custom programming language, including registers, memory, and an instruction set for executing simple programs.",
    stack: ["C++", "OOP", "Simulation", "Parsing"],
    image: "/assets/CPU.png",
    imageFit: "contain",
  },
  {
    title: "Salon Booking Platform",
    kicker: "Web App • PHP (2023)",
    description:
    "Appointment booking platform for a women’s hair salon, allowing clients to schedule, reschedule, and cancel visits through a user-friendly web interface.",
    stack: ["PHP", "Symfony", "MySQL", "HTML", "CSS"],
    image: "/assets/SalonApp.png",
    imageFit: "contain",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <header className={styles.head}>
        <h2>Projects</h2>
        <p>Hands-on work that reflects my skills in building and shipping software.</p>
      </header>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} {...p} accentIndex={i} />
        ))}
      </div>

      {/* Call-to-action buttons */}
    <div className={styles.actions}>
        <a href="#skills" className={`${styles.ctaBtn} ${styles.secondary}`}>
            View Skills
        </a>
        <a href="#contact" className={`${styles.ctaBtn} ${styles.primary}`}>
            Contact Me
        </a>
    </div>
    </section>
  );
}
