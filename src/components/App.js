import React from "react";
import { Switch, Route } from "react-router-dom";
import { ResultProvider } from './Context';
import Header from "./Header";
import Login from "./Login";
import Redirect from "./Redirect";
import ArtistSearch from "./ArtistSearch";
import Albums from "./Albums";

const App = () => {

  return(
    <ResultProvider>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/redirect" component={Redirect} />
            <Route exact path="/artist-search" component={ArtistSearch} />
            <Route exact path="/albums" component={Albums} />
          </Switch>
      </div>
    </ResultProvider>
  )
}

export default App;