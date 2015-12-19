var roundtime = 120;
var bombtime = 45;
var planttime = 5;
var defusetime= 5;
var running = false;
var isplanted = false;
var interval;

var Xroundtime;
var Xbombtime;

var isbombcolor = false;

var ctwinsound = new Audio("assets/sound/ctwin.wav");
var twinsound = new Audio("assets/sound/twin.wav");
var bombplant = new Audio("assets/sound/bombplant.wav");
var beep = new Audio("assets/sound/beep.wav");
var explotion = new Audio("assets/sound/explotion.wav");
var defusing = new Audio("assets/sound/defusing.wav");
var bombdefused = new Audio("assets/sound/bombdefused.wav");


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

function bomb(){
	if(running === true){
		if(isplanted === false){
			bombplant.play();
			isplanted = true;
		}
		else if(isplanted === true){
			defusing.play();
			setTimeout(function(){bombdefused.play();}, 1000);
			setTimeout(function(){ctwinsound.play();}, 2000);
			document.getElementsByClassName("startstop")[0].innerHTML = "Counter-Terrorists Win!";
			clearInterval(interval);
			isplanted = false;
			running = false;
			bombcolor();
		}
	}
}

function timer(){
	if (isplanted === false){
		Xroundtime--;
		document.getElementsByClassName("timertext")[0].innerHTML = Xroundtime;
	} else if(isplanted === true){
		Xbombtime--;
		document.getElementsByClassName("timertext")[0].innerHTML = Xbombtime;
		beep.play();
		bombcolor();
	}
	
	if(Xroundtime <= 0){
		document.getElementsByClassName("startstop")[0].innerHTML = "Counter-Terrorists Win!";
		clearInterval(interval);
		ctwinsound.play();
	}
	if(Xbombtime <= 0){
		document.getElementsByClassName("startstop")[0].innerHTML = "Terrorists Win!";
		clearInterval(interval);
		explotion.play();
		twinsound.play();
	}
}

function changeroundtime(){
	roundtime =  prompt("Change Round Time (in seconds):");
	if(isNaN(roundtime)){
		changeroundtime();
	}
	
}

function changebombtime(){
	bombtime =  prompt("Change Bomb Time (in seconds):");
	if(isNaN(roundtime)){
		changebombtime();
	}
	
}

function changeplanttime(){
	planttime =  prompt("Change Plant Time (in seconds):");
	if(isNaN(roundtime)){
		changeplanttime();
	}
	
}

function changedefusetime(){
	defusetime =  prompt("Change Defuse Time (in seconds):");
	if(isNaN(roundtime)){
		changedefusetime();
	}
	
}

function bombcolor() {
	if(isbombcolor === true){
		document.getElementsByClassName("html")[0].style.backgroundColor = "orange";
		isbombcolor = false;
	}
	else if(isbombcolor === false){
		document.getElementsByClassName("html")[0].style.backgroundColor = "red";
		isbombcolor = true;
	}
	
	if(running === false){
		document.getElementsByClassName("html")[0].style.backgroundColor = "white";
	}
}

function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
}
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
}

/*
function holdit(btn, action, start, speedup) {
    var t;

    var repeat = function () {
        action();
        t = setTimeout(repeat, start);
        start = start / speedup;
    }

    btn.mousedown = function() {
        repeat();
    }

    btn.mouseup = function () {
        clearTimeout(t);
    }
};

/* to use */
//holdit(btn, function () { }, 1000, 2);

