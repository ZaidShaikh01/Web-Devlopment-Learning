const div = document.getElementById('joke');
const button = document.getElementById('joke-btn');

const getNextJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        div.innerHTML = JSON.parse(this.responseText).value;
      } else {
        div.innerHTML = 'Something Went Wrong (Not Funny)';
      }
    }
  };

  xhr.send();
};

button.addEventListener('click', getNextJoke);
document.addEventListener('DOMContentLoaded', getNextJoke);
