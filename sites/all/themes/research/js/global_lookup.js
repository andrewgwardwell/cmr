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
        console.log(full_country);
        $.ajax({
          url: lookup2,
          data: {
            'address': city+full_country,
            'sensor': false,
            'key': key
          }
          }).done(function(data2) {
          if(data2.status == "OK"){
            var location = data2.results[0].geometry.location;
            if(typeof location != 'undefined'){
              $('#edit-field-location-und-0-locpick-user-latitude').val(location.lat);
              $('#edit-field-location-und-0-locpick-user-longitude').val(location.lng);
            }
          } else {
            alert('Search returned:'+data2.status);
          }
        });
      });
  }
  }

})(jQuery);