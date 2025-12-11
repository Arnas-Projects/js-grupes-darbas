


// Task b ---------------------------------------------------------------------------------------------------
// Sukurti mygtuką, kurį paspaudus jo forma pasikeičia į apskritimą, 
// o paspaudus dar kartą grįžta į pradinę formą;
console.log('\nTask b');


const mygtukasTaskB = document.querySelector('button.arnas-b-button');  // Susirandu button'ą iš DOM'o (kitaip tariant HTML'o)

let isCircle = false;  // nurodau, kad kintamasis yra false tam, kad galėčiau vėliau su funkcija keist jo formą

mygtukasTaskB.addEventListener('click', _ => {   //funkcijos sąlygos aprašymas

    if (isCircle) {  // jei kintamasis yra TRUE
        mygtukasTaskB.style.width = '200px';    // po mygtuko paspaudimo pakeičiu mygtuko formą
        mygtukasTaskB.style.height = '70px';
        mygtukasTaskB.style.borderRadius = '10px';

    } else {

        mygtukasTaskB.style.width = '200px';  // po sekančo mygtuko click, atstatau formą į originalią (originalas aprašytas .css faile)
        mygtukasTaskB.style.height = '200px';
        mygtukasTaskB.style.borderRadius = '50%';
    }

    isCircle = !isCircle; // be šitos eilutės po antro click nebepasikeistų forma į pradinę, nors nežinau tiksliai kodėl :D

});



// Task f ---------------------------------------------------------------------------------------------------
// Sukurti range tipo input elementą. 
// Nustatyti intervalą nuo 10 iki 99 (žingsnis 1). 
// Sukurti div elementą, kuriame būtų atvaizduojama 
// rage tipo elemento reikšmė (keičiant range slankiklio 
// padėtį reikšmė turi taip pat atitinkamai keistis);
console.log('\nTask f');

const rangeInput = document.querySelector('input.arnas-f-input');  // susirandam iš DOM'o input slider'į
const valueDiv = document.querySelector('div.arnas-f-div');  // susirandam iš DOM'o divą, kuriame bus slider'io reikšmė

const sliderFunction = rangeInput.addEventListener('input', eventas => {  // sukuriame slider input'o addEventListener funkciją
    valueDiv.textContent = eventas.target.value;  // nurodome, kad div tage slankiojant sliderį divo teksto reikšmė keisis pagal tą sliderį
});



// --------------------------------------------------------------------------

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")
  );
}

const bodyElement = document.querySelector(".tasks-section");

// const sectionElement = document.createElement("section");

// bodyElement.appendChild(sectionElement);

// bodyElement.style.backgroundColor = '#E5D9F2';
// bodyElement.style.margin = 0;
// bodyElement.style.width = "100vw";
// bodyElement.style.height = "100vh";
// bodyElement.style.position = "relative";
// bodyElement.style.backgroundSize = "cover";
// bodyElement.style.backgroundAttachment = "fixed";


for (let i = 0; i < 1444; i++) {

  let size = rand(44, 144);

  let divCircle = document.createElement("div");

  divCircle.style.width = size + "px";
  divCircle.style.height = size + "px";
  divCircle.style.borderRadius = "50%";
  divCircle.style.backgroundColor = randomColor();
  divCircle.style.opacity = 0.15;
  divCircle.style.position = 'absolute';
  divCircle.style.top = rand(0, document.body.scrollHeight) + "px";
  divCircle.style.left = rand(0, document.body.scrollWidth) + "px";
  divCircle.style.zIndex = "-1";


  bodyElement.appendChild(divCircle);
}













