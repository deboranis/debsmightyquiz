// import questionsArray from './qa';

const btncontainer = document.getElementsByClassName('.btn_container');
const button = document.getElementById('start');
const introText = document.getElementById('intro_text');;
const quiz = document.getElementById('quiz');

let i = -1;

loadQuestions = () => {
    introText.innerHTML = "";
    button.style.display = "none";
    quiz.style.display = "flex";

    nextQuestion();
};

nextQuestion = () => {
    // Increase counter
    i += 1;
    
    // Load question and answers
    const questionData = questionsArray[i];
    
    // Inject into HTML
    document.getElementById('question').innerText = questionData.question;
    document.getElementById('answer_a').innerText = questionData.answers[0];
    document.getElementById('answer_b').innerText = questionData.answers[1];
    document.getElementById('answer_c').innerText = questionData.answers[2];
    document.getElementById('answer_d').innerText = questionData.answers[3];
    console.log('oi')
}


button.addEventListener('click', loadQuestions);