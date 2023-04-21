/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// Variables
const fullDayRate = 35;
const halfDayRate = 20;
let selectedDays = [];
let selectedDayElements = document.querySelectorAll('.day-selector li');
let fullButton = document.getElementById('full');
let halfButton = document.getElementById('half');
let clearButton = document.getElementById('clear-button');
let calculatedCost = document.getElementById('calculated-cost');
  
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function toggleDaySelection(event) {
  let clickedDay = event.target;
  if (!selectedDays.includes(clickedDay.id)) {
    selectedDays.push(clickedDay.id);
    clickedDay.classList.add('clicked');
  } else {
    let dayIndex = selectedDays.indexOf(clickedDay.id);
    selectedDays.splice(dayIndex, 1);
    clickedDay.classList.remove('clicked');
  }
  calculateCost();
}

selectedDayElements.forEach(function(dayElement) {
  dayElement.addEventListener('click', toggleDaySelection);
});

  

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
// Clear days
clearButton.addEventListener('click', function() {
    selectedDays = [];
    selectedDayElements.forEach(function(dayElement) {
      dayElement.classList.remove('clicked');
    });
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateCost();
});
  
  
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function setRate(rateType) {
  if (rateType === 'half') {
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
  } else {
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
  }
  calculateCost();
}

fullButton.addEventListener('click', function() {
  setRate('full');
});

halfButton.addEventListener('click', function() {
  setRate('half');
});
  
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
// Calculate total cost
function calculateCost() {
  let dayCount = selectedDays.length;
  let rate = fullButton.classList.contains('clicked') ? fullDayRate : halfDayRate;
  let totalCost = dayCount * rate;
  calculatedCost.innerHTML = totalCost;
}