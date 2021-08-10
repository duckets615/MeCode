const playlist = ['bright', 'on', 'tink', 'snare', 'kick'];
const songs = {
    bright: 'Mr. Brightside - The Killers',
    on: 'On & On & On - Catch 22',
    tink: 'Symbol Tink',
    snare: 'Drum Snare',
    kick: 'Drum Kick'    
}
let current = 0; 
let currentSong = songs[playlist[current]];

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const song = document.querySelector(`audio`);
const box = document.querySelectorAll('.box');
const arrow = document.querySelectorAll('.arrow');
const songTitle = document.querySelector('.songTitle')

playButton.addEventListener('click', (e) => doStuff(e));
pauseButton.addEventListener('click', (e) => doStuff(e));
stopButton.addEventListener('click', (e) => doStuff(e));
arrow.forEach(arrow => arrow.addEventListener('click', (e) => nextSong(e)));

function doStuff(e) {
    const song = document.querySelector(`audio[data-key="${playlist[current]}"`);
    const text = e.target.textContent;
    
    if (text === 'Play') song.play();
    else if (text === 'Pause') song.pause();
    else song.currentTime = 4000;

    box.forEach(box => box.classList.remove('selected', 'selectedStop'));
    e.target.textContent === 'Stop' ? e.target.classList.add('selectedStop') : e.target.classList.add('selected');
} 
function nextSong(e) {
    if (e.target.textContext === '>') {
        current === Object.keys(songs).length - 1 ? current = 0 : current++;
    } else {
        current === 0 ? current = Object.keys(songs).length - 1 : current--;
    }    
    songTitle.textContent = `${songs[playlist[current]]}`
}
