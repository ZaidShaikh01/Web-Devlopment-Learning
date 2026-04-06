// c6BcDCO292Fez2uqKp6Kdx0u8ovtAnIF52byQ9HE97g
// https://xmdbapi.com/api/v1/movie/tt0111161?apiKey=YOUR_API_KEY

// Router
const global = {
  currentPage: window.location.pathname,
};

function init() {
  switch (global.currentPage) {
    case '/':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);
