 /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.getElementById("darkModeButton");
    darkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
   /* modo noche */

//detalle tracks

let urldettracks = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/artist"

fetch (urldettracks)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let dettrack = document.querySelector (".dettrack")
    let detailtracks = []
    for (let i = 0; i < 5; i++){
        detailtracks +=
        `<article>
        <a href="./detalletrack.html?id=${info.data[i].id}">
        <img src= "${info.data[i].album.cover}" alt="" class="fototracks">
        <p> ${info.data[i].title}  </p>
        <p> ${info.data[i].name}  </p>
        </a>
        </article>`
    }
    dettrack.innerHTML= detailtracks
    console.log(detailtracks);
})
.catch (function (error){
    alert (error)
})