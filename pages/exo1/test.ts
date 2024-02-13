setTimeout(() => {
  const items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];

  const elms = Array.from(document.querySelectorAll('ul#result > li'));
  const result = document.getElementById('test');

  const isGood =
    elms.length &&
    elms.reduce((res, elm, index) => {
      if (res) {
        return elm.textContent === items[index];
      }

      return res;
    }, true);

  if (isGood && result) {
    result.className = 'success';
    result.textContent = 'Yep !';
  }
}, 100);
