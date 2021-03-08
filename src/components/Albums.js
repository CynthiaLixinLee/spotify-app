import React, { useEffect } from "react";
import { setAuthHeader } from "../helper.js";
import { SpotifyContext } from './Context.js';
import noImg from '../images/img_not_found.jpg';
import axios from 'axios';

const Albums = () => {
  const { artist_ID, albums } = SpotifyContext();
  const [albumResults, setAlbumResults] = albums;
  const [artistID] = artist_ID;

  useEffect(() => {
    if (artistID) {
      findAlbums(artistID[0]);
    }
  }, [artistID])

  async function findAlbums(id) {
    setAuthHeader();
    await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`)
    .then(response => {
      return response.data ?
      setAlbumResults(response.data.items)
      : [];
    })
    .catch(err => {
      // TODO: Do something to show this
      throw console.log('No albums found');
    });
  }
  const list = Array.from(albumResults);

  const albumList = list.map(function(album){
      return <div key={album.id} data-key={album.id} className="item">
        <img src={album.images[0] ? album.images[0].url : {noImg}} alt="Album cover" />
        <h3 className="boxTitle">{album.name}</h3>
        <span className="artists">
          {album.artists.map((artist) => artist.name).join(', ')}
        </span>
        <span className="releaseDate">{album.release_date}</span>
        <span className="tracks">{album.total_tracks} tracks</span>
        <a href={album.external_urls.spotify} target="_blank">Preview on Spotify</a>
      </div>
  })

  return (
    <div className="resultContainer">
      <h2 className="artistName">{artistID[1]}</h2>
      <p>Albums</p>
      { albumList }
    </div>
  )
};

export default Albums;