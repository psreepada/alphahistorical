import { useState } from 'react';
import '../styles/Research.css';

const Research = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('archives');
  const [showResearchPopup, setShowResearchPopup] = useState(false);
  
  const handleResearchSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="research-section">
      <h1 className="section-heading">Research & Interviews</h1>
      
      <div className="research-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/archives_main.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="research-hero-content">
          <h2>Discover Your Local Roots</h2>
          <p>Our extensive archives provide valuable resources for historical and genealogical research about Alpharetta and old Milton County.</p>
        </div>
      </div>
      
      <div className="research-tabs">
        <button 
          className={`tab-btn ${activeTab === 'archives' ? 'active' : ''}`}
          onClick={() => setActiveTab('archives')}
        >
          Archives
        </button>
        <button 
          className={`tab-btn ${activeTab === 'genealogy' ? 'active' : ''}`}
          onClick={() => setActiveTab('genealogy')}
        >
          Genealogy
        </button>
        <button 
          className={`tab-btn ${activeTab === 'interviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('interviews')}
        >
          Oral Histories
        </button>
        <button 
          className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          Research Services
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'archives' && (
          <div className="archives-content">
            <div className="archives-text" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2>Our Archives</h2>
              <p>The Alpharetta & Old Milton County Historical Society maintains extensive archives housed in the basement of the Log Cabin at 210 Milton Ave. These collections are available to researchers by appointment and during our regular research hours.</p>
              <h3>What You'll Find in Our Archives</h3>
            </div>
            <div className="archives-cards-grid">
              <div className="archive-category card">
                <i className="fas fa-file-alt"></i>
                <div>
                  <h4>Historical Documents</h4>
                  <p>Original documents, letters, diaries, business records, and public records dating back to the early settlement of the area.</p>
                </div>
              </div>
              <div className="archive-category card">
                <i className="fas fa-users"></i>
                <div>
                  <h4>Genealogy Files</h4>
                  <p>Family histories, cemetery records, church records, marriage records, and other materials relating to local families.</p>
                </div>
              </div>
              <div className="archive-category card">
                <i className="fas fa-camera-retro"></i>
                <div>
                  <h4>Photographs</h4>
                  <p>An extensive collection of historical photographs documenting people, places, events, and buildings in Alpharetta and old Milton County.</p>
                </div>
              </div>
              <div className="archive-category card">
                <i className="fas fa-map-marked-alt"></i>
                <div>
                  <h4>Maps</h4>
                  <p>Historical maps showing the development of Alpharetta and old Milton County over time, including plat maps, city plans, and county maps.</p>
                </div>
              </div>
              <div className="archive-category card">
                <i className="fas fa-book"></i>
                <div>
                  <h4>Books & Publications</h4>
                  <p>Reference books, local histories, and publications related to Alpharetta, Milton County, and Georgia history.</p>
                </div>
              </div>
              <div className="archive-category card">
                <i className="fas fa-film"></i>
                <div>
                  <h4>Microfilm</h4>
                  <p>Microfilm collections of local newspapers, census records, and other historical documents.</p>
                </div>
              </div>
              <div className="archive-category card research-hours-card">
                <h4>Research Hours</h4>
                <p><strong>Tuesday & Thursday:</strong> 10:30 AM - 2:30 PM</p>
                <p>(Excluding holidays)</p>
                <p className="note">Appointments are recommended for research assistance. Please contact us at aomcharchives@gmail.com to schedule a visit.</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'genealogy' && (
          <div className="genealogy-content">
            <h2 className="text-center mb-2">Family History Research</h2>
            
            <div className="grid grid-2">
              <div className="genealogy-resources">
                <h3>Genealogy Resources</h3>
                <p>Our archives contain valuable resources for tracing your family history in Alpharetta and old Milton County.</p>
                
                <div className="resource-list">
                  <div className="resource-item">
                    <h4>Family Files</h4>
                    <p>We maintain files on many local families that include genealogical information, photographs, and historical documents. These files have been compiled over decades and often contain unique information not available elsewhere.</p>
                  </div>
                  
                  <div className="resource-item">
                    <h4>Cemetery Records</h4>
                    <p>Our collection includes surveys and transcriptions of headstones from local cemeteries, as well as burial records where available.</p>
                  </div>
                  
                  <div className="resource-item">
                    <h4>Church Records</h4>
                    <p>Copies of baptismal, marriage, and membership records from many historic churches in the area.</p>
                  </div>
                  
                  <div className="resource-item">
                    <h4>Census Records</h4>
                    <p>Federal census records for Milton County and surrounding areas from 1850-1940.</p>
                  </div>
                  
                  <div className="resource-item">
                    <h4>Local Newspapers</h4>
                    <p>Microfilm and digital copies of local newspapers that contain obituaries, marriage announcements, and other information valuable for genealogical research.</p>
                  </div>
                  
                  <div className="resource-item">
                    <h4>Oral Histories</h4>
                    <p>Recordings and transcripts of interviews with long-time residents that often contain family information and stories.</p>
                  </div>
                </div>
              </div>
              
              <div className="genealogy-services">
                <div className="genealogy-card">
                  <h3>Getting Started with Your Family Research</h3>
                  <p>Whether you're just beginning your genealogical journey or looking to break through a research roadblock, our volunteers can help guide your research.</p>
                  
                  <h4>Tips for Successful Research:</h4>
                  <ul>
                    <li>Begin with what you know and work backward systematically</li>
                    <li>Bring any family information you already have</li>
                    <li>Be specific about the family names and time periods you're researching</li>
                    <li>Allow plenty of time for your research visit</li>
                    <li>Bring a notebook or laptop to record your findings</li>
                  </ul>
                  
                  <div className="service-cta">
                    <h4>Research Assistance</h4>
                    <p>Our knowledgeable volunteers can help you navigate our collections and provide guidance for your research.</p>
                    <button className="btn" onClick={() => setActiveSection && setActiveSection('contact')}>Contact us for a research appointment</button>
                  </div>
                </div>
                
                <div className="workshop-info">
                  <h3>Genealogy Workshops</h3>
                  <p>We regularly host workshops on genealogical research methods, resources, and topics specific to researching in the Alpharetta and old Milton County area.</p>
                  
                  <div className="upcoming-workshop">
                    <h4>Upcoming Workshop:</h4>
                    <p className="workshop-title">Finding Your Alpharetta Ancestors: Tips and Techniques</p>
                    <p className="workshop-date"><i className="far fa-calendar-alt"></i> August 20, 2023</p>
                    <p className="workshop-time"><i className="far fa-clock"></i> 1:00 PM - 3:00 PM</p>
                    <p className="workshop-location"><i className="fas fa-map-marker-alt"></i> Log Cabin, 210 Milton Ave</p>
                    <button className="btn btn-secondary" onClick={() => setShowResearchPopup(true)}>Register</button>
                  </div>
                </div>
              </div>
            </div>
            {showResearchPopup && (
              <div className="popup-overlay">
                <div className="popup-form genealogy-popup-form">
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Genealogy Workshop Registration</h3>
                  <form onSubmit={handleResearchSubmit}>
                    <div className="form-group">
                      <label htmlFor="genealogy-name">Name</label>
                      <input id="genealogy-name" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="genealogy-email">Email</label>
                      <input id="genealogy-email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="genealogy-details">Any more questions or notes?</label>
                      <textarea id="genealogy-details" placeholder="Any more questions or notes?" required></textarea>
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn">Submit</button>
                      <button type="button" className="btn btn-secondary" onClick={() => setShowResearchPopup(false)}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'services' && (
          <div className="services-content">
            <div className="grid grid-2">
              <div className="services-info">
                <h2>Research Services</h2>
                <p>In addition to providing access to our archives during regular research hours, the Alpharetta & Old Milton County Historical Society offers several research services to assist those who cannot visit in person or who need specialized assistance.</p>
                
                <div className="service-box">
                  <h3>Research Assistance</h3>
                  <p>Our knowledgeable volunteers can provide guidance and assistance navigating our collections during your visit. For more complex research needs, we offer personalized research assistance.</p>
                  <p className="fee">Fee: Free for members | $10 per hour for non-members</p>
                </div>
                
                <div className="service-box">
                  <h3>Remote Research Requests</h3>
                  <p>If you cannot visit our archives in person, we offer remote research services. Submit a specific research request, and our volunteers will search our collections for relevant information.</p>
                  <p className="fee">Fee: $20 per hour research time (1-hour minimum) plus copying/scanning costs</p>
                </div>
                
                <div className="service-box">
                  <h3>Document Copying/Scanning</h3>
                  <p>We can provide photocopies or digital scans of documents, photographs, maps, and other materials from our collections, subject to copyright restrictions and the condition of the materials.</p>
                  <p className="fee">Fee: $0.25 per page for photocopies | $5 per scan for digital images</p>
                </div>
                
                <div className="service-box">
                  <h3>Family History Research Package</h3>
                  <p>Our comprehensive family history research package includes a thorough search of our archives for information related to a specific family, including documents, photographs, newspaper clippings, and other relevant materials.</p>
                  <p className="fee">Fee: $75 for members | $100 for non-members</p>
                </div>
                
                <div className="service-info">
                  <h3>How to Request Research Services</h3>
                  <p>To request any of our research services, please complete our Research Request Form or contact us at aomcharchives@gmail.com with details about your research needs.</p>
                  <button className="btn mt-2" onClick={() => setShowResearchPopup(true)}>Research Request Form</button>
                </div>
              </div>
              
              <div className="services-additional">
                <div className="research-testimonials">
                  <h3>Researcher Testimonials</h3>
                  
                  <div className="testimonial">
                    <p className="quote">"The historical society's archives were invaluable for my research on early businesses in Alpharetta. The volunteers were knowledgeable and helpful, pointing me to resources I wouldn't have found on my own."</p>
                    <p className="author">- Michael S., Local Historian</p>
                  </div>
                  
                  <div className="testimonial">
                    <p className="quote">"I had hit a brick wall in my family research until I visited the AOMCHS archives. Their unique collection of family files contained photographs and letters I'd never seen before, helping me connect missing branches of my family tree."</p>
                    <p className="author">- Jennifer R., Family Researcher</p>
                  </div>
                  
                  <div className="testimonial">
                    <p className="quote">"When I couldn't visit in person, the remote research service was extremely helpful. The detailed report I received contained exactly the information I needed for my project on Milton County's agricultural history."</p>
                    <p className="author">- David L., University Researcher</p>
                  </div>
                </div>
                
                <div className="research-guidelines card">
                  <h3>Research Guidelines</h3>
                  <ul>
                    <li>Research visits are available during regular hours or by appointment</li>
                    <li>Please sign in at the reception desk upon arrival</li>
                    <li>Only pencils are permitted in the research room</li>
                    <li>All bags and personal belongings must be stored in the provided lockers</li>
                    <li>Materials must be handled with care and may not leave the research room</li>
                    <li>Photographs of materials may be taken with permission</li>
                  </ul>
                </div>
                {showResearchPopup && (
                  <div className="popup-overlay">
                    <div className="popup-form research-request-popup-form">
                      <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Research Request Form</h3>
                      <form onSubmit={handleResearchSubmit}>
                        <div className="form-group">
                          <label htmlFor="request-name">Name</label>
                          <input id="request-name" type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="request-email">Email</label>
                          <input id="request-email" type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="request-details">Research Details</label>
                          <textarea id="request-details" placeholder="Describe your research needs" required></textarea>
                        </div>
                        <div className="form-actions">
                          <button type="submit" className="btn">Submit</button>
                          <button type="button" className="btn btn-secondary" onClick={() => setShowResearchPopup(false)}>Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research; 