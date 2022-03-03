// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `I did have a test today. That wasn't bull. It's on European Socialism. I mean, really, what's the point? I'm not European, I don't plan on being European, so who gives a crap if they're socialist? They could be fascist anarchists - that still wouldn't change the fact that I don't own a car. Not that I condone fascism, or any -ism, for that matter. Isms, in my opinion, are not good. A person should not believe in an -ism - he should believe in himself. I quote John Lennon: "I don't believe in Beatles - I just believe in me." A good point there. Of course, he was the Walrus. I could be the Walrus - I'd still have to bum rides off of people.`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// WORD COUNTING FUNCTIONS

// long words
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

// short words
function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

// c words
function displayCWords() {
  const nameWordsElement = document.getElementById('c-words');
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(word.startsWith ('C') || word.startsWith ('c')) {
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       nameWordsElement.appendChild(wordElement);
    }
  }
}

// longest word
function displayLongestWord() {
  const longestWordElement = document.getElementById('longest-word');
  let longestWord = wordsArray[0];
  for (let i = 1; i < wordsArray.length; i++) {
    if(wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
   wordElement.innerText = longestWord;
   longestWordElement.appendChild(wordElement);}


// shortest word
function displayShortestWord() {
  const shortestWordElement = document.getElementById('shortest-word');
  let shortestWord = wordsArray[0];
  for (let i = 1; i < wordsArray.length; i++) {
    if(wordsArray[i].length < shortestWord.length) {
      shortestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
   wordElement.innerText = shortestWord;
   shortestWordElement.appendChild(wordElement);}

// every third word
function displayEveryThirdWord() {
  let everyThirdWordElement = document.getElementById('every-third-word');
  for(let i = 0; i < wordsArray.length; i +=3){
    const word = wordsArray[i];
    const wordElement = document.createElement('li');
     wordElement.innerText = word;
     everyThirdWordElement.appendChild(wordElement);
  }
}

// least common words
function displayLeastCommonWords() {
  let leastCommonWordsElement = document.getElementById('least-common-words');
  let commonWords = ['believe', 'european', 'point', 'could', 'still', 'ism', 'good', 'should', 'walrus', 'test', '-'];
  for(let word of wordsArray){
    if(!commonWords.includes(word)){
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       leastCommonWordsElement.appendChild(wordElement);
    }
  }
}

// CALL FUNCTIONS

function displaySpeechStats() {
	document.getElementById('speech').innerText = speech;
	displayLongWords();
	displayShortWords();
	displayLongestWord();
	displayShortestWord();
	displayEveryThirdWord();
	displayCWords();
	displayLeastCommonWords();
}