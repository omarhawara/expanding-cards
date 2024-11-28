const panelsOfArray = document.querySelectorAll(".panel");

panelsOfArray.forEach(panel =>{
    panel.addEventListener("click",()=>{
        removeActiveClasses();
        panel.classList.add("active")
    })
})

const removeActiveClasses = () =>{
    panelsOfArray.forEach(panel =>{
        panel.classList.remove("active")
    })
}