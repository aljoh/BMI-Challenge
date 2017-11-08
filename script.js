$(document).ready(function() {
  $('#calculate').click(function() {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var person = new Person({
      weight: w,
      height: h
    });
    if ($('#imperial').is(":checked")) {
      person.calculate_imperial_bmi();
    } else {
      person.calculate_bmi();
    }
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are ' + person.bmiMessage);
  });
});
