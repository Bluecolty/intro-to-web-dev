function fillOutputs() {

  // Input 1
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  const adjectiveOne = adjectiveOneInput.value;

  // Output 1
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  adjectiveOneOutput.innerText = adjectiveOne;

	
  // Input 2
  const adjectiveTwoInput = document.getElementById('adjective-two-input');
  const adjectiveTwo = adjectiveTwoInput.value;

  // Output 2
  const adjectiveTwoOutput = document.getElementById('adjective-two-output');
  adjectiveTwoOutput.innerText = adjectiveTwo;
	
	
  // Input 3
  const adjectiveThreeInput = document.getElementById('adjective-three-input');
  const adjectiveThree = adjectiveThreeInput.value;

  // Output 3
  const adjectiveThreeOutput = document.getElementById('adjective-three-output');
  adjectiveThreeOutput.innerText = adjectiveThree;
	
	
  // Input 4
  const adjectiveFourInput = document.getElementById('adjective-four-input');
  const adjectiveFour = adjectiveFourInput.value;

  // Output 4
  const adjectiveFourOutput = document.getElementById('adjective-four-output');
  adjectiveFourOutput.innerText = adjectiveFour;
	
	
  // Input 5
  const adjectiveFiveInput = document.getElementById('adjective-five-input');
  const adjectiveFive = adjectiveFiveInput.value;

  // Output 5
  const adjectiveFiveOutput = document.getElementById('adjective-five-output');
  adjectiveFiveOutput.innerText = adjectiveFive;
	
	
  // Input 6
  const adjectiveSixInput = document.getElementById('adjective-six-input');
  const adjectiveSix = adjectiveSixInput.value;

  // Output 6
  const adjectiveSixOutput = document.getElementById('adjective-six-output');
  adjectiveSixOutput.innerText = adjectiveSix;
	
	
  // Input 7
  const adjectiveSevenInput = document.getElementById('adjective-seven-input');
  const adjectiveSeven = adjectiveSevenInput.value;

  // Output 7
  const adjectiveSevenOutput = document.getElementById('adjective-seven-output');
  adjectiveSevenOutput.innerText = adjectiveSeven;
	
	
  // Input 8
  const adjectiveEightInput = document.getElementById('adjective-eight-input');
  const adjectiveEight = adjectiveEightInput.value;

  // Output 8
  const adjectiveEightOutput = document.getElementById('adjective-eight-output');
  adjectiveEightOutput.innerText = adjectiveEight;
	
	
  // Input 9
  const adjectiveNineInput = document.getElementById('adjective-nine-input');
  const adjectiveNine = adjectiveNineInput.value;

  // Output 9
  const adjectiveNineOutput = document.getElementById('adjective-nine-output');
  adjectiveNineOutput.innerText = adjectiveNine;
	

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}

function deleteOutputs() {
	const adjectiveOneInput = document.getElementById('adjective-one-input');
	adjectiveOneInput.value = '';
	const adjectiveTwoInput = document.getElementById('adjective-two-input');
	adjectiveTwoInput.value = '';
	const adjectiveThreeInput = document.getElementById('adjective-three-input');
	adjectiveThreeInput.value = '';
}


