import React, { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="about" className="about">
      <div className="section-label">// 01 — About</div>
      <h2 className="section-title">Who I <em>Am</em></h2>
      <div ref={ref} className={`about-grid ${isVisible ? 'visible' : ''}`}>
        <div className="about-text">
          <p>
            Hi, I'm <strong>Dina Tamang</strong> — a cybersecurity enthusiast and developer with a deep passion for understanding how systems work and how to protect them.
          </p>
          <p>
            I specialize in <strong>network security</strong>, <strong>ethical hacking</strong>, and <strong>Java development</strong>. I love the intersection of offensive and defensive security — understanding attack vectors to build better defenses.
          </p>
          <p>
            When I'm not hunting vulnerabilities, I'm building applications in <strong>Java</strong> and exploring the latest in tech. I believe secure code is good code.
          </p>
        </div>
        <div className="stats-grid">
          <StatCard num="5+" label="Security Projects" />
          <StatCard num="3+" label="Years Coding" />
          <StatCard num="CTF" label="Competitions" />
          <StatCard num="∞" label="Curiosity" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ num, label }) {
  return (
    <div className="stat-card">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
