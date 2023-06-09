let checkbox = document.getElementById('dark-mode-checkbox');
let body = document.body;

checkbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

// Tracks

// Artistas
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let artista = document.querySelector (".artista")
    let todoslosartistas = []
    for (let i = 1; i < info.data.length; i++){
        todoslosartistas +=
        `<article>
        <img src= "${info.data[i].picture_medium}" alt="" />
        <p>Name:  ${info.data[i].name}  </p>
        </article>`
    }
    artista.innerHTML= todoslosartistas
    console.log(todoslosartistas);
})
.catch (function (error){
    alert (error)
})
// Albumes
