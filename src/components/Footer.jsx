import "./Footer.css";

export default function Footer({ sections }) {
  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer">
      <div className="footerInner">

        {/* LEFT */}
        <div className="footerCol brand">
          <h3>Mohin Portfolio</h3>
          <p>
            Frontend & Full-Stack Developer crafting clean,
            scalable, and human-friendly experiences.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footerCol links">
          <h4>Explore</h4>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <button onClick={() => scrollTo(s.ref)}>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footerCol contact bigContact">
          <h4>Connect</h4>
          <span><strong>Location:</strong> Dallas, TX</span>
          <span><strong>Email:</strong> mohinchandrap@gmail.com</span>
          <span><strong>Phone:</strong> +1 (469) 377- 0064</span>

          <a
            href="https://www.linkedin.com/in/mohinpendyala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>LinkedIn:</strong> linkedin.com/in/mohinpendyala
          </a>
        </div>

      </div>

      <div className="footerBottom">
        © 2025 MohinPortfolio — All rights reserved
      </div>
    </footer>
  );
}
