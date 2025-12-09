const btn = document.querySelector("#mygtukas");
const colors = ["red", "blue", "green", "orange", "purple"];

btn.addEventListener("click", e => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * colors.length);
        e.target.style.backgroundColor = colors[random];
    });
});
