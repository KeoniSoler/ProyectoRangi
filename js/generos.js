let url = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/genre"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let genero = document.querySelector (".genero")
    let todoslosgeneros = []
    for (let i = 1; i < info.data.length; i++){
        todoslosgeneros +=
        `<article>
        <a href="./detallegeneros.html?id=${info.data[i].id}">
        <img src= "${info.data[i].picture_medium}" alt="" />
        <p> ${info.data[i].name}  </p>
        </a>
        </article>`
    }
    genero.innerHTML= todoslosgeneros
    console.log(todoslosgeneros);
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
