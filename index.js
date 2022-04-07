// https://striveschool-api.herokuapp.com/books
/*
const fetchApi = () => {
    const container = document.querySelector("#list")
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response)=>response.json()).then(data=> {
console.log(data);
data.forEach(element => { 
    const h1 = `<p>${element.title}</p>`
    container.innerHTML += h1
    console.log(h1)
    
});
    }).catch(e=>console.log(e))

}

fetchApi()
*/

const container = document.querySelector("#list")

const fetchApi = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then(data => {
        data.forEach(element => {
            const cardAll= `<div class="card">
            <img src=${element.img} class="card-img-top" alt="..." >
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.price}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>`
           container.innerHTML += cardAll

            
        });
        
    }).catch(e=>console.log(e))

}
fetchApi()


