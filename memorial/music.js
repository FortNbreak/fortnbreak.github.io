const music = new Audio("music.mp3");
const bodyElement = document.body;
var likeButton = document.getElementById('likeButton');
likeButton.addEventListener('click', function() {
    music.play()
    bodyElement.classList.toggle("fire-gradient");
});

