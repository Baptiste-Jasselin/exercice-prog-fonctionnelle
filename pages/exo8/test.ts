import { applyColor } from './index';

try {
  const whiteButton = document.getElementById('white');
  const pinkButton = document.getElementById('pink');

  const check = () => {
    // @ts-ignore
    if (!typeof applyColor('white') === 'function') {
      return;
    }

    pinkButton?.click();

    if (document.body.style.backgroundColor !== 'pink') {
      return;
    }

    whiteButton?.click();
    // @ts-ignore
    if (document.body.style.backgroundColor !== 'white') {
      return;
    }

    const resultToShow = document.getElementById('test');
    resultToShow!.className = 'success';
    resultToShow!.textContent = 'Yep !';
  };
  check();
} catch (e) {
  // Silent error
}
