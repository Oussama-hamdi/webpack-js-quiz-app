// Go Minute 01:00:10

import "../css/bootstrap.min.css";
import "../css/style.css";
import Quiz from "./quiz";
import Questions from "./questions";

const questionsClass = new Questions();
const quiz = new Quiz({
  questions: questionsClass.questions,
  questionsContainer: document.querySelector("#questions-container"),
});

console.log(questionsClass.questions);

document.querySelector("#start").addEventListener("click", () => {
  quiz.init();
});
