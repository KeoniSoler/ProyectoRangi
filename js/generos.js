let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data.data)
    let artistas = document.querySelector (".artistas")
    let listaartistas = []
    for (let i = 1; i < data.data.length; i++){
        listaartistas +=
        `<article>
        <img src= "${data.data[i].picture}" alt="" />
        <p>Name:  ${data.data[i].name}  </p>
        </article>`
    }
    artistas.innerHTML= listaartistas
    console.log(listaartistas);
})
.catch (function (error){
    alert (error)
})