let firstCard = 10
let secondCard = 2
let sum = firstCard+secondCard
let isAlive=true
let message=""
let message_el = document.getElementById("message-el")
let card_el = document.querySelector("#card-el")
let sum_el = document.getElementById("sum-el")


function renderGame(){
    card_el.textContent = "Cards: "+firstCard+" "+secondCard
    sum_el.textContent = "Sum: "+sum
    if(sum<21){
        message = "You are not quite there, want to draw another card?!"
    }
    else if(sum===21){
        message = "Woohoo you have won!"
    }
    else{
        message = "Sorry but you are out of the game!"
        isAlive=false
    }
    message_el.textContent = message
}

function fetchCard(){
    let card = 9
    sum +=card
    
    renderGame()
}
