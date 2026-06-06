import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-orb orb1"></div>
      <div className="hero-bg-orb orb2"></div>

      <div className="hero-content">
        <div className="hero-tag">CyberSecurity / Developer</div>
        <h1 className="hero-name">
          <span className="line1">Dina</span>
          <span className="line2">Tamang</span>
        </h1>
        <p className="hero-desc">
          Securing systems. Writing clean code.<br />
          Passionate about ethical hacking, network security,<br />
          and building robust Java applications.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="terminal-bar">
          <div className="t-dot"></div>
          <div className="t-dot"></div>
          <div className="t-dot"></div>
        </div>
        <div className="terminal-body">
          <div><span className="t-green">dina@sec</span><span className="t-cyan">:~$</span> whoami</div>
          <div className="t-white">dina_tamang</div>
          <div><span className="t-green">dina@sec</span><span className="t-cyan">:~$</span> cat skills.txt</div>
          <div><span className="t-cyan">→</span> Cybersecurity</div>
          <div><span className="t-cyan">→</span> Ethical Hacking</div>
          <div><span className="t-cyan">→</span> Java / OOP</div>
          <div><span className="t-cyan">→</span> Network Forensics</div>
          <div><span className="t-cyan">→</span> Linux / Bash</div>
          <div><span className="t-green">dina@sec</span><span className="t-cyan">:~$</span> <span className="cursor-blink"></span></div>
        </div>
      </div>
    </section>
  );
}
