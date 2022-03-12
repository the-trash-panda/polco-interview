import React from 'react';

const Track = ({ track }) => {
  return (
    <li>
      {track.name} by {track.artist.name}
    </li>
  )
}

export default Track;