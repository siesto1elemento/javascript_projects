let cardno1 = 2
let cardno2 = 10



let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")


function cards(){
    cardsEl.innerText = "cards : " + cardno1 + " " + cardno2
    sumEl.innerText =  "sum : " + (cardno1 + cardno2)
}

function newcard(){

}
