import { useEffect, useRef, useState } from "react";
import useRevealOnScroll from "../Hooks/useRevealOnScroll"
import "./About.css";

export default function About({ aboutRef }) {
   const revealRef = aboutRef || useRef(null);

  useRevealOnScroll(revealRef);
  const statsRef = useRef(null);
  const observerRef = useRef(null);

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [tech, setTech] = useState(0);

  const startCounting = () => {
    let y = 0, p = 0, t = 0;

    const interval = setInterval(() => {
      if (y < 5) y++;
      if (p < 20) p += 2;
      if (t < 10) t++;

      setYears(y);
      setProjects(p);
      setTech(t);

      if (y >= 5 && p >= 20 && t >= 10) clearInterval(interval);
    }, 100);
  };

  const resetStats = () => {
    setYears(0);
    setProjects(0);
    setTech(0);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          resetStats();
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observerRef.current.observe(statsRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section ref={aboutRef} className="aboutSection">
      {/* TITLE */}
      <div className="aboutHeader">
        <h2>About Me</h2>
        <div className="underline" />
      </div>

      {/* CONTENT */}
      <div className="aboutGrid">
        {/* LEFT TEXT */}
        <div className="aboutText">
          <p>
            I thrive on the challenge of transforming complex ideas into seamless
            digital experiences. I have always been fascinated by the power of
            technology to simplify our lives and enhance our experiences.
          </p>

          <p>
            My journey as a developer started at Lovely Professional University,
            where I earned my Bachelor’s in Computer Science Engineering. Since
            then, I’ve had the pleasure of working with talented teams at{" "}
            <strong>PDI Technologies</strong> and <strong>KeyBank</strong>.
          </p>

          <p>
            At <strong>PDI Technologies</strong>, I enhanced web application
            performance by <strong>30%</strong> using React.js and Redux. At{" "}
            <strong>KeyBank</strong>, I built responsive web and mobile
            applications using React.js and React Native, again improving
            performance by <strong>30%</strong>.
          </p>

          <p>
            Earlier, as a Frontend Developer at {""}<strong>Gucons Solutions</strong> in India, I
            developed dynamic single-page applications using Angular, RxJS, and
            NgRx for state management. Outside of work, I enjoy staying connected with the tech 
            community through meetups and online forums where we share insights about 
            new technologies and trends. It’s inspiring to see how passionate individuals 
            come together to innovate and push boundaries.
          </p>
        </div>

        {/* STATS */}
        <div ref={statsRef} className="aboutStats">
          <div className="stat">
            <span className="statNumber">{years}+</span>
            <span className="statLabel">Years Experience</span>
          </div>

          <div className="stat">
            <span className="statNumber">{projects}+</span>
            <span className="statLabel">Projects</span>
          </div>

          <div className="stat">
            <span className="statNumber">{tech}+</span>
            <span className="statLabel">Technologies</span>
          </div>
        </div>
      </div>

      {/* CORE COMPETENCIES */}
      <div className="competencies">
        <h3>Core Competencies</h3>
        <div className="underline" />

        <p className="competenciesList">
          Frontend Development • UI/UX Design • State Management • Backend & APIs
          • Testing & QA • Performance & SEO • Version Control & Collaboration •
          DevOps & Deployment • Database Management & Visualization •
          Cross-Platform Expertise
        </p>
      </div>
    </section>
  );
}
