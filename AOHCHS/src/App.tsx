import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Society from './components/Society.jsx'
import Events from './components/Events.jsx'
import MansellHouse from './components/MansellHouse.jsx'
import LogCabin from './components/LogCabin.jsx'
import Research from './components/Research.jsx'
import History from './components/History.jsx'
import GiftShop from './components/GiftShop.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'society' && <Society />}
        {activeSection === 'events' && <Events />}
        {activeSection === 'mansell' && <MansellHouse />}
        {activeSection === 'logcabin' && <LogCabin />}
        {activeSection === 'research' && <Research />}
        {activeSection === 'history' && <History />}
        {activeSection === 'giftshop' && <GiftShop />}
        {activeSection === 'contact' && <Contact />}
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  )
}

export default App
