// 'a'-------------------
const btn = document.querySelector('#mygtukas');
const colors = ['red', 'blue', 'green', 'orange', 'purple'];

btn.addEventListener('click', e => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * colors.length);
        e.target.style.backgroundColor = colors[random];
    });
});


//'e'------------------------

let input1 = document.querySelector('#skaicius1');
let input2 = document.querySelector('#skaicius2');
let rezultatas = document.querySelector('#rezultatas');

function tikrinti() {

  let tekstas1 = input1.value;
  let tekstas2 = input2.value;

  if (tekstas1.length > 0 && tekstas2.length > 0) {
   
    let a = Number(tekstas1);//pavercia teksta i numberius
    let b = Number(tekstas2);

    rezultatas.textContent = a + b;
  } else {
    // jei bent vienas tuscias- atsiranda uzrasas iveskite skaicius
    rezultatas.textContent = 'Įveskite skaičius';
  }
}

input1.oninput = tikrinti;
input2.oninput = tikrinti;
