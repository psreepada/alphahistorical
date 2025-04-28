import '../styles/Hero.css';

const Hero = ({ setActiveSection }) => {
  return (
    <div className="hero" style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('/main_intro.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-content">
        <h1>Alpharetta & Old Milton County Historical Society</h1>
        <h3>Preserving Our Past, Enriching Our Future</h3>
        <p>Dedicated to collecting, preserving, and sharing the rich history of Alpharetta and old Milton County since 1979.</p>
        <div className="hero-buttons">
          <button className="btn" onClick={() => setActiveSection('society')}>About Us</button>
          <button className="btn btn-secondary" onClick={() => setActiveSection('events')}>Upcoming Events</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 