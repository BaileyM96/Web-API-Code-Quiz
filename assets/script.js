
var quizQuestions = [
    {
        question: 'What is one way NOT to declare a variable?',
        answers: ['var', 'for', 'const', "let"], // fix bug to show all four answers
        answer: 'for'
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
    }
]


var startQuiz = document.querySelector('#start-quiz'); // *** Start Button ***//
var quizElement = document.querySelector('#quiz-questions'); // Quiz questions
var quizChoicesElement = document.querySelector('#quiz-choices'); //Quiz choices
var timerElement = document.getElementById('timer');
var secondsRemaining = 60; 
var confirmEl = document.querySelector('#confirm');


var currentQuestionIndex = 0;



function generatequestion() {
    quizElement.innerHTML = " "; 
    quizChoicesElement.innerHTML = " "; 
    if(currentQuestionIndex >= quizQuestions.length) {
        var h2Element = document.createElement('h2');
        h2Element.textContent = 'End of the game';
        quizElement.append(h2Element);
        return;
    }
  
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var h2Element = document.createElement('h2'); //created a new var that creates a new element for h2
    h2Element.textContent = currentQuestion.question; //the .question is to select the first question out of the array
    quizElement.append(h2Element);

    for (var i = 0; i < currentQuestion.answer.length; i++) {
        var liElement = document.createElement('li'); //creates a list element
        liElement.textContent = currentQuestion.answers[i];
        quizChoicesElement.append(liElement); 
    }

    
}


function checkAnswer(event) {
    if(quizQuestions[currentQuestionIndex].answer == event.target.innerText){
        console.log()
        confirmEl.textContent = ' ';
        h2Element.textContent = 'Correct';
        
    } else {
        confirmEl.textContent = ' ';
        h2Element.textContent = 'Incorrect';  //uncaught
    }
    currentQuestionIndex++;
    generatequestion();
}



startQuiz.addEventListener('click', generatequestion);
quizChoicesElement.addEventListener('click', checkAnswer);


function quizcountdown() {
    var countDown = setInterval(function() {
        secondsRemaining--;

        if(secondsRemaining === 0) {
            clearInterval(countDown);
        } else {
            timerElement.textContent = 'Seconds Left: ' + secondsRemaining;
        }
        console.log(secondsRemaining);
    }, 1000);
}

quizcountdown();
