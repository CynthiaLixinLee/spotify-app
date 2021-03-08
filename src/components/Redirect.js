import React, { useEffect } from "react";
import { getValues } from '../helper.js';
import { useHistory } from 'react-router-dom';

const Redirect = () => {
  const history = useHistory();
  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf('access_denied') > -1) {
      history.push('/');
    } else {
      const accessToken = getValues(url);
      const expiryTime = new Date().getTime() + accessToken.expires_in *1000;
      localStorage.setItem('params', JSON.stringify(accessToken));
      localStorage.setItem('expiry_time', expiryTime);
      history.push('/artist-search');
    }
  },[])

  return (
   <div />
  )
};

export default Redirect;