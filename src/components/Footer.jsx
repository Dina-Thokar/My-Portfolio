import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>© {currentYear} DINA TAMANG</span>
      <span>BUILT WITH SECURITY IN MIND</span>
    </footer>
  );
}
