import React from 'react';

const Track = ({ track, setPage, setCurrentTrack }) => {

  return (
    <li
      className='track'
      onClick={(e) => {
        const params = {
          artist: track.artist.name,
          track: track.name
        }
        setPage('trackInfo');
        setCurrentTrack(params);
      }}
    >{track.name} by {track.artist.name}</li>
  )

};

export default Track;