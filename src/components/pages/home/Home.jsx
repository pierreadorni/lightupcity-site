import React from 'react'
import './home.css'
import LandingSection from '../../ui/organisms/LandingSection/LandingSection'
import EventSection from '../../ui/organisms/EventSection/EventSection'
import InfosSection from '../../ui/organisms/InfosSection/InfosSection'
import Menu from '../../ui/molecules/Menu/Menu'

function Home() {
  return (
    <div className="main-div">
      <Menu />
      <LandingSection />
      <EventSection />
      <InfosSection />
    </div>
  )
}

export default Home
