import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

export default function Projects() {
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

    const element = document.querySelector('#projects .projects-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      num: '01',
      title: 'Network Vulnerability Scanner',
      desc: 'A Python-based tool to scan networks for open ports, detect services, and identify known CVEs. Built to automate the initial phase of penetration tests.',
      tags: ['Python', 'Nmap', 'Networking', 'CVE']
    },
    {
      num: '02',
      title: 'Secure Chat App',
      desc: 'End-to-end encrypted messaging app built in Java using AES-256 encryption and RSA key exchange. Features user authentication and secure session management.',
      tags: ['Java', 'AES-256', 'RSA', 'Sockets']
    },
    {
      num: '03',
      title: 'Password Manager CLI',
      desc: 'A command-line password manager with master password hashing using bcrypt, encrypted vault storage, and clipboard integration for safe credential management.',
      tags: ['Java', 'Bcrypt', 'CLI', 'Encryption']
    },
    {
      num: '04',
      title: 'CTF Write-ups',
      desc: 'Documented solutions and methodologies from Capture The Flag competitions including web exploitation, binary analysis, cryptography challenges, and OSINT tasks.',
      tags: ['CTF', 'Web Exploit', 'Crypto', 'OSINT']
    },
    {
      num: '05',
      title: 'Log Analyzer Tool',
      desc: 'Java application for parsing and analyzing system logs to detect anomalous patterns, brute-force attempts, and unauthorized access events in real-time.',
      tags: ['Java', 'Log Analysis', 'SIEM', 'Regex']
    },
    {
      num: '06',
      title: 'Phishing Awareness Site',
      desc: 'Educational web platform demonstrating common phishing techniques and social engineering tactics in a controlled environment to train users to recognize threats.',
      tags: ['Web', 'Social Eng.', 'Education', 'Security']
    }
  ];

  return (
    <section id="projects">
      <div className="section-label">// 03 — Projects</div>
      <h2 className="section-title">Featured <em>Work</em></h2>
      <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-num">{project.num} / PROJECT</div>
            <div className="project-title">{project.title}</div>
            <div className="project-desc">{project.desc}</div>
            <div className="project-tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
