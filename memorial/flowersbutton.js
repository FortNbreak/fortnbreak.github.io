var likeButton = document.getElementById('likeButton');
var likeCount = document.getElementById('likeCount');

likeCount.textContent = localStorage.getItem('likeCount') || 0;

likeButton.addEventListener('click', function() {
    likeCount.textContent = +likeCount.textContent + 1;
    localStorage.setItem('likeCount', likeCount.textContent);

    likeButton.classList.add('clicked');
});
