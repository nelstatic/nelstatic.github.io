
const slides = document.querySelectorAll('img'); //queryselec met tous les éléments dans un tableau
const nbslides = slides.length;
const precedent = document.querySelector('.gauche');
const suivant = document.querySelector('.droite');

let compteur = 0;



function slideSuivante(){
    slides[compteur].classList.remove('active');

    if(compteur < nbslides - 1){
        compteur++;
    } else {
        compteur = 0;
    }

    slides[compteur].classList.add('active')
    console.log(compteur);
    
}
suivant.addEventListener('click', slideSuivante);



function slidePrecedente(){
    slides[compteur].classList.remove('active');

    if(compteur >0){
        compteur--;
    } else {
        compteur = nbslides-1;
    }

    slides[compteur].classList.add('active')
    console.log(compteur);
    
}