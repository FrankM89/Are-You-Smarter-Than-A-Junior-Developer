// Variables for questions, answers, buttons, timer and scores
const startButton = document.getElementById("start_btn");
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
  if (currentQuestionIndex < questions.length - 1) {
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

// Displays a question and its answers on the page
function showQuestion(question) {
  // Sets the text conent of the question
  questionElement.innerText = question.question;
  // Loops through each answer of the question
  question.answers.forEach((answer) => {
    // Creates button element
    const button = document.createElement("button");
    // Sets the text content of the button to the answer text
    button.innerText = answer.text;
    // Adds the "btn" class to the button
    button.classList.add("btn");
    // If statement checks for the correct answer
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    setStatusClass(button, button.dataset.correct);
    // Adds click event listener to call the selectAnswer function
    button.addEventListener("click", selectAnswer);
    // Appends button to the answerButtonElement
    answerButtonElement.appendChild(button);
  });
}
// Resets the state of the quiz
function resetState() {
  // Clears status class from the body element
  clearStatusClass(document.body);
  // Add the "hide" class to the nextButton element
  nextButton.classList.add("hide");
  // Loops through and removes all the answer butttons from answerButtonElement
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
  // Sets canAnswer back to true
  canAnswer = true;
}


// Function handles the answer selection by the user
function selectAnswer(element) {
  // Gets the selected button element
  const selectedButton = element.target;
  // Gets the correct status from the selected button's "correct" data attribute
  const correct = selectedButton.dataset.correct;
  // Sets the status class on the body element based on whether the answer is correct or not
  setStatusClass(document.body, correct);
  // Checks if user can still answer
  if (canAnswer) {
    // If answer is correct
    if (selectedButton.dataset.correct) {
      // Increment score by 1
      highScore += 1;
      // Updates high score
      highScoreElement.textContent = highScore;
    } else {
      // Decreases timer by 5 seconds
      timer = Math.max(0, timer - 5);
      console.log(timer);
      // Decrement the score by 1
      highScore -= 1;
      // Updates highScoreElement with new high score
      highScoreElement.textContent = highScore;
    }
  }
  // Prevents user from answering same question again in same game
  canAnswer = false;
  console.log("click");
  // Checks for more questions to be displayed
  if (questions.length > currentQuestionIndex + 1) {
    // If the user can answer more questions, removed "hide" class from nextButton
    nextButton.classList.remove("hide");
  } else {
    // Calls end game function if there are no more questions to be answered
    endGame();
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element);
  // If the answer is correct, adds the "correct" class to the element
  if (correct) {
    element.classList.add("correct");
  } else {
    // If the answer is wrong, add the "wrong" class to the element
    element.classList.add("wrong");
  }
}

//  Removes status classes (correct and wrong) from an element
function clearStatusClass(element) {
  // Removes the "correct" class from the element
  element.classList.remove("correct");
  // Removes the "wrong" class from the element
  element.classList.remove("wrong");
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
      "Which event occurs when the user clicks on an HTML element?",
    answers: [
      {
        text: "onchange",
        correct: false,
      },
      {
        text: "onmouseclick",
        correct: false,
      },
      {
        text: "onclick",
        correct: true,
      },
      {
        text: "onmouseover",
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
