
let urldetalbums = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/artist"

fetch (urldetalbums)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let detalbum = document.querySelector (".detalbum")
    let detailalbum = []
    for (let i = 0; i < 5; i++){
        detailalbum +=
        `<article>
        <a href="./detalletrack.html?id=${info.data[i].id}">
        <img src= "${info.data[i].album.cover}" alt="" class="fotoalbums">
        <p> ${info.data[i].title}  </p>
        <p> ${info.data[i].name}  </p>
        </a>
        </article>`
    }
    detalbum.innerHTML= detailalbum
    console.log(detailalbum);
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
