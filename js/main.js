let hamburger = document.querySelector(".burger")
let elUl = document.querySelector(".head-ul")
let overley = document.querySelector(".ffp")
let closebtn = document.querySelector(".close")
let elLinks = document.querySelectorAll("#link")
let elBody = document.body

hamburger.addEventListener("click", ()=>{
    elUl.classList.toggle("active-ul")
    overley.classList.toggle("overley")
    closebtn.classList.remove("hidden")
    elBody.classList.toggle("scroll")
})

closebtn.addEventListener("click", ()=>{
    closebtn.classList.add("hidden")
    elUl.classList.remove("active-ul")
    overley.classList.remove("overley")
    elBody.classList.remove("scroll")
})

overley.addEventListener("click", ()=>{
    closebtn.classList.add("hidden")
    elUl.classList.remove("active-ul")
    overley.classList.remove("overley")
    elBody.classList.remove("scroll")
})

for (let nom of elLinks) {
    nom.addEventListener("click",()=>{
        closebtn.classList.add("hidden")
        elUl.classList.remove("active-ul")
        overley.classList.remove("overley")
    elBody.classList.remove("scroll")
    })
}