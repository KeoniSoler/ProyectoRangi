let urldeartista = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/artist"

fetch (urldeartista)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let detartista = document.querySelector (".detartista")
    let detailartista = []
    for (let i = 0; i < 5; i++){
        detailartista +=
        `<article>
        <a href="./detalletrack.html?id=${info.data[i].id}">
        <img src= "${info.data[i].album.cover}" alt="" class="fotoartistas">
        <p> ${info.data[i].title}  </p>
        <p> ${info.data[i].name}  </p>
        </a>
        </article>`
    }
    detartista.innerHTML= detailartista
    console.log(detailartista);
})
.catch (function (error){
    alert (error)
})

  /* modo noche */
  document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.getElementById("darkModeButton");
    darkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
   /* modo noche */