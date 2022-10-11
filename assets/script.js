
var quizQuestions = [
    {
        question: 'What is one way NOT to declare a variable?',
        answers: ['var', 'set', 'const', "let"], // fix bug to show all four answers
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
    }
]


var startQuiz = document.querySelector('#start-quiz'); 
startQuiz.setAttribute('class', 'hide');
var quizElement = document.querySelector('#quiz-questions'); // Quiz questions
var quizChoicesElement = document.querySelector('#quiz-choices'); //Quiz choices
var timerElement = document.getElementById('timer'); //timer
var confirmEl = document.querySelector('#confirm');
var answerButtons = {
    Btn1: document.getElementById('Btn1'),
    Btn2: document.getElementById('Btn2'),
    Btn3: document.getElementById('Btn3'),
    Btn4: document.getElementById('Btn4'),
};

var secondsRemaining = 60; 


var currentQuestionIndex = 0;



function generatequestion() {
    var num = 0;
    quizElement.textContent = " "; 
    // quizChoicesElement.innerHTML = "response "; 
    if(currentQuestionIndex >= quizQuestions.length) {
        var h2Element = document.createElement('h2');
        h2Element.textContent = 'End of the game';
        quizElement.append();
        return;
    }
  
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var h2Element = document.createElement('h2'); //created a new var that creates a new element for h2
    h2Element.textContent = currentQuestion.question; //the .question is to select the first question out of the array
    quizElement.appendChild(h2Element);
    Object.values(answerButtons).forEach(val => {
        val.textContent = quizQuestions[currentQuestionIndex].answers[num];
        num++;
    });
    // for (var i = 0; i < currentQuestion.answer.length; i++) {
        
    //     var choiceNode = document.createElement("button");
    //     choiceNode.setAttribute("class", "choice");
    //     choiceNode.setAttribute("value", currentQuestion.answers[i]);
    
    //     choiceNode.textContent = i + 1 + ". " +  currentQuestion.answers[i];
    
    //     // attach click event listener to each choice
    //     choiceNode.onclick = checkAnswer;
        
    //     // display on the page
    //     quizChoicesElement.appendChild(choiceNode); 
    // }
    
}


function checkAnswer() {
    if (this.value !== quizQuestions[currentQuestionIndex].answer){
        confirmEl.textContent = ' ';
        confirmEl.textContent = 'Correct';
        
    } else {
        confirmEl.textContent = ' ';
        confirmEl.textContent = 'Incorrect';  //uncaught
    }
    currentQuestionIndex++;
    generatequestion();
}



startQuiz.addEventListener('click', () => {
    quizcountdown();
    generatequestion();
});

quizChoicesElement.addEventListener('click', checkAnswer);

// New function for buttons 
Object.values(answerButtons).forEach(val => {
    val.addEventListener('click', (e) => {
        e.preventDefault();

        if(quizQuestions[currentQuestionIndex].answer == val.textContent){
            quizQuestions.splice(currentQuestionIndex,1);

            generatequestion();

        }
        else{
            quizQuestions.splice(currentQuestionIndex,1);

            secondsRemaining -=5;

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


