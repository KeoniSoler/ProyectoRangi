 /* modo noche */
 document.addEventListener("DOMContentLoaded", function() {
  let darkModeButton = document.getElementById("darkModeButton");
  darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
 /* modo noche */

 let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (info) {
        console.log(info);
        let detgenre = document.querySelector(".detallegenero")
        let detalle =
            ` <li>  
                <h2>${info.name}  </h2>
                <img src= "${info.picture_medium}" alt='' />
                ${fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${ID}/artists`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (info) {
                    console.log(info)
                    let artistasgen = document.querySelector(".artistasporgenero")
                    let artistas = []
                    for (let i = 0; i < 10; i++) {
                        artistas += `<li>
        
                        <a href="./detalleartista.html?id=${info.data[i].id}"> <p> ${info.data[i].name}</p> </a>
                        <a href="./detalleartista.html?id=${info.data[i].id}"> <img class= "ftodetgen" src= "${info.data[i].picture_medium}" alt="" />   </a>
                                </li>`;
                              
                    }
                    artistasgen.innerHTML = artistas
                  })
                }
             </li>`;

        detgenre.innerHTML = detalle
    })
    .catch(function (error) {
        console.log(error);
    })