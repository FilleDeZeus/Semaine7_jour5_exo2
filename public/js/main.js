// EXERCICE 1
let child = document.getElementsByTagName("div")[0].firstElementChild;
console.log(child);

// EXERCICE 2

let titre = document.getElementsByTagName("div")[0].children[5];
console.log(titre);

//EXERCICE 3

let prec = document.getElementsByTagName("div")[0].children[5];
console.log(prec.previousElementSibling);

//EXERCICE 4

let next = document.getElementsByTagName("div")[0].children[2];
console.log(next.nextElementSibling);

//EXERCICE 5

let parent = document.getElementsByTagName("li")[0].parentElement;
console.log(parent);

//EXERCICE 6

let parent1 = document.getElementsByTagName("li")[0].parentElement;
console.log(parent1.firstElementChild);

//EXERCICE 7

let important = document.getElementsByTagName("li")[3].nextElementSibling;
console.log(important);

// EXERCICE 8

let text = document.getElementsByTagName("p")[3].nextElementSibling;
console.log(text);

// EXERCICE 9

let span = document.getElementsByTagName("span")[1].parentElement;
console.log(span.nextElementSibling);

// EXERCICE 10
let b = document.getElementsByTagName("b")[2].parentElement;
let bp= b.parentElement
let bprimo = bp.firstElementChild;
console.log(bprimo);

// EXERCICE 11

let recup = document.querySelector(".grandParagraphe");
console.log(recup);

// EXERCICE 12

let li = document.getElementsByTagName("li");
let i;
for (i = 0; i <li.length; i++){
    console.log(li[i]);
}
