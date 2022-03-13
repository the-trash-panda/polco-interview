import React from 'react';

const FavoriteTrack = ({ favorite }) => {
  return (
    <li>
      {favorite.track} by {favorite.artist}
    </li>
  )
}

export default FavoriteTrack;