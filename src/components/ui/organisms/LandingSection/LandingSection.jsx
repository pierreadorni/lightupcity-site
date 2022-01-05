import React from 'react'
import logo from '../../../../assets/logo.svg'
import pieuvre from '../../../../assets/pieuvre.svg'
import lune from '../../../../assets/lune.svg'
import './landingSection.css'
import LandingFooter from '../../molecules/LandingFooter/LandingFooter'

function LandingSection() {
  return (
    <div className="landing-section">
      <div className="star-glow-wrap">
        <div className="star-glow" />
        <div className="star-glow-wide" />
      </div>
      <img src={pieuvre} alt="pieuvre" id="pieuvre" />
      <img src={lune} alt="lune" id="lune" />
      <img src={logo} alt="logo de compiègne en lumière" />
      <LandingFooter />
    </div>
  )
}

export default LandingSection
