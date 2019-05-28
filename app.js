console.log('Hello World');


window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	keys.classList.add('playing');
});



function removeClass(e){
	this.classList.remove('playing');
}

const keys =document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));


