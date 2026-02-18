// menu toggle
const toggle = document.getElementById("menuToggle"); 
const nav = document.getElementById("navLinks"); 
toggle.addEventListener("click", () => { 
    nav.classList.toggle("show"); 
});


// changing mode from dark to light or light to dark
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
