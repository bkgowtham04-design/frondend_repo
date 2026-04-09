const redbtn = document.getElementById("redbtn")

const bluebtn = document.getElementById("bluebtn")

const greenbtn = document.getElementById("greenbtn")


const change = document.getElementById("btn")



redbtn.addEventListener("click",()=>{
    change.style.backgroundColor = "red"
    change.innerHTML = "Red"
    

})


greenbtn.addEventListener("click",()=>{
    change.style.backgroundColor = "green"
    change.innerHTML = "Green"
    

})



bluebtn.addEventListener("click",()=>{
    change.style.backgroundColor = "blue"
    change.innerHTML = "Blue"


    
    

})