function setPlayerStyle(player) {
  player.style.border = "1px solid red";
  player.style.borderRadius = "15px";
  player.style.margin = "10px";
  player.style.padding = "10px";
}
const players = document.getElementsByClassName("player");
for (const player of players) {
  setPlayerStyle(player);
  player.addEventListener("click", function () {
    player.style.backgroundColor = "yellow";
  });
}

function addPlayer() {
  const playersContainer = document.getElementById("players");
  const player = document.createElement("div");
  player.classList.add("player");
  player.innerHTML = `
   <h4 class="player-name">New Player</h4>
   <p>Quia similique magnam eos, id voluptatum voluptatibus fugiat excepturi nulla dolore corrupti. Itaque id
   aut commodi excepturi totam impedit maiores velit voluptates corporis recusandae iusto temporibus
   consequatur et, nobis reiciendis!</p>
   `;
  setPlayerStyle(player);
  playersContainer.appendChild(player);
}

document.getElementById("players").addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() == "div") {
    event.target.style.backgroundColor = "yellow";
  } else {
    event.target.parentNode.style.backgroundColor = "yellow";
  }
});
