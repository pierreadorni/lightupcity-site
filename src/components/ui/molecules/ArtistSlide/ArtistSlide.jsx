import React from 'react'
import PropTypes from 'prop-types'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import './artistSlide.css'
// eslint-disable-next-line import/no-unresolved

function ArtistSlide({ nom, image, fb, insta }) {
  return (
    <div className="artist-slide">
      <img src={image} alt="" className="artist-image" />
      <svg className="artist-svg">
        <polygon points="0,0 180,0 100,202 0,202" className="artist-polygon" />
      </svg>
      <p className="artist-name">{nom}</p>
      <a
        className="instagram-link"
        href={insta}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size={30} />
      </a>
      <a className="facebook-link" href={fb} target="_blank" rel="noreferrer">
        <AiFillFacebook size={30} className="media-icon" />
      </a>
    </div>
  )
}

ArtistSlide.propTypes = {
  nom: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fb: PropTypes.string.isRequired,
  insta: PropTypes.string.isRequired,
}

export default ArtistSlide
