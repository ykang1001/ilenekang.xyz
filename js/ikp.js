$(window).on('scroll', function() {
    $(".project-section").each(function() {
      if (isScrolledIntoView($(this))) {
        $('a[href$="' + this.id + '"]').addClass('current');
      }else{
        $('a[href$="' + this.id  + '"]').removeClass('current');
      }
    });
  });
  
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
  
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
