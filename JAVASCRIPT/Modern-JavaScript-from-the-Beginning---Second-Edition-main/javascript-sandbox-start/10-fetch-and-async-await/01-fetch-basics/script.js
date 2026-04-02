// Fetchign a JSON file
fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
// Fetching a  text file

fetch('./test.txt')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });
// Fetching from an API

fetch('https://api.github.com/users/ShaikhZaid01/repos')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));
