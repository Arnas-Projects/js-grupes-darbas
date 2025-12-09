


// Task b ---------------------------------------------------------------------------------------------------
// Sukurti mygtuką, kurį paspaudus jo forma pasikeičia į apskritimą, 
// o paspaudus dar kartą grįžta į pradinę formą;
console.log('\nTask b');


const mygtukasTaskB = document.querySelector('button.task-b-button');  // Susirandu button'ą iš DOM'o (kitaip tariant HTML'o)

let isCircle = false;  // nurodau, kad kintamasis yra false tam, kad galėčiau vėliau su funkcija keist jo formą

mygtukasTaskB.addEventListener('click', function () {   //funkcijos sąlygos aprašymas

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



