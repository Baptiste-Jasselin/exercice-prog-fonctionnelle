import { characters } from './index';

const result = document.getElementById('test');
const resultExpected =
  '[{"name":"Marge Simpson","young":false},{"name":"Ned Flanders","young":true},{"name":"Charles Montgomery Burns","young":true},{"name":"Waylon Smithers","young":false}]';

if (JSON.stringify(characters) === resultExpected && result) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
