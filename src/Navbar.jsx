import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const workLinks = [
    ['skills', 'Skills'], ['projects', 'Projects'], ['achievements', 'Achievements']
  ];

  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="logo"><span>&lt;/&gt;</span> Marie Joy</Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <div className="dropdown" ref={dropdownRef}>
            <button
              id="dropdownBtn" className="dropdown-btn" type="button"
              onClick={() => setOpen(current => !current)}
              aria-expanded={open}
              aria-controls="dropdownMenu"
            >
              Work <span id="dropdownArrow">{open ? '▲' : '▼'}</span>
            </button>
            <div id="dropdownMenu" className={`dropdown-menu ${open ? 'show' : ''}`}>
              {workLinks.map(([id, label]) => (
                <Link key={id} to={`/work#${id}`} onClick={() => {
                  setOpen(false);
                  if (location.pathname === '/work' && location.hash === `#${id}`) {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>{label}</Link>
              ))}
            </div>
          </div>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
