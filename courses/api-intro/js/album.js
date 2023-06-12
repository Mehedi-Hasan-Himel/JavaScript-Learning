function loadAlbums() {}
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then((data) => displayAlbums(data));


function displayAlbums(albums) {
  const albumContainer = document.getElementById("albums");
  for (const album of albums) {
    const p = document.createElement("p");
    p.innerText = album.title;
    albumContainer.appendChild(p);
  }
}
