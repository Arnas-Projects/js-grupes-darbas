const square1 = document.querySelectorAll('#i-uzd-div1, #i-uzd-div2, #i-uzd-div3'); // pasirenkami i užduoties div kvadratai
const selectedColor = document.querySelector('#i-uzd-bendras-div'); // pasirenkami i užduoties bendras div
const squareColors = ['crimson', 'lightgreen', 'purple']; // kvadratų spalvų masyvas
square1.forEach((div, index) => { // kiekvienam kvadratui
    div.style.backgroundColor = squareColors[index]; // priskiriama spalva iš kvadratų spalvų masyvo
    div.addEventListener('click', e => { // paspaudus ant kvadrato
        selectedColor.style.backgroundColor = getComputedStyle(e.target).backgroundColor; // duodama paspausto kvadrato spalva šalia esančiam div
    });
});

const colorInput = document.querySelector('#j-uzd-input'); // pasirenkamas color tipo input tag
const colorBox = document.querySelector('#j-uzd-div'); // pasirenkamas j užduoties div tag
let colorChangeTimeout; // sukuriamas timeout, kad užtikrinti tikslų spalvos pavadinimą + <div> spalvą (optimizacija, kodas puikiausiai veikia ir be timeout)
colorInput.addEventListener('input', _ => { // kas įvyksta pasirinkus spalvą su input
    clearTimeout(colorChangeTimeout); // spalva ir jos pavadinimas nesikeičia, jeigu yra velkamas spalvos rinkiklį
    const hexClean = colorInput.value.replace('#', ''); // gaunama spalvos HEX kodas ir panaikinamas #
    colorChangeTimeout = setTimeout(() => { // spalvos pavadinimas ir <div> spalva bus gaunama tik po 150 milisekundžių po paskutinio pasirinkimo
        fetch(`https://www.thecolorapi.com/id?hex=${hexClean}`) // gautos spalvos HEX kodas įdedamas į API nuorodą, kuri tada grąžins spalvos pavadinimą
            .then(res => res.json()) //laukiam, kol gausime JSON rezultatą
            .then(color => { // gautam rezultatui duodame vardą color
                colorBox.innerText = color.name.value; // <div> duodamas iš JSON failo gautas spalvos vardas 
                colorBox.style.color = `${color.contrast.value}`; // dėl geresnio skaitomumo <div> teksto spalva keičiasi pagal kontrastą (iš JSON failo)
                colorBox.style.backgroundColor = `${color.hex.value}`; // <div> duodama spalva (iš JSON failo)
            });
    }, 150);
});