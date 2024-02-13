// @ts-ignore
import { animaux, canard, chat, lion, mouton } from './index';
const result = document.getElementById('test');
if (
  canard === animaux[0] &&
  chat === animaux[1] &&
  lion === animaux[2] &&
  mouton === animaux[3]
) {
  result!.className = 'success';
  result!.textContent = 'Yep !';
}
