(function($) {
  Drupal.behaviors.cmr_staff = {

    bioReveal: function(){
      var item = window.location.hash;
      if(item.length > 0){
        $('.section--staff--active').removeClass('section--staff--active');
          var name = item.replace('#','');
          var tar = $('[data-name="'+name+'"]'),
          bio = tar.data('bio'),
          exp = tar.data('experience');
        if(!tar.hasClass('section--staff--active')){
          tar.addClass('section--staff--active');
        }
        $('.section--staff__bio').html(bio);
        $('.section--staff__skills').html(exp);
      }
    },
    init: function(){
      $('.section--staff').on('click', function(e){
        var tar = $(e.currentTarget),
          name = tar.data('name');
        window.location.hash = name;
      });
      window.onhashchange = this.bioReveal;
      this.bioReveal();
    },
    attach: function () {
      this.init();
    }
  }
})(jQuery);