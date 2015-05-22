(function($) {
  Drupal.behaviors.cmr_globe2 = {
    el: 'map-container',
    init: function(){
      var map = new Datamap({
          element: document.getElementById(this.el),
          projection: 'mercator',
          responsive: true,
          fills: {
              defaultFill: "#89CFAB",
              hasWorked: "#D89A4D"
          },
          data: JSON.parse(Drupal.settings.countriesList),
          //data: Drupal.settings.countriesList
          geographyConfig: {
              highlightOnHover: false,
              popupTemplate: function (geography, data) {
                  if (data != null) {
                      return '<div class="hoverinfo"><h4>' + geography.properties.name + '</h4><br/>Click to see Areas of Work.<br/></div>';
                  }
              }
          },
          done: function (datamap) {
              datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                  $('.open').removeClass('open');
                  // $('#areas-container').on('transitionend', function(){
                     var country = geography.properties.name;
                     var inner = Drupal.settings.countriesList2[geography.id]['exp'].join('');
                     var output = $('#areas-container').addClass('open').find('.areas-inner').html('<h4>'+country+'</h4><ul>'+inner+'</ul>');
                  // });
                     $('.close-button').on('click', function(e){
                        $('.open').removeClass('open')
                      });
                  //<div class="hoverinfo"><h4>' + geography.properties.name + '</h4><br/>Areas of Work:<br/><ul>' + data.exp.join('') + '</ul></div>';
              });
          }
      });
        return map;
    },

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

    attach: function (context, settings) {
        var map = this.init();
        $(window).on('resize', function() {
            map.resize();
        });
        $(document).scroll(function(){
            Drupal.behaviors.cmr_globe2.otherEl();
        });
    }
  }
})(jQuery);