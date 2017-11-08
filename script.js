function calcFunction() {
  var w = parseFloat(document.getElementById("weight").value);
  var h = parseFloat(document.getElementById("height").value);
  var person = new Person({
    weight: w,
    height: h
  });
  if (document.getElementById("imperial").checked) {
    person.calculate_imperial_bmi();
  } else {
    person.calculate_bmi();
  }
  document.getElementById("display_value").innerHTML = ('Your BMI is ' + person.bmiValue);
  document.getElementById("display_message").innerHTML = ('and you are ' + person.bmiMessage);
}
