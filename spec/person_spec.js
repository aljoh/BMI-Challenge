describe("Person", function() {
  var person;

  describe("metric bmi", function() {

    beforeEach(function() {
      person = new Person({weight: 90, height: 186});
    });

    it("should have weight of 90", function() {
      expect(person.weight).toEqual(90);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(186);
    });

    it("should calculate BMI value", function() {
      person.calculate_bmi();
      expect(person.bmiValue).toEqual(26.01);
    });

    it("should have a BMI message", function() {
      person.calculate_bmi();
      expect(person.bmiMessage).toEqual("Overweight");
    });
  });

  describe("imperial bmi", function() {

    beforeEach(function() {
      person = new Person({weight: 210, height: 74});
    });

    it("should have a weight of 210", function() {
      expect(person.weight).toEqual(210);
    });

    it("should have height of 74", function() {
      expect(person.height).toEqual(74);
    });

    it("should calculate BMI value", function() {
      person.calculate_imperial_bmi();
      expect(person.bmiValue).toEqual(26.96);
    });

    it("should have a BMI message", function() {
      person.calculate_imperial_bmi();
      expect(person.bmiMessage).toEqual("Overweight");
    });
  });
});
