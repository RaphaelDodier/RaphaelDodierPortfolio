function accueilImage(heure){
    var d = document;
    var accueil = d.getElementById("accueil");
    var nuage = d.getElementById("conteneurNuage");
    var vague = d.getElementById("vague");
    var etoile = d.getElementById("etoileFilante");
    if(heure>5 && heure<=16){
        accueil.style.backgroundImage = "url('/img/accueilAm.png')"
        vague.style.backgroundImage = "url('/img/accueilAm.png')"
        etoile.style.display = "none";
    }else if(heure>16 && heure<=19){
        accueil.style.backgroundImage = "url('../img/accueilPm.png')"
        vague.style.backgroundImage = "url('../img/accueilPm.png')"
        etoile.style.display = "none";
    }else{
        accueil.style.backgroundImage = "url('../img/accueilSoir.png')"
        vague.style.backgroundImage = "url('../img/accueilSoir.png')"
        nuage.style.display = "none";
    }
}