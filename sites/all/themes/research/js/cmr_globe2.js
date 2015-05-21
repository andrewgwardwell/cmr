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
          geographyConfig:{
              popupTemplate: function(geography, data) {
                  if(data != null){
                      console.log(data);
                      return '<div class="hoverinfo">' + geography.properties.name + '<br/>Areas of Work:<br/>' + data.exp + '</div>';
                  }
              }
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