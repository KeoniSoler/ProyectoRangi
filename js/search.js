 /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
  let darkModeButton = document.getElementById("darkModeButton");
  darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
 /* modo noche */

 let busqueda = new URLSearchParams(location.search)
let buscar = busqueda.get('buscar')
let resultados = document.querySelector('.resultados')
let contenido = ''
let titulo = document.querySelector('.busqueda')
titulo.innerHTML += buscar

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      console.log(data);

      for (let i = 0; i < data.data.length; i++) {
         contenido += 
         `<article>
         <p><a href="./detalletrack.html?id=${data.data[i].id}"> ${data.data[i].title} </a></p>   
          <img src="${data.data[i].album.cover_medium}" alt="">  
         </article>`
      }
      resultados.innerHTML += contenido
      if (data.data.length == 0) {
         alert('No se han encontrado resultados')
      }
      contenido.innerHTML = contenido
   })
   .catch(function (error) {
      console.log("Error: " + error);
   })