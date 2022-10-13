
var quizQuestions = [
    {
        question: 'What is one way NOT to declare a variable?',
        answers: ['var', 'set', 'const', "let"], 
        answer: 'set'
    },
    {
        question: 'string  must be enclosed with?',
        answers: ['paranthesis', 'curly brackets', 'single quotes', 'double quotes'],
        answer: 'double quotes'

    },
    {
        question: 'what is NOT the correct way to call  a popup box?',
        answers: ['confirm', 'prompt', 'window', 'alert'],
        answer: 'window'
    }, 
    {
        question: 'What are the primitive types in JavaScript?',
        answers: ['boolean', 'string', 'number', 'all of the above'],
        answer: 'all of the above'
    }
]


var startQuiz = document.querySelector('#start-quiz'); 
var quizIntro = document.querySelector('#start-screen');
var quizElement = document.querySelector('#quiz-questions'); 
var quizChoicesElement = document.querySelector('#quiz-choices'); 
var timerElement = document.getElementById('timer'); 
var confirmEl = document.querySelector('#confirm');
var answerButtons = {
    Btn1: document.getElementById('Btn1'),
    Btn2: document.getElementById('Btn2'),
    Btn3: document.getElementById('Btn3'),
    Btn4: document.getElementById('Btn4'),

};

var secondsRemaining = 60; 
var pointsEarned = 0; 
var totalPointsEarned = 0;
var currentQuestionIndex = 0;


// Functions
function generatequestion() {
    var num = 0;
    quizElement.textContent = " "; 
    // removeAttribute('id', '') // get rid of this later
    if(currentQuestionIndex >= quizQuestions.length) {
        var h2Element = document.createElement('h2');
        h2Element.textContent = 'End of the game';
        quizElement.append();
        return;
    }
  
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var h2Element = document.createElement('h2'); 
    h2Element.textContent = currentQuestion.question; 
    quizElement.appendChild(h2Element);
    Object.values(answerButtons).forEach(val => {
        val.textContent = quizQuestions[currentQuestionIndex].answers[num];
        num++;
    });
}


// **Event Listeners**
startQuiz.addEventListener('click', () => {
    quizcountdown();
    generatequestion();
    startQuiz.style.display = 'none';
    var unhide = document.querySelector('.hide');
    unhide.classList.remove('hide');
});

quizIntro.addEventListener('click', ()=>{
    quizIntro.style.display = 'none';
})



Object.values(answerButtons).forEach(val => {
    val.addEventListener('click', (e) => {
        e.preventDefault();

        if(quizQuestions[currentQuestionIndex].answer == val.textContent){
            quizQuestions.splice(currentQuestionIndex,1);
            var results = document.getElementById('answer-results');
            results.textContent = 'Correct!';
            results.style.fontSize = '40px';
            results.style.textAlign = 'center';
            setTimeout(()=> {
                results.textContent = '';

            }, 1000); 
            pointsEarned = 1;
            console.log(pointsEarned);
            generatequestion();
            //Make either the btns hide immediately after all questions are answered
        }
        else{
            quizQuestions.splice(currentQuestionIndex,1);
            var results = document.getElementById('answer-results');
            results.textContent = 'Wrong!';
            results.style.fontSize = '40px';
            results.style.textAlign = 'center';
            setTimeout(()=> {
                results.textContent = '';
            

            }, 1000); 

            secondsRemaining -=10;

            generatequestion();
        }
    })
})



function quizcountdown() {
    var countDown = setInterval(function() {
        secondsRemaining--;
        if(secondsRemaining < 0) {
            clearInterval(countDown);
        } else {
            timerElement.textContent = 'Seconds Left: ' + secondsRemaining;
        }
       
    }, 1000);
}
