'use strict';
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result')
  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);

    switch (n) {
      case 0:
        result.textContent = '大吉';
        break;

      case 1:
        result.textContent = '中吉';
        break;

      case 2:
        result.textContent = '小吉';
        break;
    }
  })

}