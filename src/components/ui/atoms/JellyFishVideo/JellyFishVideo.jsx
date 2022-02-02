import React, { useEffect } from 'react'
import './jellyFishVideo.css'
import jellyfish from '../../../../assets/jellyfish.mp4'

function JellyFishVideo() {
  useEffect(() => {
    document.getElementsByClassName('jellyfish-video')[0].play()
  }, [])
  return (
    <div className="jellyfish-video-frame">
      <video src={jellyfish} className="jellyfish-video" loop autoPlay muted>
        <track kind="captions" />
      </video>
    </div>
  )
}

export default JellyFishVideo
