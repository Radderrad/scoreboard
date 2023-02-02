let homeCard = document.getElementById("home-scorecard")
let guestCard = document.getElementById("guest-scorecard")
let resultTxt = document.getElementById("result-txt")
let homeScore = 0
let guestScore = 0
guestCard.textContent = guestScore
homeCard.textContent = homeScore;

function homeone(){
    homeCard.textContent = homeScore += 1
    
}

function hometwo(){
    homeCard.textContent = homeScore += 2
}

function homethree(){
    homeCard.textContent = homeScore += 3
}

function guestone(){
    guestCard.textContent = guestScore +=1
}

function guesttwo(){
    guestCard.textContent = guestScore +=2
}

function guestthree(){
    guestCard.textContent = guestScore +=3
}

function results(){
    homeScore
    guestScore
    if (homeScore > guestScore){
        resultTxt.textContent = `Home wins with a score of ${homeScore} to ${guestScore}!`
        } else if (homeScore === guestScore) {
            resultTxt.textContent = `It is a draw!`
        } else {
            resultTxt.textContent = `Guests win with a score of ${guestScore} to ${homeScore}!`
        }
    }

function newgame(){
    homeScore = 0
    guestScore = 0
    homeCard.textContent = 0
    guestCard.textContent = 0
    resultTxt.textContent = ""
}