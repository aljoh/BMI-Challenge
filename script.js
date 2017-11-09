var onReady = function() {
  loadLocale().done(function() {
  $('.container').fadeIn(1000);
  $("#english").addClass("active");
  $('button').click(function(event) {
    getLocaleCode(this.id);
    $(event.target).addClass("active").siblings().removeClass("active");
  });
  $('#calculate').click(function() {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var person = new Person({
      weight: w,
      height: h
    });
    if ($('#imperial').is(":checked")) {
      person.calculate_bmi();
    } else {
      person.calculate_imperial_bmi();
    }
    $('#display_value').html(i18n("bmi_message_prefix") + person.bmiValue);
    $('#display_message').html(i18n("bmi_message_results") + person.bmiMessage);
    $('.result').slideDown(500);
  });
});
};

loadLocale = function(code) {
  var deferred = $.Deferred();
  var locale = code || 'en';
  $.getJSON(`src/locales/${locale}.json`)
    .done(function(data){
    applyTranslation(data);
    deferred.resolve();
  })
    .fail(console.log("Could not load JSON file"));
  return deferred;
};
  applyTranslation = function(data) {
    i18n.translator.add(data);
    $('h1').html(i18n('app_name'));
    $('#calculate').html(i18n('calculate'));
    $("#weight").attr("placeholder", i18n('weight'));
    $("#height").attr("placeholder", i18n('height'));
    $("#swedish").html(i18n('swedish'));
    $("#english").html(i18n('english'));
    return;
  };

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
