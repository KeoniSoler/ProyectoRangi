let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data)
    let genero = document.querySelector (".genero")
    let todoslosgeneros = []
    for (let i = 1; i < data.data.length; i++){
        todoslosgeneros +=
        `<article>
        <img src= "${data.data[i].picture}" alt="" />
        <p>Name:  ${data.data[i].name}  </p>
        </article>`
    }
    genero.innerHTML= todoslosgeneros
    console.log(todoslosgeneros);
})
.catch (function (error){
    alert (error)
})