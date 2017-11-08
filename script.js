$(document).ready(function() {
  loadLocale = function(code) {
    var locale = code || 'en';
    $.ajax(`src/locales/${locale}.json`).done(function(text){
      data = JSON.parse(text);
      applyTranslation(data);
    });
  };
  $('#english').addClass('disabled');
  loadLocale();
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

  getLocaleCode = function(id) {
    switch (id) {
      case 'swedish':
        loadLocale('sv');
        break;
      case 'english':
        loadLocale('en');
        break;
    }
  };

  applyTranslation = function(data) {
    i18n.translator.add(data);
    $('h3').html(i18n('app_name'))
    $('#calculate').html(i18n('calculate'));
    $("#weight").attr("placeholder", i18n('weight'));
    $("#height").attr("placeholder", i18n('height'));
    $("#swedish").html(i18n('swedish'));
    $("#english").html(i18n('english'));
return;
  };
});
