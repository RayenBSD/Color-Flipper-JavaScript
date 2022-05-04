var hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 
           'A', 'B', 'C', 'D', 'F'];
var color = "#";

onload = function () {
    document.getElementById("change").addEventListener("click", () => {
        for (let i = 0; i < 6; i++) {
            color += hex[randomItem()];
        }
        document.body.style.backgroundColor = color;
        document.getElementById("changeColor").textContent = color;
        color = "#";
    });

}

function randomItem () {
    return Math.floor(Math.random() * hex.length);
}