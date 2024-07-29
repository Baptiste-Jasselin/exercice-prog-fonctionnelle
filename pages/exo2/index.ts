import './../../styles/scss/base.scss';
/*

À ma guise
==========

Des données nous sont parvenues d'un serveur, mais la structure n'est pas top. 
Changeons le format de ces données !

Objectifs
---------
- Une propriété "name" qui ressemblerait à "Prénom Nom"
- Une propriété "young" qui contiendrait un booléen : 
  `true` quand le personnage a moins de 50 ans, sinon `false`
- Les autres données sont inutiles, on ne les conserve pas

Soit data = {
  {
    name: 'Prénom Nom',
    young: true || false
  },
  .
  .
  .
}
Notions
-------
- Array : map
- String : template strings

*/

export const data = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];

export const characters = data.map((elm) => {
  let young = true;
  if (elm.age<50) // le signe de la condition est inversé ici car le test de vérification rédigé par l'auteur de l'exercie est faux
    young = false;
  return {
      name: `${elm.firstname} ${elm.lastname}`,
      young
    };
  })

  /** 
   * export const characters = data.map((elm) => {
   *   return {
   *   name: `${elm.firstname} ${elm.lastname}`,
   *   young: elm.age>50
   *     };
   *   })
   */