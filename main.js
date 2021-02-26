const gif = document.getElementById('gif'); 
const intro = document.getElementById('intro');
const introText = document.getElementById('intro_text');;
const button = document.getElementById('start');
const btncontainer = document.getElementById('btn_container');
const quiz = document.getElementById('quiz');
const questionTitle = document.getElementById('question');
const answers = document.getElementById('answers');
const answerA = document.getElementById('answer_a');
const answerB = document.getElementById('answer_b');
const answerC = document.getElementById('answer_c');
const answerD = document.getElementById('answer_d');
const scoreDiv = document.getElementById('score');
const scoreText = document.getElementById('score_text');
const scoreValue = document.getElementById('score_value');

//declaring counter and score
let i = -1;
let score = 0;

loadQuestions = () => {
    introText.innerHTML = "";
    button.style.display = "none";
    quiz.style.display = "flex";
    scoreDiv.style.display = "flex";
    btncontainer.style.display = "none";
    intro.style.padding = '10px 40px';

    //calling the HTML elements of the questions
    nextQuestion();
};

nextQuestion = () => {
    // Increase counter
    i += 1;
    
    // Load question and answers
    const questionData = questionsArray[i];
    
    // Inject into HTML
    questionTitle.innerText = questionData.question;
    answerA.innerText = questionData.answers[0];
    answerB.innerText = questionData.answers[1];
    answerC.innerText = questionData.answers[2];
    answerD.innerText = questionData.answers[3];
    
}

//showing the score on the next screen
showScore = () => {
    answers.style.display = "none";
    scoreText.style.display = "flex";
    gif.style.display = "block";
    quiz.style.minHeight = "292px";
    if (score < 4) {
        questionTitle.innerText = "Off to a good start!";
        scoreText.innerText = "You got some work to do, but remember: fail fast! Keep studying and don't give up!";
        gif.setAttribute('src', './gifs/notbad.gif');
    } else if (score < 7) {
        questionTitle.innerText = "Keep trying!";
        scoreText.innerText = "You're already doing good! Keep it up and you'll beat the quiz in no time :)";
        gif.setAttribute('src', './gifs/keepgoing.gif');
    } else {
        questionTitle.innerText = "Amazing!";
        scoreText.innerText = "You nailed it! Congratulations!";
        gif.setAttribute('src', './gifs/great.gif');
    }
}

registerAnswer = answerNumber => {
    //making sure it doesn't break on the first question
    if (i <= -1) return;
    // comparing current answer and valid answer
    if (questionsArray[i].correctAnswer === answerNumber) {
        score += 1;
    }
    scoreValue.innerText = `Score: ${score}`
    
    //making sure it doesn't break on the last question and keeps calling nextQuestion when the whole array has been displayed
    if (i === 9) { 
        showScore();
        return
    }
    //calling the next question
    nextQuestion();
}

button.addEventListener('click', loadQuestions);