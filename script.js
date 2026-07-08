// =========================================================
// Demo JavaScript
// =========================================================
// Ce fichier melange volontairement :
// - des exemples a montrer dans la console ;
// - des exemples relies au HTML ;
// - des commentaires qui servent de support de cours.

// console.log('Hello .NET');
// alert('Hey');

// =========================================================
// 1. Variables
// =========================================================

const a = 1; // const = valeur non reassignee
let b = 2; // let = valeur reassignee plus tard
// var existe encore, mais on l'evite en JavaScript moderne.

// console.log('B avant changement', b);
b = 3;
// console.log('B apres changement', b);
// a = 5; // Interdit : une const ne peut pas etre reassignee.

const userAge = 20; // Convention : camelCase pour nommer les variables.

// =========================================================
// 2. Types de base
// =========================================================

const numberExample = 42; // number
const decimalExample = 4.2; // number aussi
const stringExample = 'Hello'; // string
const booleanExample = true; // boolean
const undefinedExample = undefined; // absence de valeur non definie
const nullExample = null; // absence de valeur volontaire

// typeof permet d'inspecter le type d'une valeur.
// console.log(typeof numberExample);
// console.log(typeof stringExample);
// console.log(typeof booleanExample);

// =========================================================
// 3. Objets
// =========================================================

const person = {
    name: 'Khun',
    work: 'Developer',
    age: 25,
    adresse: {
        rue: 'Rue de Khun',
        pays: 'Belgique'
    }
};

// Acces aux proprietes.
// console.log(person.name);
// console.log(person['work']);
// console.log(person.adresse.rue);

// Si une propriete n'existe pas, JavaScript renvoie undefined.
// console.log(person.firstname);

// Par contre si on essaye d'acceder à une proprieté d'une proprieté qui n'existe pas, on a une erreure
// console.log(person.firstname.firstLetter); -> ERROR

// Solution ? => Optional chaining : evite une erreur si une partie du chemin est undefined/null.
// console.log(person.firstname?.firstLetter);

// Destructuring : recuperer des proprietes dans des variables (on doit utiliser le meme nom de variable que dans l'object)
const { name, age } = person;
// console.log(name, age);

// Spread object : creer une copie avec des changements.
const olderPerson = {
    ...person,
    age: person.age + 1
};
// console.log(olderPerson);

// =========================================================
// 4. Dates
// =========================================================

const now = new Date();
// console.log(now);
// console.log(now instanceof Date); // true

// =========================================================
// 5. DOM
// =========================================================
// DOM = Document Object Model.
// Le navigateur transforme le HTML en objets JavaScript.
// L'objet document represente toute la page HTML.

// getElementById : recupere UN element grace a son id.
const h2 = document.getElementById('hello');
// console.log(h2);
// console.log(h2.textContent);

// getElementsByClassName : recupere une collection d'elements.
const helloClasses = document.getElementsByClassName('helloClass');
// console.log(helloClasses);
// console.log(helloClasses[0]);

// querySelector : recupere le premier element qui correspond au selecteur CSS.
const firstHelloClass = document.querySelector('.helloClass');
// .helloClass si une classe, #helloId si un id
// console.log(firstHelloClass);

// querySelectorAll : recupere tous les elements qui correspondent au selecteur CSS.
const allTitles = document.querySelectorAll('h2');
// console.log(allTitles);

// Modifier un element.
h2.textContent = 'Hello depuis JavaScript';
h2.classList.add('autre');
// h2.classList.remove('autre');
// h2.classList.toggle('autre');

// =========================================================
// 6. Fonctions
// =========================================================

// Declaration classique : elle est "hoistee", donc utilisable avant sa declaration.
function add(number1, number2) {
    return number1 + number2;
}

// Fonction flechee : tres utilisee pour les callbacks et les petites fonctions.
const multiply = (number1, number2) => number1 * number2;

// Valeur par defaut dans les parametres.
const greet = (firstname = 'inconnu') => `Bonjour ${firstname}`;

// console.log(add(2, 3));
// console.log(multiply(2, 3));
// console.log(greet('Davit'));

// =========================================================
// 7. Calculatrice
// =========================================================

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const operator = document.getElementById('operator');
const response = document.getElementById('response');
const button = document.getElementById('btn');

// Une fonction isolee est plus facile a tester et a relire.
function calculate(number1, number2, selectedOperator) {
    switch (selectedOperator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            if (number2 === 0) {
                return 'Division par zero impossible';
            }

            return number1 / number2;
        default:
            return 'Operateur inconnu';
    }
}
// addEventListener permet d'ecouter une action utilisateur.
button.addEventListener('click', () => {
    const value1 = input1.valueAsNumber; // valueAsNumber renvoie un number.
    const value2 = input2.valueAsNumber;

    // Number.isNaN permet de verifier un nombre invalide.
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        response.textContent = 'Response : veuillez remplir les deux nombres.';
        return; // On arrete la fonction ici.
    }

    const result = calculate(value1, value2, operator.value);
    response.textContent = `Response : ${result}`;
});

// =========================================================
// 8. Numbers, conversions et Math
// =========================================================

