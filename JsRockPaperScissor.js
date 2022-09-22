//code by david 
//follow instagram@bsdodavid
//object to store number of rounds
const rounds = {
    'playerClick':0
}
//object to store score
const scores = {
    'playerScore':0,
    'computerScore':0
}

//function to get player choice
const getPlayerChoice=()=>{
    let choices = document.querySelectorAll('.game--')
    return choices.forEach(button=>{
        button.onclick=()=>{
            main(button.value)
        }
    })
}
getPlayerChoice()
//function to get computer choice
const computerChoice=()=>{
    let choice = ['rock', 'paper', 'scissor']
    let random =Math.floor(Math.random()*3)
    return choice[random]
}
//main call function
const main=(player_choice)=>{
    let computer_choice = computerChoice();
    gameFunction(player_choice, computer_choice)
}

const gameFunction=(playerChoice, computerChoice)=>{
    let result = document.getElementById('result_div')
    let playerscore = document.getElementById('player_score')
    let person_score = Number(playerscore)
    let computerscore = document.getElementById('computer_score')
    let bot_score = Number(computerscore)
        if(playerChoice===computerChoice){
            rounds['playerClick']+=1
            result.innerHTML = `<h2>tie!,round=  ${rounds['playerClick']} playerScore= ${scores['playerScore']}, computer score= ${scores['computerScore']}</h2>`
        }else if(playerChoice=='rock' && computerChoice=='scissor'){
            rounds['playerClick']+=1
            scores['playerScore']+=1
            result.innerHTML = `<h2>yayy!! you won!,round=  ${rounds['playerClick']} playerScore= ${scores['playerScore']}, computer score= ${scores['computerScore']}</h2>`
            playerscore.innerText = scores['playerScore']
        }else if(playerChoice=='scissor' && computerChoice=='paper'){
            scores['playerScore']+=1
            rounds['playerClick']+=1
            result.innerHTML = `<h2>yayy!! you won !,round=  ${rounds['playerClick']} playerScore= ${scores['playerScore']},computer score= ${scores['computerScore']}</h2>`
            playerscore.innerText = scores['playerScore']
        }else if(playerChoice=='paper' && computerChoice=='rock'){
            scores['playerScore']+=1
            rounds['playerClick']+=1
            result.innerHTML = `<h2>yayy!! you won !,round= ${rounds['playerClick']} playerScore= ${scores['playerScore']}, computer score= ${scores['computerScore']}</h2>`
            playerscore.innerText = scores['playerScore']
        }else{
            scores['computerScore']+=1
            rounds['playerClick']+=1
            result.innerHTML = `<h2>ohh!! you lost!,round=  ${rounds['playerClick']} playerScore=${scores['playerScore']}, computer score= ${scores['computerScore']}</h2>`
            computerscore.innerText = scores['computerScore']
        }
        //this if condition decides the number of rounds we wanna play
        if(rounds['playerClick']===20){
            reset()
        }
}
//this function resets the game
const reset = ()=>{
    let result = document.getElementById('result_div')
    let result1 = document.getElementById('result_1')
    let playerscore = document.getElementById('player_score')
    let computerscore = document.getElementById('computer_score')
    if(scores['computerScore']>scores['playerScore']){
        result1.innerHTML = '<h2>ohh oh you lost!!</h2>'
    }else if(scores['computerScore']<scores['playerScore']){
        result1.innerHTML = '<h2>hurrah!! you won!! congratulations</h2>'
    }else{
        result1.innerHTML = '<h2>whoo!! its a tie!!</h2>'
    }
    result.innerHTML = `<h2>'Game over!!' number of rounds= ${rounds['playerClick']}, player score= ${scores['playerScore']}, computer score= ${scores['computerScore']}</h2>`
    scores['computerScore'] = 0
    scores['playerScore'] = 0
    rounds['playerClick'] = 0
    playerscore.innerText = 0
    computerscore.innerText = 0
}
const completeReset=()=>{
    let result = document.getElementById('result_div')
    let result1 = document.getElementById('result_1')

    result.innerHTML = ''
    result1.innerHTML = ''
    scores['computerScore'] = 0
    scores['playerScore'] = 0

}
