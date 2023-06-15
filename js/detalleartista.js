let urldeartista = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"

fetch (urldeartista)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let detartista = document.querySelector (".detartista")
    let detailartista = []
    for (let i = 0; i <info.data.length; i++){
        detailartista +=
        `<article>
        <a href="./detalleartista.html?id=${info.data[i].id}">
        <img src= "${info.data[i].picture}" alt="" class="fotoartistas">
        <p><a href="./detalleartista.html?id=${info.data[i].id}">${info.data[i].name}</a></p>
        <p> ${info.data[i].tracklist}  </p>
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