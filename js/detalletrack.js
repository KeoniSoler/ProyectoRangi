 /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.getElementById("darkModeButton");
    darkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
   /* modo noche */

//detalle tracks

let urldettracks = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}"

fetch (urldettracks)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let dettrack = document.querySelector (".dettrack")
    let detailtracks = []
    for (let i = 0; i < info.data.length; i++){
        detailtracks +=
        `<article>
        <a href="./detalletrack.html?id=${info.data[i].id}">
        <img src= "${info.data[i].album.cover}" alt="" class="fototracks">
        <p> ${info.data[i].title}  </p>
        <p> <a href="./detalletrack.html?id=${info.data[i].id}">${info.data[i].name} </a></p>
        </a>
        </article>`
    }
    dettrack.innerHTML= detailtracks
    console.log(detailtracks);
})
.catch (function (error){
    alert (error)
})