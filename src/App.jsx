import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './style.css';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles = {
      '/': 'Marie Joy | Portfolio',
      '/about': 'About Me | Marie Joy',
      '/work': 'My Work | Marie Joy',
      '/contact': 'Contact | Marie Joy',
    };
    document.title = titles[pathname] || 'Marie Joy | Portfolio';
    if (hash) {
      requestAnimationFrame(() => {
        const element = document.getElementById(decodeURIComponent(hash.slice(1)));
        element?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer>
        <p>Designed with ♡ by Marie Joy C. Sebusana</p>
        <p className="footer-code">&lt;/portfolio&gt;</p>
      </footer>
    </>
  );
}

export default function App() {
  return <HashRouter><Layout /></HashRouter>;
}
