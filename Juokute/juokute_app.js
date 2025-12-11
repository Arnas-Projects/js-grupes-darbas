// d. Sukurti vieną tekstinį input elementą ir vieną div elementą.
// Rašant tekstą į input elementą, tas pats tekstas atsikartojamas ir div elemente;

// console.log("----- d užduotis - Juokute -----");

const sectionD = document.querySelector(".juokute-d");

// sectionD.style.backgroundColor = "#FFE1E0";
sectionD.style.height = "130px";
sectionD.style.display = "flex";
sectionD.style.justifyContent = "center";
sectionD.style.alignItems = "center";
sectionD.style.flexWrap = "wrap";
sectionD.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif;';
sectionD.style.gap = "15px";
sectionD.style.margin = "15px";

const inputElementD = document.querySelector(".juokute-d-input");

inputElementD.style.backgroundColor = "#fcececff";
inputElementD.style.width = "230px";
inputElementD.style.height = "40px";
inputElementD.style.borderRadius = "10px";
inputElementD.style.border = "2px solid white";
inputElementD.style.boxShadow = "1px 1px 3px";
inputElementD.style.padding = "3px 10px";
inputElementD.style.cursor = "pointer";
inputElementD.style.fontSize = "18px";
inputElementD.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif;';

const divElementD = document.querySelector(".juokute-d-div");

divElementD.style.backgroundColor = "#fcececff";
divElementD.style.width = "230px";
divElementD.style.height = "40px";
divElementD.style.borderRadius = "10px";
divElementD.style.border = "2px solid white";
divElementD.style.boxShadow = "1px 1px 3px";
divElementD.style.padding = "3px 10px";
divElementD.style.cursor = "pointer";
divElementD.style.fontSize = "18px";
divElementD.style.display = "flex";
divElementD.style.alignItems = "center";

inputElementD.addEventListener("input", (_) => {
  divElementD.textContent = inputElementD.value;
});

// h. Sukurti text tipo input laukelį,
// mygtuką “Pridėti”
// ir tuščią sąrašą <ol>.
// Į input laukelį įrašius žodį ir paspaudus “Pridėti”, žodis turi atsirasti sąraše.
// Sąrašas visada turi būti išrūšiuotas pagal abėcėlę;

// console.log("----- h užduotis - Juokute -----");

const sectionH = document.querySelector(".juokute-h");

// sectionH.style.backgroundColor = "#DCD6F7";
sectionH.style.minHeight = "130px";
sectionH.style.display = "flex";
sectionH.style.justifyContent = "center";
sectionH.style.alignItems = "center";
sectionH.style.flexWrap = "wrap";
sectionH.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif;';
sectionH.style.gap = "15px";
sectionH.style.margin = "15px";

const inputElementH = document.querySelector(".juokute-h-input");

inputElementH.style.backgroundColor = "#F4EEFF";
inputElementH.style.width = "230px";
inputElementH.style.height = "40px";
inputElementH.style.borderRadius = "10px";
inputElementH.style.border = "2px solid white";
inputElementH.style.boxShadow = "1px 1px 3px";
inputElementH.style.padding = "3px 10px";
inputElementH.style.cursor = "pointer";
inputElementH.style.fontSize = "18px";
inputElementH.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif;';

const buttonElementH = document.querySelector(".juokute-h-button");

buttonElementH.style.backgroundColor = "#F4EEFF";
buttonElementH.style.width = "100px";
buttonElementH.style.height = "49px";
buttonElementH.style.borderRadius = "10px";
buttonElementH.style.border = "2px solid white";
buttonElementH.style.boxShadow = "1px 1px 3px";
buttonElementH.style.padding = "3px 10px";
buttonElementH.style.cursor = "pointer";
buttonElementH.style.fontSize = "18px";
buttonElementH.style.display = "flex";
buttonElementH.style.alignItems = "center";
buttonElementH.style.justifyContent = "center";
buttonElementH.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif;';

buttonElementH.addEventListener("mouseup", (_) => {
  buttonElementH.style.transform = "scale(1.05)";
  buttonElementH.style.boxShadow = "2px 2px 10px";
});
buttonElementH.addEventListener("mouseleave", (_) => {
  buttonElementH.style.transform = "scale(1)";
  buttonElementH.style.boxShadow = "1px 1px 3px";
});

buttonElementH.addEventListener("click", (_) => {
  const olElementH = document.querySelector(".juokute-h-ol");

  liElementH = document.createElement("li");
  liElementH.classList.add(`juokute-h-li`);
  liElementH.textContent = inputElementH.value;
  olElementH.appendChild(liElementH);

  const allList = [...olElementH.querySelectorAll("li")];
  allList.sort((a, b) => a.textContent.localeCompare(b.textContent, "lt"));
  allList.forEach((li) => olElementH.appendChild(li));

  olElementH.style.backgroundColor = "#F4EEFF";
  olElementH.style.minWidth = "100px";
  olElementH.style.borderRadius = "10px";
  olElementH.style.border = "2px solid white";
  olElementH.style.padding = "3px 25px";
  olElementH.style.fontSize = "18px";
  olElementH.style.display = "flex";
  olElementH.style.flexDirection = "column";
  olElementH.style.alignItems = "left";
  olElementH.style.justifyContent = "center";
  olElementH.style.flexWrap = "wrap";
  olElementH.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif;';

  inputElementH.value = "";
});
