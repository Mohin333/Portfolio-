import { useMemo, useRef, useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import LetsConnect from "./components/LetsConnect";  
import Footer from "./components/Footer";                                                 
import "./index.css";

export default function MohinPortfolio() {
  const [openLeftPanel, setOpenLeftPanel] = useState(false);
  const [openRightPanel, setOpenRightPanel] = useState(false);

  const topBarRef = useRef<HTMLDivElement | null>(null);

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);
  const connectRef = useRef<HTMLElement | null>(null);

  const sections = useMemo(() => [
    { id: "home", ref: homeRef, label: "Home" },
    { id: "about", ref: aboutRef, label: "About" },
    { id: "skills", ref: skillsRef, label: "Skills" },
    { id: "experience", ref: expRef, label: "Experience" },
    { id: "connect", ref: connectRef, label: "Let’s Connect" },
  ], []);

  const scrollToSection = (ref: any) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpenLeftPanel(false);
    setOpenRightPanel(false);
  };

  useEffect(() => {
    document.body.style.overflow =
      openLeftPanel || openRightPanel ? "hidden" : "auto";
  }, [openLeftPanel, openRightPanel]);

  return (
    <>
      {/* TOP BAR */}
      <div ref={topBarRef} className="topBar">
        <div className="sidePill" onClick={() => setOpenLeftPanel(true)}>
          Mohin Portfolio
        </div>

        <nav className="navPill">
          {sections.map((s) => (
            <span key={s.id} onClick={() => scrollToSection(s.ref)}>
              {s.label}
            </span>
          ))}
        </nav>

        <div className="sidePill menu" onClick={() => setOpenRightPanel(true)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* SECTIONS */}
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef ={skillsRef} />
      <Experience expRef ={expRef} />
      <LetsConnect connectRef ={connectRef} />

 {/* LEFT PANEL */}
<aside className={`sidePanel left ${openLeftPanel ? "open" : ""}`}>
  <button
    className="panelClose"
    onClick={() => setOpenLeftPanel(false)}
  >
    ✕
  </button>

  <div className="panelBody">
    <div className="panelBrand">
      <div className="logoCircle">M</div>
      <h2>Mohin Portfolio</h2>
    </div>

    <nav className="panelNav">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollToSection(s.ref, s.id)}
        >
          {s.label}
        </button>
      ))}
    </nav>

    <div className="panelFooter">
      © MohinPortfolio
    </div>
  </div>
</aside>

{/* RIGHT PANEL */}
<aside className={`sidePanel right ${openRightPanel ? "open" : ""}`}>
  <button
    className="panelClose"
    onClick={() => setOpenRightPanel(false)}
  >
    ✕
  </button>

  <div className="panelBody">
    <div className="panelBrand">
      <div className="logoCircle">M</div>
      <h2>Mohin</h2>
    </div>

    <p className="panelBio">
  Frontend and FullstackDeveloper with experience in Web Development, building responsive web and mobile applications 
  using HTML, CSS, JavaScript (ES6+), ReactJS, Redux, Angular, React Native and Vue.js. Skilled in reusable component design, state management (Redux Toolkit, Context API, NgRx), and API integration (REST, GraphQL). Experienced in backend development with Node.js, Express, and Spring Boot, and deploying secure apps via CI/CD pipelines in Kubernetes environments. 
  Proficient in UI/UX design tools (Figma, Adobe XD, Sketch), testing frameworks (Jest, Cypress, JUnit), and Agile/Scrum collaboration.
    </p>

<div className="panelInfo">
  <span>📍 Dallas, TX</span>

  <span>
    📧 <a href="mailto:mohinchandrap@gmail.com">
      mohinchandrap@gmail.com
    </a>
  </span>

  <span className="linkedinRow">
    <svg
      className="linkedinIcon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.56V24H.22zM8.98 8.98h4.38v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.99V24h-4.56v-6.7c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.98z"
      />
    </svg>

    <a
      href="https://www.linkedin.com/in/mohinpendyala/"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin.com/in/mohinpendyala
    </a>
  </span>
</div>

<button
  className="panelCTA"
  onClick={() => scrollToSection(connectRef)}
>
  Let’s Talk →
</button>

  </div>
</aside>

      <Footer sections={sections} />
    </>
  );
}
