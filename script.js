// console.log('Hello .Net');
// alert('Hey');

// Variables
const a = 1;
let b = 2;
// console.log('B avant changement', b);
b = 3; // -> Variable let, on peut donc changer sa valeur
// console.log('B apres changement', b);
// a = 5;   -> Interdit de changer valeur d'une const
const userAge = 20; // Par convention, camelCase pour declarer une variable

// Types
// Type number
// -> 1.1, 2
// Type string
// -> 'Hello'
// Type Boolean
// -> true

// Type object
const person = {
    name: "Khun",
    work: 'Developper',
    age: 25,
    adresse: {
        rue: 'Rue de Khun',
        pays: 'Belgique'
    }
};

// console.log(person.firstname); -> Pas erreur, just undefined

// console.log(person.firstname.firstLetter); -> Erreur car firstname est undefined, donc ne peut pas avoir de proprieté 'firstLetter'

// console.log(person.adresse.rue);

const now = new Date();
// now instance of Date => true

// DOM
// DOM = Document Object Model
// En gros, le navigateur transforme notre HTML en objet JS.
// L'objet document represente toute la page HTML.
// A partir de document, on peut aller chercher un element, lire son contenu,
// changer son texte, changer ses classes, ses styles, etc.

// getElementById
// -> recupere UN element grace a son id
// -> un id doit normalement etre unique dans la page
const h2 = document.getElementById('hello');
// console.log(h2);
// console.log(h2.textContent); -> le 'textContent' va afficher le text contenue entre les balises -> <h2>...'text'...</h2>

// getElementsByClassName
// -> recupere TOUS les elements qui ont cette classe
// -> attention, ca renvoie une collection (tableau), pas directement un seul element
const helloClasses = document.getElementsByClassName('helloClass');
// console.log(helloClasses);
// console.log(helloClasses[0]); -> Accès au premier element qui à la classe 'helloClass'

// querySelector
// -> recupere le premier element qui match un selecteur CSS
// -> # pour un id, . pour une classe, ou directement le nom de la balise
const firstHelloClass = document.querySelector('.helloClass');
// console.log(firstHelloClass);

// querySelectorAll
// -> recupere tous les elements qui matchent le selecteur CSS
const allTitles = document.querySelectorAll('h2');
// console.log(allTitles);

// Calculatrice
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const response = document.getElementById('response');
const button = document.getElementById('btn');

// Event listener
// -> permet d'ecouter une action de l'utilisateur
// -> ici on ecoute le click sur le bouton
// -> quand le click arrive, la fonction dans le addEventListener est executée
button.addEventListener('click', () => {
    // valueAsNumber permet de recuperer directement la valeur en number
    // sinon input.value renvoie une string
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    // On stock ici la reponse de l'addition dans une constante
    const res = value1 + value2;

    // textContent permet de changer le texte affiche dans la balise
    response.textContent = res;
});

// Donc ici, à chaque click sur le boutton, la fonction dans le button.addEventListener sera executée
