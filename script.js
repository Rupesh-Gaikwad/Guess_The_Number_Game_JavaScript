
let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

function reduceScore(){
    if(score > 0){
        score--;
        document.querySelector('.score_value').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = "🧨You lost the game";
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('#play-again').style.visibility = "visible";
    }
}

document.querySelector('#check').addEventListener('click',
    function(){
        let guessNumber = Number(document.querySelector('.guess').value);
        if(secretNumber === guessNumber){
            document.querySelector('.message').textContent = "🎉Congrats you are the winner";
            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.number').textContent = secretNumber;
            reduceScore();
            if(highScore < score){
                highScore = score;
                document.querySelector('.highscore').textContent = score;
            }
            document.querySelector('#play-again').style.visibility = "visible";
        }
        else if(!guessNumber || guessNumber < 1 || guessNumber >20){
            document.querySelector('.message').textContent = "📌 Enter Valid number...";
            reduceScore();
        }
        else if(guessNumber < secretNumber){
            document.querySelector('.message').textContent = "📉Your number is too low";
            reduceScore();
        }
        else if(guessNumber > secretNumber){
            document.querySelector('.message').textContent = "📈Your number is too high";
            reduceScore();
        }
    }

);

document.querySelector('#play-again').addEventListener('click', 
function(){
    document.querySelector('#play-again').style.visibility = "hidden";
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".guess").value = "";
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Start guessing...";
    score = 20;
    document.querySelector('.score_value').textContent = 20;
});

