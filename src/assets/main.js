const API = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1E8EPIj7X9s99n&offset=0&limit=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f7fe387c5msh537a1a7c2e3685bp1cb171jsnda3bd8987130',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const songs = await fetchData(API);
    let view = `
    ${songs.items.map(song => `
      <div class="group relative">
        <div
          class="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${song.track.album.images[0].url}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <div class="w-full flex justify-between items-center">
            <h3 class="text-white">${song.track.name}</h3>
            <h3 class="text-xs text-blue-200">${song.track.album.release_date}</h3>
          </div>
        </div>
      </div>
    `).slice(0, 5).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();


/*
try {
	const response = await fetch(API, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/
