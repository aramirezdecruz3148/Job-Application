//selecting my audio element
const music = document.getElementById('music');

//attempting to add sound event listener
music.addEventListener('loadstart', function() {
    music.play();
});