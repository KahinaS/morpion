function Initialisation() {
    //On cache le bouton "Rejouer"
    document.getElementById("rejouer").style.visibility = "hidden";
    //On définit les joueurs
    joueurs = ['X', 'O'];
    //Et le joueur qui commence
    joueur = joueurs[0];
};

function jouer(zone) { //Recupère le nom de la zone cliquée via "zone"
    //Si le joueur et egale au joueur 'X'
    if (joueur === joueurs[0]) {
        //Si la case et dejà pleine (class filled)
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            //On affiche une alerte
            alert("vous ne pouvez pas!!");
        } else {

            //Sinon on definit le background de la case avec l'image Croix
            document.getElementById(zone).style.backgroundImage = "url(images/poelonade.jpeg)";
            
            //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = "  ";
            //On passe la main au joueur 'RONDS'
            joueur = joueurs[1];
        }
    }
    else if (joueur === joueurs[1]) { //Si le joueur et egale au joueur 'O'
        //Si la case et dejà pleine (class filled)
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            //On affiche un alerte
            alert("vous ne pouvez pas!!");
        } else {

            //Sinon on definit le background de la case avec l'image Rond
            document.getElementById(zone).style.backgroundImage = "url(images/casserole.jpeg)";
            //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
           document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = " ";
            //On passe la main au joueur 'CROIX'
            joueur = joueurs[0];
        }
    }
    ;
    //On fait un check :)
    checking();
}
;

function checking() {
    //Definition des getelement pour racourcir le if()
   let one = document.getElementById('Zonea1').textContent;
   let two = document.getElementById('Zonea2').textContent
    let three = document.getElementById('Zonea3').textContent;
    let four = document.getElementById('Zoneb1').textContent;
    let five = document.getElementById('Zoneb2').textContent;
   let six = document.getElementById('Zoneb3').textContent;
   let seven = document.getElementById('Zonec1').textContent;
   let eight = document.getElementById('Zonec2').textContent;
   let nine = document.getElementById('Zonec3').textContent;
    //Si 1=2=3 OU 4=5=6 OU 7=8=9 etc....
    if (one === two && one === three ||
        four === five && four === six ||
        seven === eight && seven === nine ||
        one === five && one === nine ||
        three === five && three === seven ||
        one === four && one === seven ||
        two === five && two === eight ||
        three === six && three === nine) {
        if (joueur === joueurs[0]) {
            alert('casserole a gagné');
        } else if (joueur === joueurs[1]) {
            alert('poelonnade a gagné');
        }
        //Rend visible le bouton rejouer
        document.getElementById("rejouer").style.visibility = "visible";
        document.getElementById("rejouer").onclick = function() {
            location.reload();
        }


    }
}
