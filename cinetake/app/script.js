
const entrees = document.getElementById('entrees');
const results = document.getElementById('results');
const carousel = document.getElementById('carousel');

let search = '';
let films=[];
let sorties=[];




/************************ FILMS ACTUELLEMENT EN SALLES ****************************/

const fetchsorties = async() =>{
  sorties= await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=941ed0ae088b5c014f6573dab48d86bc&language=fr&page=1&region=FR`)
    .then((res)=>res.json());

    console.log(sorties);
};


const displaysorties = async()=>{
  await fetchsorties();

  carouselvisible.innerHTML= sorties.results.slice(0,1).map((sortie1)=> (                  //LE 2EME RESULTS EST CELUI DANS LE JSON
    `
       <div class="slider">
       <img class="active" src="https://image.tmdb.org/t/p/w500${sortie1.poster_path}">
  
    </div>

    
    `
)).join("");

  carousel.innerHTML= sorties.results.slice(1,10).map((sortie)=> (                  //LE 2EME RESULTS EST CELUI DANS LE JSON
      `
         <div class="slider">
         <img  src="https://image.tmdb.org/t/p/w500${sortie.poster_path}">
    
      </div>

      
      `
  )).join("");

};
displaysorties();





/************************ RECHERCHE DANS LE CATALOGUE DE FILMS ****************************/


const fetchfilms = async() =>{
  films= await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=941ed0ae088b5c014f6573dab48d86bc&language=fr&query=${search}`)
    .then((res)=>res.json());

    console.log(films);
};


const displayfilms = async()=>{
                  await fetchfilms();

                  results.innerHTML= films.results.map((film)=> (
                      `
                          <li>
                          <h2>${film.original_title}</h2>
                          <div class="card-content">
                            <img src="https://image.tmdb.org/t/p/w500${film.poster_path}"></img>
                            <div class="infos">
                              <p>${film.overview}</p>
                              <p>Popularité : ${film.popularity} ⭐</p>
                            </div>
                          </div>
                          </li>
                      `
                  )).join(""); //pour enlever les virgules entre chaque item

};

document.getElementById("button").addEventListener('click', (e) => {
  search=entrees.value;
  fetchfilms();
  displayfilms();
});





















