const express = require('express');
const app = express();

const questions = [
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
      },
      {
        question: "What is the capital of Washington state?",
        options: ["Seattle", "Olympia", "Spokane", "Tacoma"],
        answer: "Olympia"
      },
      {
        question: "Which famous tech company is headquartered in Redmond, Washington?",
        options: ["Google", "Apple", "Microsoft", "Amazon"],
        answer: "Microsoft"
      },
      {
        question: "Which national park is located in the state of Washington?",
        options: ["Yosemite", "Yellowstone", "Olympic", "Grand Canyon"],
        answer: "Olympic"
      },
      {
        question: "Which volcano erupted in Washington in 1980?",
        options: ["Mount Rainier", "Mount St. Helens", "Mount Adams", "Mount Baker"],
        answer: "Mount St. Helens"
      },
      {
        question: "What is the largest city in Washington state?",
        options: ["Seattle", "Tacoma", "Spokane", "Vancouver"],
        answer: "Seattle"
      },
      {
        question: "Which river forms part of the border between Washington and Oregon?",
        options: ["Columbia River", "Snake River", "Missouri River", "Colorado River"],
        answer: "Columbia River"
      }
];

let currentQuestion = 0;
let score = 0;

app.get('/', (req, res) => {
  const question = questions[currentQuestion];
  res.send(`
    <h1>Quiz Game</h1>
    <p>${question.question}</p>
    <form action="/answer" method="get">
      ${question.options.map(option => `<label><input type="radio" name="answer" value="${option}" required> ${option}</label><br>`).join('')}
      <button type="submit">Submit Answer</button>
    </form>
  `);
});

app.get('/answer', (req, res) => {
  const userAnswer = req.query.answer;
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    res.redirect('/');
  } else {
    res.send(`
      <h1>Quiz Game Over</h1>
      <p>Your score is: ${score} out of ${questions.length}</p>
      <a href="/">Play Again</a>
    `);

    currentQuestion = 0;
    score = 0;
  }
});

app.listen(3000);