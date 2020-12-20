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

  const search = document.querySelector('#inputSearch').value;
 
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then( res => res.json())
    .then( data => {
      // console.log(data);
      for(i = 0; i < data.Search.length; i++){
     
        let node = `
        <img src="${data.Search[i].Poster}">
        <h4>${data.Search[i].Title}</h4>
        <p>Year: ${data.Search[i].Year}</p>
        `;
        let wrapper = document.createElement('div');
        wrapper.className = 'col-md-4';
        let div = document.createElement('div');
        div.className = 'movie';
        wrapper.appendChild(div);
        div.innerHTML = node;
        app.appendChild(wrapper);
      }
    })
 
  
})






