const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId;

buttonStart.addEventListener('click', startChangeBgColor);
buttonStop.addEventListener('click', stopChangeBgColor);

function startChangeBgColor() {
	body.style.backgroundColor = getRandomHexColor();
	timerId = setInterval(() => {body.style.backgroundColor = getRandomHexColor();
	}, 1000);
	buttonStart.disabled = true;
	buttonStop.disabled = false;
}

function stopChangeBgColor() {
	clearInterval(timerId);
	buttonStart.disabled = false;
	buttonStop.disabled = true;
}