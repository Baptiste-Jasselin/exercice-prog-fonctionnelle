import { allowedUsers } from './index';

const result = document.getElementById('test');
if (
  allowedUsers.length === 3 &&
  allowedUsers[0].name === 'Claire' &&
  allowedUsers[1].name === 'Phil' &&
  allowedUsers[2].name === 'Manny'
) {
  result!.className = 'success';
  result!.textContent = 'Yep !';
}
