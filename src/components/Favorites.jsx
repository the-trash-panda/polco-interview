import React from 'react';

const Favorites = ({ favorites, setTrackInfo, setPage, setCurrentTrack }) => {

  return (
    <div className='pageIndividual'>
      <ul className='list'>
        {favorites.filter((favorite) => favorite.favorite).length > 0 ?
          favorites.filter((favorite) => favorite.favorite).map((favorite, idx) => {
            return (
              <li
                className='track'
                key={idx}
                onClick={(e) => {
                  const params = {
                    artist: favorite.artist,
                    track: favorite.track
                  }
                  setTrackInfo('');
                  setPage('trackInfo');
                  setCurrentTrack(params);
                }}
              >{favorite.track} by {favorite.artist}</li>
            )
          }) : <span>Add more songs to your favorite!</span>
        }
      </ul>
    </div>
  )

};

export default Favorites;