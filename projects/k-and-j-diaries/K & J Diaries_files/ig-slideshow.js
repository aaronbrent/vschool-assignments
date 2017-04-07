




/*
     FILE ARCHIVED ON 22:37:04 Oct 21, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:11:08 Mar 20, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery(document).ready(function($){

    var instagram_pics = $('.instagram-pics li');
    instagram_pics.hide();
    instagram_pics.first().remove().appendTo('.instagram-pics').show();

    setInterval(function(){
        $('.instagram-pics li').first().hide().remove().appendTo('.instagram-pics').fadeIn('slow');

    }, 5000);
});