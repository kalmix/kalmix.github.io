/*
Author : Shishir Raven. 
Website. : iamshishir.com
Developed for : oyethemes.com
*/


(function($) {
  $.fn.notvisible = function() {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height();
          
  return (((_top<viewTop || _top>viewBottom) &&  (_bottom<viewTop || _bottom>viewBottom)))
  };
})(jQuery);



(function($) {
  $.fn.visible = function() {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom      = _top + $t.height();
          
  return (((_top>viewTop && _top<viewBottom) ||  (_bottom>viewTop && _bottom<viewBottom)))
  };
})(jQuery);





$(window).scroll(function(event) {
  
  $(".scrollanimation").each(function(i, el) {
   var rawel = el;
    var el = $(el);

    /* find out the animation which is in place. */
    var el_animation ="no_animation";

    if(el.hasClass("scroll-bounce") || el.hasClass("bounce"))
{
    el_animation = "bounce";
}
if(el.hasClass("scroll-flash") || el.hasClass("flash"))
{
    el_animation = "flash";
}
if(el.hasClass("scroll-pulse") || el.hasClass("pulse"))
{
    el_animation = "pulse";
}
if(el.hasClass("scroll-rubberBand") || el.hasClass("rubberBand"))
{
    el_animation = "rubberBand";
}
if(el.hasClass("scroll-shake") || el.hasClass("shake"))
{
    el_animation = "shake";
}
if(el.hasClass("scroll-swing") || el.hasClass("swing"))
{
    el_animation = "swing";
}
if(el.hasClass("scroll-tada") || el.hasClass("tada"))
{
    el_animation = "tada";
}
if(el.hasClass("scroll-wobble") || el.hasClass("wobble"))
{
    el_animation = "wobble";
}
if(el.hasClass("scroll-jello") || el.hasClass("jello"))
{
    el_animation = "jello";
}
if(el.hasClass("scroll-bounceIn") || el.hasClass("bounceIn"))
{
    el_animation = "bounceIn";
}
if(el.hasClass("scroll-bounceInDown") || el.hasClass("bounceInDown"))
{
    el_animation = "bounceInDown";
}
if(el.hasClass("scroll-bounceInLeft") || el.hasClass("bounceInLeft"))
{
    el_animation = "bounceInLeft";
}
if(el.hasClass("scroll-bounceInRight") || el.hasClass("bounceInRight"))
{
    el_animation = "bounceInRight";
}
if(el.hasClass("scroll-bounceInUp") || el.hasClass("bounceInUp"))
{
    el_animation = "bounceInUp";
}
if(el.hasClass("scroll-bounceOut") || el.hasClass("bounceOut"))
{
    el_animation = "bounceOut";
}
if(el.hasClass("scroll-bounceOutDown") || el.hasClass("bounceOutDown"))
{
    el_animation = "bounceOutDown";
}
if(el.hasClass("scroll-bounceOutLeft") || el.hasClass("bounceOutLeft"))
{
    el_animation = "bounceOutLeft";
}
if(el.hasClass("scroll-bounceOutRight") || el.hasClass("bounceOutRight"))
{
    el_animation = "bounceOutRight";
}
if(el.hasClass("scroll-bounceOutUp") || el.hasClass("bounceOutUp"))
{
    el_animation = "bounceOutUp";
}
if(el.hasClass("scroll-fadeIn") || el.hasClass("fadeIn"))
{
    el_animation = "fadeIn";
}
if(el.hasClass("scroll-fadeInDown") || el.hasClass("fadeInDown"))
{
    el_animation = "fadeInDown";
}
if(el.hasClass("scroll-fadeInDownBig") || el.hasClass("fadeInDownBig"))
{
    el_animation = "fadeInDownBig";
}
if(el.hasClass("scroll-fadeInLeft") || el.hasClass("fadeInLeft"))
{
    el_animation = "fadeInLeft";
}
if(el.hasClass("scroll-fadeInLeftBig") || el.hasClass("fadeInLeftBig"))
{
    el_animation = "fadeInLeftBig";
}
if(el.hasClass("scroll-fadeInRight") || el.hasClass("fadeInRight"))
{
    el_animation = "fadeInRight";
}
if(el.hasClass("scroll-fadeInRightBig") || el.hasClass("fadeInRightBig"))
{
    el_animation = "fadeInRightBig";
}
if(el.hasClass("scroll-fadeInUp") || el.hasClass("fadeInUp"))
{
    el_animation = "fadeInUp";
}
if(el.hasClass("scroll-fadeInUpBig") || el.hasClass("fadeInUpBig"))
{
    el_animation = "fadeInUpBig";
}
if(el.hasClass("scroll-fadeOut") || el.hasClass("fadeOut"))
{
    el_animation = "fadeOut";
}
if(el.hasClass("scroll-fadeOutDown") || el.hasClass("fadeOutDown"))
{
    el_animation = "fadeOutDown";
}
if(el.hasClass("scroll-fadeOutDownBig") || el.hasClass("fadeOutDownBig"))
{
    el_animation = "fadeOutDownBig";
}
if(el.hasClass("scroll-fadeOutLeft") || el.hasClass("fadeOutLeft"))
{
    el_animation = "fadeOutLeft";
}
if(el.hasClass("scroll-fadeOutLeftBig") || el.hasClass("fadeOutLeftBig"))
{
    el_animation = "fadeOutLeftBig";
}
if(el.hasClass("scroll-fadeOutRight") || el.hasClass("fadeOutRight"))
{
    el_animation = "fadeOutRight";
}
if(el.hasClass("scroll-fadeOutRightBig") || el.hasClass("fadeOutRightBig"))
{
    el_animation = "fadeOutRightBig";
}
if(el.hasClass("scroll-fadeOutUp") || el.hasClass("fadeOutUp"))
{
    el_animation = "fadeOutUp";
}
if(el.hasClass("scroll-fadeOutUpBig") || el.hasClass("fadeOutUpBig"))
{
    el_animation = "fadeOutUpBig";
}
if(el.hasClass("scroll-flip") || el.hasClass("flip"))
{
    el_animation = "flip";
}
if(el.hasClass("scroll-flipInX") || el.hasClass("flipInX"))
{
    el_animation = "flipInX";
}
if(el.hasClass("scroll-flipInY") || el.hasClass("flipInY"))
{
    el_animation = "flipInY";
}
if(el.hasClass("scroll-flipOutX") || el.hasClass("flipOutX"))
{
    el_animation = "flipOutX";
}
if(el.hasClass("scroll-flipOutY") || el.hasClass("flipOutY"))
{
    el_animation = "flipOutY";
}
if(el.hasClass("scroll-lightSpeedIn") || el.hasClass("lightSpeedIn"))
{
    el_animation = "lightSpeedIn";
}
if(el.hasClass("scroll-lightSpeedOut") || el.hasClass("lightSpeedOut"))
{
    el_animation = "lightSpeedOut";
}
if(el.hasClass("scroll-rotateIn") || el.hasClass("rotateIn"))
{
    el_animation = "rotateIn";
}
if(el.hasClass("scroll-rotateInDownLeft") || el.hasClass("rotateInDownLeft"))
{
    el_animation = "rotateInDownLeft";
}
if(el.hasClass("scroll-rotateInDownRight") || el.hasClass("rotateInDownRight"))
{
    el_animation = "rotateInDownRight";
}
if(el.hasClass("scroll-rotateInUpLeft") || el.hasClass("rotateInUpLeft"))
{
    el_animation = "rotateInUpLeft";
}
if(el.hasClass("scroll-rotateInUpRight") || el.hasClass("rotateInUpRight"))
{
    el_animation = "rotateInUpRight";
}
if(el.hasClass("scroll-rotateOut") || el.hasClass("rotateOut"))
{
    el_animation = "rotateOut";
}
if(el.hasClass("scroll-rotateOutDownLeft") || el.hasClass("rotateOutDownLeft"))
{
    el_animation = "rotateOutDownLeft";
}
if(el.hasClass("scroll-rotateOutDownRight") || el.hasClass("rotateOutDownRight"))
{
    el_animation = "rotateOutDownRight";
}
if(el.hasClass("scroll-rotateOutUpLeft") || el.hasClass("rotateOutUpLeft"))
{
    el_animation = "rotateOutUpLeft";
}
if(el.hasClass("scroll-rotateOutUpRight") || el.hasClass("rotateOutUpRight"))
{
    el_animation = "rotateOutUpRight";
}
if(el.hasClass("scroll-slideInUp") || el.hasClass("slideInUp"))
{
    el_animation = "slideInUp";
}
if(el.hasClass("scroll-slideInDown") || el.hasClass("slideInDown"))
{
    el_animation = "slideInDown";
}
if(el.hasClass("scroll-slideInLeft") || el.hasClass("slideInLeft"))
{
    el_animation = "slideInLeft";
}
if(el.hasClass("scroll-slideInRight") || el.hasClass("slideInRight"))
{
    el_animation = "slideInRight";
}
if(el.hasClass("scroll-slideOutUp") || el.hasClass("slideOutUp"))
{
    el_animation = "slideOutUp";
}
if(el.hasClass("scroll-slideOutDown") || el.hasClass("slideOutDown"))
{
    el_animation = "slideOutDown";
}
if(el.hasClass("scroll-slideOutLeft") || el.hasClass("slideOutLeft"))
{
    el_animation = "slideOutLeft";
}
if(el.hasClass("scroll-slideOutRight") || el.hasClass("slideOutRight"))
{
    el_animation = "slideOutRight";
}
if(el.hasClass("scroll-zoomIn") || el.hasClass("zoomIn"))
{
    el_animation = "zoomIn";
}
if(el.hasClass("scroll-zoomInDown") || el.hasClass("zoomInDown"))
{
    el_animation = "zoomInDown";
}
if(el.hasClass("scroll-zoomInLeft") || el.hasClass("zoomInLeft"))
{
    el_animation = "zoomInLeft";
}
if(el.hasClass("scroll-zoomInRight") || el.hasClass("zoomInRight"))
{
    el_animation = "zoomInRight";
}
if(el.hasClass("scroll-zoomInUp") || el.hasClass("zoomInUp"))
{
    el_animation = "zoomInUp";
}
if(el.hasClass("scroll-zoomOut") || el.hasClass("zoomOut"))
{
    el_animation = "zoomOut";
}
if(el.hasClass("scroll-zoomOutDown") || el.hasClass("zoomOutDown"))
{
    el_animation = "zoomOutDown";
}
if(el.hasClass("scroll-zoomOutLeft") || el.hasClass("zoomOutLeft"))
{
    el_animation = "zoomOutLeft";
}
if(el.hasClass("scroll-zoomOutRight") || el.hasClass("zoomOutRight"))
{
    el_animation = "zoomOutRight";
}
if(el.hasClass("scroll-zoomOutUp") || el.hasClass("zoomOutUp"))
{
    el_animation = "zoomOutUp";
}
if(el.hasClass("scroll-hinge") || el.hasClass("hinge"))
{
    el_animation = "hinge";
}
if(el.hasClass("scroll-jackInTheBox") || el.hasClass("jackInTheBox"))
{
    el_animation = "jackInTheBox";
}
if(el.hasClass("scroll-rollIn") || el.hasClass("rollIn"))
{
    el_animation = "rollIn";
}
if(el.hasClass("scroll-rollOut") || el.hasClass("rollOut"))
{
    el_animation = "rollOut";
}
if (el.visible(true)) {
        if(el.hasClass("scroll-"+el_animation))
        {
          el.removeClass("scroll-"+el_animation)
          el.addClass(el_animation);
        }
    } 
    if (el.notvisible()) 
    {
        if(el.hasClass(el_animation))
        {
          el.removeClass(el_animation)
          el.addClass("scroll-"+el_animation);
        }
    }





    
  });
  
});
