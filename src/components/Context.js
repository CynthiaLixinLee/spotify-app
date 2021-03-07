import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();

function SpotifyContext() {
  return useContext(ResultContext);
}

function ResultProvider({ children }) {
  const [loggedIn, setLogin] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [artistResults, setArtistResults] = useState('')

  return (
    <ResultContext.Provider
      value={{ login: [loggedIn, setLogin], input: [inputValue, setInputValue], artists: [artistResults, setArtistResults] }}
    >
      { children }
    </ResultContext.Provider>
  )
}

export { ResultProvider, SpotifyContext }