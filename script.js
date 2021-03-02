const dino = document.querySelector('.dino'),
    cactus = document.querySelector('.cactus'),
    game = document.querySelector('.game'),
    startBtn = document.querySelector('.start'),
    score = document.querySelector('.score');
let scoreVar = 0;

document.addEventListener('keydown', () => {
    jump();
})

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';

    showGame();
    stopGame();
    setScore();
    nextLevel();
})

hideGame();

function jump(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump');
    }
    setTimeout(function(){
        dino.classList.remove('jump');
    }, 300);
}


function showGame(){
    dino.style.display = 'block';
    cactus.style.display = 'block';
    score.style.display = 'block';
}

function hideGame(){
    dino.style.display = 'none';
    cactus.style.display = 'none';
    score.style.display = 'none';
}

function stopGame(){

    

    let isAlive = setInterval(function(){
    
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top')),
        cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

        if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            hideGame();
            clearInterval(isAlive);
            scoreVar = 0;
            startBtn.style.display = 'block';
        }
    }, 10)
}

function setScore(){
    let scoreInterval = setInterval(function(){
        ++scoreVar;
        score.innerHTML = scoreVar;
        nextLevel();
        if(dino.style.display == 'none'){
            clearInterval(scoreInterval);
            cactus.style.animation = 'cactusMove 2s infinite linear';
        }
    }, 100)

}

function nextLevel(){
    if(scoreVar > 150){
        cactus.style.animation = 'cactusMove 1.5s infinite linear';
    }
    if(scoreVar > 200){
        cactus.style.animation = 'cactusMove 1s infinite linear';
    }
    
}






