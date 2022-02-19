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

import vickyr from '../../../../assets/vickyr.png'
import mb14 from '../../../../assets/mb14.png'

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
                image={vickyr}
                insta="https://www.instagram.com/iamvickyr_/"
                fb="https://www.facebook.com/iamvickr"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArtistSlide
                image={mb14}
                insta="https://www.instagram.com/mb14beatbox/"
                fb="https://www.facebook.com/mb14beatbox/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ShowSection
