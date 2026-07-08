// =========================================================
// Events et erreurs
// =========================================================
// Objectif : montrer comment ecouter des evenements du navigateur
// et comment reagir proprement quand une erreur est lancee.

const btn = document.getElementById('btn');
const btnError = document.getElementById('errorBtn');
const form1 = document.getElementById('form1');

// =========================================================
// 1. Ecouter un evenement simple
// =========================================================

// addEventListener permet d'executer une fonction quand une action arrive.
// Ici, la fonction est appelee a chaque clic sur le bouton.
btn.addEventListener('click', (event) => {
    console.log('Bouton clique');
    console.log(event); // L'objet event contient les infos sur l'evenement.
});

// =========================================================
// 2. Evenement du navigateur : beforeunload
// =========================================================

// beforeunload se declenche quand l'utilisateur quitte ou recharge la page.
// preventDefault + returnValue demandent au navigateur d'afficher une confirmation.
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});

// =========================================================
// 3. Lancer des erreurs avec throw
// =========================================================

function checkEvenNumber(number) {
    console.log('Valeur testee :', number);

    // throw peut lancer n'importe quelle valeur, mais en pratique on lance
    // presque toujours un objet Error, TypeError, RangeError, etc.
    // throw 42; // Exemple possible, mais peu utile pour deboguer.

    if (typeof number !== 'number') {
        throw new TypeError('Le parametre doit etre un nombre');
    }

    if (number % 2 !== 0) {
        throw new RangeError('Le nombre doit etre pair');
    }

    console.log('OK : le nombre est pair');
}

// =========================================================
// 4. Capturer une erreur avec try/catch/finally
// =========================================================

btnError.addEventListener('click', () => {
    try {
        // Des qu'une ligne lance une erreur, JavaScript saute directement au catch.
        // Les lignes suivantes dans le try ne sont donc pas executees.
        checkEvenNumber('e'); // TypeError
        checkEvenNumber(2); // Cette ligne ne sera pas executee dans cet exemple.
        checkEvenNumber(5); // RangeError si on l'appelle avant l'erreur de type.
    } catch (error) {
        console.log('Erreur capturee :', error);
    } finally {
        // finally s'execute toujours : avec erreur ou sans erreur.
        console.log('Fin du test');
    }
});

// =========================================================
// 5. Evenement submit d'un formulaire
// =========================================================

form1.addEventListener('submit', (event) => {
    // Sans preventDefault, le navigateur recharge la page apres l'envoi.
    event.preventDefault();

    // FormData permet de recuperer les valeurs du formulaire.
    // Attention : les champs doivent avoir un attribut name.
    const formData = new FormData(form1);
    console.log('Nom envoye :', formData.get('name'));

    // form.elements contient tous les champs et boutons du formulaire.
    for (const element of form1.elements) {
        console.log(element);
    }
});
