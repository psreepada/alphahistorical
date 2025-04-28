import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="section-heading">Contact Us</h1>
      
      <div className="contact-container">
        <div className="grid grid-2">
          <div className="contact-info-container">
            <div className="contact-card">
              <h2>Get in Touch</h2>
              <p>For inquiries or to schedule research appointments, please reach out to us. We're here to help you explore the rich history of Alpharetta and old Milton County.</p>
              
              <div className="contact-info">
                <div className="contact-detail">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>aomcharchives@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>Phone</h3>
                    <p>(770) 555-4321</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Research Archives</h3>
                    <p>Located in the basement of the Log Cabin</p>
                    <p>210 Milton Ave, Alpharetta, GA 30009</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Research Hours</h3>
                    <p>Tuesday & Thursday: 10:30 AM - 2:30 PM</p>
                    <p>(Excluding holidays)</p>
                    <p className="note">Research appointments are recommended</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form-card">
              <h2>Send Us a Message</h2>
              <p>Have questions about local history or our services? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="research">Research Inquiry</option>
                    <option value="donation">Artifact Donation</option>
                    <option value="membership">Membership Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="event">Event Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" rows="6" required></textarea>
                </div>
                
                <div className="form-group checkbox-group">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">Subscribe to our newsletter for updates on events and programs</label>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 