
// Game values 
let min = 1, 
    max = 10, 
    winningNum = 2,
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

// Listen for guess 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    // console.log(guess)

    // valdate the value
    if(isNaN(guess) || guess < min || guess > max){
        message.style.color = 'red'
        message.textContent = (`Please enter a number between ${min} and ${max}`)
    }

    // Check if won
    if(guess === winningNum){
        //disabled input 
        guessInput.disabled = true
        //Change border color
        guessInput.style.borderColor = 'green'
        // set message 
        message.style.color = 'green'
        message.textContent = `${winningNum} is correct!, YOU WIN!`
        
    }else{

    }
})