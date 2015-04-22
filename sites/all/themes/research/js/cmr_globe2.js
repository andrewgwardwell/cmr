(function($) {
  Drupal.behaviors.cmr_globe2 = {
    el: 'map-container',
    init: function(){
      var map = new Datamap({element: document.getElementById(this.el)});
    },

    attach: function (context, settings) {
      this.init();
    }
  }
})(jQuery);