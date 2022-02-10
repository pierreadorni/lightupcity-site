import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import './showSection.css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination'
import ArtistSlide from '../../molecules/ArtistSlide/ArtistSlide'

function ShowSection() {
  return (
    <div className="show-section" id="show-section">
      <div className="section-title">
        <h1>Le concert</h1>
      </div>

      <div className="swiper-metacontainer">
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <ArtistSlide
                nom="johnny halliday"
                image="https://static1.purepeople.com/articles/8/19/00/78/@/2420965-exclusif-johnny-hallyday-en-concert-a-opengraph_1200-2.jpg"
                insta="https://www.instagram.com/jhallyday/"
                fb="https://fr-fr.facebook.com/jhofficiel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArtistSlide
                nom="jacques brel"
                image="https://www.rts.ch/2018/10/07/11/34/9861346.image?w=1280&h=720"
                insta="https://www.instagram.com/_jacquesbrel_/?hl=en"
                fb="https://www.facebook.com/JacquesBrelOfficiel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArtistSlide
                nom="georges brassens"
                image="https://www.paris-friendly.fr/images/bons_plans_paris/1210/journees-georges-brassens.jpg"
                insta="https://www.instagram.com/georgesbrassensofficiel/?hl=en"
                fb="https://www.facebook.com/brassens.officiel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArtistSlide
                nom="charles aznavour"
                image="https://cdn.radiofrance.fr/s3/cruiser-production/2018/10/0e591ebe-319d-4fbf-ace9-286f029f7e96/560x315_aznavour_france_musique_nuit_archives_.jpg"
                fb="https://www.facebook.com/aznavourofficiel/"
                insta="https://www.instagram.com/aznavourfoundation/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ShowSection
