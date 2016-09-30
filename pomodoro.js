var number = 5;
var number2 = 25;
var mytime = 0;
var stopme = 0;
var seconds = 0;
var minerone =false;
var onOff = true;

var handler ={
	plusbreak: function(){
		if(number == 20){
			number = 20
		}
		else{
			number++
			document.getElementById('numberbreak').innerHTML = number }
	},
		
	takeawaybreak: function(){
		number--;
		if(number < 1){
			number = 1
			}
		else{
		document.getElementById('numberbreak').innerHTML = number; }
	},
	
	plussession: function(){
		if(number2 === 25){
		number2 = 25}	
		else if(onOff === false){}
		//else if(minerone === false){			
		//number2++;
		//document.getElementById('numbersession').innerHTML = number2;
		//document.getElementById('clock').innerHTML = number2;
		//minerone = true; setagain()}
		else{
		number2++;
		document.getElementById('numbersession').innerHTML = number2;
		document.getElementById('clock').innerHTML = number2; minerone = true;setagain()}
		},
	
	takeawaysession: function(){
		number2--;
		if(number2 < 1){
			number2 = 1; }
		else if(onOff === false){}
		//else if(minerone === false){			
		//number2--;
		//document.getElementById('numbersession').innerHTML = number2;
		//document.getElementById('clock').innerHTML = number2;
		//minerone = true;setagain()}
			else{
		document.getElementById('numbersession').innerHTML = number2;
		document.getElementById('clock').innerHTML = number2;minerone=true;setagain()}
	}
}

	function setagain(){
		seconds = 0
		mytime = 0
		document.getElementById('clocksecond').innerHTML = seconds;
	    document.getElementById('clockseconds').innerHTML = mytime;
		
	}
function changeClassName(){	
if(onOff === true){
	document.getElementById("onOff").onclick === startTime()
	document.getElementById('swap').className = 'circle';
	onOff = false
	//if(minerone == true){		
		//number2 -=1;
	//document.getElementById('clock').innerHTML = number2;}
     //minerone = false;
	}
else
{
	document.getElementById("onOff").onclick = stopTime()
	document.getElementById('swap').className = 'circle-two';
	onOff = true
}
}
	
function startTime(){	
	stopme = window.setInterval(function(){
    timerInterval()}, 1000)
	document.getElementById('clocksecond').style.visibility ='visible'
	document.getElementById('clockseconds').style.visibility ='visible'
	document.getElementById('clockdot').style.visibility = 'visible'
}

function stopTime() {
	window.clearInterval(stopme);
}

function teste(){
if(document.getElementById('clock').innerHTML === '0' && document.getElementById('clocksecond').innerHTML === '0' &&  
mytime < 0 ){
	document.getElementById("onOff").onclick = stopTime()
	onOff = true
	seconds = 0
		mytime = 0
		document.getElementById('clocksecond').innerHTML = seconds;
	    document.getElementById('clockseconds').innerHTML = mytime;
	
}
}

function timerInterval(){
	mytime--	
teste()
	
	if(document.getElementById('clocksecond').innerHTML==='0' && mytime < 0){
		number2--
		document.getElementById('clock').innerHTML = number2;
        seconds = 5;
	    mytime = 9; }
	
	else if(mytime < 0){
		seconds--
		document.getElementById('clocksecond').innerHTML = seconds;
		document.getElementById('swap').className = 'circle-three';		
		mytime = 9;
		}
		document.getElementById('clockseconds').innerHTML = mytime;
		document.getElementById('clocksecond').innerHTML = seconds;
		}

$(document).ready(function(){
	document.getElementById('numbersession').innerHTML = number2
	document.getElementById('numberbreak').innerHTML = number
	document.getElementById('clock').innerHTML = number2;
	document.getElementById('clocksecond').style.visibility ='visible'
	document.getElementById('clockseconds').style.visibility ='visible'
	document.getElementById('clockdot').style.visibility = 'visible'
});
