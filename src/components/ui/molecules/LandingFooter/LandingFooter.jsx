import React from 'react'
import { Link } from 'react-scroll'
import arrow from '../../../../assets/arrow.svg'
import './landingFooter.css'

function LandingFooter() {
  return (
    <Link
      activeClass="active"
      to="event-section"
      spy
      smooth
      offset={0}
      duration={500}
      className="section-footer"
    >
      <h2>Découvrez</h2>
      <img src={arrow} alt="flèche vers le bas" />
    </Link>
  )
}

export default LandingFooter
