import React from 'react';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <nav>
      <div className="nav-logo">DT<span>.</span>SEC</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
