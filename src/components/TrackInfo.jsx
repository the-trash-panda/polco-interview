import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

library.add(faHeart)

const TrackInfo = ({ trackInfo, currentTrack, favorites, getFavorites }) => {

  const [heart, setHeart] = useState(null);

  useEffect(() => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].artist === currentTrack.artist && favorites[i].track === currentTrack.track) {
        const newHeart = favorites[i].favorite;
        setHeart(newHeart);
        break;
      } else {
        setHeart(false);
      }
    }
  }, []);

  const updateTrack = () => {
    const params = {
      ...currentTrack,
      favorite: !heart
    }
    axios.put('/api/favorites', params)
      .then((res) => { getFavorites(); })
      .catch((err) => { console.error(err) })
  };


  return (
    <div className='trackInfoPage'>
      {trackInfo.track ?
        <div className='trackInfoContainer'>
          <FontAwesomeIcon
            className='heart'
            icon="fas fa-heart"
            color={heart ? "red" : "black"}
            onClick={(e) => {
              updateTrack();
              setHeart(!heart);
            }}
          />
          <div className='trackInfoTag'>
            Artist: {trackInfo.track.artist.name}
          </div>
          <div className='trackInfoTag'>
            Track: {trackInfo.track.name}
          </div>
          <div className='trackInfoTag'>
            Album: {trackInfo.track.album ? trackInfo.track.album.title : 'Unavailable'}
          </div>
          <div className='trackInfoTag'>
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
};

export default TrackInfo;