//Make a timed quiz on JavaScript fundamentals 
// make objects for quiz questions with answers
var quizQuestions = [
    {
        question: 'What is one way NOT to declare a variable?',
        answers: ['var', 'for', 'const', 'let'],
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


var startQuiz = document.querySelector('#start-quiz');
var quizElement = document.querySelector('#quiz-questions');  // Needed to add variables for the quiz questions/choices
var quizChoicesElement = document.querySelector('#quiz-choices');
var timerElement = document.getElementById('#timer');
var secondsRemaining = 10; //added this var so I can specify where to countdown from


// can make a variable to randomizd questions
var currentQuestionIndex = 0;


//make a function called generate question
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

    currentQuestionIndex++;
}

// NEED TO FINISH THIS FUNCTION
function checkAnswer(event) {
    // event.target shows what you are clicking on in the box
    if(quizQuestions[currentQuestionIndex].answer === event.target.textContent){
        var h2Element = document.createElement('h2');
        h2Element.textContent = 'Correct';
        quizChoicesElement.append(h2Element);  
    }
}

//Make start button with add event listener/check answer
startQuiz.addEventListener('click', generatequestion);
quizChoicesElement.addEventListener('click', checkAnswer)

//Add a timer function to start a time interval once the start button is clicked
function quizcountdown() {
    var countDown = setInterval(function() {
        secondsRemaining--;
        timerElement = secondsRemaining + "seconds remaining."; // cant fix bug to show the count down on the page

        if(secondsRemaining === 0) {
            clearInterval(countDown);
        }
        console.log(secondsRemaining);
    }, 1000);
}

// Make sure to run the function to see if it works
