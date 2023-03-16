///////////////////////////////////////////////////////////////// Шаблоны Sudoku
let BLANK_BOARD = []

let BLANK_BOARD_copy = []


const BLANK_BOARD_1 = [
	2, 1, 9, 5, 4, 3, 6, 7, 8,
	5, 4, 3, 8, 7, 6, 9, 1, 2,
	8, 7, 6, 2, 1, 9, 3, 4, 5,
	4, 3, 2, 7, 6, 5, 8, 9, 1,
	7, 6, 5, 1, 9, 8, 2, 3, 4,
	1, 9, 8, 4, 3, 2, 5, 6, 7,
	3, 2, 1, 6, 5, 4, 7, 8, 9,
	6, 5, 4, 9, 8, 7, 1, 2, 3,
	9, 8, 7, 3, 2, 1, 4, 5, 6]

const BLANK_BOARD_2 = [
	8, 7, 6, 5, 4, 3, 1, 9, 2,
	5, 4, 3, 2, 1, 9, 7, 6, 8,
	2, 1, 9, 8, 7, 6, 4, 3, 5,
	1, 9, 8, 7, 6, 5, 3, 2, 4,
	4, 3, 2, 1, 9, 8, 6, 5, 7,
	7, 6, 5, 4, 3, 2, 9, 8, 1,
	3, 2, 1, 9, 8, 7, 5, 4, 6,
	6, 5, 4, 3, 2, 1, 8, 7, 9,
	9, 8, 7, 6, 5, 4, 2, 1, 3
]
///////////////////////////////////////////////////////////////// Функции

let lvl = 1;

//Выбор случайной матрици
function choise_matrix(){
	let choise_pass = Math.floor(Math.random() * 2) + 1;
	if (choise_pass == 1) {
		BLANK_BOARD = BLANK_BOARD_1.slice();
		BLANK_BOARD_copy = BLANK_BOARD_1.slice();
	}
	else if (choise_pass == 2) {
		BLANK_BOARD = BLANK_BOARD_2.slice();
		BLANK_BOARD_copy = BLANK_BOARD_2.slice();
	}
} 
//Удаление из матрици элементов
function generator_lvl(lvl_game){
	if (lvl_game == 1) {
		for(let i = 0; i < 9; i++){
			let row = Math.floor(Math.random() * 81) + 1;
			BLANK_BOARD[row] = "";
		}
	}
	else if (lvl_game == 2) {
		for(let i = 0; i < 15; i++){
			let row = Math.floor(Math.random() * 81) + 1;
			BLANK_BOARD[row] = "";
		}
	}
	else if (lvl_game == 3) {
		for(let i = 0; i < 25; i++){
			let row = Math.floor(Math.random() * 81) + 1;
			BLANK_BOARD[row] = "";
		}
	}
	else if (lvl_game == 4) {
		for(let i = 0; i < 35; i++){
			let row = Math.floor(Math.random() * 81) + 1;
			BLANK_BOARD[row] = "";
		}
	}
	else if (lvl_game == 5) {
		for(let i = 0; i < 55; i++){
			let row = Math.floor(Math.random() * 81) + 1;
			BLANK_BOARD[row] = "";
		}
	}
}

//Генерация поля
function createMap()
{
	let map = document.querySelector("#play > div.box");
	for (let i = 0; i < 81; i++) {
		let blockSudoky = document.createElement("div");
		blockSudoky.classList.add('square');
		blockSudoky.textContent = BLANK_BOARD[i]
		if(BLANK_BOARD[i] == "") {
			blockSudoky.dataset.content = "*";
		}
		else {
			blockSudoky.dataset.content = "#";
		}
	   map.appendChild(blockSudoky);
	}
}

//Перезапись карты
function reMap(){
	let allBlock = document.getElementsByClassName('square');
	for(let i = 0; i < allBlock.length; i++){
		allBlock[i].dataset.textContent = BLANK_BOARD[i];
	}
}

//Работа с клавишами
function userWrite(event){
	let spy = document.querySelector(".clickk")
	if (event.key >= '0' && event.key <= '9') {
		spy.textContent = event.key;
	}
	else if (event.key == 'Delete' || event.key == 'Backspace')
	{
		spy.textContent = "";
	}
	spy.style.color = "#FF0000";
}

//Нажатия пользователя
function clickUser(){
	let allBlock = document.getElementsByClassName('square');
	for(let i = 0; i < allBlock.length; i++){
	   allBlock[i].onclick = function(){
	      for(let i = 0; i < allBlock.length; i++){
		      if (allBlock[i].dataset.content == ">") {
		        	allBlock[i].classList.remove('clickk');
		      	allBlock[i].dataset.content = "*";
		      }
	      }
	      if (allBlock[i].dataset.content == "*") {
	      	allBlock[i].classList.add('clickk');
	      	allBlock[i].dataset.content = ">";
	      }
	      else if(allBlock[i].dataset.content == ">") {
	      	allBlock[i].classList.remove('clickk');
	      	allBlock[i].dataset.content = "*";
	    	}
	    }
	}
	document.addEventListener('keydown', userWrite);
}

//Проверка заполненной матрици
function testAnswerUser(){
	let allBlock = document.getElementsByClassName('square');
	let answerForUser = "Верно!";
	for(let i = 0; i < allBlock.length; i++){
		if (allBlock[i].textContent != BLANK_BOARD_copy[i]) {
			answerForUser = "Неверно!";
		}
	}
	return answerForUser;
}

//Создание диалогового окна()
function printMsg(text){
	let placeMsg = document.querySelector(".lvl");
	placeMsg.textContent = text;
	placeMsg.classList.add("msgBox");
	setTimeout(delMsg, 3000, placeMsg);
}
//Удаление диалогового окна
function delMsg(placeMsg){
	placeMsg.classList.remove();
	placeMsg.textContent = "";
}

//Запуск проверки
function clickButtonUser(){
	let button = document.querySelector(".button");
	let gameTime;
	button.onclick = function(){
		if (button.dataset.content == "*") {
			gameTime = testAnswerUser();
			printMsg(gameTime);
			button.dataset.content = ">";
		}
		else if(button.dataset.content == ">") {
			button.dataset.content = "*";
		}
	}
}

////////////////////////////////////////////////////////////	Логика переоформить
choise_matrix();
generator_lvl(lvl);
createMap();
clickUser();
clickButtonUser();