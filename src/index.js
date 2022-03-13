import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
// import topTracks from './data/topTracks.js';
// import trackInfo from './data/trackInfo.js';
import List from './components/List.jsx';
import TrackInfo from './components/TrackInfo.jsx';
import Favorites from './components/Favorites.jsx';
import axios from 'axios';


const App = () => {

  const [page, setPage] = useState('home');

  const [topTracks, setTopTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState('');
  const [trackInfo, setTrackInfo] = useState('');
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    axios.get('/api/topTracks')
      .then((res) => {setTopTracks(res.data.data)})
      .catch((err) => {console.error(err)})
  }, []);


  useEffect(() => {
    setTrackInfo('');
  }, [page === 'home'])


  useEffect(() => {
    const params = currentTrack
    axios.get('/api/trackInfo', {params})
        .then((res) => {setTrackInfo(res.data.data)})
        .catch((err) => {console.error(err)})
  }, [currentTrack]);

  useEffect(() => {
    axios.get('/api/favorites')
      .then((res) => {setFavorites(res.data.rows)})
      .catch((err) => {console.error(err)})
  }, [page === 'favorites'])


  return (
    <div>
      <div>
        <h2
          onClick={(e) => {setPage('home')}}
        >Billboard's Top 100 Hits</h2>
        <button onClick={(e) => {setPage('favorites')}}>
          Favorites
        </button>
      </div>
      {page === 'home' ?
        <List
          topTracks={topTracks}
          currentTrack={currentTrack}
          setPage={setPage}
          setCurrentTrack={setCurrentTrack}
        />
        : page === 'trackInfo' ?
        <TrackInfo
          trackInfo={trackInfo}
        />
        :
        <Favorites
          favorites={favorites}
        />
      }
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));