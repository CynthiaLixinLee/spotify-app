import React, { useEffect } from 'react';
import { setAuthHeader } from '../helper.js';
import { SpotifyContext } from './Context';
import { useHistory } from 'react-router-dom';
import noImg from '../images/img_not_found.jpg';
import axios from 'axios';

const Albums = () => {
  const { artist_ID, albums } = SpotifyContext();
  const [albumResults, setAlbumResults] = albums;
  const [artistID] = artist_ID;
  const history = useHistory();

  useEffect(() => {
    if (artistID) {
      findAlbums(artistID[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistID])

  async function findAlbums(id) {
    // Check if token is expired, if so redirect to Login page
    const currentTime = new Date().getTime();
    const expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    if (expiryTime) {
      if (currentTime > expiryTime) {
        history.push('/');
      }
    }
    setAuthHeader();
    await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`)
    .then(response => {
      return response.data ?
      setAlbumResults(response.data.items)
      : [];
    })
    .catch(err => {
      throw console.log('No albums found');
    });
  }
  const list = Array.from(albumResults);


  const albumList = list.map(function(album){
      return <div
      key={album.id}
      data-key={album.id}
      className="item">
        <img src={album.images[0] ? album.images[0].url : {noImg}} alt="Album cover" />
        <h3 className="boxTitle">{album.name}</h3>
        <span className="artists">
          {album.artists.map((artist) => artist.name).join(', ')}
        </span>
        <span className="releaseDate">{album.release_date}</span>
        <span className="tracks">{album.total_tracks} tracks</span>
        <a href={album.external_urls.spotify} target="_blank" rel="noreferrer">Preview on Spotify</a>
      </div>
  })

  return (
    <div>
      <h2 className="artistName">{artistID[1]}</h2>
      <p className="album">Albums</p>
      <div className="resultContainer">{ albumList }</div>
    </div>
  )
};

export default Albums;