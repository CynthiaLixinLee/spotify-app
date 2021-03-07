import React from 'react';
import logo from '../images/logo_spotify.png';

const Login = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  }

  return(
    <div className="search">
      <button className="loginBtn" onClick={handleLogin}>
        <span className="left"></span>
        <span>Login</span>
        <img src={logo} alt="Logo" class="icon" />
      </button>
    </div>

  )
}

export default Login;