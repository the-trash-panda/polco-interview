import React from 'react';

const TrackInfo = ({ trackInfo }) => {

  return (
    <div>
      <div>
        Artist: {trackInfo.track.artist.name}
      </div>
      <div>
        Track: {trackInfo.track.name}
      </div>
      <div>
        Album: {trackInfo.track.album.title}
      </div>
      <div>
        Genre: {trackInfo.track.toptags.tag.map((genre, idx) => {
          return (
            <span>{(idx ? ', ' : '') + genre.name}</span>
          )
        })}
      </div>
    </div>
  )
}

export default TrackInfo;