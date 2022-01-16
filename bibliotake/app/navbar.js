/*window.addEventListener('scroll', function(event){
    this.console.log(document.documentElement.scrollTop);
}); */
//l'ecouteur va compter le nombre de pixels dans la console quand on scroll 

window.onscroll= function(){

    if(document.documentElement.scrollTop>65){
        document.getElementById("navbar").style.background="black";
        document.getElementById("navbar").style.padding="30px 10px";
    }
    else{
        document.getElementById("navbar").style.background="rgb(221, 49, 49)";
        document.getElementById("navbar").style.padding="60px 10px";
    }
}