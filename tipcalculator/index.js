const button = document.querySelector("button")
const output = document.querySelector("h1")
const cost = document.querySelector("#tip")

button.addEventListener("click",function(){

    event.preventDefault();
    console.log(cost.value * 0.15)
    let tip = (cost.value * 0.15).toFixed(2)
    let temp = `you should tip $${tip} on $${cost.value}`

    output.innerText = temp
})
