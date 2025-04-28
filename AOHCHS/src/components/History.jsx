import { useState } from 'react';
import '../styles/History.css';

const History = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  
  return (
    <section className="history-section">
      <h1 className="section-heading">History</h1>
      
      <div className="history-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/ourhistory.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="history-hero-content">
          <h2>Exploring Alpharetta & Old Milton County's Rich Past</h2>
          <p>Discover the fascinating stories and significant events that shaped our community from its early days to the present.</p>
        </div>
      </div>
      
      <div className="history-tabs">
        <button 
          className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          Timeline
        </button>
        <button 
          className={`tab-btn ${activeTab === 'buildings' ? 'active' : ''}`}
          onClick={() => setActiveTab('buildings')}
        >
          Historical Buildings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'families' ? 'active' : ''}`}
          onClick={() => setActiveTab('families')}
        >
          Early Families
        </button>
        <button 
          className={`tab-btn ${activeTab === 'figures' ? 'active' : ''}`}
          onClick={() => setActiveTab('figures')}
        >
          Notable Figures
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'timeline' && (
          <div className="timeline-content">
            <h2 className="text-center mb-2">A Brief History of Alpharetta & Old Milton County</h2>
            
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-date">Pre-1830s</div>
                <div className="timeline-info">
                  <h3>Native American Territory</h3>
                  <p>The area that would become Alpharetta and Milton County was primarily Cherokee territory. The land was part of the Cherokee Nation, with several settlements and trading paths crossing through the region.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1832-1838</div>
                <div className="timeline-info">
                  <h3>Land Lottery & Cherokee Removal</h3>
                  <p>Following the Georgia Gold Rush, the Georgia Land Lottery of 1832 distributed Cherokee land to white settlers. The Trail of Tears (1838) forced the Cherokee from their remaining lands in Georgia.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1858</div>
                <div className="timeline-info">
                  <h3>Founding of Alpharetta</h3>
                  <p>The city of Alpharetta was founded on December 11, 1858, when the town was chartered. The name "Alpharetta" is believed to be derived from "alpha" meaning "first" and "retta" referring to "town".</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1857-1932</div>
                <div className="timeline-info">
                  <h3>Milton County Era</h3>
                  <p>Milton County was created on December 18, 1857, from parts of Cherokee, Cobb, and Forsyth counties. Alpharetta served as the county seat. The county was named for Revolutionary War hero John Milton.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1861-1865</div>
                <div className="timeline-info">
                  <h3>Civil War Period</h3>
                  <p>The Civil War brought hardship to the area. While no major battles were fought in Milton County, many local men served in the Confederate Army, and the war's aftermath significantly impacted the local economy.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1880-1920</div>
                <div className="timeline-info">
                  <h3>Agricultural Growth</h3>
                  <p>Cotton became the primary cash crop, with Milton County developing a strong agricultural economy. Small farms dotted the landscape, and Alpharetta served as a trading center for the surrounding farmland.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1932</div>
                <div className="timeline-info">
                  <h3>Milton County Merger</h3>
                  <p>During the Great Depression, Milton County faced financial difficulties and merged with Fulton County on January 1, 1932, becoming the Milton District of Fulton County.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1950s-1970s</div>
                <div className="timeline-info">
                  <h3>Rural Character Preserved</h3>
                  <p>While much of the Atlanta area grew rapidly after World War II, Alpharetta remained primarily rural, preserving its small-town character and agricultural heritage.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">1980s-2000s</div>
                <div className="timeline-info">
                  <h3>Transformation & Growth</h3>
                  <p>Beginning in the 1980s, Alpharetta experienced dramatic growth and transformation. The completion of GA 400 made the area more accessible from Atlanta, triggering residential and commercial development.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Present</div>
                <div className="timeline-info">
                  <h3>Technology Hub & Cultural Center</h3>
                  <p>Today, Alpharetta is known as the "Technology City of the South" with numerous tech companies calling it home. Despite rapid development, the city strives to honor its history through preservation efforts and cultural programs.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'buildings' && (
          <div className="buildings-content">
            <h2 className="text-center mb-2">Historic Buildings & Landmarks</h2>
            <p className="text-center">Alpharetta is home to several historic buildings that provide a window into our past. Many have been preserved and repurposed, maintaining their historical significance while serving new functions.</p>
            
            <div className="buildings-grid">
              <div className="building-card card">
                <div className="card-body">
                  <h3>Old Milton County Courthouse</h3>
                  <p><strong>Built:</strong> 1885</p>
                  <p>This two-story brick building served as the Milton County Courthouse until the county merged with Fulton in 1932. It was later used as Alpharetta City Hall and now houses a local business.</p>
                  <p><strong>Location:</strong> 2 South Main Street</p>
                </div>
              </div>
              
              <div className="building-card card">
                <div className="card-body">
                  <h3>Mansell House & Gardens</h3>
                  <p><strong>Built:</strong> 1912</p>
                  <p>This Queen Anne-style home was built by John Mansell and has been beautifully restored. It now serves as an event venue and houses many of the historical society's collections.</p>
                  <p><strong>Location:</strong> 1835 Old Milton Parkway</p>
                </div>
              </div>
              
              <div className="building-card card">
                <div className="card-body">
                  <h3>FFA Log Cabin</h3>
                  <p><strong>Built:</strong> 1934-1935</p>
                  <p>Constructed by Milton High School FFA students, this log cabin was relocated from its original site to downtown Alpharetta and restored. It now houses the historical society's research archives.</p>
                  <p><strong>Location:</strong> 210 Milton Avenue</p>
                </div>
              </div>
              
              <div className="building-card card">
                <div className="card-body">
                  <h3>Manning General Store</h3>
                  <p><strong>Built:</strong> 1890</p>
                  <p>One of the oldest commercial buildings in Alpharetta, the Manning General Store served the community for decades. The restored building now houses retail shops.</p>
                  <p><strong>Location:</strong> 16 South Main Street</p>
                </div>
              </div>
              
              <div className="building-card card">
                <div className="card-body">
                  <h3>First Baptist Church</h3>
                  <p><strong>Built:</strong> 1895</p>
                  <p>This historic church building features beautiful Gothic Revival architecture. While the congregation has moved to a newer facility, the historic building has been preserved.</p>
                  <p><strong>Location:</strong> 44 Academy Street</p>
                </div>
              </div>
              
              <div className="building-card card">
                <div className="card-body">
                  <h3>Old Milton High School</h3>
                  <p><strong>Built:</strong> 1921</p>
                  <p>This school building served generations of local students. The structure has been repurposed while maintaining its historical character.</p>
                  <p><strong>Location:</strong> 86 School Drive</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'families' && (
          <div className="families-content">
            <h2 className="text-center mb-2">Early Families of Alpharetta & Milton County</h2>
            <p className="text-center">Many descendants of these pioneer families still call Alpharetta home, maintaining connections to our shared heritage.</p>
            
            <div className="grid grid-2">
              <div className="families-list">
                <div className="family-item">
                  <h3>The Webb Family</h3>
                  <p>James Webb was one of the earliest settlers in the area, arriving in the 1830s. The Webb family established one of the first farms and later opened a general store that became a cornerstone of the early community.</p>
                  <p>Notable members included Thomas Webb, who served as a county commissioner in the 1880s, and Mary Webb, a schoolteacher who educated many of the area's children.</p>
                </div>
                
                <div className="family-item">
                  <h3>The Mansell Family</h3>
                  <p>The Mansell family arrived in the 1840s and became prominent landowners and merchants. John Mansell built the iconic Mansell House in 1912, which remains a landmark today.</p>
                  <p>The family's contributions to local commerce helped establish Alpharetta as a regional trading center, and several roads in the area bear the Mansell name.</p>
                </div>
                
                <div className="family-item">
                  <h3>The Milton Family</h3>
                  <p>Though Milton County was named for Revolutionary War hero John Milton, the Milton family who settled here in the 1850s became significant contributors to the area's development. They established mills along local creeks that provided essential services for the agricultural community.</p>
                </div>
                
                <div className="family-item">
                  <h3>The Wills Family</h3>
                  <p>Arriving before the Civil War, the Wills family developed extensive agricultural operations and were known for their community leadership. Their donation of land for public use led to the creation of Wills Park, which remains a center of community life.</p>
                </div>
                
                <div className="family-item">
                  <h3>The Broadwell Family</h3>
                  <p>The Broadwells were among the founding families of Alpharetta, with James Broadwell serving as one of the town's first commissioners. The family operated a successful blacksmith shop that served the farming community for generations.</p>
                </div>
              </div>
              
              <div className="families-features">
                <div className="family-feature-box">
                  <h3>Family History Resources</h3>
                  <p>The historical society maintains extensive genealogical records of early families. Visit our archives to research your own family connections to Alpharetta and old Milton County.</p>
                </div>
                
                <div className="featured-family card">
                  <div className="card-header">
                    <h3>Featured Family: The Doroughs</h3>
                  </div>
                  <div className="card-body">
                    <p>The Dorough family were early settlers who established one of the area's most successful farms in the 1840s. Their homestead, preserved through five generations, showcases the agricultural heritage of Milton County.</p>
                    <p>Thomas Dorough served in the Georgia legislature and was instrumental in the creation of Milton County in 1857. His descendants continued the family's tradition of public service throughout the county's history.</p>
                    <p>The family's collection of letters, photographs, and artifacts—donated to the historical society in 2010—provides remarkable insights into daily life in 19th century Alpharetta.</p>
                  </div>
                </div>
                
                <div className="cemetery-info">
                  <h3>Historic Cemeteries</h3>
                  <p>Many early families are buried in the historic cemeteries throughout the area. These burial grounds provide valuable genealogical information and offer a tangible connection to our past.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'figures' && (
          <div className="figures-content">
            <h2 className="text-center mb-2">Notable Figures in Local History</h2>
            
            <div className="figures-grid">
              <div className="figure-card">
                <div className="figure-info">
                  <h3>James Milton</h3>
                  <p><strong>1810-1875</strong></p>
                  <p>A distant relation to the Revolutionary War hero John Milton (for whom the county was named), James Milton was instrumental in establishing the county government in the late 1850s. He served as the first county judge and helped build the early infrastructure of roads and bridges.</p>
                </div>
              </div>
              
              <div className="figure-card">
                <div className="figure-info">
                  <h3>Sarah Dorough</h3>
                  <p><strong>1825-1901</strong></p>
                  <p>A pioneering educator who established the first school for girls in Milton County in 1861. Despite the challenges of the Civil War, she maintained the school and educated two generations of local women, many of whom went on to become teachers themselves.</p>
                </div>
              </div>
              
              <div className="figure-card">
                <div className="figure-info">
                  <h3>Thomas Webb</h3>
                  <p><strong>1832-1904</strong></p>
                  <p>A successful merchant who built Alpharetta's first brick store in 1878. Webb served as mayor for three terms and led efforts to bring the railroad to Alpharetta, though these plans were ultimately unsuccessful. His philanthropy supported many early community institutions.</p>
                </div>
              </div>
              
              <div className="figure-card">
                <div className="figure-info">
                  <h3>Elizabeth Manning</h3>
                  <p><strong>1845-1920</strong></p>
                  <p>A community leader who organized relief efforts during the difficult years following the Civil War. Manning later became known for documenting local history through her extensive journals and correspondence, which provide valuable insights into daily life in 19th century Alpharetta.</p>
                </div>
              </div>
              
              <div className="figure-card">
                <div className="figure-info">
                  <h3>Robert Wills</h3>
                  <p><strong>1860-1937</strong></p>
                  <p>A progressive farmer who introduced new agricultural techniques to the area at the turn of the century. Wills was also a political leader who represented the county in the state legislature and advocated for rural infrastructure improvements.</p>
                </div>
              </div>
              
              <div className="figure-card">
                <div className="figure-info">
                  <h3>John Mansell</h3>
                  <p><strong>1870-1945</strong></p>
                  <p>A successful businessman who built the Mansell House in 1912. He operated several enterprises in Alpharetta and played a key role in helping the community transition after the merger with Fulton County in 1932.</p>
                </div>
              </div>
              
              <div className="figure-card">
                <div className="figure-info">
                  <h3>W.A. Ingram</h3>
                  <p><strong>1895-1972</strong></p>
                  <p>The agriculture teacher at Milton High School who supervised the construction of the FFA Log Cabin between 1934 and 1935. Ingram's dedication to agricultural education influenced generations of students and helped preserve traditional building techniques.</p>
                </div>
              </div>
              
              <div className="figure-card">
                <div className="figure-info">
                  <h3>Mary Johnson</h3>
                  <p><strong>1920-2010</strong></p>
                  <p>A local historian and founding member of the Alpharetta Historical Society in 1979. Johnson's tireless efforts to document and preserve local history have left an invaluable legacy for future generations.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default History; 