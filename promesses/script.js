// =========================================================
// Les promesses
// =========================================================
// Objectif : comprendre le code asynchrone avec :
// - then / catch / finally ;
// - async / await ;
// - fetch pour appeler une API.

const btn = document.getElementById('btn');
const btnAsync = document.getElementById('btn2');
const ageBtn = document.getElementById('age');
const ageP = document.getElementById('ageP');
const inputName = document.getElementById('personName');

// =========================================================
// 1. Creer une promesse
// =========================================================

function promesseTest(ok) {
    return new Promise((resolve, reject) => {
        // setTimeout simule une operation lente : API, fichier, base de donnees...
        setTimeout(() => {
            if (ok) {
                resolve('La promesse a ete tenue.');
                return; // On sort pour ne pas executer reject juste apres.
            }

            reject("La promesse n'a pas ete tenue.");
        }, 1000);
    });
}

// =========================================================
// 2. Utiliser une promesse avec then/catch/finally
// =========================================================

function click() {
    const promesse = promesseTest(false);

    // Au depart, la promesse est "pending" : le resultat arrivera plus tard.
    console.log(promesse);

    promesse
        .then((data) => {
            // then est execute si la promesse appelle resolve.
            console.log(`Promesse reussie, message : ${data}`);
        })
        .catch((reason) => {
            // catch est execute si la promesse appelle reject.
            console.log(`Promesse non tenue, raison : ${reason}`);
        })
        .finally(() => {
            // finally est execute dans les deux cas.
            console.log('Promesse finie');
        });
}

btn.addEventListener('click', click);

// =========================================================
// 3. Utiliser une promesse avec async/await
// =========================================================

async function clickAsync() {
    try {
        // await attend le resultat de la promesse avant de passer a la ligne suivante.
        const message = await promesseTest(false);
        console.log(message);
    } catch (error) {
        // Avec await, les rejets de promesse se gerent avec catch.
        console.log(error);
    } finally {
        console.log('Promesse finie');
    }
}

btnAsync.addEventListener('click', clickAsync);

// =========================================================
// 4. fetch : appeler une API
// =========================================================

async function getAge() {
    const name = inputName.value.trim();

    if (!name) {
        ageP.textContent = 'Age : veuillez entrer un nom.';
        return;
    }

    try {
        // encodeURIComponent evite les problemes si le nom contient un espace,
        // un accent ou un caractere special.
        const response = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`);

        if (!response.ok) {
            throw new Error('La requete API a echoue');
        }

        const data = await response.json();
        console.log(data);

        ageP.textContent = `Age : ${data.age ?? 'inconnu'}`;
    } catch (error) {
        console.log(error);
        ageP.textContent = 'Age : impossible de recuperer une estimation.';
    }
}

// Meme idee avec then/catch, pour comparer avec async/await :
// function getAgeNormal() {
//     const name = inputName.value.trim();
//
//     fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`)
//         .then((response) => response.json())
//         .then((data) => {
//             ageP.textContent = `Age : ${data.age ?? 'inconnu'}`;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

ageBtn.addEventListener('click', getAge);
