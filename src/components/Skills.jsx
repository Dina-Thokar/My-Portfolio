import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Skills.css';

const skillsData = [
  {
    icon: '🔐',
    title: 'CyberSecurity',
    skills: [
      { name: 'Ethical Hacking', percent: 85 },
      { name: 'Network Security', percent: 80 },
      { name: 'Penetration Testing', percent: 75 },
      { name: 'OSINT', percent: 78 }
    ]
  },
  {
    icon: '☕',
    title: 'Development',
    skills: [
      { name: 'Java', percent: 88 },
      { name: 'OOP & Design Patterns', percent: 82 },
      { name: 'Python', percent: 75 },
      { name: 'SQL / Databases', percent: 70 }
    ]
  },
  {
    icon: '🛠️',
    title: 'Tools & Systems',
    skills: [
      { name: 'Linux / Kali', percent: 85 },
      { name: 'Wireshark / Nmap', percent: 80 },
      { name: 'Metasploit', percent: 70 },
      { name: 'Git / Version Control', percent: 82 }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="skills" className="skills">
      <div className="section-label">// 02 — Skills</div>
      <h2 className="section-title">My <em>Arsenal</em></h2>
      <div ref={ref} className={`skills-grid ${isVisible ? 'visible' : ''}`}>
        {skillsData.map((group, idx) => (
          <SkillGroup key={idx} group={group} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}

function SkillGroup({ group, isVisible }) {
  return (
    <div className="skill-group">
      <div className="skill-group-icon">{group.icon}</div>
      <div className="skill-group-title">{group.title}</div>
      <ul className="skill-list">
        {group.skills.map((skill, idx) => (
          <li key={idx} className="skill-item">
            <div className="skill-name">
              {skill.name} <span>{skill.percent}%</span>
            </div>
            <div className="skill-bar">
              <div
                className={`skill-fill ${isVisible ? 'animate' : ''}`}
                style={{
                  width: `${skill.percent}%`,
                  animationDelay: `${0.1 * (idx + 1)}s`
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
