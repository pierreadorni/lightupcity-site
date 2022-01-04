import React from 'react'
import logo from '../../../assets/logo.svg'
import './home.css'

function Home() {
  return (
    <div className="background">
      <div className="star-glow-wrap">
        <div className="star-glow" />
        <div className="star-glow-wide" />
      </div>

      <img src={logo} alt="logo de compiègne en lumière" />
    </div>
  )
}

export default Home
