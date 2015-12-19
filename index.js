var roundtime = 120;
var bombtime = 45;
var planttime = 5;
var defusetime= 5;
var running = false;
var isplanted = false;
var interval;

var Xroundtime;
var Xbombtime;

var ctwinsound = new Audio("assets/sound/ctwin.wav");
var twinsound = new Audio("assets/sound/twin.wav");
var bombplant = new Audio("assets/sound/bombplant.wav");

function starttimer() {
	if(running === false){
		document.getElementsByClassName("startstop")[0].innerHTML = "Stop Bomb Timer";
		running = true;
		console.log("Bomb Timer Starting");
		
		document.getElementsByClassName("timertext")[0].innerHTML = roundtime;
		
		Xroundtime = roundtime;
		Xbombtime = bombtime;
		interval = setInterval(timer,1000)
	}
	
	else if(running === true){
		document.getElementsByClassName("startstop")[0].innerHTML = "Start Bomb Timer";
		running = false;
		console.log("Bomb Timer Stopping");
		
		clearInterval(interval);
	}
}

function changeroundtime(){
	roundtime =  prompt("Change Round Time (in seconds):");
	if(isNaN(roundtime)){
		changeroundtime();
	}
	
}

function timer(){
	if (isplanted === false){
		Xroundtime--;
		document.getElementsByClassName("timertext")[0].innerHTML = Xroundtime;
	}
	
	if(Xroundtime <= 0){
		document.getElementsByClassName("startstop")[0].innerHTML = "Counter-Terrorists Win!";
		clearInterval(interval);
		ctwinsound.play();
	}
}

function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
}
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
}


