let togglers = document.querySelectorAll('.toggler');

togglers.forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.flip-card-front').classList.toggle('flipped');
        document.querySelector('.flip-card-back').classList.toggle('flipped');
    });
});