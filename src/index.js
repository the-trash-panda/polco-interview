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
  const [currentTrack, setCurrentTrack] = useState({});
  const [trackInfo, setTrackInfo] = useState('');
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    axios.get('/api/topTracks')
      .then((res) => {setTopTracks(res.data.data)})
      .catch((err) => {console.error(err)})
    axios.get('/api/favorites')
      .then((res) => {setFavorites(res.data.rows)})
      .catch((err) => {console.error(err)})
  }, []);


  useEffect(() => {
    axios.get('/api/trackInfo', {params: currentTrack})
        .then((res) => {setTrackInfo(res.data.data)})
        .catch((err) => {console.error(err)})
  }, [currentTrack]);


  const getFavorites = () => {
    axios.get('/api/favorites')
      .then((res) => {setFavorites(res.data.rows)})
      .catch((err) => {console.error(err)})
  };


  return (
    <div className='container'>
      <div className='headerContainer'>
        <h2
          className='header'
        >LastFM's Top 50 Hits</h2>
        <div className='buttonContainer'>
          <button
            onClick={(e) => {
              setPage('home');
              setTrackInfo('');
            }}
          >
            Main Page
          </button>
          <button
            onClick={(e) => {
              setPage('favorites');
              getFavorites();
            }}
          >
            Favorites
          </button>
        </div>
      </div>
      <div className='pageContainer'>
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
            currentTrack={currentTrack}
            favorites={favorites}
            getFavorites={getFavorites}
          />
          :
          <Favorites
            favorites={favorites}
            setTrackInfo={setTrackInfo}
            setPage={setPage}
            setCurrentTrack={setCurrentTrack}
          />
        }
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));