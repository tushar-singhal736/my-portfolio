import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../config/profile";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { aboutParagraphs, stats } = profile;

  return (
    <section id="about" className="section about about-v2" ref={ref}>
      <div className="container">

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            What I <span className="accent">Do</span>
          </h2>
        </motion.div>

        <div className="about-grid about-grid-v2">

          {/* LEFT TEXT */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -34 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75 }}
          >
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about-stats about-stats-v2">
              <div className="stat">
                <div className="stat-num">{stats.years}</div>
                <div className="stat-label">Years Exp.</div>
              </div>
              <div className="stat">
                <div className="stat-num">{stats.projects}</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-num">{stats.technologies}</div>
                <div className="stat-label">Tools</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="about-visual about-visual-v2"
            initial={{ opacity: 0, x: 34 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.75 }}
          >
            <img
              src="/server.gif"
              alt="Developer Illustration"
              className="about-image"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
