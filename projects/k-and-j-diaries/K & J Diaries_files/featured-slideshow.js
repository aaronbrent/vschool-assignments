




/*
     FILE ARCHIVED ON 22:45:58 Oct 21, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:15:12 Mar 20, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery(document).ready(function($){

    /* reverse order of images so slideshow is in right order */
    var slideshow = $('#slideshow');
    var images = slideshow.children('img').not('#loader');
    images.hide();

    $('#slideshow').imagesLoaded().done(function(){
        $('#loader').remove();
        slideshow.append(images.get().reverse());
        images.show();
        resize_slideshow(images);
        if (slideshow.children('img').length > 1) {
            setInterval(function(){
                slideshow.children('img').last().fadeOut('slow', function(){
                    $(this).remove().prependTo(slideshow).show();
                });
            }, 5000);
        }
    });
    

    /* fix weirdness on resize */

    $(window).resize(function() {
        resize_slideshow(images);
    });

});

var resize_slideshow = function(images){
    var max_height = -1;
    images.each(function(){
        if (jQuery(this).attr('id') != 'loader'){
            if (max_height == -1) {
                max_height = jQuery(this).height();
            } else if (max_height > jQuery(this).height()){
                max_height = jQuery(this).height();
            }
        }
    });

    if (max_height) {
        jQuery('#slideshow').css({'max-height': max_height+'px'});
    }

    
}