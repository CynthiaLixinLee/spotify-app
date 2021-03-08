import React from "react";
import Artists from './Artists';
import SearchBar from './SearchBar';

const ArtistSearch = () => {

  return (
    <div className="searchContainer">
        <SearchBar />
        <Artists />
    </div>
  )
};

export default ArtistSearch;