let url = "https://cors-anywhere.herokuapp.com/"


fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let artista = document.querySelector (".artista")
    let todoslosartistas = []
    for (let i = 1; i < info.data.length; i++){
        todoslosartistas +=
        `<article>
        <img src= "${info.data[i].picture_medium}" alt="" />
        <p> ${info.data[i].name}  </p>
        </article>`
    }
    artista.innerHTML= todoslosartistas
    console.log(todoslosartistas);
})
.catch (function (error){
    alert (error)
})