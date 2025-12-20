import { useState } from "react";
import "./LetsConnect.css";
import TicTacToe from "./TicTacToe.jsx";

export default function Connect({ connectRef }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
   <section ref={connectRef} id="connect" className="connectSection">
      <div className="connectInner">
        {/* SECTION HEADER */}
        <div className="connectHeader">
          <h2>Let’s Connect</h2>
          <div className="underline"></div>
        </div>

        {/* CONTENT GRID */}
        <div className="connectContent">
          {/* LEFT FORM CARD */}
          <div className="connectCard popIn">
            {!submitted ? (
              <>
                <h3 className="contactTitle">CONTACT ME</h3>

                <p className="contactIntro">
                  I’m open for new opportunities, collaborations, or innovative ideas.
                  If you’re building something meaningful, let’s talk.
                </p>

                <form className="connectForm" onSubmit={handleSubmit} noValidate>
                  <div className="formRow">
                    <div className="formGroup">
                      <label>First Name</label>
                      <input
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "error" : ""}
                      />
                    </div>

                    <div className="formGroup">
                      <label>Last Name</label>
                      <input
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "error" : ""}
                      />
                    </div>
                  </div>

                  <div className="formRow">
                    <div className="formGroup">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        placeholder="+1 (123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "error" : ""}
                      />
                    </div>

                    <div className="formGroup">
                      <label>Company (Optional)</label>
                      <input
                        name="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="formGroup">
                    <label>Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell me about your idea, role, or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "error" : ""}
                    />
                  </div>

                  <div className="submitRow">
                    <button type="submit" className="submitBtn" disabled={loading}>
                      {loading ? "Sending..." : "Submit →"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="successState popIn">
                <h3>Message Sent ✅</h3>
                <p>Thanks for reaching out. I’ll get back to you shortly.</p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE (MAP ON TOP + GAME BELOW) */}
          <div className="connectRight">
            <div className="mapBox popIn">
              <iframe
                title="Dallas Location"
                src="https://www.google.com/maps?q=Dallas,TX&z=11&output=embed"
                loading="lazy"
              />
            </div>

            {/* ✅ NOW THIS IS INSIDE RIGHT COLUMN */}
            <div className="gameBox popIn">
              <TicTacToe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}