(function($) {
  Drupal.behaviors.cmr_globe = {
    earth: '',
    active_locations: [],
    org_locations: [],
    //countriesList : [],
    //locations : [],
    //legend : {},
    //rotation: '',

    otherEl: function(){
      var top = $(document).scrollTop();
      var mid = $('.gp_mid').offset();
      var low = $('.gp_low').offset();
      if (top > mid.top - 400){
        $('.gp_mid').addClass('complete');
      }
      if (top > low.top - 400){
        $('.gp_low').addClass('complete');
      }
    },


    render: function(locations) {
      // Start a rotation animation
      active_locations = locations;

      // Markers
      markers.forEach(function (b) {
        earth.removeMarker(b);
      });

      markers = [];
      var loc_markers = markers;

      //function make_uniq_offset(item, comp, id, split){
      //  if(comp.hasOwnProperty(id)){
      //    var dec = (Math.random() * (0.120 - 0.300) + 0.200).toFixed(4),
      //        dec_1 = (Math.random() * (0.120 - 0.300) + 0.200).toFixed(4),
      //      la = parseFloat(item.lat) + parseFloat(dec),
      //      lo = parseFloat(item.long) + parseFloat(dec_1),
      //      n_id = la+'/'+lo,
      //      split = [la, lo];
      //      make_uniq_offset(item, comp, n_id, split);
      //  }
      //  return split;
      //}

      // For each ip location create a new marker
      active_locations.forEach(function (a) {
        var template = $('#popupTpl').html(),
        content = Mustache.to_html(template, a),
        //content = "<img class='popup-logo' src='"+ a.picture+"' /><b>" + a.country + '</b>',
        config = {maxWidth: 600, maxHeight:300, closeButton: false},
        la = parseFloat(a.lat),
        lo = parseFloat(a.long),
        init_marker = WE.marker([la, lo]).addTo(earth).bindPopup(content, config);

        init_marker['k_id'] = a.country+'-'+a.client_name;
        init_marker['name_id'] = a.country+'-'+a.client_name;
        init_marker.element.id = a.country+'-'+a.client_name;

        loc_markers.push(init_marker);

        // Color the markers depending on the country they are in.
        //$(markers[markers.length-1].element.firstChild).css('background', legend[a.country]);
      });
      markers = loc_markers;
    },

    count: 0,

    rotation : function(){
      var c = active_locations[this.count];
        earth.panTo([c['lat'], c['long']]);
        this.count++;
      var rotation = setInterval(function() {
        var nxt = active_locations[Drupal.behaviors.cmr_globe.count];
        if(typeof nxt != 'undefined'){
          var c = nxt;
          Drupal.behaviors.cmr_globe.count++;
        } else {
          var c = active_locations[0];
          Drupal.behaviors.cmr_globe.count = 0;
        }
        earth.panTo([c['lat'], c['long']]);

      }, 7000);
      $('.expertise__item').on('click', function(){
        clearInterval(rotation);
      });

      $('#earth_div').on('click touchstart touchend', function () {

        // Stop the rotation when the earth is clicked or touched
        clearInterval(rotation);


        // If the screen is small close the side menu as well.
        //if($(window).width()<800){
        //  body.removeClass('open');
        //}

      });
    },
    filterRender: function(){
      $('.gs-active').removeClass('gs-active');
      var th_area = $(this).data('expertise');
      $(this).addClass('gs-active');
      var new_location = _.filter(org_locations, function(item){
        var areas = item.therapy_areas;
        return _.find(areas, function(area){
          if(th_area == 'all'){
            return true;
          } else {
            return area == th_area;
          }
        });
      });
      Drupal.behaviors.cmr_globe.render(new_location);
      Drupal.behaviors.cmr_globe.count = 0;
      Drupal.behaviors.cmr_globe.rotation();
    },

    filterToggle : function(){
      //globe-switch"" +
      $('.globe-active').removeClass('globe-active');
      $('.gs-active-sw').removeClass('gs-active-sw');
      $(this).addClass('gs-active-sw');
      var tar = $(this).data('tar'),
          active = $('.globe-filter--wrapper').find('.'+tar);
      $(active).addClass('globe-active');
    },

    attach: function (context, settings) {
      org_locations = JSON.parse(Drupal.settings.countriesList);
      earth = new WE.map('earth_div', {
        //'atmosphere': true,
        //'sky': true
      });
      earth.setView([46.8011, 8.2266], 4.5);
      //WE.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
      //  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
      //}).addTo(earth);

      WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '© OpenStreetMap contributors'
      }).addTo(earth);
      markers = [];
      this.render(org_locations);
      active_locations = org_locations;
      this.rotation();
      $('.expertise__item').on('click', this.filterRender);
      $('.globe-switch').on('click', this.filterToggle);
      $(document).scroll(function(){
        Drupal.behaviors.cmr_globe.otherEl();
      });
    }
  }
})(jQuery);

// Closure
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();