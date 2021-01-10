var state = true;

let bubbles = document.getElementsByClassName('bubble');

Array.from(bubbles).forEach(bubble => {
    bubble.addEventListener('click', e => {
        if (e.target.classList.contains('selected') && state) {
            e.target.parentElement.classList.remove('selectedAnswer');
            e.target.classList.remove('selected');
        } else if (state) {
            let bubblesToClear = Array.from(bubble.parentElement.parentElement.getElementsByClassName('bubble'));
            bubblesToClear.forEach(bubbleToClear => {
                bubbleToClear.classList.remove('selected')
                bubbleToClear.parentElement.classList.remove('selectedAnswer');
            });
            e.target.classList.add('selected'); 
            e.target.parentElement.classList.add('selectedAnswer');
        }
    });
});

let submit = document.querySelector('.submitButton');

submit.addEventListener('click', e => {
    let totalQuestions = Array.from
        (document.getElementsByClassName('question')).length;
    let answeredCorrect = Array.from
        (document.getElementsByClassName('answer correct selectedAnswer')).length;
    if (answeredCorrect === null) {
        answeredCorrect = 0;
    }
    document.querySelector('#answeredCorrect').innerHTML = answeredCorrect;
    document.querySelector('#totalQuestions').innerHTML = totalQuestions;
    let dashboard = document.querySelector('.dashboard');
    dashboard.style.visibility = 'visible';
    document.querySelector('.questionsArea').style.animation = '0.05s ease-in 0s 1 normal forwards running disappear';
});

let okey = document.querySelector('okButton');

okey.addEventListener('click', e => {
    window.location.replace('/index.html');
});