class Quiz {
  constructor(config) {
    this.questions = config.questions;
    this.questionsContainer = config.questionsContainer;
    this.resultContainer = config.resultContainer;
  }

  init() {
    this.resultContainer.innerHTML = "";
    this.displayQuestions();
  }

  displayQuestions() {
    let output = "";

    this.questions.forEach((question, index) => {
      output += `
      <div class="card border-primary mb-3">
      <div class="card-header">Q${index + 1}: ${question.title}</div>
      <div class="card-body">
        <div class="form-group user-answers">
        <span class="badge bg-success hide">Correct</span>
        <span class="badge bg-danger hide">Wrong</span>
          ${this.displayAnswers(question.answers, index)}
        </div>
      </div>
    </div>
      `;
    });

    this.questionsContainer.innerHTML = output;
  }

  displayAnswers(answers, questionNumber) {
    let output = "";

    for (let key in answers) {
      output += `<div class="custom-control custom-radio">
    <input
      class="custom-control-input"
      type="radio"
      name="a${questionNumber + 1}"
      id="a${questionNumber}${key}"
      value="${key}"
    />
    <label class="form-check-label" for="a${questionNumber}${key}">${
        answers[key]
      }</label>
    </div>`;
    }

    return output;
  }

  collectUserAnswers() {
    const userAnswers = document.querySelectorAll(".user-answers");
    let currentAnswer = "";
    let correctAnswers = 0;

    this.questions.forEach((question, index) => {
      if (!userAnswers[index].querySelector("input:checked")) return;
      currentAnswer = userAnswers[index].querySelector("input:checked").value;

      if (currentAnswer === question.correctAnswer) {
        ++correctAnswers;
        userAnswers[index].querySelector(".bg-danger").classList.add("hide");
        userAnswers[index]
          .querySelector(".bg-success")
          .classList.remove("hide");
      } else {
        userAnswers[index].querySelector(".bg-success").classList.add("hide");
        userAnswers[index].querySelector(".bg-danger").classList.remove("hide");
      }
    });

    return correctAnswers;
  }

  displayResults() {
    const correctAnswers = this.collectUserAnswers();
    const totalQuestions = this.questions.length;

    this.resultContainer.innerHTML = `<h1 style="text-align: center; color:#2196f3;">Your score is: ${correctAnswers} / ${totalQuestions}</h1>`;
  }
}

export default Quiz;
