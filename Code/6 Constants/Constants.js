// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

// PI = 420.69;

document.getElementById("mySubmit").onclick = function(){ //al click esegui la funzione
    radius = document.getElementById("myText").value; //prende il valore di my text
    radius = Number(radius); //lo converte in numero
    circumference = 2 * PI * radius; //calcola la circonferenza e lo tira in output sotto
    document.getElementById("idCirc").textContent ="The Circumference is "+ circumference + "cm";
}