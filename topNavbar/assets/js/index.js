let closeTopnav = document.getElementById("myTopnav")
let closeBtn = document.getElementById("closeIcon")
let openBtn = document.getElementById("openBtn")

closeBtn.addEventListener("click", function () {
    closeTopnav.classList.add("closeTop")
    document.body.style.backgroundColor = "white";

})

openBtn.addEventListener("click", function () {
    closeTopnav.classList.remove("closeTop")
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})