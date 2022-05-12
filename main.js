let numbers = [];
let container = document.querySelector(".mycontainer");

for(let i=0; i < 5; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
    container.append(document.createElement("div").innerText = numbers[i]+" ");
}

let guessed = [];
let notGuessed = [];
setTimeout(clear, 5000);


function clear() {
    document.querySelector(".mycontainer").innerHTML="";
    setTimeout(myFunction, 500);
}

function myFunction() {
    let number;
    for(let i=0; i<5; i++) {

        do {
             number = Number(prompt("inserisci il numero"));
        }
        while(guessed.includes(number))
        
        if (numbers.includes(number)) {
            guessed.push(number);
        } else {
            notGuessed.push(numbers[i]);
        }
    }

    let element = document.createElement("div").innerText = "Numeri esatti: "+guessed;
    container.append(element);
    container.append(document.createElement("br"));
    element = document.createElement("div").innerText = "Numeri che non hai ricordato: "+notGuessed;
    container.append(element);

}
    