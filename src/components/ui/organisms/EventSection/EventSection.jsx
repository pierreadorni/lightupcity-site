import React from 'react'
import './eventSection.css'
import timeline from '../../../../assets/timeline.png'

function EventSection() {
  return (
    <div className="event-section">
      <div className="section-title">
        <h1>L&#39;évènement</h1>
      </div>
      <div className="event-section-content">
        <div className="event-description">
          <p>
            Cette année, le <b>samedi 26 février</b> aura lieu la 5ème édition
            de Compiègne en Lumière, un parcours lumineux et musical organisé
            par 50 étudiant·e·s motivé·e·s de l&#39; Université de Technologie
            de Compiègne.{' '}
            <b>
              Spectacles pyrotechniques, concerts, parcours lumineux, stands
              photos, fresques
            </b>{' '}
            seront au rendez-vous. Comme chaque année, il nous tient à cœur de
            réunir habitant·e·s, familles et étudiant·e·s, le temps d’une soirée
            animée, sur le thème de la musique et de la lumière. Nous vous
            attendons avec impatience !
          </p>
          <img src={timeline} alt="" className="timeline" />
        </div>

        {/* <div className="jellyfish-video-container"> */}
        {/*   <JellyFishVideo /> */}
        {/* </div> */}
        <div className="event-section-bottom">
          <iframe
            className="aftermovie"
            src="https://www.youtube.com/embed/usMDNKww4Sk"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default EventSection
