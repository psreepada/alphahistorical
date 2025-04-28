import '../styles/Footer.css';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Alpharetta & Old Milton County<br />Historical Society</h3>
          <p>Preserving our community's rich history since 1979.</p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => setActiveSection('society')}>The Society</button></li>
            <li><button onClick={() => setActiveSection('events')}>Events & Programs</button></li>
            <li><button onClick={() => setActiveSection('mansell')}>Mansell House</button></li>
            <li><button onClick={() => setActiveSection('logcabin')}>Log Cabin</button></li>
            <li><button onClick={() => setActiveSection('research')}>Research</button></li>
            <li><button onClick={() => setActiveSection('history')}>History</button></li>
            <li><button onClick={() => setActiveSection('giftshop')}>Gift Shop</button></li>
            <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 210 Milton Ave, Alpharetta, GA 30009</p>
          <p><i className="fas fa-envelope"></i> aomcharchives@gmail.com</p>
          <p><i className="fas fa-clock"></i> Tuesday & Thursday: 10:30 AM - 2:30 PM</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alpharetta & Old Milton County Historical Society. All rights reserved.</p>
        <p style={{color: 'rgba(255, 255, 255, 0.6)', fontStyle: 'italic'}}>Website made possible by Phoenix Tech Solutions</p>
      </div>
    </footer>
  );
};

export default Footer; 