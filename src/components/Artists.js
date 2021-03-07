import React from "react";
import { formatFollowers, starConversion } from "../helper.js";
import { SpotifyContext } from './Context.js';

const Artists = () => {
  const { artists } = SpotifyContext();
  const [artistResults] = artists;
  const list = Array.from(artistResults);
 console.log(list);

 const goToAlbums = (e) => {
  console.log('going to album');
  // change state, change fragments in Results
  // run api call to get albums
}

  return (
    <div className="resultContainer">
      { list.map(function(artist){
        return <div key={artist.id} className="item">
          {/* <img src={artist.images[0].url} /> */}
          <h3 className="boxTitle">{artist.name}</h3>
          <span className="followers">{formatFollowers(artist.followers.total)}  followers</span>
          <span className="starRating">{starConversion(artist.popularity)}
          </span>
          <span className="albumLink" onCLick={goToAlbums}></span>
        </div>
        })}
    </div>
  )
};

export default Artists;