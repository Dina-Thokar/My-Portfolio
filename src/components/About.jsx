import React, { useEffect, useState } from 'react';
import '../styles/About.css';

export default function About() {
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

    const element = document.querySelector('#about .about-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-label">// 01 — About</div>
      <h2 className="section-title">Who I <em>Am</em></h2>
      <div className={`about-grid ${isVisible ? 'visible' : ''}`}>
        <div className="about-text">
          <p>Hi, I'm <strong>Dina Tamang</strong> — a cybersecurity enthusiast and developer with a deep passion for understanding how systems work and how to protect them.</p>
          <p>I specialize in <strong>network security</strong>, <strong>ethical hacking</strong>, and <strong>Java development</strong>. I love the intersection of offensive and defensive security — understanding attack vectors to build better defenses.</p>
          <p>When I'm not hunting vulnerabilities, I'm building applications in <strong>Java</strong> and exploring the latest in tech. I believe secure code is good code.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">5+</div>
            <div className="stat-label">Security Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">3+</div>
            <div className="stat-label">Years Coding</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">CTF</div>
            <div className="stat-label">Competitions</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">∞</div>
            <div className="stat-label">Curiosity</div>
          </div>
        </div>
      </div>
    </section>
  );
}
