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



function apparaitInfo(n){
    var d = document;

    var vidYoutube = d.getElementById("vidYoutube");
    var titreProjet = d.getElementById("titreProjet");
    var descProjet = d.getElementById("descProjet");
    switch(n){
        case 1:
            
        break;
        
        case 2:
            vidYoutube.src = "https://www.youtube.com/embed/2jL8XWmQlDQ"
            titreProjet.innerHTML = 'Le "Substream"'
            descProjet.innerHTML = "Un projet 3D réaliser dans le cadre d'un cours de 3D, le Substream est modélisé pour être un véhicule d'haute vitesse sous l'eau."
        break;

        case 3:
            vidYoutube.src = "https://www.youtube.com/embed/6OLN4t8Go2I"
            titreProjet.innerHTML = 'Gogor'
            descProjet.innerHTML = "Personnage crée et modélisé dans le cadre d'un cours de 3D, Gogor est un personnage d'allure monstrueuse et simple d'esprit."
        break;

        case 4:
            vidYoutube.src = "https://www.youtube.com/embed/SybA4B-VHPo"
            titreProjet.innerHTML = 'Casque Terread'
            descProjet.innerHTML = "Personnage crée et modélisé dans le cadre d'un cours de 3D, Gogor est un personnage d'allure monstrueuse et simple d'esprit."
        break;
    }

    var info = d.getElementsByClassName("info")[0];
    info.classList.toggle("infoActif");

    var filtre = d.getElementsByClassName("filtre")[0];
    filtre.classList.toggle("filtreActif");
}