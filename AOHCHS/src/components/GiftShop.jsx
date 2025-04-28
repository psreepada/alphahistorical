import { useState } from 'react';
import '../styles/GiftShop.css';

const GiftShop = () => {
  const [activeCategory, setActiveCategory] = useState('books');
  
  return (
    <section className="giftshop-section">
      <h1 className="section-heading">Gift Shop</h1>
      
      <div className="giftshop-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/giftshop_main.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="giftshop-hero-content">
          <h2>Support Our Mission While Bringing History Home</h2>
          <p>Our gift shop offers a variety of publications and memorabilia related to Alpharetta's rich history. All proceeds support the preservation and educational efforts of the historical society.</p>
        </div>
      </div>
      
      <div className="giftshop-container">
        <div className="giftshop-sidebar">
          <h3>Categories</h3>
          <div className="category-buttons">
            <button 
              className={`category-btn ${activeCategory === 'books' ? 'active' : ''}`}
              onClick={() => setActiveCategory('books')}
            >
              Books & Publications
            </button>
            <button 
              className={`category-btn ${activeCategory === 'maps' ? 'active' : ''}`}
              onClick={() => setActiveCategory('maps')}
            >
              Maps & Prints
            </button>
            <button 
              className={`category-btn ${activeCategory === 'souvenirs' ? 'active' : ''}`}
              onClick={() => setActiveCategory('souvenirs')}
            >
              Souvenirs & Gifts
            </button>
            <button 
              className={`category-btn ${activeCategory === 'children' ? 'active' : ''}`}
              onClick={() => setActiveCategory('children')}
            >
              Children's Items
            </button>
            <button 
              className={`category-btn ${activeCategory === 'membership' ? 'active' : ''}`}
              onClick={() => setActiveCategory('membership')}
            >
              Membership
            </button>
          </div>
          
          <div className="order-info">
            <h3>How to Order</h3>
            <p>You can purchase items in person at the Mansell House or Log Cabin during regular hours. For mail orders, please download and complete our order form.</p>
            <button className="btn btn-secondary" onClick={() => window.open('/order_form.pdf', '_blank')}>Download Order Form</button>
          </div>
          
          <div className="contact-info">
            <h3>Questions?</h3>
            <p>Contact our gift shop coordinator:</p>
            <p>Email: giftshop@aomchs.org</p>
            <p>Phone: (770) 555-6789</p>
          </div>
        </div>
        
        <div className="giftshop-products">
          {activeCategory === 'books' && (
            <div className="products-grid">
              <div className="product-card">
                <div className="product-info">
                  <h3>Alpharetta: A History</h3>
                  <p className="author">By Mary Johnson</p>
                  <p className="description">A comprehensive history of Alpharetta from its founding to the present day.</p>
                  <p className="price">$24.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Old Milton County Remembered</h3>
                  <p className="author">By James Williams</p>
                  <p className="description">Stories and photographs documenting life in Milton County before its merger with Fulton County.</p>
                  <p className="price">$19.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Historic Architecture of Alpharetta</h3>
                  <p className="author">By Thomas Webb</p>
                  <p className="description">A guide to the historic buildings and architectural styles in Alpharetta.</p>
                  <p className="price">$22.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Researching Your Alpharetta Roots</h3>
                  <p className="author">By Sarah Thompson</p>
                  <p className="description">A guide to genealogical research resources in Alpharetta and old Milton County.</p>
                  <p className="price">$16.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>History Matters: Annual Collection</h3>
                  <p className="author">AOMCHS</p>
                  <p className="description">Bound collection of our quarterly newsletter featuring articles on local history.</p>
                  <p className="price">$12.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Tastes of Old Alpharetta</h3>
                  <p className="author">Historical Society Members</p>
                  <p className="description">A collection of traditional recipes from Alpharetta's early families.</p>
                  <p className="price">$18.95</p>
                </div>
              </div>
            </div>
          )}
          
          {activeCategory === 'maps' && (
            <div className="products-grid">
              <div className="product-card">
                <div className="product-info">
                  <h3>1885 Alpharetta Map Reproduction</h3>
                  <p className="description">A high-quality reproduction of the 1885 map of Alpharetta.</p>
                  <p className="price">$15.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Milton County, 1900</h3>
                  <p className="description">Detailed reproduction of Milton County before merging with Fulton County.</p>
                  <p className="price">$18.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Downtown Alpharetta, circa 1920</h3>
                  <p className="description">Watercolor print of historic downtown Alpharetta.</p>
                  <p className="price">$24.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Mansell House Art Print</h3>
                  <p className="description">A beautiful rendering of the historic Mansell House in spring.</p>
                  <p className="price">$22.95</p>
                </div>
              </div>
            </div>
          )}
          
          {activeCategory === 'souvenirs' && (
            <div className="products-grid">
              <div className="product-card">
                <div className="product-info">
                  <h3>AOMCHS Coffee Mug</h3>
                  <p className="description">Ceramic mug featuring the historical society logo.</p>
                  <p className="price">$12.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Alpharetta History Tote Bag</h3>
                  <p className="description">Canvas tote featuring historic landmarks of Alpharetta.</p>
                  <p className="price">$15.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Annual Commemorative Ornament</h3>
                  <p className="description">2023 ornament featuring the FFA Log Cabin.</p>
                  <p className="price">$14.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Historic Postcard Set</h3>
                  <p className="description">Set of 10 postcards featuring historical images of Alpharetta.</p>
                  <p className="price">$8.95</p>
                </div>
              </div>
            </div>
          )}
          
          {activeCategory === 'children' && (
            <div className="products-grid">
              <div className="product-card">
                <div className="product-info">
                  <h3>My Alpharetta: A Child's History</h3>
                  <p className="description">Illustrated children's book about Alpharetta's history.</p>
                  <p className="price">$9.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Alpharetta History Coloring Book</h3>
                  <p className="description">Educational coloring book featuring historic buildings and scenes.</p>
                  <p className="price">$6.95</p>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-info">
                  <h3>Historic Alpharetta Puzzle</h3>
                  <p className="description">300-piece puzzle featuring historic downtown Alpharetta.</p>
                  <p className="price">$14.95</p>
                </div>
              </div>
            </div>
          )}
          
          {activeCategory === 'membership' && (
            <div className="membership-content">
              <h2>Support Our Mission with a Membership</h2>
              <p>Become a member of the Alpharetta & Old Milton County Historical Society and help preserve our local heritage while enjoying exclusive benefits.</p>
              
              <div className="membership-levels">
                <div className="membership-card">
                  <div className="card-header">
                    <h3>Individual</h3>
                    <p className="price">$25/year</p>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>Free admission to regular programs</li>
                      <li>Members-only events</li>
                      <li>Quarterly newsletter</li>
                      <li>10% discount at gift shop</li>
                    </ul>
                    <button className="btn">Join Now</button>
                  </div>
                </div>
                
                <div className="membership-card featured">
                  <div className="card-header">
                    <h3>Family</h3>
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
                
                <div className="membership-card">
                  <div className="card-header">
                    <h3>Patron</h3>
                    <p className="price">$100/year</p>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>All Family benefits</li>
                      <li>Recognition in newsletter</li>
                      <li>Special patron events</li>
                      <li>15% discount at gift shop</li>
                    </ul>
                    <button className="btn">Join Now</button>
                  </div>
                </div>
              </div>
              
              <div className="membership-info">
                <h3>Gift Memberships</h3>
                <p>Gift memberships are available for all levels. Perfect for holidays, birthdays, or any special occasion!</p>
                <button className="btn btn-secondary">Purchase Gift Membership</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GiftShop; 