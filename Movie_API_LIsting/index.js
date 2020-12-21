const API_KEY = '7f786a86';
// http://www.omdbapi.com/?i=tt3896198&apikey=7f786a86&
// use search parameter http://www.omdbapi.com/?apikey=7f786a86&s=search_string

// Get the search field value from the Search Form

const searchForm = document.querySelector('#searchForm');

// create and append data
const app = document.querySelector('#app');


// Get results on click event
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  app.innerHTML = '';

  const search = document.querySelector('#inputSearch').value;
 
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then( res => res.json())
    .then( data => {
      
      for(i = 0; i < data.Search.length; i++){
     
        let node = `
        <div class="col-md-3">
        <div class="movie">
        <div class="poster" style="background:url('${data.Search[i].Poster}');background-size:cover;background-position:center top;">
        </div>
        <h4>${data.Search[i].Title}</h4>
        <p>Year: ${data.Search[i].Year}</p>
        </div>
        </div>
        `;
        
        app.insertAdjacentHTML('afterbegin',node);
      }
    })
 
  
})






