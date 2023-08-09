const heads = document.querySelector("button")
const tails = document.querySelector("button")


heads.addEventListener("click",function(){
    const message = document.querySelector(".message")
    let temp = "you have chosen heads"
    message.innerHTML = temp

})