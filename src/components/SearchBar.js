import React, { useEffect } from 'react';
import { setAuthHeader } from '../helper';
import search from '../images/icon_search.png';
import axios from 'axios';
import { SpotifyContext } from './Context';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const {input, artists} = SpotifyContext();
  const [inputValue, setInputValue] = input;
  const [artistResults, setArtistResults] = artists;
  const searchBar = document.querySelector('.searchArtist');
  const history = useHistory();

  const checkKey = (event) => {
    if (event.keyCode === 13) {
      findArtist(event);
    }
  };

  const findArtist = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  // Triggered when state is updated
  useEffect(() => {
    searching(inputValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  async function searching(inputValue) {
    // Check if token is expired, if so redirect to Login page
    const currentTime = new Date().getTime();
    const expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    if (expiryTime) {
      if (currentTime > expiryTime) {
        history.push('/');
      }
    }
    setAuthHeader();
    await axios.get(`https://api.spotify.com/v1/search?q=${inputValue}&type=artist`)
    .then(response => {
      searchBar.classList.add('slideUp');
      return response.data.artists ?
        setArtistResults(response.data.artists.items)
        : [];
    })
    .catch(err => {
      throw console.log('No results found');
    });
  }

  return (
    <div className="search searchArtist">
      <span className="left"></span>
      <input type="text" onKeyDown={checkKey} onChange={findArtist} placeholder="Search for an artist..." />
      <img src={search} className="icon" alt="search icon" />
    </div>
  );
};

export default SearchBar;