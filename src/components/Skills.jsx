import React, { useEffect, useState } from 'react';
import '../styles/Skills.css';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#skills .skills-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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

  return (
    <section id="skills">
      <div className="section-label">// 02 — Skills</div>
      <h2 className="section-title">My <em>Arsenal</em></h2>
      <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
        {skillsData.map((group, idx) => (
          <div key={idx} className="skill-group">
            <div className="skill-group-icon">{group.icon}</div>
            <div className="skill-group-title">{group.title}</div>
            <ul className="skill-list">
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx} className="skill-item">
                  <div className="skill-name">
                    {skill.name} <span>{skill.percent}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{
                        width: `${skill.percent}%`,
                        animationDelay: `${0.1 * (sIdx + 1)}s`
                      }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
