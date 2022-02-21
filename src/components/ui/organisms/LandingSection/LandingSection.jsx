import React from 'react'
import logo from '../../../../assets/logo.svg'
import dateHeure from '../../../../assets/date_heure.svg'
import './landingSection.css'
import LandingFooter from '../../molecules/LandingFooter/LandingFooter'

function LandingSection() {
  return (
    <div className="landing-section">
      <img src={logo} alt="logo de compiègne en lumière" id="logo" />
      <img
        src={dateHeure}
        alt="samedi 26 février, 18h rue roger coutollenc à compiègne"
        id="date-heure"
      />
      <a
        href="https://assos.utc.fr/woolly/ventes/77"
        className="lien-billetterie"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="bouton-billetterie">
          Billetterie
        </button>
      </a>
      <p className="ticketing-label">Gratuit pour les -14 ans !</p>
      <LandingFooter />
      <div className="star-glow-wrap">
        <div className="star-glow" />
        <div className="star-glow-wide" />
      </div>
    </div>
  )
}

export default LandingSection
