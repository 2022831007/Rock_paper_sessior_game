
const toggle = document.getElementById("menuToggle"); 
const nav = document.getElementById("navLinks"); 
toggle.addEventListener("click", () => { 
    nav.classList.toggle("show"); 
});


// DARK / LIGHT MODE
const modebtn = document.querySelector("#mode");
const body = document.body;

let currentMode = "dark";

if (modebtn) {
    modebtn.addEventListener("click", () => {

        if (currentMode === "dark") {
            currentMode = "light";
            body.style.backgroundColor = "white";
            body.style.color = "black";
        } else {
            currentMode = "dark";
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }

    });
}
