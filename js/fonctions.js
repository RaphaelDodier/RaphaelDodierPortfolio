function accueilImage(heure){
    var d = document;
    var accueil = d.getElementById("accueil");
    var nuage = d.getElementById("conteneurNuage");
    var vague = d.getElementById("vague");
    var etoile = d.getElementById("etoileFilante");
    if(heure>5 && heure<=16){
        accueil.style.backgroundImage = "url('img/accueilAM.png')"
        vague.style.backgroundImage = "url('img/accueilAM.png')"
        etoile.style.display = "none";
    }else if(heure>16 && heure<=19){
        accueil.style.backgroundImage = "url('img/accueilPM.png')"
        vague.style.backgroundImage = "url('img/accueilPM.png')"
        etoile.style.display = "none";
    }else{
        accueil.style.backgroundImage = "url('img/accueilSoir.png')"
        vague.style.backgroundImage = "url('img/accueilSoir.png')"
        nuage.style.display = "none";
    }
}





window.addEventListener("scroll", cacheTexte , false);

function cacheTexte(){
    var d = document;
    var texte = d.getElementById("texteBackGround");
    var bulles = d.getElementsByClassName("bulle");
    this.scrollY > 1200 ? texte.style.opacity = .0 : texte.style.opacity = 1;
    if ((document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) && (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800)){
        for(var i = 0; i<20;i++){
            bulles[i].classList.add('bulle'+i);
        }
    }
    // if ((document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) || (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800)){
    //     for(var i = 0; i<20;i++){
    //         bulles[i].classList.add('bulle'+i);
    //         console.log("aaaEUY");
    //     }
    // }
}



function apparaitInfo(){
    // var d = document;
    // var img = d.getElementsByClassName("3d");
    alert("YESS");
}