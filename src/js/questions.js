const questions = [
  {
    title: "What is 2 + 2?",
    answers: {
      a: "3",
      b: "4",
      c: "5",
    },
    correctAnswer: "b",
  },
  {
    title: "What is 10 + 10?",
    answers: {
      a: "20",
      b: "30",
      c: "40",
      d: "50",
    },
    correctAnswer: "a",
  },
];

class Questions {
  constructor() {
    this.questions = questions;
  }
}

export default Questions;