const nbNb = 1_000_000; // Le _ rend les grands nombres plus lisibles.
const intEnStr = '10';
const strEnInt = parseInt(intEnStr, 10);
const strEnFloat = parseFloat('10.5');
const numberConstructor = Number('12');

const pi = Math.PI;
const arrondiBas = Math.floor(4.9);
const arrondiHaut = Math.ceil(4.1);
const arrondiMath = Math.round(4.5);
const randomNumber = Math.random(); // Entre 0 inclus et 1 exclu.

// console.log(nbNb, strEnInt, strEnFloat, numberConstructor);
// console.log(pi, arrondiBas, arrondiHaut, arrondiMath, randomNumber);

// =========================================================
// 9. Strings
// =========================================================

const sentence = 'Je suis une string';
const longueurDuString = sentence.length;
const upperSentence = sentence.toUpperCase();
const lowerSentence = sentence.toLowerCase();
const replacedSentence = sentence.replace('string', 'chaine de caracteres');
const words = sentence.split(' ');

// Template literal : plus lisible que la concatenation avec +.
const demoFirstname = 'Ada';
const templateSentence = `Bonjour ${demoFirstname}, la phrase contient ${longueurDuString} caracteres.`;

// console.log(upperSentence, lowerSentence, replacedSentence, words);
// console.log(templateSentence);

// =========================================================
// 10. Conditions
// =========================================================

if (strEnInt === 10) {
    console.log('Egalite stricte');
} else if (strEnInt === 15) {
    console.log('Egalite stricte avec 15');
} else {
    console.log('Else');
}

// Toujours preferer === a == pour eviter les conversions implicites.
// console.log(10 == '10');  // true
// console.log(10 === '10'); // false

// Operateurs logiques.
const hasLogin = true;
const hasPassword = false;
const canConnect = hasLogin && hasPassword; // ET
const canTryAgain = hasLogin || hasPassword; // OU
const isAnonymous = !hasLogin; // NON

// Operateur ternaire : utile pour une condition courte.
const label = canConnect ? 'Connecte' : 'Non connecte';

// Nullish coalescing : utilise la valeur de droite seulement si gauche vaut null/undefined.
const resultat = undefined;
const resultatEleve = resultat ?? 0;

// Truthy / falsy.
// Falsy : false, 0, '', null, undefined, NaN.
const nbMagique = '';
if (nbMagique) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

// =========================================================
// 11. Boucles
// =========================================================

let repet = 0;

while (repet < 5) {
    // console.log('Repete encore !');
    repet++;
}

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

// for...of : pratique pour parcourir les valeurs d'un tableau.
const fruits = ['pomme', 'poire', 'banane'];
for (const fruit of fruits) {
    // console.log(fruit);
}

// =========================================================
// 12. Tableaux
// =========================================================

const arr1 = [];
const arr2 = [1, 2, 3];
const arrConstr = new Array(5);

arr1.push('Element'); // Ajouter a la fin.
arr1.unshift('ElementAvant'); // Ajouter au debut.

const dernierElem = arr1.pop(); // Retirer a la fin.
const premierElem = arr1.shift(); // Retirer au debut.

// Parcours avec index.
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}

// forEach : execute une fonction pour chaque element.
arr2.forEach((number, index) => {
    // console.log(number, index);
});

// map : transforme chaque element et renvoie un nouveau tableau.
const doubles = arr2.map(function(number) {
    return number * 2;
});
const doubles2 = arr2.map((number) => number * 2); // -> Meme ecriture mais avec une fonction flechée, plus rapide et pas besoin de return

// filter : garde seulement certains elements.
const evenNumbers = arr2.filter((number) => number % 2 === 0);

// find : renvoie le premier element qui correspond.
const firstGreaterThanOne = arr2.find((number) => number > 1);

// reduce : accumule une valeur.
const total = arr2.reduce((accumulator, number) => accumulator + number, 0);

// Spread array : copier/fusionner des tableaux.
const moreNumbers = [...arr2, 4, 5, 6];

// console.log(doubles, evenNumbers, firstGreaterThanOne, total, moreNumbers);

// =========================================================
// 13. Creation d'elements HTML en JavaScript
// =========================================================

const parent = document.getElementById('parent');
const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const list = document.createElement('ul');

addItemBtn.addEventListener('click', () => addListItem('he'), { once: true });

parent.appendChild(list);

function addListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}

addItemBtn.addEventListener('click', () => {
    const value = itemInput.value.trim();

    if (!value) {
        return;
    }

    addListItem(value);
    itemInput.value = '';
    itemInput.focus();
});


// Les fonctions

const res1 = mySum(5, 7);

function mySum(number1, number2) {
    const resultat = number1 + number2;
    return resultat;
};

const res2 = mySum(5, 7);

const res3 = nbIsEven(5);

const nbIsEven = function(nb) {
    return nb % 2 == 0;
}

const res3 = nbIsEven(4);

// Valeur par defaut
function sayHello(name = 'Khun', heure) {
    console.log(`Bonjour, je m'appelle ${name} et il est ${heure} heure.`);
}

// Quand on va vouloir l'appeler en passant name en valeur par defaut
sayHello(undefined, 5);