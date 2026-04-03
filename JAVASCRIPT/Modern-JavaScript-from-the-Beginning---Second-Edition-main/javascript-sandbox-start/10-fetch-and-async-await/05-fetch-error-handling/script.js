fetch('https://httpstat.us/200')
  .then((response) => {
    return response;
  })
  .then(() => console.log('success'));

fetch('https://httpstat.us/200')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });
