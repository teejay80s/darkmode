const toggle = document.getElementById("toggle")
const container = document.getElementById("container")
console.log(toggle)
toggle.addEventListener('change', (e) =>{
    document.body.classList.toggle("dark",e.target.checked); 
    container.classList.toggle("dark",e.target.checked); 
    console.log(toggle)
})