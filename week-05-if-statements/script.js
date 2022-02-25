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

  if(answerThree == '1955') {
    alert("Correct, next question (3/6 complete)");
    hide('question-three');
    show('question-four');
  } else if(answerThree == '1985') {
    alert('Incorrect, that is where they came from silly goose');
  } else {
    alert('This is incorrect')
  }
}

function submitAnswerFour() {
  const answerFourInput = document.getElementById('answer-four-input');
  const answerFour = answerFourInput.value;

  if(answerFour == 'enchantment under the sea dance') {
    alert("Correct, next question (4/6 complete)");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'enchantment under the sea') {
    alert('Check spelling, and the answer is 5 words total');
  } else {
    alert('This is incorrect')
  }
}

function submitAnswerFive() {
  const answerFiveInput = document.getElementById('answer-five-input');
  const answerFive = answerFiveInput.value;

  if(answerFive == 'hill valley') {
    alert("Correct, next question (5/6 complete)");
    hide('question-five');
    show('question-six');
  } else if(answerFive == 'hillvalley') {
    alert('Check spelling or check for spaces');
  } else {
    alert('This is incorrect')
  }
}

function submitAnswerSix() {
  const answerSixInput = document.getElementById('answer-six-input');
  const answerSix = answerSixInput.value;

  if(answerSix == 'einstein') {
    alert("Correct, next question (6/6 complete)");
    hide('question-six');
    show('done');
  } else if(answerSix == 'einstien') {
    alert('This is incorrect, check spelling');
  } else {
    alert('This is incorrect')
  }
}

function displayQuestionOne() {
	const answerOneInput = document.getElementById('answer-one-input');
	show(`question-one`);
	hide(`question-two`)
}

function displayQuestionTwo() {
	const answerTwoInput = document.getElementById('answer-two-input');
	show(`question-two`);
	hide(`question-three`)
}

function displayQuestionThree() {
	const answerThreeInput = document.getElementById('answer-three-input');
	show(`question-three`);
	hide(`question-four`)
}

function displayQuestionFour() {
	const answerFourInput = document.getElementById('answer-four-input');
	show(`question-four`);
	hide(`question-five`)
}

function displayQuestionFive() {
	const answerFiveInput = document.getElementById('answer-five-input');
	show(`question-five`);
	hide(`question-six`)
}

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