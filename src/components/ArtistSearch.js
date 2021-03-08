import React, { useState, useEffect } from "react";
import Artists from './Artists.js';
import SearchBar from './SearchBar.js';

const ArtistSearch = () => {

  return (
    <div>
        <SearchBar />
        <Artists />
        {/* {
        resultDisplay === 'artists'
        ? <Artists />
        : <Albums />
        } */}
    </div>
  )
};

export default ArtistSearch;