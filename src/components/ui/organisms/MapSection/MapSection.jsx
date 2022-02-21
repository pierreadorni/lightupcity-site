import React, { useState } from 'react'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'
import mapboxgl from 'mapbox-gl'
import campsite from '../../../../assets/pins/campsite.png'
import circle from '../../../../assets/pins/circle.png'
import circleStroked from '../../../../assets/pins/circle-stroked.png'
import embassy from '../../../../assets/pins/embassy.png'
import fireStation from '../../../../assets/pins/fire-station.png'
import lighthouse from '../../../../assets/pins/lighthouse.png'
import playground from '../../../../assets/pins/playground.png'
import star from '../../../../assets/pins/star.png'
import starStroked from '../../../../assets/pins/star-stroked.png'
import triangle from '../../../../assets/pins/triangle.png'

import './mapSection.css'
import 'mapbox-gl/dist/mapbox-gl.css'

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
})

const geoJson = [
  {
    type: 'Feature',
    properties: {
      'marker-color': '#0011ff',
      'marker-size': 'medium',
      'marker-symbol': 'star',
      'anim-name': 'Départ parcours',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8196293115615845, 49.41567084442682],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#1100ff',
      'marker-size': 'medium',
      'marker-symbol': 'embassy',
      'anim-name': "Tunnel plafond d'étoiles",
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8204554319381714, 49.415936076931224],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#4400ff',
      'marker-size': 'medium',
      'marker-symbol': 'circle-stroked',
      'anim-name': 'Piscine à boules Géantes',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8215765953063965, 49.41631647367896],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#3700ff',
      'marker-size': 'medium',
      'marker-symbol': 'star-stroked',
      'anim-name': 'Spectacle de danses',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.822161316871643, 49.41653982452405],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#002aff',
      'marker-size': 'medium',
      'marker-symbol': 'fire-station',
      'anim-name': 'Spectacle de feu',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8219199180603027, 49.41738087093012],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#1e00ff',
      'marker-size': 'medium',
      'marker-symbol': 'campsite',
      'anim-name': 'Labyrinthe phosphorescent',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8228305280208588, 49.41663230543581],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#1100ff',
      'marker-size': 'medium',
      'marker-symbol': 'playground',
      'anim-name': 'Animation enfants',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.823556065559387, 49.41694813516026],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#2b00ff',
      'marker-size': 'medium',
      'marker-symbol': 'star',
      'anim-name': 'Tunnel lumineux',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8242695331573486, 49.417311075096315],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#001eff',
      'marker-size': 'medium',
      'marker-symbol': 'triangle',
      'anim-name': 'Lancée de poudre',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.823266386985779, 49.417792664329376],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#3700ff',
      'marker-size': 'medium',
      'marker-symbol': 'circle',
      'anim-name': 'Machine à bulles',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8217267990112305, 49.41811023145549],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#0033ff',
      'marker-size': 'medium',
      'marker-symbol': 'star',
      'anim-name': 'Cage à élastique',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.821040153503418, 49.41792527502754],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#1e00ff',
      'marker-size': 'medium',
      'marker-symbol': 'triangle',
      'anim-name': 'Tunnel dans le thème',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8185296058654785, 49.41724302406275],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#3700ff',
      'marker-size': 'medium',
      'marker-symbol': 'lighthouse',
      'anim-name': 'Fresque phosphorecente',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8179113566875453, 49.41693853815439],
    },
  },
  {
    type: 'Feature',
    properties: {
      'marker-color': '#0008ff',
      'marker-size': 'medium',
      'marker-symbol': 'playground',
      'anim-name': 'Jeux détentes',
    },
    geometry: {
      type: 'Point',
      coordinates: [2.8182077407836914, 49.41613849024655],
    },
  },
]
const center = [2.8204554319381714, 49.415936076931224]

const pins = {
  star,
  circle,
  'circle-stroked': circleStroked,
  embassy,
  'fire-station': fireStation,
  'light-house': lighthouse,
  campsite,
  playground,
  'star-stroked': starStroked,
  triangle,
}

function MapSection() {
  const [popup, setPopup] = useState('')

  return (
    <div className="map-section" id="map-section">
      <div className="section-title">
        <h1>Le parcours</h1>
      </div>
      <div className="map-description">
        <p>
          Embarquez dans notre parcours truffé de surprises et
          d&#39;illuminations. Vous y retrouvez quelques spectacles
          époustouflants, ainsi que des animations pour petits et grands. Venez
          redécouvrir Compiègne, en famille ou entre amis. Nous vous dévoilons
          ici, quelques animations en avant première :
        </p>
      </div>
      <div className="map-metacontainer">
        <div className="map-container">
          {/* eslint-disable react/style-prop-object */}
          <Map
            style="mapbox://styles/pierreadorni/ckzigus8x001t15p18h3bvuqw"
            containerStyle={{
              height: '100%',
              width: '100%',
            }}
            center={center}
            zoom={[16]}
          >
            {geoJson.map((feature) => (
              <div>
                <Marker
                  coordinates={feature.geometry.coordinates}
                  anchor="center"
                  text={feature}
                  onClick={() => {
                    if (popup === feature.properties['anim-name']) {
                      setPopup('')
                    } else {
                      setPopup(feature.properties['anim-name'])
                    }
                  }}
                >
                  <img src={pins[feature.properties['marker-symbol']]} alt="" />
                </Marker>
                <Popup
                  coordinates={feature.geometry.coordinates}
                  offset={{
                    'bottom-left': [12, -38],
                    bottom: [0, -38],
                    'bottom-right': [-12, -38],
                  }}
                  style={{
                    display:
                      popup === feature.properties['anim-name']
                        ? 'flex'
                        : 'none',
                  }}
                >
                  <h2>{feature.properties['anim-name']}</h2>
                </Popup>
              </div>
            ))}
          </Map>
        </div>
      </div>
    </div>
  )
}

export default MapSection
