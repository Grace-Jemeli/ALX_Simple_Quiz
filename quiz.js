function checkAnswer() {
  // Step 1: Define the correct answer
  const correctAnswer = "4";

  // Step 2: Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Step 3: Handle case where no option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 4: Compare answers and give feedback
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Step 5: Attach the event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
