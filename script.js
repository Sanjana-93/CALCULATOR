// Appends the clicked button's value to the display
function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  // Clears the display
  function clearDisplay() {
    document.getElementById("result").value = '';
  }
  
  // Calculates the result of the entered expression
  function calculate() {
    try {
      let result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (e) {
      document.getElementById("result").value = "Error!";
    }
  }
  