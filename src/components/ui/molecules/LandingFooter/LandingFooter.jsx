import React from 'react'
import { Link } from 'react-scroll'
import arrow from '../../../../assets/arrow.svg'
import './landingFooter.css'

function LandingFooter() {
  return (
    <div className="section-footer">
      <Link
        activeClass="active"
        to="event-section"
        spy
        smooth
        offset={0}
        duration={500}
        className="footer-scroll"
      >
        <h2>Découvrez</h2>
        <img src={arrow} alt="flèche vers le bas" />
      </Link>
      {/* <svg className="bottom-line"> */}
      {/*   <line */}
      {/*     style={{ */}
      {/*       stroke: '#02FEB0', */}
      {/*       strokeWidth: 2, */}
      {/*     }} */}
      {/*     x1={0} */}
      {/*     y1={0} */}
      {/*     x2="100%" */}
      {/*     y2={0} */}
      {/*   /> */}
      {/* </svg> */}
    </div>
  )
}

export default LandingFooter
