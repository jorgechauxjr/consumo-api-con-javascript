console.log("HELLO WORLD");


// =====Resultado con PROMESAS
/*
function reload() {
  const URL = 'https://api.thecatapi.com/v1/images/search';
fetch(URL)
  .then(resp => resp.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  });
  }
*/




// =====Resultado con async await

const API_URL = 'https://api.thecatapi.com/v1/images/search';

async function reload() {
  const resp = await fetch(API_URL);
  const data = await resp.json();
  const img = document.querySelector('img');
  img.src = data[0].url;
}

reload();