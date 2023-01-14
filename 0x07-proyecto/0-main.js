const API_KEY = 'live_0vaGXjOziQnpTx5VaxIozxj9QIn44XP9HW0IQhlf4fbFlwq8UJTkF53ou3X79pC0'
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${API_KEY}`;
const API_URL_FAVOTITES = `https://api.thecatapi.com/v1/favourites?limit=2&api_key=${API_KEY}`;
const spanError = document.getElementById('error');

async function loadRandomImage() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoriteimages() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

loadRandomImage();
loadFavoriteimages();
