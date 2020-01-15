let c = document.getElementById("canvasMorpion");
let ctx = c.getContext("2d");
let w = c.Width;
let h = c.clientHeight;
let nbColonnes = 3;
let nbLignes = 3;
let hauteurLigne = h/nbLignes;
let largeurColonne = w/nbColonnes;
//croix//
var ratioCroix = 0.7;
var epaisseurCroix = 1;
var couleurCroix = "blue";
//rond//
var ratioRond = 0.7;
var epaisseurRond =1;
var couleurRond = "pink";
var rayonRond = largeurColonne;
if (largeurColonne /hauteurLigne){
    rayonROnd = hauteurLigne;
}
rayonRond /= 2;
rayonRond *= ratioRond;
//nbr d'action avant victoire//
let nbvictoire = 3;
let jeu = true;
let joueural = true;
let action =[];
for (let i = 0; i < nbLignes; i++){
    for (let j = o; j < nbColonnes; j++)
}
action.push([]);
action[i].push(false);

ctx.fillStyle = "white";
ctx.strokeStyle = "black";