(function($){
  Drupal.behaviors.global_lookup = {
    attach: function(){
      $('.get-long-lat').on('click', this.global_lookup);
    },
    global_lookup: function(e){
      e.preventDefault();
      var key = 'AIzaSyAfYN6cZSQS2FEli5i7ByST2VlDTzLxcY8',
          state = $('input.location_auto_province').val(),
          city = $('#edit-field-location-und-0-city').val(),
          zip = $('#edit-field-location-und-0-postal-code').val(),
          country = $('.location_auto_country').val(),
          lookup2 = 'https://maps.googleapis.com/maps/api/geocode/json',
          lookup = 'http://restcountries.eu/rest/v1/alpha';
      $.ajax({
        url: lookup+'/'+country
      }).done(function(data){
        var full_country = data.name;
        if(city == ''){
          city = data.capital;
        }
          $('#edit-field-alpha3code-und-0-value').val(data.alpha3Code);
      });
  }
  }

})(jQuery);