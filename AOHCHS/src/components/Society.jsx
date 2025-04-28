import { useState } from 'react';
import '../styles/Society.css';

const Society = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
  return (
    <section className="society-section">
      <h1 className="section-heading">The Society</h1>
      
      <div className="society-tabs">
        <button 
          className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
          onClick={() => setActiveTab('mission')}
        >
          Mission
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Our History
        </button>
        <button 
          className={`tab-btn ${activeTab === 'collections' ? 'active' : ''}`}
          onClick={() => setActiveTab('collections')}
        >
          Collections
        </button>
        <button 
          className={`tab-btn ${activeTab === 'membership' ? 'active' : ''}`}
          onClick={() => setActiveTab('membership')}
        >
          Membership
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'mission' && (
          <div className="mission-content">
            <div className="grid grid-2">
              <div className="content-text">
                <h2>Our Mission</h2>
                <p>We are dedicated to preserving the history and genealogy of Alpharetta and old Milton County. Through our collections and educational programs, we aim to connect our community with its rich heritage.</p>
                <p>The Alpharetta & Old Milton County Historical Society strives to:</p>
                <ul>
                  <li>Collect and preserve historical artifacts, documents, and photographs</li>
                  <li>Make our historical collections accessible to the public</li>
                  <li>Promote education about local history through programs and events</li>
                  <li>Engage the community in preserving our shared heritage</li>
                </ul>
              </div>
              <div className="content-image">
                <img src="/members.jpg" alt="Historical Society Members" className="card-img" />
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div className="history-content">
            <div className="grid grid-2">
              <div className="content-image">
                <img src="/ourhistory.jpg" alt="Historical Society Formation" className="card-img" />
              </div>
              <div className="content-text">
                <h2>Our History</h2>
                <p>The Alpharetta & Old Milton County Historical Society was established in 1979 and officially incorporated in 1980. For over four decades, we have been committed to gathering and preserving the historical materials of our area.</p>
                <p>Our society emerged from a growing awareness of the need to preserve the unique history of Alpharetta and old Milton County before it was lost to time. A group of dedicated local historians and residents came together with the vision of creating an organization that would safeguard our community's heritage.</p>
                <p>Today, we continue to build on the foundation laid by our founders, expanding our collections and reaching new generations with the stories of our past.</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'collections' && (
          <div className="collections-content">
            <h2>Our Collections</h2>
            <p className="text-center mb-2">Our collections are housed at the historic Mansell House and Gardens and are accessible to the public for research and education.</p>
            
            <div className="grid grid-3">
              <div className="collection-card card">
                <img src="/docs and recs.jpg" alt="Historical Documents" />
                <div className="card-body">
                  <h3>Documents & Records</h3>
                  <p>Original documents, letters, diaries, business records, and public records dating back to the early 1800s.</p>
                </div>
              </div>
              
              <div className="collection-card card">
                <img src="/photo.jpg" alt="Historical Photographs" />
                <div className="card-body">
                  <h3>Photographs</h3>
                  <p>Thousands of historical photographs documenting the people, places, and events of Alpharetta and old Milton County.</p>
                </div>
              </div>
              
              <div className="collection-card card">
                <img src="/artifacts.jpg" alt="Historical Artifacts" />
                <div className="card-body">
                  <h3>Artifacts</h3>
                  <p>Physical items including furniture, clothing, tools, and other objects that showcase daily life throughout our history.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'membership' && (
          <div className="membership-content">
            <h2>Join Our Society</h2>
            <p className="text-center">Become a member of the Alpharetta & Old Milton County Historical Society and help preserve our local heritage.</p>
            
            <div className="membership-levels grid grid-3">
              <div className="membership-card card">
                <div className="card-header">
                  <h3 style={{ color: '#8B4513' }}>Individual</h3>
                  <p className="price">$25/year</p>
                </div>
                <div className="card-body">
                  <ul>
                    <li>Free admission to regular programs</li>
                    <li>Members-only events</li>
                    <li>Quarterly newsletter</li>
                    <li>10% discount at gift shop</li>
                  </ul>
                  <button className="btn btn-secondary">Join Now</button>
                </div>
              </div>
              
              <div className="membership-card card featured">
                <div className="card-header">
                  <h3 style={{ color: '#8B4513' }}>Family</h3>
                  <p className="price">$40/year</p>
                </div>
                <div className="card-body">
                  <ul>
                    <li>All Individual benefits</li>
                    <li>Family admission to regular programs</li>
                    <li>Special family activities</li>
                    <li>Discounted rental rates</li>
                  </ul>
                  <button className="btn">Join Now</button>
                </div>
              </div>
              
              <div className="membership-card card">
                <div className="card-header">
                  <h3 style={{ color: '#8B4513' }}>Patron</h3>
                  <p className="price">$100/year</p>
                </div>
                <div className="card-body">
                  <ul>
                    <li>All Family benefits</li>
                    <li>Recognition in newsletter</li>
                    <li>Special patron events</li>
                    <li>15% discount at gift shop</li>
                  </ul>
                  <button className="btn btn-secondary">Join Now</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Society; 