import React from 'react'
import './home.css'
import LandingSection from '../../ui/organisms/LandingSection/LandingSection'
import EventSection from '../../ui/organisms/EventSection/EventSection'
import Menu from '../../ui/molecules/Menu/Menu'
import Footer from '../../ui/molecules/Footer/Footer'

function Home() {
  return (
    <div className="main-div">
      <Menu />
      <LandingSection />
      <EventSection />
      <Footer />
    </div>
  )
}

export default Home
