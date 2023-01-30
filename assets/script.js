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
