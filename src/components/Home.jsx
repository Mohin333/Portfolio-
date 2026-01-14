import { useEffect, useState } from "react";
import useRevealOnScroll from "../Hooks/useRevealOnScroll"
import "./Home.css";
import workspaceSvg from "../assets/workspace.svg";



export default function Home({ homeRef}) {
   const revealRef = homeRef || useRef(null);

  useRevealOnScroll(revealRef);
  
  const roles = ["Frontend Developer", "Full-Stack Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section ref={homeRef} className="homeSection fadeIn">
      <div className="homeInner">

        {/* LEFT CONTENT */}
        <div className="homeText">
          <div className="introLabel">HELLO, IT’S ME</div>

          <h1 className="heroName">
            MOHIN CHANDRA
          </h1>

          <h2 className="heroRole">
            And I’m a{" "}
            <span className="typing">
              {text}
              <span className="cursor">|</span>
            </span>
          </h2>

          <p className="heroDesc">
            I build responsive web and mobile applications that improve
            usability, performance, and real-world product experience.
          </p>

      <div className="homeActions">
 

  <div className="actionItem">
<a
  href={`${import.meta.env.BASE_URL}Mohin UI_UX Developer Resume.docx`}
  target="_blank"
  className="secondaryBtn"
>
  Download CV ↓
</a>

  </div>
</div>

        </div>

        {/* RIGHT CONTENT — NOT TOUCHED */}
        <div className="homeRight">
          <div className="illustrationWrap">

            {/* TECH BUBBLES */}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="techBubble techReact"
            >
              React
            </a>

            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="techBubble techTS"
            >
              TypeScript
            </a>

            <a
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="techBubble techAWS"
            >
              AWS
            </a>

            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="techBubble techNode"
            >
              Gatsby.js
            </a>

            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="techBubble techFigma"
            >
              Figma
            </a>

            {/* WORKSPACE SVG */}
            <img
              src={workspaceSvg}
              alt="Designer workspace illustration"
              className="workspaceImg"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
