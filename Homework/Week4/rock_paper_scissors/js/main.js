var botScore=0;
var	playerScore=0;
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="paper";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
			botsWeapon="rock";
		}
	else if(randomNumber<.9999){
		botsWeapon="paper";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	console.log("playerThrowsRock");
}
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("WINNA WINNA, chicken for DINNAH");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
