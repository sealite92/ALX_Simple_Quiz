const submitButton = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

function checkAnswer() {
  const correctAnswer = "4";
  const selectedRadionButton = document.querySelector(
    'input[name="quiz"]:checked'
  );

  const userAnswer = selectedRadionButton ? selectedRadionButton.value : null;
  console.log(selectedRadionButton.value);
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

submitButton.addEventListener("click", checkAnswer);
