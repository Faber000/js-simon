let numbers = [];
let container = document.querySelector(".mycontainer");

for(let i=0; i < 5; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
    container.append(document.createElement("div").innerText = numbers[i]+" ");
}

setTimeout(clear, 5000);
let string1 = "Numeri indovinati: ";
let string2= "Numeri non indovinati: ";

function clear() {
    document.querySelector(".mycontainer").innerHTML="";
    setTimeout(myFunction, 1000);

}

function myFunction() {
    for(let i=0; i<5; i++) {
        let number = Number(prompt("inserisci il numero"));
        if (numbers.includes(number)) {
            string1 = string1 + number + " ";
        } else {
            string2 = string2 + numbers[i] + " ";
        }
    }

    let element1 = document.createElement("div");
    element1.innerText = string1

    let element2 = document.createElement("div");
    element2.innerText = string2
    
    container.append(element1, element2);
}
    