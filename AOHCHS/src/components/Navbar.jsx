import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => handleClick('home')}>
          <img src="/logo.png" alt="AOMCHS Logo" />
          <span>AOMCHS</span>
        </div>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className={activeSection === 'society' ? 'active' : ''}>
            <button onClick={() => handleClick('society')}>The Society</button>
          </li>
          <li className={activeSection === 'events' ? 'active' : ''}>
            <button onClick={() => handleClick('events')}>Events & Programs</button>
          </li>
          <li className={activeSection === 'mansell' ? 'active' : ''}>
            <button onClick={() => handleClick('mansell')}>Mansell House</button>
          </li>
          <li className={activeSection === 'logcabin' ? 'active' : ''}>
            <button onClick={() => handleClick('logcabin')}>Log Cabin</button>
          </li>
          <li className={activeSection === 'research' ? 'active' : ''}>
            <button onClick={() => handleClick('research')}>Research</button>
          </li>
          <li className={activeSection === 'history' ? 'active' : ''}>
            <button onClick={() => handleClick('history')}>History</button>
          </li>
          <li className={activeSection === 'giftshop' ? 'active' : ''}>
            <button onClick={() => handleClick('giftshop')}>Gift Shop</button>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <button onClick={() => handleClick('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 