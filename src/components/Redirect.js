import React from "react";
import { useHistory } from 'react-router-dom';

const Redirect = () => {
  const history = useHistory();

  const returnedURL = window.location.href;
  if (returnedURL.indexOf('access_denied') > -1) {
    history.push('/');
  } else {
    const baseUrl = returnedURL.match(/#\w/);
    const accessToken = returnedURL
        .slice(parseInt(baseUrl.index + 1))
        .split('&')
        .reduce((prev, curr) => {
          const [title, value] = curr.split('=');
          prev[title] = value;
          return prev;
        }, {});
    const expiryTime = new Date().getTime() + accessToken.expires_in *1000;
    localStorage.setItem('params', JSON.stringify(accessToken));
    localStorage.setItem('expiry_time', expiryTime);
    history.push('/artist-search');
  }

  return (
   <div />
  )
};

export default Redirect;