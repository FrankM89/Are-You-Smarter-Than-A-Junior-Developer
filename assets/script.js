// Variables for questions, answers, buttons, timer and scores
const startButton = document.getElementbyId("start_btn");
const nextButton = document.getElementById("next_btn");
const questionContainerElement = document.getElementById("question_container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer_buttons");
const timerElement = document.getElementById("timer");
const saveScoreElement = document.getElementById("save_score");
const saveScoreButton = document.getElementById("save_score_btn");
const initialsInput = document.getElementById("initials");
let shuffledQuestions;
let currentQuestionIndex = 0;
let time = 60;
let timer = time;
let highScore = 0;
let lostTime = -5;
const highScoreElement = document.getElementById("highscore");
highScoreElement.textContent = highScore;
let canAnswer = true;
let timerInterval = null;




// Function ends game, restarts game timer and saves score
function endGame(timeUp = false) {
  // Clear the timer interval to stop the timer
  clearInterval(timerInterval);
  // Sets text content of the timer element to display 0 seconds
  timerElement.textContent = `Time left: 0 seconds`;
  // Changes start button to 'Restart' button
  startButton.textContent = "Restart";
  // Hides question container
  questionContainerElement.classList.add("hide");
  // Hides next button after end game
  nextButton.classList.add("hide");
  // Shows start button after game ends to replay
  startButton.classList.remove("hide");
  // Resets question index to =
  currentQuestionIndex = 0;
  // Resets canAnswer flag to true
  canAnswer = true;
  // Game over alert (time up)
  alert(`${timeUp ? "Time Up! " : ""} Game Over! Your score is: ${highScore}`);
  // Shows save score element
  saveScoreElement.classList.remove("hide");
  // click event listener to save score button
  saveScoreButton.onclick = () => {
    // Saves information to local storage
    localStorage.setItem(
      "highschore",
      `highScore : ${highScore} initials : ${initialsInput.value}`
    );
  };
  return false;
}

// Function to start game by initializing variables
function startGame() {
  // Sets timer to specified time (60 seconds)
  timer = time;
  // Makes timer visible
  timerElement.classList.remove("hide");
  // Hides start button
  startButton.classList.add("hide");
  // Displays time left
  timerElement.textContent = `Time left: ${timer} seconds`;
  // Resets high score to 0
  highScore = 0;
  highScoreElement.textContent = highScore;
  // Shuffles questions array
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  // Shows question
  questionContainerElement.classList.remove("hide");

  // Function for game timer
  function updateTimer() {
    timer--;
    // Ends game when timer is up
    if (timer < 1) {
      endGame(true);
    }
    console.log(timer);
    timerElement.textContent = `Time left: ${timer} seconds`;
  }
  // Sets timer intervals for 1000 milliseconds (1 second)
  timerInterval = setInterval(updateTimer, 1000);
  setNextQuestion();
}
// Listens for click to start game or go to next question
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  // If the current question is not the last question
  if (currentQuestionIndex < questions.length -1) {
    // Increment the current question index
    currentQuestionIndex++;
    // Logs current question index
    console.log(currentQuestionIndex);
    // Sets next question
    setNextQuestion();    
  } else {
    // Ends game after last question in queston index is answered
    endGame();
  }
});

// Function resets state and displays next question in shuffledQuestions array
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}










// Questions and answers array
const questions = [
  {
    question: "Inside which element do you put JavaScript?",
    answers: [
      {
        text: "<javscript>",
        correct: false,
      },
      {
        text: "<java>",
        correct: false,
      },
      {
        text: "<script>",
        correct: true,
      },
      {
        text: "<jsgoeshere>",
        correct: false,
      },
    ],
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      {
        text: "var colors = ('1:red', '2:yellow', '3:purple')",
        correct: false,
      },
      {
        text: "var color = {'blue, red, white'}",
        correct: false,
      },
      {
        text: "var colors = ['red', 'green', 'blue']",
        correct: true,
      },
      {
        text: "var colors = 'orange', 'pink', 'grey'",
        correct: false,
      },
    ],
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      {
        text: "for i = 1 to 5",
        correct: false,
      },
      {
        text: "for (i = 0; i <= 5)",
        correct: false,
      },
      {
        text: "for (i = 0; i <= 5; i++)",
        correct: true,
      },
      {
        text: "for (i = 0; i <= 5) ",
        correct: false,
      },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      {
        text: "With a cellphone",
        correct: false,
      },
      {
        text: "With email",
        correct: false,
      },
      {
        text: "function myFunction()",
        correct: true,
      },
      {
        text: "Yell the function's name until it answers",
        correct: false,
      },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      {
        text: "msgBox('Hello World');",
        correct: false,
      },
      {
        text: "msg('Hellow World');",
        correct: false,
      },
      {
        text: "alert('Hello World');",
        correct: true,
      },
      {
        text: "[Hello World]",
        correct: false,
      },
    ],
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      {
        text: "v varName",
        correct: false,
      },
      {
        text: "I declare varName",
        correct: false,
      },
      {
        text: "var varName;",
        correct: true,
      },
      {
        text: "varName = declared",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?" <
      br >
      "<p id='demo'>This is a demonstration.</p>",
    answers: [
      {
        text: "#demo.innerHTML = 'Hello World!;",
        correct: false,
      },
      {
        text: "document.getElementByName('p').innerHTML = 'Hello World!';",
        correct: false,
      },
      {
        text: "document.getElementById('demo').innerHTML = 'Hello World!';",
        correct: true,
      },
      {
        text: "document.getElement('p').innerHTML = 'Hello World!';",
        correct: false,
      },
    ],
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      {
        text: "<!-- This is a comment -->",
        correct: false,
      },
      {
        text: "/* This is a comment */",
        correct: false,
      },
      {
        text: "//This is a comment",
        correct: true,
      },
      {
        text: "== This is a comment ==",
        correct: false,
      },
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      {
        text: "<head>",
        correct: false,
      },
      {
        text: "<p>",
        correct: false,
      },
      {
        text: "Both the <head> section and the <body> section are correct",
        correct: true,
      },
      {
        text: "<body>",
        correct: false,
      },
    ],
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: [
      {
        text: "findHighestValue(x, y)",
        correct: false,
      },
      {
        text: "Math.ceil(x, y)",
        correct: false,
      },
      {
        text: "Math.max(x, y)",
        correct: true,
      },
      {
        text: "biggestNumber(x, y)",
        correct: false,
      },
    ],
  },
];
