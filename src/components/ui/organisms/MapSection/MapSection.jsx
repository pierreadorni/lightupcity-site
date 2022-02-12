import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import Map from 'react-map-gl'

import './mapSection.css'
import 'mapbox-gl/dist/mapbox-gl.css'

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
        <Map
          initialViewState={{
            longitude: 2.820628,
            latitude: 49.416674,
            zoom: 17,
          }}
          // style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/pierreadorni/ckzigus8x001t15p18h3bvuqw"
        />
        {/* <div className="fake-map" /> */}
      </div>
    </div>
  )
}

export default MapSection
