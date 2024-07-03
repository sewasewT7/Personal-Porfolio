const display = document.calc.display;
function clearDisplay() {
  display.value = '';
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
const buttons = document.getElementsByClassName('calculator')[0].getElementsByTagName('input');
    if (value === 'Ac') {
      display.value = '';
    } 
    function deleteLast() {
      display.value = display.value.slice(0, -1);
    }
    function calculateResult() {
      try {
        // Evaluate the expression and update the display
        display.value = eval(display.value);
      } catch (e) {
        // Display an error message if evaluation fails
        display.value = 'Error';
      }
    }
