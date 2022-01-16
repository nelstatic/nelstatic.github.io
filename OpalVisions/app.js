//DISPAROTION DU LOADER
 function hideLoader(){
    document.querySelector('.loader-container').classList.add('hidden-loader-visibility');
}

setTimeout(hideLoader, 1800);



/*********************************************************************/

//GREENSOCK TITRE
tl = new TimelineMax ({});
tl.staggerFrom('.hidd', 1.5, {y:"100%", ease:Power4.easeOut}, 0.5);


var currentDelay= tl.delay();
tl.delay(2.2); 

/*********************************************************************/


//REVEAL ON SCROLL
const imgcontainer= document.querySelector('.img-container');
const overlay= document.querySelector('.overlay');
const revblock = document.querySelector('.rev-block');

const sectionOne = document.getElementById('one');
let hauteur = one.clientHeight;


window.addEventListener('scroll', ()=>{

    if(window.scrollY>(hauteur)*0.33){
        imgcontainer.classList.remove('on-scroll');
        overlay.classList.remove('on-scroll');
        revblock.classList.remove('on-scroll');
    }

});

/*********************************************************************/

//BACK TO TOP

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', ()=>{
    if(window.scrollY>(hauteur)){
        backToTop.classList.add("active");
    }else{
        backToTop.classList.remove("active");
    }
})

/*********************************************************************/

//HAMBURGER MENU
$(document).ready(function(){
    $('#menu-icon').click(function(){
        $('ul').toggleClass('show');
    });
});

  