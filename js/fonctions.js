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
    var equipe = d.getElementById("equipe");
    var descProjet = d.getElementById("descProjet");
    var role = d.getElementById("role");
    var may= d.getElementById("may");
    var uni= d.getElementById("uni");
    var pha= d.getElementById("pha");
    switch(n){
        case 1:
            vidYoutube.src = "https://www.youtube.com/embed/gNR_Ic3Yu3M"
            titreProjet.innerHTML = 'Exoball'
            equipe.innerHTML = "Projet en équipe"
            descProjet.innerHTML = "Jeu développé sur Unity. Jeu de sport 2 contre 2 en ligne. Le but est de faire plus de points que l'adversaire avant la fin du décompte. Le multijoueur a été intégrer avec <a href='https://www.photonengine.com/pun' target='_blank'>Photon</a>."
            role.innerHTML = "Mon rôle dans ce projet est que j'intégre et développe divers interaction du personnage. J'ai réalisé par exemple: l'attrapage de la balle, le but avec le système de marquage de point, la minuterie et le placage (**le placage n'est pas présent dans la vidéo puisqu'il n'a pas été intégré correctement au multijoueur) "
            may.style.display = "block";
            uni.style.display = "block";
            pha.style.display = "none";
        break;
        
        case 2:
            vidYoutube.src = "https://www.youtube.com/embed/2jL8XWmQlDQ"
            titreProjet.innerHTML = 'Le "Substream"'
            equipe.innerHTML = "Projet Solo"
            descProjet.innerHTML = "Un projet 3D réaliser dans le cadre d'un cours de 3D, le Substream est modélisé pour être un véhicule d'haute vitesse sous l'eau."
            role.innerHTML = ""
            may.style.display = "block";
            uni.style.display = "none";
            pha.style.display = "none";
        break;

        case 3:
            vidYoutube.src = "https://www.youtube.com/embed/6OLN4t8Go2I"
            titreProjet.innerHTML = 'Gogor'
            equipe.innerHTML = "Projet Solo"
            descProjet.innerHTML = "Personnage crée et modélisé dans le cadre d'un cours de 3D, Gogor est un personnage d'allure monstrueuse et simple d'esprit."
            role.innerHTML = ""
            may.style.display = "block";
            uni.style.display = "none";
            pha.style.display = "none";
        break;

        case 4:
            vidYoutube.src = "https://www.youtube.com/embed/SybA4B-VHPo"
            titreProjet.innerHTML = 'Casque Terread'
            equipe.innerHTML = "Projet Solo"
            descProjet.innerHTML = "Casque modélisé dans le cadre d'un cours de 3D. Cet objet est pour l'utilité d'un peuple poisson imaginaire pour qu'ils puissent se promener hors de l'eau sans avoir la crainte de s'étouffer dans le manque d'air."
            role.innerHTML = ""
            may.style.display = "block";
            uni.style.display = "none";
            pha.style.display = "none";
        break;
        case 5:
            vidYoutube.src = "https://www.youtube.com/embed/f2sXRkXtGFw"
            titreProjet.innerHTML = 'Serpent à pommes'
            equipe.innerHTML = "Projet Solo"
            descProjet.innerHTML = "Un protytope de jeu créé sur Phaser 3, l'objectif du jeu est de faire le plus de points possible afin d'avoir le plus haut pointage. Le joueur fait des points en mangeant des pommes et perd la partie lorsqu'il fonce dans un mur."
            role.innerHTML = ""
            may.style.display = "none";
            uni.style.display = "none";
            pha.style.display = "block";
        break;
        case 6:
            vidYoutube.src = "https://www.youtube.com/embed/SybA4B-VHPo"
            titreProjet.innerHTML = 'Maison de jeunes Saint-Léonard'
            descProjet.innerHTML = "Site web"
        break;
    }

    var info = d.getElementsByClassName("info")[0];
    info.classList.toggle("infoActif");
    var fermer = d.getElementsByClassName("fermer")[0];
    fermer.classList.toggle("infoActif");
    var filtre = d.getElementsByClassName("filtre")[0];
    filtre.classList.toggle("filtreActif");
    d.querySelector("body").classList.toggle("bloqueOverflow")
}