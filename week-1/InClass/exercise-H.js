function multiplyByThree(number) {
  return number * 3;
}

// This function finds the correct answer to all your questions.
function findCorrectAnswer(question, numericData) {
  const result = multiplyByThree(numericData);
  return question + result;
}

console.log(findCorrectAnswer("What's my real age? ", 10));
console.log(findCorrectAnswer("How much money I have now? ", 0));
