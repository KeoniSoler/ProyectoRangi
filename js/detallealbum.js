let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detalbum = document.querySelector(".detallealbumes")
        let detalle =
            ` <li>  
            <img src= "${data.cover_medium}" alt='' />
            <p> Album: ${data.title}  </p>
            <a href="./html/detalleartista.html?id=${data.artist.id}"> <p> Artista: ${data.artist.name}  </p> </a>
            <a href="../Html/detallegeneros.html?id=${data.genre_id}"><p> Genero: ${data.genres.data[0].name}  </p>
            <p> Fecha de Lanzamiento: ${data.release_date}  </p>
                </li>`

                
                let lista = document.querySelector(".cancionesalbumes")
                let songs =[];
                for (let i=0; i < data.tracks.data.length ;i++){
                songs +=`
                    <li>
                    <a href="../Html/canciones.html?id=${data.tracks.data[i].id}"> <p> ${i}: ${data.tracks.data[i].title}  </p> </a>
                    </li>`;
                }
                lista.innerHTML = songs
            
             ;

        detalbum.innerHTML = detalle
    })
    .catch(function (error) {
        console.log(error);
    })

    let indice = document.querySelectorAll(".navegadores");
for (let i = 0; i < indice.length; i++) {
    indice[i].addEventListener("mouseover", function() {
      indice[i].style.color = "white";
    });
  }
   for (let i = 0; i < indice.length; i++) {
    indice[i].addEventListener("mouseout", function() {
      indice[i].style.color = "black";
    });
  }

    /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.getElementById("darkModeButton");
    darkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
   /* modo noche */
