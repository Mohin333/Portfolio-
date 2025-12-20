import { useState } from "react";
import useRevealOnScroll from "../Hooks/useRevealOnScroll"
import "./Skills.css";

const SKILLS = {
  Languages: [
    "HTML", "HTML5", "CSS2/CSS3", "JavaScript", "TypeScript",
    "Java", "SQL", "JSON", "XML", "ES6",
    "AJAX", "jQuery", "PHP", "XHTML"
  ],

  Frameworks: [
    "ReactJS", "Redux", "AngularJS", "Gatsby.js", "Next.js",
    "Node.js", "React Native",
    "Spring Boot", "Spring MVC", "Spring Security",
    "Spring Data", "Spring AOP"
  ],

  "JS Libraries": [
    "Bootstrap", "Tailwind CSS", "Material UI", "Ant Design", "jQuery"
  ],

  Testing: [
    "Jest", "Enzyme", "Jasmine", "Karma",
    "Cypress", "React Testing Library"
  ],

  "Cloud / DevOps": [
    "Docker", "Kubernetes", "Jenkins",
    "GitHub Actions", "GitLab CI/CD", "Azure DevOps"
  ],

  Backend: [
    "Express.js", "REST APIs", "GraphQL", "Spring Boot"
  ],

  Databases: [
    "PostgreSQL", "MySQL", "MongoDB", "SQL Server", "IBM Db2"
  ],

  Tools: [
    "Git", "GitHub", "Bitbucket", "GitLab",
    "Figma", "Adobe XD", "Sketch",
    "Agile (Scrum)", "Kanban", "Waterfall",
    "Power BI", "IntelliJ IDEA", "VS Code", "Eclipse"
  ],
};

export default function Skills({ skillsRef }) {
   const revealRef = skillsRef || useRef(null);

  useRevealOnScroll(revealRef);
  const categories = Object.keys(SKILLS);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section ref={skillsRef} className="skillsSection">
      <div className="skillsInner">

        {/* HEADER */}
        <div className="skillsHeader">
          <h2>Technical Skills</h2>
          <div className="underline"></div>
          <p>My expertise across various technologies and tools</p>
        </div>

        {/* TABS */}
        <div className="skillsTabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skillsTab ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SKILLS */}
        <div className="skillsGrid">
          {SKILLS[activeTab].map((skill) => (
            <a
              key={skill}
              href={`https://www.google.com/search?q=${encodeURIComponent(skill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="skillPill"
            >
              {skill}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
