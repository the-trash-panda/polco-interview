import React from 'react';
import Track from './Track.jsx';

const List = ({ topTracks, setPage, setCurrentTrack }) => {

  return (
    <ul>
      {topTracks.tracks ? topTracks.tracks.track.map((track, idx) => {
        return (
          <Track
            key={idx}
            track={track}
            setPage={setPage}
            setCurrentTrack={setCurrentTrack}
          />
        )
      }) : <span>Loading</span>
      }
    </ul>
  )

};

export default List;