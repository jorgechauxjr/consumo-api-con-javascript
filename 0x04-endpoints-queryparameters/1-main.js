console.log("HELLO WORLD");


// =====Resultado con PROMESAS

function reload() {
  const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';
fetch(API_URL)
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
  });
  }