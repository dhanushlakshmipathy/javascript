let randomNumber=parseInt(Math.random() *100 + 1);


const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultsParas');


const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess<1 || isNaN(guess) || guess>100){
        alert('Please enter a valid number');
    }else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game over, please fuck off. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("thagedhe le");
    }else if(guess<randomNumber){
        displayMessage("Number too low");
    }else if(guess>randomNumber){
        displayMessage("Number too high");
    }

}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`

}

function endGame(){ 
    userInput.value=''
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);;
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
        randomNumber=parseInt(Math.random() *100 + 1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`10`;
        lowOrHigh.innerHTML='';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}

// const form=document.querySelector('.form');
// console.log(form);