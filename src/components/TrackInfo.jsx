import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

const TrackInfo = ({ trackInfo }) => {

  const [favorite, setFavorite] = useState('');

  return (
    <div>
      { trackInfo.track ?
      <div>
        <FontAwesomeIcon
          icon="fas fa-heart"
          color={favorite ? "red" : "black"}
          onClick={(e) => {setFavorite(!favorite)}}
        />
        <div>
          Artist: {trackInfo.track.artist.name}
        </div>
        <div>
          Track: {trackInfo.track.name}
        </div>
        <div>
          Album: {trackInfo.track.album ? trackInfo.track.album.title : 'Unavailable'}
        </div>
        <div>
          Genre: {trackInfo.track.toptags.tag.map((genre, idx) => {
            return (
              <span key={idx}>{(idx ? ', ' : '') + genre.name}</span>
            )
          })}
        </div>
      </div > : <span>Loading</span>
    }
    </div>

  )
}

export default TrackInfo;