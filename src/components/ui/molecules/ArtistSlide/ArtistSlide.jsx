import React from 'react'
import PropTypes from 'prop-types'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import './artistSlide.css'
// eslint-disable-next-line import/no-unresolved

function ArtistSlide({ image, fb, insta }) {
  return (
    <div className="artist-slide">
      <img src={image} alt="" className="artist-image" />

      <a
        className="instagram-link"
        href={insta}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size={30} className="media-icon" />
      </a>
      <a className="facebook-link" href={fb} target="_blank" rel="noreferrer">
        <AiFillFacebook size={30} className="media-icon" />
      </a>
    </div>
  )
}

ArtistSlide.propTypes = {
  image: PropTypes.string.isRequired,
  fb: PropTypes.string.isRequired,
  insta: PropTypes.string.isRequired,
}

export default ArtistSlide
