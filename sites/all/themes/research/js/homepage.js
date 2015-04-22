(function($) {

  sections = {
    'windowHeight' : window.outerHeight,
    scrollDist : {},

  init: function(){
      var wrappers = $('.section'),
        win_ht = this.windowHeight;
      $('.client-inner .section__copy').on('click', this.toggleClient);
      var $this = this;
      $.each(wrappers, function(){
        var scrollDist = this.offsetTop,
            id = this.id;
        //console.log(id+' '+scrollDist);
        $this.scrollDist[id] = scrollDist;
      });
      $('.hero__image').css('padding-bottom', win_ht*.5);
    },
    clickNav: function(e){
        var $anchor = $(this);
        var top = $($anchor.data('dest')).offset().top;
        $('html, body').stop().animate({
          scrollTop: top
        }, 1500, 'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        $('.cp-nav__item--active').removeClass('cp-nav__item--active');
        $anchor.addClass('cp-nav__item--active');
        e.preventDefault();
    },
    toggleClient: function (e){
      var active = $(this).hasClass('active');
      if(active){
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    },
    updateScrollNav: function(e){
      var wrappers = this.scrollDist,
        top = window.scrollY;
      $.each(wrappers, function(){
        //$(this).height(win_ht *.75);

      });
    }
  },
    clients = {
    init: function(){
    this.slideShow();
    },
    slideShow: function(){
      $('.client_slides').slick({
        centerMode: false,
        centerPadding: 0,
        slidesToShow: 4,
        adaptiveHeight: true,
        infinite: true,
        //autoplay: true,
        //autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
            //arrows: false
          }
        }
      ]});
    }
  }

  Drupal.behaviors.homepage = {
    attach: function(context, settings) {
      sections.init();
      clients.init();
      //$('.cp-nav__item').bind('click', sections.clickNav);
      $(document).on('scroll', function(e){
        if(window.scrollY > 160){
          $('body').addClass('scroll-nav');
        } else {
          $('body').removeClass('scroll-nav');
        }
        //sections.updateScrollNav(e);
      });
    }
  }

})(jQuery);