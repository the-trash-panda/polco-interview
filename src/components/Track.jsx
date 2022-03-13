import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

const Track = ({ track, setPage, setCurrentTrack }) => {

  return (
    <li
      onClick={(e) => {
        setPage('trackInfo');
        setCurrentTrack({ artist: track.artist.name, track: track.name });
      }
      }
    >
      <FontAwesomeIcon icon="fas fa-heart" color="black"/>
      {track.name} by {track.artist.name}

    </li>
  )
}

export default Track;