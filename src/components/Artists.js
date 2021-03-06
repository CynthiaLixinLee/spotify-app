import React from "react";
import { formatFollowers, starConversion } from "../helper.js";
import { useHistory } from 'react-router-dom';
import { SpotifyContext } from './Context';
import noImg from '../images/img_not_found.jpg';

const Artists = () => {
  const history = useHistory();
  const { artists, artist_ID, albums } = SpotifyContext();
  const [artistResults] = artists;
  const [albumResults, setAlbumResults] = albums;
  const [artistID, setArtistID] = artist_ID;
  const list = Array.from(artistResults);

 const goToAlbums = (id, name)  => {
   setArtistID([id].concat(name));
   setAlbumResults('');
   history.push('/albums');
}

  const artistList = list.map(function(artist){
    return <div
      key={artist.id}
      className="item"
      onClick={() => goToAlbums(artist.id, artist.name)}>
      <img src={artist.images[0] ? artist.images[0].url : noImg} alt="Artist" />
      <h3 className="boxTitle">{artist.name}</h3>
      <span className="followers">{formatFollowers(artist.followers.total)}  followers</span>
      <span className="starRating">{starConversion(artist.popularity)}
      </span>
    </div>
  })

  return (
    <div className="resultContainer">
      { artistList }
    </div>
  )
};

export default Artists;