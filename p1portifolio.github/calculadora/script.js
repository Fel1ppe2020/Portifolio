const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let current = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      current = '';
    } else if (value === '=') {
      try {
        current = eval(current);
      } catch {
        current = 'Erro';
      }
    } else {
      current += value;
    }

    display.value = current;
  });
});
