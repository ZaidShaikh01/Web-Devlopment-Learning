// getCurrentPosition()

function curSuccess(pos) {
  const coords = pos.coords;
  console.log('Latitude ' + coords.latitude);
  console.log('Longitude ' + coords.longitude);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}
const currOptions = {
  enableHighAccuracy: true,
  timeout: 500,
  maximumAge: 0,
};
navigator.geolocation.getCurrentPosition(curSuccess, curError, currOptions);

// watchPosition()

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log('Latitude ' + coords.latitude);
  console.log('Longitude ' + coords.longitude);
  console.log(`Within: ${coords.accuracy} meters`);
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}
const watchOptions = {
  enableHighAccuracy: true,
  timeout: 500,
  maximumAge: 0,
};
navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
