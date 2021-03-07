import axios from 'axios';

// Get access token and expiry time
export const getValues = (url) => {
  let str = "http://localhost:3000/redirect#";
  return url
    .replace(str, '')
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
  };

// Add access_token to every axios API request
export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`
    }
  } catch (error) {
    console.log('Error setting authorization', error);
  }
};

// Format - Add commas to follower number
export const formatFollowers = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// Star rating conversion
export const starConversion = (rating) => {
  let starCount =  Math.round(rating / 100 * 5);
  let stars = '';
  for (let i = 0; i < starCount; i++) {
    stars += '★';
  }
  return stars;
}