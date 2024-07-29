import './../../styles/scss/base.scss';
/*

For Hitch
=========

Utilisons le tableau de chaînes de caractères `items` pour présenter chaque entrée dans le DOM.

Objectifs
---------
- Contruire une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
-------
- DOM : document.getElementById / document.createElement / appendChild
- Array : forEach

*/

const items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];

const parentElement = document.getElementById('result')

 items.forEach(element => {
  const newLi = document.createElement('li')
  newLi.textContent = element
  parentElement?.appendChild(newLi)
 });    