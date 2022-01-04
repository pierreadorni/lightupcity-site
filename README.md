# Compiègne en Lumière 2022

ceci est le repo github du site web de Compiègne en Lumière 2022, codé en utilisant le framework **React**. 

1. [Normes](#normes)
2. [Atomic Design](#atomic-design)
3. [Utilisation](#utilisation)

## Normes
Ce projet utilise ESLint pour suivre la norme Javascript [Airbnb](https://github.com/airbnb/javascript). <br/>
Executez `npm run lint` ou paramétrez votre IDE pour lancer le lint automatiquement:
 - [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
 - [WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_verify_code)

Les noms de fichiers suivent une nomenclature particulière:

|            | **.css**  | **.jsx**   | **dossier** |
|------------|-----------|------------|-------------|
| **UI/**    | camelCase | PascalCase | camelCase   |
| **pages/** | camelCase | PascalCase | PascalCase  |

le nom de dossier et de fichier étant le nom du component exporté dans le .jsx.
par exemple: 
```
.
└── home
    ├── Home.jsx
    └── home.css
```
*<p style="text-align: center;">Dossier du component Home</p>*
```jsx
import React from 'react'

function Home() {
  return <h1> Ceci est la page d&apos;accueil !</h1>
}

export default Home
```
*<p style="text-align: center;">Home.jsx</p>*

## Atomic Design

L'UI du site suivra l'organisation Atomic Design, chaque section du site étant un *Organism*.

pour comprendre l'Atomic Design:
 - [site officiel](https://bradfrost.com/blog/post/atomic-web-design/)
 - [openclassrooms](https://openclassrooms.com/fr/courses/5249021-initiez-vous-a-la-methode-atomic-design/5630171-decouvrez-l-atomic-design)

# Utilisation

Ce projet a été créé en utilisant [Create React App](https://github.com/facebook/create-react-app).

### Commandes disponibles

À la racine du projet, vous pouvez lancer :

`npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

Cette page se rafraîchira automatiquement quand vous ferez des changements.\
Vous pourrez aussi voir les erreurs de *lint* dans la console.

---

`npm run build`

Construit l'application pour la production dans le dossier `build`.\
Cela empaquette correctement React pour la production et optimise le build pour les meilleures performances.

Le build est minifié et les noms de fichiers incluent les hash.\
Votre app est prête à être déployée !

Lisez la section à propos du [déploiement](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

---

`npm run eject`

**Note: ceci est une opération irréversible. Une fois que vous avez exécuté `eject`, il n'y a plus de retour en arrière !**

Si vous n'êtes pas satisfait de l'outil de build et des choix de configuration, vous pouvez exécuter `eject` à tout moment. La commande va supprimer la dépendance de build unique de votre projet.

À la place, la commande va copier tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet pour que vous ayez un contrôle total sur elles. Toutes les commandes sauf `eject` continueront de fonctionner, mais elles pointeront vers les scripts copiés pour que vous puissiez les modifier à vote guise. Vous serez alors indépendant.

Vous n'êtes absolument pas obligé de lancer `eject`. Les fonctionalités de base conviennent pour des petits et moyens déploiements, et vous ne devez pas vous sentir obligé d'utiliser cette fonctionalité.
Cependant nous comprenons que cet outil ne serait pas aussi utile si vous ne pouviez pas le customiser lorsque  vous y êtes prêt.

