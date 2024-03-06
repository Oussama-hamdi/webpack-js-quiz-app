// Go Minute 01:12:00

import "../css/bootstrap.min.css";
import "../css/style.css";
import Quiz from "./quiz";
import Questions from "./questions";

const questionsClass = new Questions();
const quiz = new Quiz({
  questions: questionsClass.questions,
  questionsContainer: document.querySelector("#questions-container"),
});

const submitButton = document.querySelector("#submit");

document.querySelector("#start").addEventListener("click", (e) => {
  quiz.init();
  e.target.classList.add("hide");
  submitButton.classList.remove("hide");
});

submitButton.addEventListener("click", () => {
  quiz.collectUserAnswers();
});
