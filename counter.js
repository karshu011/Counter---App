let count = 0;
let light = document.getElementById("light");
let dark = document.getElementById("dark");

light.addEventListener("click", function () {

    document.body.classList.remove("dark");

    light.style.background = "#f5c5d6";
    dark.style.background = "transparent";

});

dark.addEventListener("click", function () {

    document.body.classList.add("dark");

    dark.style.background = "#8bbfe8";
    light.style.background = "transparent";

});
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

decrementButton.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});