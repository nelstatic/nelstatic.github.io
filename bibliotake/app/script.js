
let wish = document.getElementById("wish"); //on référence l'élément qui sera modifié dans javascript
let possede = document.getElementById("possede");

let entrees = document.querySelector(".entrees");

//on ecoute . on prévient quel genre d'evenement + on dit la fonction qui sera jouée
document.getElementById("ajout").addEventListener('click', ajouter);



function ajouter(){

         let titre =  document.getElementById("titre").value;
         let auteur =  document.getElementById("auteur").value;

         let p1 = document.getElementById("p1");

         if(titre==""||auteur==""){
             alert("Les champes ne peuvent pas être vides");
         }else{
             // wish.innerHTML +=`<li>livre1</li>`; //
             // afterbegin pour ajouter en haut de la pile
             wish.insertAdjacentHTML("afterbegin",
             `<li id=livre>${titre} de ${auteur}  
             <i class="fas fa-trash-alt" id=livresuppr onClick=suppr(this.id)></i>  
             <i class="fas fa-check" id=livrecheck onClick=ranger(this.id)></i></li>`);

             p1.classList.toggle("pasvide");

             
             //document.getElementById('titre').value="";
             //document.getElementById('auteur').value="";
             //                                                       PROBLEME AVEC LE RESET DES CHAMPS INPUT!!!!!!!!!!!!!!!

         }
}

function suppr(id){
    document.getElementById(id).parentElement.outerHTML="";

    // je cherche à faire "tant qu'il y'a un élément <li> enlever la classe pasvide sinon on garde"
    //let li = document.getElementById("livre");
    //while...
}

function ranger(id){
    suppr(id);

    let p2 = document.getElementById("p2");

   // let livretitre =  document.getElementById("livre").titre;
   // let livreauteur =  document.getElementById("livre").auteur;  JAI ESSAYE DE REGLER LE PROBLEME ICI
    
    possede.insertAdjacentHTML("afterbegin",
             `<li>${document.getElementById('titre').value} de ${document.getElementById('auteur').value}  
             <i class="fas fa-trash-alt" id=livresuppr onClick=suppr(this.id)></i>`);
    
    p2.classList.toggle("pasvide");
    
    
    
 
}
