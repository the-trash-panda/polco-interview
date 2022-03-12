import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import List from './components/List.jsx';
import topTracks from './data/topTracks.js';

const App = () => {
  return (
    <div>
      <h2>Billboard's Top 100 Hits</h2>
      <List topTracks={topTracks}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));