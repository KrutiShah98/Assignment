/*
  filoSlider
  2013 (c) filosoff.net
*/

(function( $ ){
  $.fn.filoSlider = function( options ) {
    // variables
    var activeSlide = 0;
    var slidesNum = this.find('img').length;
    var sliderWidth = this.width();
    var sliderHeight = this.height();
    var settings = $.extend( {
      'slicesHorizontal' : 8,
      'slicesVertical' : 8,
      'timeout' : 2000,
      'fadeTimeout' : 5,
      'fadeTime' : 700,
      'navigation' : true
    }, options);
    var sliceWidth = Math.ceil(sliderWidth / settings.slicesHorizontal);
    var sliceHeight = Math.ceil(sliderHeight / settings.slicesVertical);
    var timer, fadeTimer;


    // prepare
    if ( settings.navigation ) {
      this.append("<ul class='navigation'></ul>");
      var nav = this.find('.navigation');
      for ( i = 0; i < slidesNum; i++ ) {
        nav.append("<li data-slide='"+i+"'></li>")
      }
      var elem = this;
      nav.find('li').click(function() {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
        elem.find('.slice').stop(true, true);
        activeSlide = $(this).data('slide');
        loop(elem);
      });
    }

    for ( i = 0; i < settings.slicesHorizontal; i++) {
      for ( j = 0; j < settings.slicesVertical; j++ ) {
        var posX = i * sliceWidth;
        var posY = j * sliceHeight;
        var slice = "<div class='slice' style='left:"+posX+"px;top:"+posY+"px;background-position:"+-posX+"px "+-posY+"px;z-index:9;position: absolute;width:"+sliceWidth+"px;height:"+sliceHeight+"px;'></div>";
        this.append(this, slice);
      }
    }
    loop(this);

    // main func
    function loop(elem) {
      if ( settings.navigation ) {
        var nav = elem.find('.navigation');
        nav.find('li').removeClass('active');
        nav.find('li').eq(activeSlide).addClass('active');
      }
      var active = elem.find('img').eq(activeSlide);
      ( activeSlide + 1 > slidesNum - 1 ) ? activeSlide = 0 : activeSlide++;
      var next = elem.find('img').eq(activeSlide);
      var background = active.attr('src').toString();
      elem.find('img').hide();
      active.show();
      elem.find('.slice').css({'background-image' : 'url('+background+')', 'opacity' : '1', 'display' : 'inline'});
      active.hide();
      next.show();
      sliceFade(elem);
    }

    function sliceFade(elem) {
      var slicesNum = elem.find('.slice:visible').length;
      if ( slicesNum > 0 ) {
        var rand = 0 - 0.5 + Math.random() * (slicesNum + 1);
        rand = Math.round(rand);
        var slice = elem.find('.slice:visible').eq(rand);
        slice.fadeOut(settings.fadeTime);
        fadeTimer = setTimeout( function() { sliceFade(elem) }, settings.fadeTimeout);
      } else {
        timer = setTimeout( function() { loop(elem) }, settings.timeout);
      }
    }
  };
})( jQuery );