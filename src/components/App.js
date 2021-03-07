import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import ArtistSearch from "./ArtistSearch";
import Albums from "./Albums";
export const AuthContext = React.createContext();

const App = () => {
  const [expiry, updateExpiry] = useState('0');

  useEffect(() => {
    expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    updateExpiry(expiryTime);
  },[])


    // isValidSession = () => {
    //   const currentTime = new Date().getTime();
    //   const expiryTime = this.state.expiryTime;
    //   const isSessionValid = currentTime < expiryTime;
    //   return isSessionValid;
    // };

  return(
    <div className="App">
      <Header />
      <AuthContext.Provider>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/redirect" component={ArtistSearch} />
          </Switch>
      </AuthContext.Provider>
    </div>
  )
}

export default App;