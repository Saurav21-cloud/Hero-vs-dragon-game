score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setInterval(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("key code is : ", e.keyCode)
    if (e.keyCode == 38) {
        defender = document.querySelector(".defender");
        dust = document.querySelector(".dust");

        defender.classList.add("animatedefender");
        let defenderX = parseInt(window.getComputedStyle(defender).getPropertyValue("left"));
        dust.style.left = defenderX + "px";

        dust.style.display = "block";
        setTimeout(() => {
            dust.style.display = "none";
        }, 500);

        setTimeout(() => {
            defender.classList.remove("animatedefender");
        }, 600);
    }


    if (e.keyCode == 39) {
        defender = document.querySelector(".defender");
        defenderX = parseInt(window.getComputedStyle(defender, null).getPropertyValue("left"));
        defender.style.left = defenderX + 112 + 'px';
    }

    if (e.keyCode == 37) {
        defender = document.querySelector(".defender");
        defenderX = parseInt(window.getComputedStyle(defender, null).getPropertyValue("left"));
        defender.style.left = (defenderX - 112) + 'px';
    }
}




setInterval(() => {
    defender = document.querySelector(".defender");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(defender, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(defender, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);
    console.log(offSetX, offSetY);
    if (offSetX < 90 && offSetY < 73) {
        gameOver.innerHTML = 'Game Over!'
        obstacle.classList.remove("obstacleAni");

        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();

        }, 1000);
    }
    else if (offSetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1700);

    }

}, 100);

function updateScore(score) {
    scoreCount.innerHTML = "Your Score : " + score;
}