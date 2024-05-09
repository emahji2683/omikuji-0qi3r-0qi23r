'use strict';
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result')
  const resultsub = document.getElementById('resultsub')
  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);

    switch (n) {
      case 0:
        result.textContent = '大吉';
        resultsub.textContent = 'なんと甘いものをおごります';
        break;

      case 1:
        result.textContent = '中吉';
        resultsub.textContent = '';
        break;

      case 2:
        result.textContent = '小吉';
        resultsub.textContent = '';
        break;
    }
  })

}