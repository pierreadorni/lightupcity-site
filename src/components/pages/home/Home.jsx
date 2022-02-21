import React from 'react'
import './home.css'
import LandingSection from '../../ui/organisms/LandingSection/LandingSection'
import EventSection from '../../ui/organisms/EventSection/EventSection'
import MapSection from '../../ui/organisms/MapSection/MapSection'
import ShowSection from '../../ui/organisms/ShowSection/ShowSection'
import SponsorSection from '../../ui/organisms/SponsorSection/SponsorSection'
import BarSection from '../../ui/organisms/BarSection/BarSection'
import Menu from '../../ui/molecules/Menu/Menu'
import Footer from '../../ui/molecules/Footer/Footer'

function Home() {
  return (
    <div className="main-div">
      <Menu />
      <LandingSection />
      <EventSection />
      <ShowSection />
      <MapSection />
      <BarSection />
      <SponsorSection />
      <Footer />
    </div>
  )
}

export default Home
