import React, { useState } from 'react';
import axios from 'axios';

const Track = ({ track, setPage, setCurrentTrack}) => {

  return (
    <li
      onClick={(e) => {
        const params = {
          artist: track.artist.name,
          track: track.name
        }
        setPage('trackInfo');
        setCurrentTrack(params);
      }}
    >
      {track.name} by {track.artist.name}

    </li>
  )
}

export default Track;