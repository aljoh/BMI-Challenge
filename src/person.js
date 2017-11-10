function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  calculator = new BMICalculator();
}

Person.prototype.calculate_bmi = function() {
  calculator.metric_bmi(this);
};

Person.prototype.calculate_imperial_bmi = function() {
  calculator.imperial_bmi(this);
};
