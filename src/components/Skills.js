import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { profile } from "../config/profile";

const categoryIcons = {
  Frontend: "Frontend",
  Backend: "Backend",
  Languages: "Languages",
};

function groupByCategory(skills) {
  const groups = { Frontend: [], Backend: [], Languages: [] };
  skills.forEach((skill) => {
    if (skill.category === "Frontend") groups.Frontend.push(skill);
    if (skill.category === "Backend") groups.Backend.push(skill);
    if (skill.category === "Languages") groups.Languages.push(skill);
  });
  return groups;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = profile.skills || [];
  const grouped = groupByCategory(skills);
  const categories = ["Frontend", "Backend", "Languages"];
  const [active, setActive] = useState("Frontend");

  const filtered = grouped[active] || [];

  return (
    <section id="skills" className="skills-section" ref={ref}>

      {/* ===== TITLE ===== */}
      <h2 className="sk-title">
        My <span>Skills</span>
      </h2>

      <div className="sk-wrapper">

        {/* ===== LEFT SIDE ===== */}
        <div className="sk-left">

          {/* TABS */}
          <div className="sk-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`sk-tab ${cat === active ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {categoryIcons[cat]}
              </button>
            ))}
          </div>

          {/* SKILL CIRCLES */}
          <div className="sk-grid">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="sk-circle"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                whileHover={{ scale: 1.06, rotate: 4 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
              >
                <img src={skill.icon} alt={skill.name} />
                <div className="sk-level">{skill.level}%</div>
                <div className="sk-name">{skill.name}</div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="sk-right">
          <motion.img
            src="/developer.gif"
            alt="developer animation"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </div>

      </div>

    </section>
  );
}
