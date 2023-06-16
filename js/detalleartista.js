let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (info) {
        console.log(info);
        let detartista = document.querySelector(".detalleartista")
        let detalleart =
            ` <li>  
                <img src= "${info.picture_medium}" alt='' />
                <p>${info.name}  </p>
                ${fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${ID}/albums`)
                .then(function (response) {
                    return response.json()

                })
                .then(function (info) {
                    console.log(info);
                    let listaalbum = document.querySelector(".5album")
                    let albums = [];
                    for (let i = 0; i < 5; i++) {
                        albums += `<li>
                        <a href="../Html/album.html?id=${info.data[i].id}"> <p class = "ptit"> ${i+1}: ${info.data[i].title}</p> </a>
                                
                                </li>`;
                    }

                    listaalbum.innerHTML = albums

                })
            } 
             </li>`;

             detartista.innerHTML = detalleart
    })
    .catch(function (error) {
        console.log(error);
    })

  /* modo noche */
  document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.getElementById("darkModeButton");
    darkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
   /* modo noche */