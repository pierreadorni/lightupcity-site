import React from 'react'
import './home.css'
import LandingSection from '../../ui/organisms/LandingSection/LandingSection'
import EventSection from '../../ui/organisms/EventSection/EventSection'
import Menu from '../../ui/molecules/Menu/Menu'

function Home() {
  return (
    <div>
      <Menu />
      <LandingSection />
      <EventSection />
    </div>
  )
}

export default Home
