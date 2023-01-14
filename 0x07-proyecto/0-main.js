const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_0vaGXjOziQnpTx5VaxIozxj9QIn44XP9HW0IQhlf4fbFlwq8UJTkF53ou3X79pC0';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_0vaGXjOziQnpTx5VaxIozxj9QIn44XP9HW0IQhlf4fbFlwq8UJTkF53ou3X79pC0';


// =====Resultado con PROMESAS

function loadRandomImage() {
fetch(API_URL_RANDOM)
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
