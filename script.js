const hamburger = document.getElementById("hamburger")
const dropdown = document.getElementById("dropdown")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("bg-color")
    dropdown.classList.toggle("invisible")
})