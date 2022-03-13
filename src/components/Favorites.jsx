import React from 'react';
import FavoriteTrack from './FavoriteTrack.jsx';

const Favorites = ({ favorites }) => {
  return (
    <ul>
      {favorites.length > 0 ? favorites.filter((favorite) => favorite.favorite).map((favorite, idx) => {
        return (
          <FavoriteTrack
            key={idx}
            favorite={favorite}
          />
        )
      }) : <span>Add more song to your favorites!</span>
      }
    </ul>
  )
}

export default Favorites;