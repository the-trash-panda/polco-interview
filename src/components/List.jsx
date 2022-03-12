import React from 'react';
import Track from './Track.jsx';

const List = ({ topTracks }) => {
  return (
    <ul>
      {topTracks.tracks.track.map((track) => {
        return (
          <Track
            track={track}
          />
        )
      })}
    </ul>
  )
}

export default List;