
// Game values 
let min = 1, 
    max = 10, 
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign Ui to min and max 
minNum.textContent = min;
maxNum.textContent = max;

// play again event listner;
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload()
  }
})

// Listen for guess 
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // console.log(guess)

  // valdate the value
  if(isNaN(guess) || guess < min || guess > max){
    // message.style.color = 'red'
    // message.textContent = (`Please enter a number between ${min} and ${max}`)

    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  // Check if won
  if(guess === winningNum){
    // Game over - Won
    gameOver(true, `${winningNum} is correct!, YOU WIN!`)


    // ***********
    //!disabled input 
    // guessInput.disabled = true
    //!Change border color
    // guessInput.style.borderColor = 'green'
    //!set message 
    // message.style.color = 'green'
    // message.textContent = `${winningNum} is correct!, YOU WIN!`
    //**********
      
  }else{
    // Wrong Number 
    guessLeft -= 1

    if(guessLeft === 0){
      // Game Over - Lost
      gameOver(false, `Game Over, you lost. The corect number was ${winningNum}!`)

      // ***********
      //!disabled input 
      // guessInput.disabled = true
      //!Change border color
      // guessInput.style.borderColor = 'red'
      //!set message 
      // message.style.color = 'red'
      // message.textContent = `Game Over, you lost. The corect number was ${winningNum}!`
      // ***********

    }else{
      // Game Continues - answer worong

      //Change border color
      guessInput.style.borderColor = 'red'
      // Clear Input
      guessInput.value = '';
      // Tell user its wrong number
      message.style.color = 'red'
      message.textContent = `${guess} is not correct, ${guessLeft} guess left!`
    }
  }
})

// Game over
function gameOver(won, msg){
  let color;

  won === true ? color = 'green' : color = 'red';
  //disabled input 
  guessInput.disabled = true
  //Change border color
  guessInput.style.borderColor = color
  // set text color 
  message.style.color = color

  // set message 
  setMessage(msg);

  // Play Again?
  guessBtn.value = 'play again';
  guessBtn.className += 'play-again';
}

// Get Random Num
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1) + min)
}

// Set message 
function setMessage(msg, color){
  message.style.color = color
  message.textContent = msg
}