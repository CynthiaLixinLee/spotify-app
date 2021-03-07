import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar.js';
import { getValues } from '../helper.js';
import Results from './Results.js';
import { ResultProvider, SpotifyContext } from './Context.js';

const ArtistSearch = () => {
  // const {login, input} = SpotifyContext();
  // const [loggedIn, setLogin] = login;

  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf('access_denied') > -1) {
      console.log("ACCESS DENIED");
    } else {
      //check expiry, set new token if expired
      const accessToken = getValues(url);
      const expiryTime = new Date().getTime() + accessToken.expires_in *1000;
      localStorage.setItem('params', JSON.stringify(accessToken));
      localStorage.setItem('expiry_time', expiryTime);
      // setLogin(true);
    }
  },[])


  // FInd access_token, if none only render the 'Need to Login' div

  return (
    <ResultProvider>
      <div>
        <SearchBar />
        <Results />
      </div>
    </ResultProvider>
  )
};

export default ArtistSearch;