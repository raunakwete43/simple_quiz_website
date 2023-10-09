const questions = [
    {
      question: "How many bytes can a 32-bit-word computer access at one time?",
      answers: [
        { text: "1", correct: false },
        { text: "4", correct: true },
        { text: "8", correct: false },
        { text: "16", correct: false },
      ],
    },
    {
      question: "Computers can only recognize this type of electronic signals",
      answers: [
        { text: "analog", correct: false },
        { text: "bus", correct: false },
        { text: "digital", correct: true },
        { text: "maximum", correct: false },
      ],
    },
    {
      question: "Which physical material holds the data and program?",
      answers: [
        { text: "primary storage", correct: false },
        { text: "media", correct: true },
        { text: "capacity", correct: false },
        { text: "access", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedButton.textContent === currentQuestion.answers.find((ans) => ans.correct).text) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
    resetState();
  }
  
  startQuiz();
  