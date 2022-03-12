import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import topTracks from './data/topTracks.js';
import trackInfo from './data/trackInfo.js';
import List from './components/List.jsx';
import TrackInfo from './components/TrackInfo.jsx';


const App = () => {

  const [page, setPage] = useState('home');
  const [currentTrack, setCurrentTrack] = useState('');

  return (
    <div>
      <h2
        onClick={(e) => {setPage('home')}}
      >Billboard's Top 100 Hits</h2>
      {page === 'home' ?
        <List
          topTracks={topTracks}
          setPage={setPage}
          setCurrentTrack={setCurrentTrack}
        />
        :
        <TrackInfo
          trackInfo={trackInfo}
        />
      }
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));