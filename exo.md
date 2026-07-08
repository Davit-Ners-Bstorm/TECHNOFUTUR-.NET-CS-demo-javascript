# Exercice de synthèse — Mini Pokédex

## Objectif

Construire une petite application où l'utilisateur tape le nom (ou le numéro) d'un Pokémon dans un formulaire, et où l'app va chercher ses infos sur une vraie API pour les afficher sous forme de carte.

**API utilisée** : `https://pokeapi.co/api/v2/pokemon/{nom-ou-id}`
⚠️ Le nom doit être en minuscules (`pikachu`, pas `Pikachu`), sinon l'API renvoie une erreur 404.

Exemple à tester dans le navigateur avant de commencer : https://pokeapi.co/api/v2/pokemon/pikachu

---

## Bloc 1 — Structure de base (30 min)

Crée un fichier `index.html` avec :
- Un formulaire avec un `input` (nom ou numéro du pokémon) et un bouton `submit`
- Une zone vide où la carte du pokémon sera injectée (ex : `<div id="carte-pokemon"></div>`)
- Une zone pour afficher les messages d'erreur (ex : `<p id="message-erreur"></p>`)

Ajoute un minimum de CSS pour que ce soit lisible (pas besoin que ce soit joli à ce stade).

---

## Bloc 2 — Intercepter le formulaire (20 min)

En JS, récupère le formulaire et écoute l'événement `submit`.

Consignes :
- Empêche le rechargement de la page (`event.preventDefault()`)
- Récupère la valeur tapée par l'utilisateur, et transforme-la en minuscules
- Si le champ est vide → affiche un message d'erreur dans la zone prévue et arrête la fonction (pas d'appel à l'API)
- Sinon → pour l'instant, fais juste un `console.log` de la valeur récupérée

---

## Bloc 3 — Premier fetch, avec `.then` (40 min)

Utilise `fetch` vers l'API avec la valeur récupérée, en chaînant les `.then` :

1. Premier `.then` : convertir la réponse en JSON
2. Deuxième `.then` : faire un `console.log` des données reçues (pas encore d'affichage)
3. `.catch` : logger l'erreur dans la console si ça plante

---

## Bloc 4 — Passage en `async/await` (30 min)

Transforme la fonction du Bloc 3 pour qu'elle utilise `async/await` au lieu de `.then`. Le comportement doit être **identique**, seule l'écriture change.

Rappels :
- La fonction qui contient `await` doit être déclarée `async`
- Il y a deux `await` à placer : un pour la réponse du fetch, un pour le `.json()`

---

## Bloc 5 — Gestion des erreurs avec `try/catch` (20 min)

Remplace le `.catch` par un `try/catch` autour du code `async/await`.

Point important à connaître : `fetch` ne déclenche **pas** d'erreur automatiquement sur un statut 404. Il faut le vérifier toi-même avec `response.ok` :

```js
const reponse = await fetch(url);
if (!reponse.ok) {
  throw new Error("Pokémon introuvable");
}
```

Consignes :
- Si le pokémon n'existe pas → affiche "Pokémon introuvable, vérifie l'orthographe" dans la zone d'erreur
- Si l'utilisateur relance une recherche valide après une erreur → le message d'erreur doit disparaître

---

## Bloc 6 — Afficher la carte du pokémon (40 min)

Utilise les données reçues pour injecter du HTML dans `#carte-pokemon` avec :
- Le nom du pokémon (avec une majuscule)
- Son image
- Sa/ses type(s) (tableau)
- Son poids et sa taille

Astuce pour les types (tableau d'objets) :
```js
const types = data.types.map(t => t.type.name).join(", ");
```

---

## Bloc 7 — Bonus (30-40 min, selon le temps restant)

Choisis un ou plusieurs bonus selon ce qu'il te reste comme temps :

- **Bouton "Pokémon aléatoire"** : génère un nombre aléatoire entre 1 et 1010 et fetch directement avec ce numéro
- **Stats du pokémon** : afficher `data.stats` (attaque, défense, vitesse...) sous forme de petite liste ou de barres
- **État de chargement** : afficher "Recherche en cours..." pendant le fetch, et le faire disparaître une fois la carte affichée (ou l'erreur)
- **Sprite shiny** : ajouter une checkbox "version shiny" qui affiche `data.sprites.front_shiny` à la place de l'image normale
- **Historique de recherche** : garder en mémoire (dans un tableau JS, pas besoin de stockage persistant) les 5 derniers pokémons cherchés et les afficher sous forme de liste cliquable

---
