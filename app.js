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

keys.addEventListener('click', function(e){
	const bass = document.getElementById('sound-1');
	bass.currentTime = 0;
	bass.play();
})

keys.forEach(key => key.addEventListener('transitionend', removeClass));

//next make this work on an click event listener


