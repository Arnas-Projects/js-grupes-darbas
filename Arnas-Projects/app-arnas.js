


// Task b ---------------------------------------------------------------------------------------------------
// Sukurti mygtuką, kurį paspaudus jo forma pasikeičia į apskritimą, 
// o paspaudus dar kartą grįžta į pradinę formą;
console.log('\nTask b');


const mygtukasTaskB = document.querySelector('button.arnas-b-button');  // Susirandu button'ą iš DOM'o (kitaip tariant HTML'o)

let isCircle = false;  // nurodau, kad kintamasis yra false tam, kad galėčiau vėliau su funkcija keist jo formą

mygtukasTaskB.addEventListener('click', _ => {   //funkcijos sąlygos aprašymas

    if (isCircle) {  // jei kintamasis yra TRUE
        mygtukasTaskB.style.width = '100px';    // po mygtuko paspaudimo pakeičiu mygtuko formą
        mygtukasTaskB.style.height = '40px';
        mygtukasTaskB.style.borderRadius = '10px';

    } else {

        mygtukasTaskB.style.width = '100px';  // po sekančo mygtuko click, atstatau formą į originalią (originalas aprašytas .css faile)
        mygtukasTaskB.style.height = '100px';
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













