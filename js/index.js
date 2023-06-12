 /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
  let darkModeButton = document.getElementById("darkModeButton");
  darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
 /* modo noche */



//Api canciones

let urlTracks = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"

fetch (urlTracks)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data)
    let tracks = document.querySelector (".tracks")
    let todoslostracks = []
    for (let i = 0; i < data.length; i++){
        todoslostracks +=
        `<article>
        <img src= "${data[i].artists.picture_medium}" alt="" />
        <p> ${data[i].title}  </p>
        </article>`
    }
    tracks.innerHTML= todoslostracks
    console.log(todoslostracks);
})
.catch (function (error){
    alert (error)
})

//Api artistas

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

//Api artistas

let urlalbums = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"

fetch (urlalbums)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let genero = document.querySelector (".albums")
    let todoslosgeneros = []
    for (let i = 1; i < info.data.length; i++){
        todoslosgeneros +=
        `<article>
        <img src= "${info.data[i].picture_medium}" alt="" />
        <p> ${info.data[i].name}  </p>
        </article>`
    }
    genero.innerHTML= todoslosgeneros
    console.log(todoslosgeneros);
})
.catch (function (error){
    alert (error)
})
