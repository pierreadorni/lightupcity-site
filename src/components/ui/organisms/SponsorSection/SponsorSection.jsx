import React from 'react'
import './sponsorSection.css'
import stCorneille from '../../../../assets/st_corneille.jpg'

function SponsorSection() {
  return (
    <div className="sponsor-section" id="sponsor">
      <div className="section-title">
        <h1>Nos Partenaires</h1>
      </div>
      <div className="sponsors-container">
        <div className="sponsor">
          <a
            href="http://www.epicerie-saint-corneille.com/fr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={stCorneille} alt="épicerie saint corneille" />
          </a>
        </div>
        <div className="sponsor">
          <a
            href="https://www.cours-ado.com/index.php/agences/picardie/cours-particuliers-compiegne/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i0.wp.com/www.cours-ado.com/wp-content/uploads/2021/06/logo-cours-ado-soutien.jpg?w=612&ssl=1"
              alt="épicerie saint corneille"
            />
          </a>
        </div>
        <div className="sponsor">
          <a href="https://www.taimhotel.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.taimhotel.com/assets/img/taim-hotel-oise.svg"
              alt="épicerie saint corneille"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SponsorSection
