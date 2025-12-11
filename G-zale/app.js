//uzduotis C

  (function () {
    const btnX = document.querySelector('.btnX');
    const btnO = document.querySelector('.btnO');

    function swapTexts() {
      const temp = btnX.innerText;
      btnX.innerText = btnO.innerText;
      btnO.innerText = temp;
    }

    btnX.addEventListener('click', swapTexts);
    btnO.addEventListener('click', swapTexts);
  })();



const widget = document.querySelector('.color-box-widget');
const square = widget.querySelector('.cbw-square');
const bgInput = widget.querySelector('.cbw-bg');
const textInput = widget.querySelector('.cbw-text');

bgInput.addEventListener('input', () => {
  square.style.backgroundColor = bgInput.value;
});

textInput.addEventListener('input', () => {
  square.style.color = textInput.value;
});