import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { profile } from "../config/profile";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const { name, tagline, taglineTech, photo, resume, resumeLabel, roleBadges } = profile;

  const titles = useMemo(() => {
    return roleBadges || [
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer",
    ];
  }, [roleBadges]);

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section id="hero" className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">

          {/* PHOTO */}
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ rotateY: 10, rotateX: 6, scale: 1.02 }}
            transition={{ duration: 0.55, type: 'spring', stiffness: 90, damping: 12 }}
          >
            <div className="hero-photo-frame">
              <img src={photo} alt={name} className="hero-photo-img" />
            </div>
            <motion.div
              className="hero-photo-glow"
              animate={{ y: [0, -16, 0], rotate: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="hero-name">{name}</h1>

            <div className="hero-typing">
              <span className="hero-typing-muted">Hi, I am a</span>
              <span className="hero-typing-accent">{displayText}</span>
              <span className="hero-typing-caret" />
            </div>

            <p className="hero-tagline">{tagline}</p>

            <div className="hero-tagline-tech">
              {taglineTech.join(" - ")}
            </div>

            <div className="hero-actions">
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                  My Projects
                </a>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  {resumeLabel}
                </a>
              </div>

              <motion.div
                className="hero-social"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="https://github.com/tushar-singhal736"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/tushar-singhal-a51a40339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-indicator" />
      </div>
    </section>
  );
}
