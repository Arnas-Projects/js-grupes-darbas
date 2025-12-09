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