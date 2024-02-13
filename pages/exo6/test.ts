// @ts-ignore
import { user, name, login } from './index';
const result = document.getElementById('test');

if (name === user.firstName && login === user.login) {
  result!.className = 'success';
  result!.textContent = 'Yep !';
}
