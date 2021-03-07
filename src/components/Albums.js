// async function findAlbums(id) {
//   setAuthHeader();
//   //TODO:  check if token expired, if so ask for new token
//   await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`)
//   .then(response => {
//     console.log('albums: ', response);
//     // return response.data.artists ?
//     //   setArtistResults(response.data.artists.items)
//     //   : [];
//   })
//   .catch(err => {
//     // TODO: Do something to show this
//     throw console.log('No albums found');
//   });
// }