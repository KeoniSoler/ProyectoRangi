 /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
  let darkModeButton = document.getElementById("darkModeButton");
  darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
 /* modo noche */



//Api canciones

let urltracks = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"

fetch (urltracks)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let tracks = document.querySelector (".tracks")
    let todoslostracks = []
    for (let i = 0; i < 5; i++){
      todoslostracks +=
        `<article>
        <a href="./detalletrack.html?id=${info.data[i].id}">
        <img src= "${info.data[i].album.cover}" alt="" class="fototracks">
        <p> ${info.data[i].title}  </p>
        </a>
        <p><a href="./detalleartista.html">${info.data[i].artist.name} </p>
        </article>`
    }
    tracks.innerHTML= todoslostracks
    console.log(todoslostracks);
})
.catch (function (error){
    alert (error)
})

let checkbox = document.getElementById('dark-mode-checkbox');
let body = document.body;

let urlartists = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"

fetch (urlartists)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let artistas = document.querySelector (".artistas")
    let todoslosartistas = []
    for (let i = 0; i < 5; i++){
        todoslosartistas +=
        `<article>
        <a href="./detalleartista.html?id=${info.data[i].id}">
        <img src= "${info.data[i].picture}" alt="" class="fotoartistas">
        <p> ${info.data[i].name}  </p>
        </a>
        </article>`
    }
    artistas.innerHTML= todoslosartistas
    console.log(todoslosartistas);
})
.catch (function (error){
    alert (error)
})

//Api albums

let urlalbums = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"

fetch (urlalbums)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let albums = document.querySelector (".albums")
    let todoslosalbums = []
    for (let i = 0; i < 5; i++){
      todoslosalbums +=
        `<article>
        <a href="./detallealbum.html?id=${info.data[i].id}">
        <img src= "${info.data[i].cover}" alt="" class="fotoalbums">
        <p> ${info.data[i].title}  </p>
        </a>
        </article>`
    }
    albums.innerHTML= todoslosalbums
    console.log(todoslosalbums);
})
.catch (function (error){
    alert (error)
})