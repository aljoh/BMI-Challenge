function BMICalculator() {}

BMICalculator.prototype.metric_bmi = function(obj, system) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    if(system == "metric") {
      finalBmi = weight / (height / 100 * height / 100);
  } else if(system == "imperial") {
      finalBmi = (weight * 703) / (height * height);
    }
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

function setBMIMessage(obj) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = i18n("Underweight");
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = i18n("Normal");
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = i18n("Overweight");
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = i18n("Obese");
  }
}
