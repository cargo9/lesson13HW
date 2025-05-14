const button = document.getElementById('greetButton');
button.addEventListener('click', function() {
this.textContent = 'Привіт!';});

const colorBox = document.getElementById('colorBox');
const originalColor = 'lightblue';
const hoverColor = 'lightgreen';

colorBox.addEventListener('mouseenter', () => {
    colorBox.style.backgroundColor = hoverColor;
    colorBox.textContent = "Курсор на мені!";
});

colorBox.addEventListener('mouseleave', () => {
    colorBox.style.backgroundColor = originalColor;
    colorBox.textContent = "Наведи на мене курсор";
});

const counterBtn = document.getElementById('counterBtn');
const counterValue = document.getElementById('counterValue');

let count = 0;

counterBtn.addEventListener('click', () => {
    count += 1;
    counterValue.textContent = count;
});

const input = document.getElementById('textInput');
    const output = document.getElementById('output');

    input.addEventListener('keyup', (event) => {
      output.textContent = event.key;
    });

     const button2 = document.getElementById('toggleButton');

    button.addEventListener('click', () => {
      if (button.textContent === 'Вимкнути') {
        button.textContent = 'Увімкнути';
      } else {
        button.textContent = 'Вимкнути';
      }
    });