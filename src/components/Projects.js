import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../config/profile';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const projects = profile.projects || [];

  return (
    <section id="projects" className="section projects projects-v2" ref={ref}>
      <div className="container">

        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="projects-subtitle">A few things I've built recently.</p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 36, rotateZ: -1 }}
              animate={isInView ? { opacity: 1, y: 0, rotateZ: 0 } : {}}
              whileHover={{ y: -10, scale: 1.02, rotateZ: 0 }}
              transition={{ duration: 0.55, delay: 0.1 * i, type: 'spring', stiffness: 120 }}
            >
              {/* TOP GRADIENT BAR */}
              <div
                className="project-card-glow"
                style={{ background: project.gradient }}
                aria-hidden="true"
              />

              {/* SCREENSHOT */}
              {project.image && (
                <div className="project-img-wrap">
                  <img src={project.image} alt={project.title} />
                </div>
              )}

              {/* TEXT CONTENT */}
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <span className="project-link">
                  View on GitHub <span aria-hidden="true">-&gt;</span>
                </span>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
