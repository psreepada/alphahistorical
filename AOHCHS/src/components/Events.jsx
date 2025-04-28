import { useState } from 'react';
import '../styles/Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('events');
  
  return (
    <section className="events-section">
      <h1 className="section-heading">Events & Programs</h1>
      
      <div className="events-tabs">
        <button 
          className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          Upcoming Events
        </button>
        <button 
          className={`tab-btn ${activeTab === 'newsletter' ? 'active' : ''}`}
          onClick={() => setActiveTab('newsletter')}
        >
          Newsletters
        </button>
        <button 
          className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendar
        </button>
        <button 
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'events' && (
          <div className="events-content">
            <div className="grid grid-3">
              <div className="event-card card">
                <div className="event-date">
                  <span className="month">Jun</span>
                  <span className="day">15</span>
                </div>
                <div className="card-body">
                  <h3>Annual Heritage Festival</h3>
                  <p className="event-time">10:00 AM - 4:00 PM</p>
                  <p className="event-location">Mansell House & Gardens</p>
                  <p>Join us for our annual celebration of local heritage featuring live music, historical demonstrations, and activities for all ages.</p>
                </div>
              </div>
              
              <div className="event-card card">
                <div className="event-date">
                  <span className="month">Jul</span>
                  <span className="day">8</span>
                </div>
                <div className="card-body">
                  <h3>Historical Walking Tour</h3>
                  <p className="event-time">9:00 AM - 11:00 AM</p>
                  <p className="event-location">Downtown Alpharetta</p>
                  <p>Explore the historical landmarks of downtown Alpharetta with our knowledgeable guides. Discover the stories behind the buildings.</p>
                </div>
              </div>
              
              <div className="event-card card">
                <div className="event-date">
                  <span className="month">Aug</span>
                  <span className="day">20</span>
                </div>
                <div className="card-body">
                  <h3>Genealogy Workshop</h3>
                  <p className="event-time">1:00 PM - 3:00 PM</p>
                  <p className="event-location">Log Cabin</p>
                  <p>Learn how to research your family history with our expert genealogists. This hands-on workshop will teach you techniques to discover your roots.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'newsletter' && (
          <div className="newsletter-content">
            <div className="grid grid-2">
              <div className="newsletter-info">
                <h2>Our Newsletters</h2>
                <p>Stay updated with our quarterly newsletter "History Matters" featuring:</p>
                <ul>
                  <li>Updates on society activities and events</li>
                  <li>Featured historical articles about Alpharetta and old Milton County</li>
                  <li>Profiles of notable historical figures</li>
                  <li>Genealogy tips and resources</li>
                  <li>Preservation news and initiatives</li>
                </ul>
                <div className="newsletter-form">
                  <h3>Subscribe to Our Newsletter</h3>
                  <form>
                    <input type="email" placeholder="Your Email Address" required />
                    <button type="submit" className="btn">Subscribe</button>
                  </form>
                </div>
              </div>
              
              <div className="newsletter-archive">
                <h2>Newsletter Archive</h2>
                <div className="archive-list">
                  <div className="archive-item">
                    <span className="archive-date">Spring 2023</span>
                    <h4>History Matters Vol. 43, Issue 1</h4>
                    <button className="btn btn-secondary">View PDF</button>
                  </div>
                  <div className="archive-item">
                    <span className="archive-date">Winter 2022</span>
                    <h4>History Matters Vol. 42, Issue 4</h4>
                    <button className="btn btn-secondary">View PDF</button>
                  </div>
                  <div className="archive-item">
                    <span className="archive-date">Fall 2022</span>
                    <h4>History Matters Vol. 42, Issue 3</h4>
                    <button className="btn btn-secondary">View PDF</button>
                  </div>
                  <div className="archive-item">
                    <span className="archive-date">Summer 2022</span>
                    <h4>History Matters Vol. 42, Issue 2</h4>
                    <button className="btn btn-secondary">View PDF</button>
                  </div>
                </div>
                <button className="btn mt-2">View Complete Archive</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'calendar' && (
          <div className="calendar-content">
            <h2 className="text-center mb-2">2023 Schedule of Events</h2>
            <div className="calendar-container">
              <div className="calendar-header">
                <div className="calendar-cell">Sunday</div>
                <div className="calendar-cell">Monday</div>
                <div className="calendar-cell">Tuesday</div>
                <div className="calendar-cell">Wednesday</div>
                <div className="calendar-cell">Thursday</div>
                <div className="calendar-cell">Friday</div>
                <div className="calendar-cell">Saturday</div>
              </div>
              <div className="calendar-grid">
                {/* Calendar grid would be dynamically generated */}
                <div className="calendar-placeholder">
                  <p>Interactive calendar coming soon! For now, please see our upcoming events.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'projects' && (
          <div className="projects-content">
            <h2 className="text-center mb-2">Our Current Projects</h2>
            <div className="grid grid-2">
              <div className="project-card card" style={{ background: '#f5f5dc' }}>
                <div className="card-body">
                  <h3>Oral History Project</h3>
                  <p>We are collecting and preserving the memories of long-time residents through recorded interviews. These firsthand accounts provide invaluable insights into our community's past.</p>
                  <div className="project-status">
                    <span className="status-label">Status:</span>
                    <span className="status-value ongoing">Ongoing</span>
                  </div>
                </div>
              </div>
              <div className="project-card card" style={{ background: '#f5f5dc' }}>
                <div className="card-body">
                  <h3>Photo Digitization</h3>
                  <p>Our volunteers are working to digitize our extensive collection of historical photographs to preserve them and make them more accessible to researchers and the public.</p>
                  <div className="project-status">
                    <span className="status-label">Status:</span>
                    <span className="status-value ongoing">Ongoing</span>
                  </div>
                </div>
              </div>
              <div className="project-card card" style={{ background: '#f5f5dc' }}>
                <div className="card-body">
                  <h3>Cemetery Documentation</h3>
                  <p>We are documenting historic cemeteries in the Alpharetta area, recording information from headstones and creating maps to help preserve this important genealogical information.</p>
                  <div className="project-status">
                    <span className="status-label">Status:</span>
                    <span className="status-value ongoing">Ongoing</span>
                  </div>
                </div>
              </div>
              <div className="project-card card" style={{ background: '#f5f5dc' }}>
                <div className="card-body">
                  <h3>Alpharetta History Book</h3>
                  <p>Our research team is working on a comprehensive history book of Alpharetta and old Milton County, featuring previously unpublished materials from our archives.</p>
                  <div className="project-status">
                    <span className="status-label">Status:</span>
                    <span className="status-value planning">In Planning</span>
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

export default Events; 