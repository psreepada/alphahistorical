import { useState } from 'react';
import '../styles/MansellHouse.css';

const MansellHouse = () => {
  const [activeTab, setActiveTab] = useState('info');
  
  return (
    <section className="mansell-section">
      <h1 className="section-heading">Mansell House & Gardens Rental</h1>
      
      <div className="mansell-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/mansellhouse_main.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="mansell-hero-content">
          <h2>A Historic Venue for Your Special Events</h2>
          <p>The historic 1912 Queen Anne-style Mansell House offers a charming and elegant setting for weddings, meetings, and special occasions.</p>
        </div>
      </div>
      
      <div className="mansell-tabs">
        <button 
          className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Rental Information
        </button>
        <button 
          className={`tab-btn ${activeTab === 'facilities' ? 'active' : ''}`}
          onClick={() => setActiveTab('facilities')}
        >
          Facilities
        </button>
        <button 
          className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
        <button 
          className={`tab-btn ${activeTab === 'inquiry' ? 'active' : ''}`}
          onClick={() => setActiveTab('inquiry')}
        >
          Inquire
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'info' && (
          <div className="info-content">
            <div className="grid grid-2">
              <div className="mansell-image">
                <img src="/mansellhouse.jpg" alt="Mansell House" className="card-img" />
              </div>
              <div className="mansell-text">
                <h2>Rental Information</h2>
                <p>The Mansell House & Gardens is available for rent for various events including:</p>
                <ul>
                  <li>Weddings and receptions</li>
                  <li>Corporate events and meetings</li>
                  <li>Social gatherings and parties</li>
                  <li>Photography sessions</li>
                </ul>
                
                <h3>Rental Rates</h3>
                <div className="rates-table">
                  <div className="rate-row">
                    <div className="rate-item">Weekday (Monday-Thursday)</div>
                    <div className="rate-price">$150/hour (3-hour minimum)</div>
                  </div>
                  <div className="rate-row">
                    <div className="rate-item">Friday</div>
                    <div className="rate-price">$2,500 (8 hours)</div>
                  </div>
                  <div className="rate-row">
                    <div className="rate-item">Saturday</div>
                    <div className="rate-price">$3,000 (8 hours)</div>
                  </div>
                  <div className="rate-row">
                    <div className="rate-item">Sunday</div>
                    <div className="rate-price">$2,500 (8 hours)</div>
                  </div>
                </div>
                
                <p className="note">All rentals include tables, chairs, and use of kitchen facilities. A $500 refundable security deposit is required.</p>
                
                <button className="btn mt-2" onClick={() => setActiveTab('inquiry')}>Request Information</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'facilities' && (
          <div className="facilities-content">
            <h2 className="text-center mb-2">Our Facilities</h2>
            
            <div className="grid grid-3">
              <div className="facility-card card">
                <img src="/mansellhouse_interior.jpg" alt="Interior Space" />
                <div className="card-body">
                  <h3>Interior Space</h3>
                  <p>The Mansell House offers elegant indoor space across two floors, accommodating up to 75 guests for seated events or 100 for standing receptions.</p>
                  <ul className="facility-features">
                    <li>Historic parlor and dining rooms</li>
                    <li>Catering kitchen</li>
                    <li>Bridal suite for wedding preparations</li>
                    <li>Climate controlled environment</li>
                  </ul>
                </div>
              </div>
              
              <div className="facility-card card">
                <img src="/garden_mansellhouse.jpg" alt="Gardens" />
                <div className="card-body">
                  <h3>Gardens</h3>
                  <p>Our beautiful gardens provide a picturesque setting for outdoor ceremonies and events, with capacity for up to 150 guests.</p>
                  <ul className="facility-features">
                    <li>Manicured lawns and flower beds</li>
                    <li>Garden gazebo for ceremonies</li>
                    <li>Outdoor lighting for evening events</li>
                    <li>Paved pathways throughout the grounds</li>
                  </ul>
                </div>
              </div>
              
              <div className="facility-card card">
                <img src="/amenities.jpg" alt="Amenities" />
                <div className="card-body">
                  <h3>Amenities</h3>
                  <p>The Mansell House comes equipped with essential amenities to make your event a success.</p>
                  <ul className="facility-features">
                    <li>15 round tables (60") and 120 chairs</li>
                    <li>6 rectangular tables (6')</li>
                    <li>Audiovisual equipment available</li>
                    <li>On-site parking for 30 vehicles</li>
                    <li>Handicap accessible entrance and restroom</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'faq' && (
          <div className="faq-content">
            <h2 className="text-center mb-2">Frequently Asked Questions</h2>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3>How far in advance should I book?</h3>
                <p>We recommend booking 6-12 months in advance for weekend dates, especially during peak season (April-October). Weekday events may be booked with less notice, depending on availability.</p>
              </div>
              
              <div className="faq-item">
                <h3>Is alcohol allowed?</h3>
                <p>Yes, alcohol service is permitted with proper licensing and insurance from your caterer. A licensed bartender must serve all alcoholic beverages.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you provide catering services?</h3>
                <p>We do not provide in-house catering, but we can recommend several excellent caterers familiar with our venue. You are welcome to choose your own caterer from our approved list.</p>
              </div>
              
              <div className="faq-item">
                <h3>Is there a rain plan for outdoor events?</h3>
                <p>Yes, we can accommodate a rain plan for outdoor events by setting up inside the house or under tents (which would need to be rented separately).</p>
              </div>
              
              <div className="faq-item">
                <h3>Is the venue handicap accessible?</h3>
                <p>The first floor of the Mansell House and most of the garden areas are handicap accessible. The second floor is accessible only by stairs.</p>
              </div>
              
              <div className="faq-item">
                <h3>What is included in the rental fee?</h3>
                <p>Rental fees include use of the house and gardens for the specified time period, tables and chairs, basic cleaning, and an on-site facility manager during your event.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can we take professional photographs?</h3>
                <p>Yes, photography is allowed throughout the property. The Mansell House & Gardens also offers photography-only rentals at a reduced rate.</p>
              </div>
            </div>
            
            <div className="text-center mt-2">
              <p>Have additional questions? We're happy to help!</p>
              <button className="btn" onClick={() => setActiveTab('inquiry')}>Contact Us</button>
            </div>
          </div>
        )}
        
        {activeTab === 'inquiry' && (
          <div className="inquiry-content">
            <div className="grid grid-2">
              <div className="inquiry-form-container">
                <h2>Request Information</h2>
                <p>Please fill out the form below to inquire about renting the Mansell House & Gardens for your event. Our staff will respond within 48 hours.</p>
                
                <form className="inquiry-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="event-date">Event Date *</label>
                      <input type="date" id="event-date" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="event-time">Start Time</label>
                      <input type="time" id="event-time" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="event-type">Event Type *</label>
                    <select id="event-type" required>
                      <option value="">Select an option</option>
                      <option value="wedding">Wedding</option>
                      <option value="reception">Reception</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="social">Social Event</option>
                      <option value="photography">Photography Session</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" id="guests" min="1" max="150" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea id="message" rows="4"></textarea>
                  </div>
                  
                  <button type="submit" className="btn">Submit Inquiry</button>
                </form>
              </div>
              
              <div className="contact-info">
                <div className="contact-card card">
                  <div className="card-body">
                    <h3>Contact Information</h3>
                    <p>For immediate assistance or to schedule a tour:</p>
                    
                    <div className="contact-detail">
                      <i className="fas fa-phone"></i>
                      <span>(770) 555-1234</span>
                    </div>
                    
                    <div className="contact-detail">
                      <i className="fas fa-envelope"></i>
                      <span>mansell@aomchs.org</span>
                    </div>
                    
                    <div className="contact-detail">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>1835 Old Milton Parkway, Alpharetta, GA 30009</span>
                    </div>
                    
                    <div className="contact-detail">
                      <i className="fas fa-clock"></i>
                      <span>Tours available by appointment:</span>
                      <span className="hours">Tuesday - Saturday: 10 AM - 4 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="map-container mt-2">
                  <h3>Location</h3>
                  <div className="map-placeholder">
                    <p>Interactive map loading...</p>
                    {/* This would be replaced with an actual map in production */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MansellHouse; 