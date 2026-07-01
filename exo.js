// =========================================================
// Exercices JavaScript
// =========================================================
// Objectif : manipuler le DOM, recuperer des valeurs de formulaire,
// valider les entrees et afficher un resultat.

// =========================================================
// Exercice 1 : Generer une phrase
// =========================================================

const inputName = document.getElementById('nom');
const inputAge = document.getElementById('age');
const res1 = document.getElementById('res1');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    const name = inputName.value.trim();
    const age = inputAge.valueAsNumber;

    if (!name) {
        res1.textContent = 'Veuillez entrer un nom.';
        return;
    }

    if (Number.isNaN(age) || age <= 0) {
        res1.textContent = 'Veuillez entrer un age valide.';
        return;
    }

    // Version concatenation :
    // res1.textContent = "Bonjour, je m'appelle " + name + ", et j'ai " + age + ' ans.';

    // Version template literal :
    res1.textContent = `Bonjour, je m'appelle ${name}, et j'ai ${age} ans.`;
});

// =========================================================
// Exercice 2 : Calculateur d'IMC
// =========================================================

const inputTaille = document.getElementById('taille');
const inputPoids = document.getElementById('poids');
const imc = document.getElementById('imc');
const status = document.getElementById('status');
const imcBtn = document.getElementById('imcBtn');

function getImcStatus(imcValue) {
    if (imcValue < 18.5) {
        return 'Insuffisance ponderale';
    }

    if (imcValue < 25) {
        return 'Corpulence normale';
    }

    if (imcValue < 30) {
        return 'Surpoids';
    }

    return 'Obesite';
}

imcBtn.addEventListener('click', () => {
    const tailleValue = inputTaille.valueAsNumber;
    const poidsValue = inputPoids.valueAsNumber;

    if (Number.isNaN(tailleValue) || Number.isNaN(poidsValue)) {
        imc.textContent = 'Veuillez remplir la taille et le poids.';
        status.textContent = '';
        return;
    }

    if (tailleValue <= 0 || poidsValue <= 0) {
        imc.textContent = 'La taille et le poids doivent etre superieurs a 0.';
        status.textContent = '';
        return;
    }

    const tailleEnMetres = tailleValue / 100;
    const imcRes = poidsValue / (tailleEnMetres ** 2);

    imc.textContent = `Votre IMC est de ${imcRes.toFixed(2)}.`;
    status.textContent = getImcStatus(imcRes);
});

// =========================================================
// Exercice 3 : Calculateur d'age exact
// =========================================================

const birthDateInput = document.getElementById('birthDate');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const birthDateValue = birthDateInput.value;

    if (!birthDateValue) {
        result.textContent = 'Veuillez selectionner une date de naissance.';
        return;
    }

    const birthDate = new Date(birthDateValue);
    const today = new Date();

    if (birthDate > today) {
        result.textContent = 'La date de naissance ne peut pas etre dans le futur.';
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Si les jours sont negatifs, on "emprunte" un mois.
    if (days < 0) {
        months--;

        const daysInPreviousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += daysInPreviousMonth;
    }

    // Si les mois sont negatifs, on "emprunte" une annee.
    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        <p>Vous avez :</p>
        <ul>
            <li>${years} ans</li>
            <li>${months} mois</li>
            <li>${days} jours</li>
        </ul>
    `;
});
