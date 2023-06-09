 /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.getElementById("darkModeButton");
    darkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
   /* modo noche */

//detalle tracks

let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detcancion = document.querySelector(".detalletrack")
        let detalle =
            ` <li class="detailtrack">  
            <a href="./detalleartista.html?id=${data.artist.id}"> 
            <img src= "${data.album.cover_medium}" alt='' />
            <p> Titulo: ${data.title}  </p>
            <p> Artista: ${data.artist.name} </p> </a>
                <a href="./detallealbum.html?id=${data.album.id}">   <p> Album: ${data.album.title}  </p> </a>
                <button class="btnFavs"><a href="./playlists.html?id=${data.album.id}"> Agregar a Playlist </a></button>
             </li>`;

        detcancion.innerHTML = detalle
    })
    .catch(function (error) {
        console.log(error);
    })