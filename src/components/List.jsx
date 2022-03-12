import React from 'react';
import Track from './Track.jsx';

const List = ({ topTracks, setPage, setCurrentTrack }) => {
  return (
    <ul>
      {topTracks.tracks.track.map((track) => {
        return (
          <Track
            track={track}
            setPage={setPage}
            setCurrentTrack={setCurrentTrack}
          />
        )
      })}
    </ul>
  )
}

export default List;