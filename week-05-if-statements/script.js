// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'marty mcfly') {
    alert("Correct, next question (1/6 complete)");
    hide('question-one');
    show('question-two');
  } else if(answerOne == '') {
    alert('Close, but my favorite animal runs away from dogs.');
  } else {
    alert('This is incorrect')
  }
}


function submitAnswerTwo() {
  const answerTwoInput = document.getElementById('answer-two-input');
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'delorean') {
    alert("Correct, next question (2/6 complete)");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'deLorean') {
    alert('Close, check the spelling');
  } else {
    alert('This is incorrect')
  }
}

function submitAnswerThree() {
  const answerThreeInput = document.getElementById('answer-three-input');
  const answerThree = answerThreeInput.value;

  if(answerThree == 'delorean') {
    alert("Correct, next question (3/6 complete)");
    hide('question-two');
    show('question-four');
  } else if(answerThree == 'deLorean') {
    alert('Close, check the spelling');
  } else {
    alert('This is incorrect')
  }
}



show('done');


// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}