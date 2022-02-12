import React, { useEffect, useState } from 'react'
import { HiLocationMarker, HiCalendar } from 'react-icons/hi'
import './infosSection.css'

function InfosSection() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])
  return (
    <div className="infos-section">
      <div className="progressbar">
        {[...Array(Math.round(width / 28))].map(() => (
          <svg className="progressbar-stripe">
            <defs>
              <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            <polygon points="0,-10 10,-10 10,30 0,30" filter="url(#f1)" />
          </svg>
        ))}
      </div>
      <div className="infos-section-content">
        <div className="info">
          <HiLocationMarker size={40} className="infos-section-svg" />
          <p>
            Rue Roger Couttolenc,
            <br /> Compiègne
          </p>
        </div>
        <div className="info">
          <HiCalendar size={40} className="infos-section-svg" />
          <p>
            Samedi 26 février, <br /> 20h
          </p>
        </div>
      </div>
      <div className="progressbar">
        {[...Array(Math.round(width / 28))].map(() => (
          <svg className="progressbar-stripe">
            <defs>
              <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            <polygon points="0,-10 10,-10 10,30 0,30" filter="url(#f1)" />
          </svg>
        ))}
      </div>
    </div>
  )
}

export default InfosSection
