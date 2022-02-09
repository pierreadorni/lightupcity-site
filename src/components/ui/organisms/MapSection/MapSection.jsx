import React from 'react'
import './mapSection.css'
import LoremIpsum from 'react-lorem-ipsum'

function MapSection() {
  return (
    <div className="map-section" id="map-section">
      <div className="section-title">
        <h1>Le parcours</h1>
      </div>
      <div className="map-description">
        <LoremIpsum avgSentencesPerParagraph={2} />
      </div>
      <div className="map-image">
        <div className="fake-map" />
      </div>
    </div>
  )
}

export default MapSection
