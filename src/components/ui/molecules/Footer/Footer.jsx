import React from 'react'
import './footer.css'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/compiegne_en_lumiere/">
        <AiFillInstagram size={30} />
      </a>
      <a href="https://www.facebook.com/events/1561615594209673/?ref=newsfeed">
        <AiFillFacebook size={30} />
      </a>
      <a href="https://www.messenger.com/t/100022932906853">nous contacter</a>
    </div>
  )
}

export default Footer
