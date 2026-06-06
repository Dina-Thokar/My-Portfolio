import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
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

    const element = document.querySelector('#contact .contact-inner');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact">
      <div className="section-label">// 04 — Contact</div>
      <h2 className="section-title">Let's <em>Connect</em></h2>
      <div className={`contact-inner ${isVisible ? 'visible' : ''}`}>
        <p>Open to internships, collaborations, and cybersecurity opportunities.<br />Don't hesitate to reach out — let's build something secure together.</p>
        <a href="mailto:dina.tamang@email.com" className="contact-email">dina.tamang@email.com</a>
        <div className="socials">
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">HackTheBox</a>
          <a href="#" className="social-link">TryHackMe</a>
        </div>
      </div>
    </section>
  );
}
