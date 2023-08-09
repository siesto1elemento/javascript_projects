

const compchoice = ["Rock", "Paper", "Scissor"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");



rock.addEventListener("click", function() {
    const message = document.querySelector(".message");
    let output = compchoice[Math.floor(Math.random() * compchoice.length)];
    
    if (output === "Paper") {
        message.innerHTML = "Computer wins!";
    } else if (output === "Scissor") {
        message.innerHTML = "You win!";
    } else {
        message.innerHTML = "It's a draw!";
    }
});

paper.addEventListener("click", function() {
    const message = document.querySelector(".message");
    let output = compchoice[Math.floor(Math.random() * compchoice.length)];
    
    if (output === "Scissor") {
        message.innerHTML = "Computer wins!";
    } else if (output === "Rock") {
        message.innerHTML = "You win!";
    } else {
        message.innerHTML = "It's a draw!";
    }
});

scissor.addEventListener("click", function() {
    const message = document.querySelector(".message");
    let output = compchoice[Math.floor(Math.random() * compchoice.length)];
    
    if (output === "Rock") {
        message.innerHTML = "Computer wins!";
    } else if (output === "Paper") {
        message.innerHTML = "You win!";
    } else {
        message.innerHTML = "It's a draw!";
    }
});








