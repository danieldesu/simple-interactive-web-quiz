const correctAnswers = ["B", "A", "A", "B"];

const form = document.querySelector(".quiz-form");
const resultShowCase = document.querySelector(".result");
const startText = document.getElementById("start-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  resultShowCase.classList.remove("d-none");
  startText.classList.add("d-none");
  scrollTo(0, 0);

  let output = 0;
  const timer = setInterval(() => {
    resultShowCase.querySelector(".score-display").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 8);
});
