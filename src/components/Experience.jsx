
import "./Experience.css";
import useRevealOnScroll from "../Hooks/useRevealOnScroll"

export default function Experience({ expRef }){
 const revealRef = expRef || useRef(null);

  useRevealOnScroll(revealRef);
  return (
     <section ref={expRef} className="experienceSection">
      <div className="experienceInner">

        {/* HEADER */}
        <div className="experienceHeader">
          <h2>Experience</h2>
          <div className="underline"></div>
          <p>Where I’ve applied my skills to real-world products</p>
        </div>

        {/* ================= PDI ================= */}
        <div className="experienceCard popIn">

          <div className="experienceMeta">
            <p className="metaLine">
              <span className="metaLabel">CLIENT:</span>
              <span className="metaValue">PDI Technologies, Addison-TX</span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">ROLE:</span>
              <span className="metaBold">
                Frontend Developer | React.js, Angular, TypeScript, AWS | Energy & Retail Platforms
              </span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">PERIOD:</span>
              <span className="metaDate">Sep 2023 – Present</span>
            </p>
          </div>

          <h4 className="responsibilityTitle">Responsibilities:</h4>

          <ul className="responsibilities">
              <li>
              Enhanced web application performance by <strong>30%</strong> through the implementation of
              <strong> React.js</strong> and <strong>Redux</strong> for state management while optimizing
              UI components for a seamless user experience across devices.
            </li>
            <li>
              Decreased deployment times by <strong>40%</strong> on <strong>AWS</strong> using
              <strong> Docker</strong> and <strong>Kubernetes</strong> by automating deployment processes and containerizing applications to streamline operations and improve efficiency.
            </li>
            <li>
              Improved system scalability within a <strong>microservices architecture</strong> using
              <strong> Spring Boot</strong> and <strong>REST APIs</strong>to facilitate seamless communication between services.
            </li>
            <li>
              Streamlined code management and collaboration efforts using <strong>Git</strong> and <strong>Bitbucket</strong> for version control, 
              enhancing team productivity through effective source code management practices.
            </li>
            <li>
              Reduced bug incidents by <strong>25%</strong> through proactive monitoring and debugging using <strong>Splunk</strong> and
              <strong> Datadog</strong> ensuring high application reliability and user satisfaction. 
            </li>
          </ul>

          <div className="skillsLine">
            <span className="skillsLabel">Skills:</span>
            <span className="skillsValue">
              React.js, AWS Cloud Services, Microservices Architecture, Docker, Kubernetes
            </span>
          </div>
        </div>

        {/* ================= KEYBANK ================= */}
        <div className="experienceCard popIn">

          <div className="experienceMeta">
            <p className="metaLine">
              <span className="metaLabel">CLIENT:</span>
              <span className="metaValue">KeyBank, Cleveland-Ohio</span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">ROLE:</span>
              <span className="metaBold">
                Frontend Developer | React.js, Next.js, TypeScript | Financial Services Platforms
              </span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">PERIOD:</span>
              <span className="metaDate">Oct 2020 - Aug 2023</span>
            </p>
          </div>

          <h4 className="responsibilityTitle">Responsibilities:</h4>

          <ul className="responsibilities">
             <li>
              Enhanced user experiences and application performance by <strong>30%</strong> through the development of responsive web and 
               mobile applications utilizing <strong> React.js</strong> and <strong>React Native</strong> with Flux/Redux for UI optimization.
            </li>
            <li>
              Streamlined the development process for single-page applications by implementing <strong>GraphQL</strong> for efficient data fetching while integrating 
              backend services with <strong>Node.js</strong> to significantly improve overall application responsiveness.
            </li>
            <li>
              Legacy Modernization: Improved application scalability and reliability for cloud-based SaaS solutions by
               leveraging <strong> Google Cloud Platform</strong> along with <strong>Spring Boot</strong>, and
              <strong> MongoDB</strong> for seamless backend integration that supported increased user demand.
            </li>
            <li>
              Legacy Modernization: Reduced front-end build times by <strong>25%</strong> through the implementation of a modular architecture using Webpack for module bundling while
               optimizing code deployment via CI/CD pipelines to enhance team productivity and collaboration.
            </li>
          </ul>

          <div className="skillsLine">
            <span className="skillsLabel">Skills:</span>
            <span className="skillsValue">
              Mobile Development, IOS & Android, React Native, Node.js, GraphQL, Google Cloud Platform
            </span>
          </div>
        </div>


        <div className="experienceCard popIn">

          <div className="experienceMeta">
            <p className="metaLine">
              <span className="metaLabel">CLIENT:</span>
              <span className="metaValue">Markel, Glen Allen-VA</span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">ROLE:</span>
              <span className="metaBold">
                Senior UI Developer | React.js, AngularJS Migration, and Agile Development | Insurance Platforms
              </span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">PERIOD:</span>
              <span className="metaDate">Feb 2019 – Sep 2020</span>
            </p>
          </div>

          <h4 className="responsibilityTitle">Responsibilities:</h4>

          <ul className="responsibilities">
              <li>
            Delivered feature enhancements for customer-facing insurance portals and internal systems 
            with a<strong> Scrum-based team</strong>, improving user engagement metrics by <strong>25%</strong> through iterative 
            development cycles.
            </li>
            <li>
              Led the successful migration of <strong>legacy AngularJS</strong> applications to <strong>React</strong>, enhancing maintainability 
              and scalability of the codebase while decreasing technical debt by <strong>30%</strong> over the project lifecycle.
            </li>
            <li>
              Developed interactive screens using <strong>React.js and Redux</strong>that improved application 
              responsiveness across devices by <strong>35%</strong>, ensuring seamless user interactions in various environments.
              
            </li>
            <li>
               Integrated <strong>RESTful APIs</strong> effectively while validating request/response payloads using <strong>Postman</strong>
             to ensure robust backend communication that increased data accuracy by <strong>20%</strong> during transactions.
            </li>
            <li>
              Utilized <strong>Chrome DevTools and Firebug</strong> for performance debugging to resolve UI inconsistencies
              swiftly; optimized load times by <strong>50%</strong>, significantly enhancing overall user satisfaction scores.
            </li>
          </ul>

          <div className="skillsLine">
            <span className="skillsLabel">Skills:</span>
            <span className="skillsValue">
           React.js, AngularJS, Agile Development, API Integration, Performance Optimization
            </span>
          </div>
        </div>

        {/* ================= GUCONS ================= */}
        <div className="experienceCard popIn">

          <div className="experienceMeta">
            <p className="metaLine">
              <span className="metaLabel">CLIENT:</span>
              <span className="metaValue">Gucons Solutions, India</span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">ROLE:</span>
              <span className="metaBold">
                Front End Developer | React.js, Redux, AngularJS, Node.js | Insurance Network </span>
            </p>

            <p className="metaLine">
              <span className="metaLabel">PERIOD:</span>
              <span className="metaDate">Jun 2016 – July 2018</span>
            </p>
          </div>

          <h4 className="responsibilityTitle">Responsibilities:</h4>

          <ul className="responsibilities">
          <li>
              Developed responsive customer portals and internal dashboards using <strong>React.js</strong> and <strong>Redux</strong> that 
              improved user experience by <strong>25%</strong>, enhancing overall service management efficiency across platforms.
            </li>
            <li>
              Maintained and optimized legacy <strong>AngularJS</strong> modules to ensure seamless routing and data binding
              for real-time usage tracking in billing systems, resulting in a <strong> 20%</strong> reduction in system errors.
            </li>
            <li>
              Integrated <strong>D3.js</strong> visualizations into React components to effectively display network performance 
              metrics and usage patterns, leading to improved decision-making processes for stakeholders.
            </li>
           
            <li>
              Created dynamic <strong>Node.js</strong> modules that aligned with design requirements to support scalable functionalities within the
              application architecture while improving load times by <strong> 15%</strong>.
            </li>
            <li>
              Designed reusable UI components following object-oriented programming principles that streamlined development processes
              across multiple projects, saving an estimated <strong>40 hours</strong> of development time per project cycle.
            </li>
            <li>
              Collaborated within <strong>Agile</strong> teams during daily stand-ups and sprint reviews to align deliverables
              with business requirements while ensuring timely project completion within set deadlines. 
            </li>
          </ul>

          <div className="skillsLine">
            <span className="skillsLabel">Skills:</span>
            <span className="skillsValue">
              React.js, Redux, AngularJS, Node.js
            </span>
          </div>
        </div>

{/* ================= CERTIFICATIONS ================= */}
<div className="competencies">

  <h3>Certifications</h3>
  <div className="underline" />

  <div className="eduCertGrid">
  
      <ul className="certList">
       <li>
  <strong>
    Meta Front-End Developer Professional Certificate
  </strong>
  <span className="certLink">
    {" "}(
    <a
      href="https://www.credly.com/go/AQOPI4Qg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Credly
    </a>
    )
  </span>
</li>
<li>
  <strong>
    Generative AI: The Future of UX/UI Design —{" "}
    <span className="certProvider">IBM</span>
  </strong>
  <span className="certCode"> (9LWTJ4NN88HM)</span>
</li>

<li>
  <strong>
    Explore a Career in Front-End Web Development —{" "}
    <span className="certProvider">LinkedIn</span>
  </strong>
</li>

<li>
  <strong>
    Career Essentials in Generative AI —{" "}
    <span className="certProvider">Microsoft & LinkedIn</span>
  </strong>
</li>

      </ul>
    </div>
</div>


      </div>
    </section>
  );
}
