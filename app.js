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

const clap = document.querySelector('.clap');
clap.addEventListener('click', function(e){
	const audioclap = document.querySelector('#sound-2');
	if(!clap) return;
	audioclap.currentTime = 0;
	audioclap.play();
	clap.classList.add('playing');
});


const crash = document.querySelector('.crash');
crash.addEventListener('click', function(e){
	const audioCrash = document.querySelector('#sound-3');
	if(!crash) return;
	audioCrash.currentTime = 0;
	audioCrash.play();
	crash.classList.add('playing');
});

const closedHat = document.querySelector('.closedHat');
closedHat.addEventListener('click', function(e){
	const audioClosed = document.querySelector('#sound-5');
	if(!closedHat) return;
	audioClosed.currentTime = 0;
	audioClosed.play();
	closedHat.classList.add('playing');
});

const openHat = document.querySelector('.openHat');
openHat.addEventListener('click', function(e){
	const audioOpen = document.querySelector('#sound-6');
	if(!openHat) return;
	audioOpen.currentTime = 0;
	audioOpen.play();
	openHat.classList.add('playing');
});

const hype = document.querySelector('.hype');
hype.addEventListener('click', function(e){
	const audiohype = document.querySelector('#sound-7');
	if(!hype) return;
	audiohype.currentTime = 0;
	audiohype.play();
	hype.classList.add('playing');
});

const kick = document.querySelector('.kick');
kick.addEventListener('click', function(e){
	const audioKick = document.querySelector('#sound-8');
	if(!kick) return;
	audioKick.currentTime = 0;
	audioKick.play();
	kick.classList.add('playing');
});

const ride = document.querySelector('.ride');
ride.addEventListener('click', function(e){
	const audioRide = document.querySelector('#sound-9');
	if(!ride) return;
	audioRide.currentTime = 0;
	audioRide.play();
	ride.classList.add('playing');
});

const snare = document.querySelector('.snare');
snare.addEventListener('click', function(e){
	const audioSnare = document.querySelector('#sound-11');
	if(!snare) return;
	audioSnare.currentTime = 0;
	audioSnare.play();
	snare.classList.add('playing');
});


keys.forEach(key => key.addEventListener('transitionend', removeClass));

//next make this work on an click event listener


















































