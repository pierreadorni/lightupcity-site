import React from 'react'
import logo from '../../../assets/logo.svg'
import arrow from '../../../assets/arrow.svg'
import './home.css'

function Home() {
  return (
    <div className="background">
      <div className="star-glow-wrap">
        <div className="star-glow" />
        <div className="star-glow-wide" />
      </div>

      <img src={logo} alt="logo de compiègne en lumière" />
      <div className="section-footer">
        <h2>Découvrez</h2>
        <img src={arrow} alt="flèche vers le bas" />
      </div>
    </div>
  )
}

export default Home
