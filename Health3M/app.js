//séléctions
var point = document.getElementsByClassName("point");
var banner = document.getElementById("banner");

//événements
point[0].onclick=function(){
    banner.src="assets/images/vit4.jpg";
    animation();
    this.classList.add("active");
}
point[1].onclick=function(){
    banner.src="assets/images/vit5.jpg";
    animation();
    this.classList.add("active");  
}
point[2].onclick=function(){
    banner.src="assets/images/HBH___CREATIVE_MAY_HIGHRES-9_copy2.jpg"
    animation();
    this.classList.add("active");
}


function animation(){
    banner.classList.add("fade");
    setTimeout(() => {
        banner.classList.remove("fade");
    }, 500);

    for(e of point){
        e.classList.remove("active");
    }
}