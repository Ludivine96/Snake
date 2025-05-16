let snake = document.getElementById("snake");
let pomme = document.getElementById("pomme");

let positionX = 540;
let positionY = 130;


function mouveSnakeDown() {
    positionY += 10;
    if (positionY == 550) {
        positionY = 60
    }
    snake.style.top = positionY + "px";
}

function mouveSnakeUp() {
    positionY -= 10;
    if (positionY == 50) {
        positionY = 540
    }
    snake.style.top = positionY + "px";
}

function mouveSnakeLeft() {
    positionX -= 10;
    if (positionX == 140) {
        positionX = 1030
    }
    snake.style.left = positionX + "px";

}

function mouveSnakeRight() {
    positionX += 10;
    if (positionX == 1040) {
        positionX = 150
    }
    snake.style.left = positionX + "px";

}



let keydownSave = "";

document.addEventListener('keydown', function (event) {
    keydownSave = event.key
    setInterval(mouveSnake(keydownSave), 100);

});


function mouveSnake(keydown){
    if (keydown == "ArrowRight") {
        mouveSnakeRight();
        
    }
    if (keydown == "ArrowLeft") {
        mouveSnakeLeft();
        
    }
    if (keydown == "ArrowUp") {
        mouveSnakeUp();
        
    }
    if (keydown == "ArrowDown") {
        mouveSnakeDown();
        
    }
    checkIfEatApple()
}

function checkIfEatApple() {
    if (snake.style.top == pomme.style.top && snake.style.left == pomme.style.left) {
        pomme.style.backgroundColor= "black"
        snake.style.height= "40px"
    }
}
