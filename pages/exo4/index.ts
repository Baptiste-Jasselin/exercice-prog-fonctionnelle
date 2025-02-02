import './../../styles/scss/base.scss';
/*

Mékicé ?
========================

Pfiou, ces gens qui prennent des pseudos, pas facile de s'y retrouver ! Mais c'est qui "paldado" ??

Objectifs
---------
Créer une fonction `findUser` qui à partir d'un `login` et d'un tableau `users` retourne l'utilisateur qui a ce login.

Notions
-------
- Array : ce serait cool de pouvoir chercher, ou plutôt _trouver_… (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)

*/

export const data = [
  {
    name: 'Claire',
    login: 'La_mOuche',
  },
  {
    name: 'Delphine',
    login: 'Josiane',
  },
  {
    name: 'Emilie',
    login: 'Lili',
  },
  {
    name: 'Cédric',
    login: 'x__{^^}__x',
  },
  {
    name: 'Pierre',
    login: 'paldado',
  },
  {
    name: 'Sylvain',
    login: 'navilsy',
  },
];

// je créer un type pour indiquer que le paramétre "users" de notre fonction sera un tableau de user. Un tableau de user c'est bien le type de notre set de data à analyser.
type User = {
  name: String
  login: String
}

export function findUser(login: string, users: User[]) {
  return users.find((user) => user.login === login);
}
