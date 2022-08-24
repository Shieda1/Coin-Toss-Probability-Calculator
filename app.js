// https://calculator.swiftutors.com/coin-toss-probability-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const probabilityRadio = document.getElementById('probabilityRadio');
const numberofExpectedOutcomesRadio = document.getElementById('numberofExpectedOutcomesRadio');
const totalNumberofOutcomesRadio = document.getElementById('totalNumberofOutcomesRadio');

let probability;
let numberofExpectedOutcomes = v1;
let totalNumberofOutcomes = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

probabilityRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of Expected Outcomes';
  variable2.textContent = 'Total Number of Outcomes';
  numberofExpectedOutcomes = v1;
  totalNumberofOutcomes = v2;
  result.textContent = '';
});

numberofExpectedOutcomesRadio.addEventListener('click', function() {
  variable1.textContent = 'Probability';
  variable2.textContent = 'Total Number of Outcomes';
  probability = v1;
  totalNumberofOutcomes = v2;
  result.textContent = '';
});

totalNumberofOutcomesRadio.addEventListener('click', function() {
  variable1.textContent = 'Probability';
  variable2.textContent = 'Number of Expected Outcomes';
  probability = v1;
  numberofExpectedOutcomes = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(probabilityRadio.checked)
    result.textContent = `Probability = ${computeProbability().toFixed(2)}`;

  else if(numberofExpectedOutcomesRadio.checked)
    result.textContent = `Number of Expected Outcomes = ${computeNumberofExpectedOutcomes().toFixed(2)}`;

  else if(totalNumberofOutcomesRadio.checked)
    result.textContent = `Total Number of Outcomes = ${computeTotalNumberofOutcomes().toFixed(2)}`;
})

// calculation

function computeProbability() {
  return Number(numberofExpectedOutcomes.value) / Number(totalNumberofOutcomes.value);
}

function computeNumberofExpectedOutcomes() {
  return Number(probability.value) * Number(totalNumberofOutcomes.value);
}

function computeTotalNumberofOutcomes() {
  return Number(numberofExpectedOutcomes.value) / Number(probability.value);
}