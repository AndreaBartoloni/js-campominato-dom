// generare 16 numeri casuali da 1 a 100, da 1 a 81 e da 1 a 49 e stamparli in console



// collegare i 16 numeri casuali a ogni difficolta 

let numeriCasuali = [];
let numeriGenerati = [];



let play = document.getElementById("play");

let grid = document.getElementById("grid");

play.addEventListener("click", function(){
    let difficult = document.getElementById("select").value;
    let square = "";
    grid.replaceChildren()



    
    console.log(difficult);
    if(difficult == "medium"){
        numCella = 81;
        square = "square81";
        console.log("stronzo");
        
    }else if(difficult == "hard"){
        numCella = 49; 
        square = "square49";
        console.log("stronzo");
    }else{
        numCella = 100;
        square = "square";
        console.log("stronzo");
    }

    numeriCasuali = [];
    for (let i = 1; i <= 16;) {
        let numeroCasuale = Math.floor(Math.random() * numCella);
        if (!numeriGenerati.includes(numeroCasuale)) {
            numeriCasuali.push(numeroCasuale);
            numeriGenerati.push(numeroCasuale);
            i++; // Incrementa l'indice solo se un numero unico è stato generato
        }
    }
    console.log(numeriCasuali);

    creaQuadrati(numCella, square);
})

function creaQuadrati(numeroCella, cssSquare){
    
    for(let i = 1; i <= numeroCella; i++){
            
        let celle = document.createElement("div");
        celle.classList.add(cssSquare);
        celle.innerHTML = i;
        celle.setAttribute("data-indice", i);
        grid.appendChild(celle); 

        celle.addEventListener("click", function(){
            celle.classList.add("highlight");
            
            //console.log("Numero della casella", i);
            let indice = parseInt(celle.getAttribute("data-indice")); // Leggi l'indice dalla cella cliccata
            // Confronta l'indice della cella cliccata con l'elemento corrispondente in numeriCasuali
            if (numeriCasuali.includes(indice)) {
                celle.classList.add("close");
                console.log("hai perso")
            }
            

        });
        
    }  
}