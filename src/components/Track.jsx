import React from 'react';

const Track = ({ track, setPage, setCurrentTrack }) => {
  return (
    <li
      onClick={(e) => {
        setPage('trackInfo');
        setCurrentTrack({ artist: track.artist.name, track: track.name });
      }
      }
    >
      {track.name} by {track.artist.name}
    </li>
  )
}

export default Track;