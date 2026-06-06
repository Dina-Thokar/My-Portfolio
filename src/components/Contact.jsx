import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-label">// 04 — Contact</div>
      <h2 className="section-title">Let's <em>Connect</em></h2>
      <div ref={ref} className={`contact-inner ${isVisible ? 'visible' : ''}`}>
        <p>
          Open to internships, collaborations, and cybersecurity opportunities.<br />
          Don't hesitate to reach out — let's build something secure together.
        </p>
        
        <a href="mailto:dina.tamang@email.com" className="contact-email">
          dina.tamang@email.com
        </a>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </form>

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
