// Array of objects representing a todo list.
// Modify this array to contain your own list.
const taskArray = [
	{game: 'BeamNG.drive', cost: 25, rating: 1},
	{game: 'Portal 2', cost: 10, rating: 2},
	{game: 'Teardown', cost: 20, rating: 3},
	{game: 'Satisfactory', cost: 30, rating: 4},
	{game: 'Microsoft Flight Simulator', cost: 60, rating: 5},
	{game: 'Portal', cost: 10, rating: 6},
	{game: 'Cities Skylines', cost: 30, rating: 7},
	{game: 'Farming Simulator 2019', cost: 30, rating: 8},
	{game: 'Forza Horizon 5', cost: 60, rating: 9},
	{game: 'Wreckfest', cost: 30, rating: 10},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  taskArray.sort((a, b) => compare(a.label, b.label));

  loadTable();
  loadShortestTask();
  loadAverage();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
	const newTaskGame = document.getElementById('game-input').value;
	const newTaskCost = document.getElementById('cost-input').value;
	const newTaskRating = document.getElementById('rating-input').value;
	const newTask = {game: newTaskGame, cost: newTaskCost, rating: newTaskRating };
	taskArray.push(newTask);

	loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
	headerRowElement.appendChild(createElement('th', 'Index'));
	headerRowElement.appendChild(createElement('th', 'Steam Game Name'));
	headerRowElement.appendChild(createElement('th', 'Cost of Game'));
	headerRowElement.appendChild(createElement('th', 'Coltons Rating'));
	tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', task.game));
    rowElement.appendChild(createElement('td', task.cost));
	rowElement.appendChild(createElement('td', task.rating));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestTask(){
  // Assume the first task is shortest
  let shortestTask = taskArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.cost < shortestTask.cost) {
      shortestTask = task;
    }
  }
  document.getElementById('cheapest-cost').innerText = cheapestCost.cost;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}

function loadAverage (){
  let total = 0;
 for(let i = 0; i < taskArray.cost; i++){
    console.log (total)
   const task = taskArray[i];
    total += Number(task.cost);

 }
  let average = total / taskArray.cost;
  console.log (average);
  document.getElementById('average-cost').innerText = average
  }