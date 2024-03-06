class Quiz {
  constructor(config) {
    this.questions = config.questions;
    this.questionsContainer = config.questionsContainer;
  }

  init() {
    console.log("Quiz Started", this.questions);
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
    const userAnswers = [];

    this.questions.forEach((question, index) => {
      const answer = this.questionsContainer.querySelector(
        `input[name="a${index + 1}"]:checked`
      ).value;

      userAnswers.push(answer);
    });

    console.log(userAnswers);
  }
}

export default Quiz;
