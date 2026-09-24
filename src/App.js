import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBookOpen,
  FaCode,
  FaCoffee,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaHeart,
  FaLinkedin,
  FaPatreon,
  FaPlay,
  FaYoutube,
} from 'react-icons/fa';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import './App.css';

const concepts = [
  { icon: FaCode, title: 'Components', text: 'Break an interface into small, reusable pieces that are easy to understand and maintain.' },
  { icon: FaBookOpen, title: 'JSX', text: 'Describe the UI with familiar JavaScript and markup in one readable component file.' },
  { icon: FaPlay, title: 'Props', text: 'Pass data into components so the same UI pattern can work in many different places.' },
  { icon: FaHeart, title: 'State', text: 'Keep track of changing values and let React update the screen when the data changes.' },
];

const socialLinks = [
  { label: 'Portfolio', href: 'https://www.ashishranjan.net/', icon: FaGlobe },
  { label: 'GitHub', href: 'https://github.com/a2rp', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aashishranjan', icon: FaLinkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/theash.ashish/', icon: FaFacebook },
  { label: 'YouTube', href: 'https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1', icon: FaYoutube },
];

const supportLinks = [
  { label: 'Support', href: 'https://a2rp-donation-page.netlify.app/', icon: FaHeart },
  { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/a2rp', icon: FaCoffee },
  { label: 'Patreon', href: 'https://www.patreon.com/a2rp', icon: FaPatreon },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 360);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="React Hello World home">
          <img src="/logo.png" alt="Ashish Ranjan logo" />
          <span><small>REACT BASICS</small><strong>Hello World</strong></span>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#concepts" onClick={closeMenu}>Concepts</a>
          <a href="#practice" onClick={closeMenu}>Practice</a>
          <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>React docs <FiArrowUpRight /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">A friendly first step into React</p>
            <h1>Build your first interface with <span>React.</span></h1>
            <p className="hero-text">A focused Hello World project that introduces components, JSX, props, and state through a clean and practical starting point.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#concepts">Explore concepts <FaArrowRight /></a>
              <a className="text-link" href="#practice">See the next step <FiArrowUpRight /></a>
            </div>
            <div className="hero-note"><span className="status-dot" aria-hidden="true" />Ready to run with Create React App</div>
          </div>
          <div className="hero-card">
            <img src="/preview.png" alt="Abstract preview of the React Hello World project" />
            <div className="hero-card-overlay"><span className="code-label">&lt;HelloWorld /&gt;</span><span className="code-caption">Small components, clear ideas.</span></div>
          </div>
        </section>

        <section className="concept-section section-shell" id="concepts">
          <div className="section-heading">
            <p className="eyebrow">The building blocks</p>
            <h2>Start small. Understand more.</h2>
            <p>These are the ideas behind the first component and most React interfaces that follow.</p>
          </div>
          <div className="concept-grid">
            {concepts.map(({ icon, title, text }) => (
              <article className="concept-card" key={title}>
                <span className="card-icon">{React.createElement(icon)}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="practice-section section-shell" id="practice">
          <div><p className="eyebrow">Keep exploring</p><h2>Turn this first screen into your next component.</h2></div>
          <div className="practice-card">
            <p>Try changing the message, adding a prop, or moving the greeting into a separate component. Small experiments are the fastest way to make the concepts stick.</p>
            <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Read the React guide <FaArrowRight /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner section-shell">
          <div className="footer-brand">
            <img src="/logo.png" alt="Ashish Ranjan logo" />
            <div><strong>React Hello World</strong><p>A simple starting point for learning React.</p></div>
          </div>
          <div className="footer-links">
            <div><p className="footer-label">Connect</p><div className="icon-links">
              {socialLinks.map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{React.createElement(icon)}</a>)}
            </div></div>
            <div><p className="footer-label">Support</p><div className="icon-links">
              {supportLinks.map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{React.createElement(icon)}</a>)}
            </div></div>
          </div>
          <div className="footer-bottom">
            <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
            <span>Built with React</span>
          </div>
        </div>
      </footer>

      {showTopButton && <button className="go-top" type="button" onClick={scrollToTop} aria-label="Go to top" title="Go to top"><FiArrowUpRight /></button>}
    </div>
  );
}

export default App;
