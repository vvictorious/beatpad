console.log('Hello World');


function removeClass(e){
	this.classList.remove('playing');
};



window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	keys.classList.add('playing');
});


const keys =document.querySelectorAll('.key');


const bass = document.querySelector('.bass');
bass.addEventListener('click', function(e){
	const audio808 = document.querySelector('#sound-1');
	if(!bass) return;
	audio808.currentTime = 0;
	audio808.play();
	bass.classList.add('playing');
});

keys.forEach(key => key.addEventListener('transitionend', removeClass));

//next make this work on an click event listener


