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
  const [resultDisplay, setResultDisplay] = useState('artists')

  return (
    <ResultContext.Provider
      value={{ input: [inputValue, setInputValue], artists: [artistResults, setArtistResults], albums: [albumResults, setAlbumResults], display: [resultDisplay, setResultDisplay], artist_ID: [artistID, setArtistID] }}
    >
      { children }
    </ResultContext.Provider>
  )
}

export { ResultProvider, SpotifyContext }