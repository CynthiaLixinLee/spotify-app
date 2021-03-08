import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();

function SpotifyContext() {
  return useContext(ResultContext);
}

function ResultProvider({ children }) {
  const [inputValue, setInputValue] = useState('')
  const [artistResults, setArtistResults] = useState('')
  const [albumResults, setAlbumResults] = useState('')
  const [artistID, setArtistID] = useState([])

  return (
    <ResultContext.Provider
      value={{
        input: [inputValue, setInputValue],
        artists: [artistResults, setArtistResults],
        albums: [albumResults, setAlbumResults],
        artist_ID: [artistID, setArtistID]
      }}
    >
      { children }
    </ResultContext.Provider>
  )
}

export { ResultProvider, SpotifyContext }