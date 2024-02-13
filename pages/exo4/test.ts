import { findUser, data } from './index';

const result = document.getElementById('test');
if (
  // @ts-ignore
  findUser('paldado', data) === data[4] &&
  // @ts-ignore
  findUser('Josiane', data) === data[1]
) {
  result!.className = 'success';
  result!.textContent = 'Yep !';
}
