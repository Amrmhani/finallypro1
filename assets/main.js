const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("bg-black");
    } else {
        header.classList.remove("bg-black");
    }
});

const themeButtons = document.querySelectorAll(".theme-toggle");
const toggleCircles = document.querySelectorAll(".toggle-circle");
const themeIcons = document.querySelectorAll(".theme-icon");

const html = document.documentElement;

function applyTheme(theme) {

    if (theme === "dark") {

        html.classList.add("dark");

        toggleCircles.forEach(circle => {
            circle.classList.add("translate-x-8");
        });

        themeIcons.forEach(icon => {
            icon.textContent = "☀️";
        });

    } else {

        html.classList.remove("dark");

        toggleCircles.forEach(circle => {
            circle.classList.remove("translate-x-8");
        });

        themeIcons.forEach(icon => {
            icon.textContent = "🌙";
        });

    }

}


themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const newTheme = html.classList.contains("dark")
            ? "light"
            : "dark";

        localStorage.setItem("theme", newTheme);

        applyTheme(newTheme);

    });

});


const savedTheme = localStorage.getItem("theme") || "light";

applyTheme(savedTheme);

//mobile menu

const menutoggle = document.querySelector('[data-menu-toggle]');
const mobilemenu = document.querySelector('[data-mobile-menu]');

menutoggle.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden");
})
