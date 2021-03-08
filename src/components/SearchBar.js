import React, { useEffect } from 'react';
import { setAuthHeader } from '../helper';
import search from '../images/icon_search.png';
import axios from 'axios';
import { SpotifyContext } from './Context';

const SearchBar = () => {
  const {input, artists} = SpotifyContext();
  const [inputValue, setInputValue] = input;
  const [artistResults, setArtistResults] = artists;
  const searchBar = document.querySelector('.searchArtist');

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