import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import './eventSection.css'
import JellyFishVideo from '../../atoms/JellyFishVideo/JellyFishVideo'

function EventSection() {
  return (
    <div className="event-section">
      <div className="event-section-title">
        <h1>L&#39;évènement</h1>
      </div>
      <div className="event-section-top">
        <div className="event-description">
          <LoremIpsum avgSentencesPerParagraph={5} />
        </div>
        <div className="jellyfish-video-container">
          <JellyFishVideo />
        </div>
      </div>
      <div className="event-section-bottom">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/usMDNKww4Sk"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default EventSection
