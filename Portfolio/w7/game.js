window.onload = pageLoad;

function pageLoad(){

	var StartButton = document.getElementById('start');
	StartButton.onclick = startGame;

}

function startGame(){
	
		alert("Ready");
		addBox();
		timeStart();
	
		alert("Invaild value input , Please try again!");
		boxValue.value = "";
	
}

function timeStart(){
	var TIMER_TICK = 1000;
	
	var timer = null;
	
	var x = document.getElementById('clock');
	var timer = document.getElementById('clock').value;
	//setting timer using setInterval function
	timer = 30;
	var timer_interval = setInterval(timeCount , 1000);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		timer = timer - 1; 
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		x.innerHTML = timer;

		
		if (timer > 0 && allbox.length == 0){
			alert("You win!");
			clearInterval(timer_interval);
			clearScreen();
		}
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		else if (timer <= 0 && allbox.length >= 1){
			alert("Game over");
			clearInterval(timer_interval);
			clearScreen();
		}
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById('numbox').value;
	var gameLayer = document.getElementById('game-layer');
	var colorDrop = document.getElementById('color').value;
	var score = document.getElementById("score");
	score.value = 0;

	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.classList.add('square' , colorDrop);
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
		score.value += 1000;
		console.log(score);
		
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = 0 ;

	//delete all  div
	for (var i=0;i<allbox.length;i++){
	
	}
	location.reload();
}



