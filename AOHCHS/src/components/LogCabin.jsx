import { useState } from 'react';
import '../styles/LogCabin.css';

const LogCabin = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  return (
    <section className="logcabin-section">
      <h1 className="section-heading">FFA Log Cabin</h1>
      
      <div className="logcabin-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/logcabin_main.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="logcabin-hero-content">
          <h2>A Living Monument to Our Agricultural Heritage</h2>
          <p>Explore the historic Future Farmers of America Log Cabin, built between 1934 and 1935 by Milton High School students.</p>
        </div>
      </div>
      
      <div className="logcabin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current Use
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
        <button 
          className={`tab-btn ${activeTab === 'visit' ? 'active' : ''}`}
          onClick={() => setActiveTab('visit')}
        >
          Visit
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'current' && (
          <div className="current-content">
            <div className="grid grid-2">
              <div className="logcabin-text">
                <h2>Current Use</h2>
                <p>Today, the restored FFA Log Cabin serves as an important community resource and historical landmark in Alpharetta. The cabin currently houses:</p>
                
                <div className="feature-box">
                  <h3>AOMCHS Archives</h3>
                  <p>The basement of the Log Cabin is home to our research archives, which include historical documents, genealogy files, photographs, maps, books, and microfilms related to Alpharetta and old Milton County.</p>
                </div>
                
                <div className="feature-box">
                  <h3>Community Meeting Space</h3>
                  <p>The main floor of the cabin serves as a meeting space for historical society events, educational programs, and community gatherings that celebrate our local heritage.</p>
                </div>
                
                <div className="feature-box">
                  <h3>Educational Exhibits</h3>
                  <p>The cabin features rotating exhibits on various aspects of local history, providing visitors with insights into the agricultural and cultural heritage of our area.</p>
                </div>
                
                <p className="note">The Log Cabin stands as a testament to the importance of agricultural education and the preservation of traditional building techniques that were once common in our area.</p>
              </div>
              
              <div className="logcabin-image">
                <img src="/logcabin.jpeg" alt="FFA Log Cabin Today" className="card-img" />
                <div className="image-caption">The FFA Log Cabin at its current location on Milton Avenue</div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div className="history-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>1934-1935</div>
                <div className="timeline-content">
                  <h3>Cabin Construction</h3>
                  <p>Milton High School FFA students, under the supervision of agriculture teacher Mr. W.A. Ingram, built the Log Cabin using native pine logs harvested from local forests. The project was designed to teach traditional building techniques and provide a meeting place for the FFA chapter.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>1935-1970s</div>
                <div className="timeline-content">
                  <h3>Original Use</h3>
                  <p>For decades, the cabin served as the meeting place for the Milton High School FFA chapter. It was also used for agricultural education and community events related to farming in the area.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>1970s</div>
                <div className="timeline-content">
                  <h3>Period of Neglect</h3>
                  <p>As agricultural education declined in importance and Milton High School's focus changed, the cabin fell into disuse and began to deteriorate. For years, it sat abandoned on the school property.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>1990s</div>
                <div className="timeline-content">
                  <h3>Preservation Efforts Begin</h3>
                  <p>The Alpharetta & Old Milton County Historical Society recognized the historical significance of the cabin and began advocating for its preservation. Plans were made to relocate and restore the structure.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>2002</div>
                <div className="timeline-content">
                  <h3>Relocation</h3>
                  <p>Through the combined efforts of the historical society, local government, and community donors, the Log Cabin was carefully dismantled, moved from its original location at Milton High School, and reassembled at its current site on Milton Avenue in downtown Alpharetta.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>2003-2004</div>
                <div className="timeline-content">
                  <h3>Restoration</h3>
                  <p>A comprehensive restoration project was undertaken to return the cabin to its original appearance while adding modern amenities to make it functional for contemporary use. Great care was taken to preserve original materials wherever possible.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>2005</div>
                <div className="timeline-content">
                  <h3>Grand Reopening</h3>
                  <p>The restored FFA Log Cabin was officially dedicated and opened to the public. Former FFA members who had helped build the original structure were honored at the ceremony.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date" style={{ color: '#8B4513' }}>Present</div>
                <div className="timeline-content">
                  <h3>Ongoing Preservation</h3>
                  <p>The historical society continues to maintain and preserve the Log Cabin for future generations, ensuring this important piece of local heritage remains a vital part of our community.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'visit' && (
          <div className="visit-content">
            <div className="grid grid-2">
              <div className="visit-info">
                <h2>Visit the Log Cabin</h2>
                <p>We welcome visitors to explore this unique piece of Alpharetta's history. The Log Cabin houses our research archives and features historical exhibits about the area.</p>
                
                <div className="info-box">
                  <h3>Location</h3>
                  <p>210 Milton Ave, Alpharetta, GA 30009</p>
                  <p>The Log Cabin is located in downtown Alpharetta, just a short walk from City Hall.</p>
                </div>
                
                <div className="info-box">
                  <h3>Hours</h3>
                  <p><strong>Archives (Basement Level):</strong><br />Tuesday & Thursday: 10:30 AM - 2:30 PM<br />(Excluding holidays)</p>
                  <p><strong>Main Floor Exhibits:</strong><br />By appointment only</p>
                </div>
                
                <div className="info-box">
                  <h3>Admission</h3>
                  <p>Free admission, but donations to support our preservation efforts are greatly appreciated.</p>
                </div>
                
                <div className="info-box">
                  <h3>Research Appointments</h3>
                  <p>To schedule a research appointment or arrange a tour of the Log Cabin, please contact us at:</p>
                  <p>Email: aomcharchives@gmail.com</p>
                  <p>Phone: (770) 555-4321</p>
                </div>
                
                <div className="research-note">
                  <h3>Research Resources Available</h3>
                  <ul>
                    <li>Historical documents and records</li>
                    <li>Genealogy files for local families</li>
                    <li>Photograph collections</li>
                    <li>Maps of Alpharetta and old Milton County</li>
                    <li>Local history books and publications</li>
                    <li>Microfilm collections of local newspapers</li>
                  </ul>
                </div>
              </div>
              
              <div className="nearby-attractions mt-2">
                <h3>Nearby Attractions</h3>
                <ul>
                  <li>Alpharetta City Hall (0.2 miles)</li>
                  <li>Alpharetta History Walk (0.1 miles)</li>
                  <li>Downtown Alpharetta shops and restaurants (0.1-0.3 miles)</li>
                  <li>Mansell House & Gardens (0.8 miles)</li>
                  <li>Wills Park (1.2 miles)</li>
                </ul>
              </div>
              
              <div className="parking-info mt-2">
                <h3>Parking</h3>
                <p>Free parking is available behind the Log Cabin and at nearby public parking areas in downtown Alpharetta.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LogCabin; 