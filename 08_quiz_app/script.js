document.addEventListener('DOMContentLoaded', () => { 
    const startBtn = document.querySelector('.start-btn');
    const quizContainer = document.querySelector('.quiz-container');
    const questionEl = document.querySelector('.question');
    const optionsEl = document.querySelector('.options');
    const nextBtn = document.querySelector('.next-btn');
    const submitBtn = document.querySelector('.submit-btn');
    const resultsEl = document.querySelector('.results');
    let currentQuestionIndex = 0;
    let score = 0;
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],  
            answer: "4"
        },
        {   
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee"
        }
    ]; 
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', loadNextQuestion);
    submitBtn.addEventListener('click', showResults);
    function startQuiz() {
        // Reset all values
        currentQuestionIndex = 0;
        score = 0;
        startBtn.classList.add('hidden');
        startBtn.textContent = 'Start Quiz';
        quizContainer.classList.remove('hidden');
        submitBtn.classList.remove('hidden');
        resultsEl.classList.add('hidden');
        nextBtn.disabled = false;
        nextBtn.style.backgroundColor = '';
        loadQuestion();
    }
    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        optionsEl.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.textContent = option;
            optionBtn.classList.add('option-btn');  
            optionBtn.addEventListener('click', () => optionSelection(option, optionBtn));
            optionsEl.appendChild(optionBtn);
        });
    }
    function optionSelection(selectedOption, buttonElement) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            score++;
        }
        buttonElement.style.backgroundColor = selectedOption === currentQuestion.answer ? 'green' : 'red'; 
        Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
    }
    function loadNextQuestion() {
        currentQuestionIndex++; 
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            nextBtn.disabled = true;
            nextBtn.style.backgroundColor = 'gray';
           return;
        }
    }
        
    function showResults() {
        quizContainer.classList.add('hidden');
        submitBtn.classList.add('hidden');
        startBtn.classList.remove('hidden');
        startBtn.textContent = 'Restart Quiz';
        resultsEl.classList.remove('hidden');
        resultsEl.classList.add('results');
        resultsEl.textContent = `Your score is ${score} out of ${quizData.length}`;
    }

    });   