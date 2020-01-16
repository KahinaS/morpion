function Initialisation() {
    
    document.getElementById("rejouer").style.visibility = "hidden";
    
    joueurs = ['X', 'O'];
  
    joueur = joueurs[0];
};

function jouer(zone) { 
   
    if (joueur === joueurs[0]) {

        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
          
            alert("vous ne pouvez pas!!");
        } else {

          
            document.getElementById(zone).style.backgroundImage = "url(images/poelonade.jpeg)";
            
            
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = "  ";
         
            joueur = joueurs[1];
        }
    }
    else if (joueur === joueurs[1]) { 
       
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            
            alert("vous ne pouvez pas!!");
        } else {

            document.getElementById(zone).style.backgroundImage = "url(images/casserole2.jpg)";
            
           document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = " ";
           
            joueur = joueurs[0];
        }
    }
    ;
    
    checking();
}
;

function checking() {
    //Definition des getelement pour racourcir le if()
   let one = document.getElementById('x1y1').textContent;
   let two = document.getElementById('x1y2').textContent
    let three = document.getElementById('x1y3').textContent;
    let four = document.getElementById('x2y1').textContent;
    let five = document.getElementById('x2y2').textContent;
   let six = document.getElementById('x2y3').textContent;
   let seven = document.getElementById('x3y1').textContent;
   let eight = document.getElementById('x3y2').textContent;
   let nine = document.getElementById('x3y3').textContent;
    
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
