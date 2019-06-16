/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, activePlayer, currentScore;
init();


document.querySelector(".btn-roll").addEventListener('click', function(){
    var s = Math.floor(Math.random() * 6 + 1);
    console.log(s);
    if(s!==1){
        currentScore+=s;
        document.getElementById("current-"+activePlayer).textContent=currentScore;
        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+s+'.png';

    }
    else{
        change();
    }
    

});
document.querySelector(".btn-hold").addEventListener('click', function () {
    score[activePlayer]+=currentScore;
    document.getElementById("score-"+activePlayer).textContent=score[activePlayer];
    if(score[activePlayer]>=20){
        document.getElementById("name-"+ activePlayer).textContent="WINNER!!";
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.remove("active");
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display='none';
        document.querySelector('.btn-hold').style.display='none';

    }
    else{
    change();
    }

});
document.querySelector(".btn-new").addEventListener('click', init);


function change() {
    currentScore = 0;
    document.getElementById("current-" + activePlayer).textContent = currentScore;
    activePlayer = Math.abs(1 - activePlayer);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}


function init() {
    score = [0, 0];
    activePlayer = 0;
    currentScore=0;
    tempScore = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".dice").style.display='none';
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector("#name-0").textContent="Player 1";
    document.querySelector("#name-1").textContent="Player 2";
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.btn-hold').style.display='block';
}
