score = 0;
cross = true;
audio = new Audio("music.mp3");
audioGO = new Audio("Game-Over.wav");
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("key code is ", e.keyCode);
    if (e.keyCode == 38) {

        mario = document.querySelector('.mario');           //for jumping purpose//
        mario.classList.add('animatemario');
        setTimeout(() => {

            mario.classList.remove('animatemario');

        }, 700);
    }
    if (e.keyCode == 39) {

        mario = document.querySelector('.mario');           //for left purpose//
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 112 + "px";
    }
    if (e.keyCode == 37) {

        mario = document.querySelector('.mario');           //for back purpose//
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 112) + "px";

    }
}
//when a mario and dragon colliding//
setInterval(() => {

    mario = document.querySelector('.mario');
    GameOver = document.querySelector('.GameOver');
    obstacle = document.querySelector('.obstacle');

    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));  //MARIO//
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top')); // Get the  top/left value of mario

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left')); //OBSTACLES//
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(mx - ox); // for colliding//
    offsetY = Math.abs(my - oy);

    if (offsetX < 113 && offsetY < 52) {

        GameOver.innerHTML = "GAME OVER - Reload to Play Again";         //when a mario collide with the obstacle, then GameOver message occur.//
        obstacle.classList.remove('obstacle_animation');// You Died//
        audioGO.play();  //on Game-over music.

        setTimeout(() => {


            audio.pause()


        }, 500)     // off Game music.

    }
    else if (offsetX < 145 && cross) {  //  if dragon is near and mario cross the dragon,then update the score. only in x-axis.//

        score += 1;
        updateScore(score);
        cross = false;        //FOR SCORING//
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {

            animationDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = animationDur - 0.1; // IF our mario is passing the dragon, then  speed of dragon will be increasing.
            obstacle.style.animationDuration = newdur + 's';

        }, 500);
    }
}, 10);


function updateScore(score) {

    scoreCont.innerHTML = 'Your Score :' + score;

}










