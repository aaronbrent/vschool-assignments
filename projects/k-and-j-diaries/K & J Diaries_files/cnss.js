




/*
     FILE ARCHIVED ON 22:36:14 Oct 21, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:11:07 Mar 20, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery(document).ready(function($) {
	jQuery('table.cnss-social-icon tr td img').hover(function() {
		jQuery(this).animate({
			opacity: 0.5
			//marginTop:'-5px'
		  }, 200 );
	},
	function() {
		jQuery(this).animate({
			opacity: 1
			//marginTop:'0px'
		  }, 200 );
	});
	
	jQuery('ul.cnss-social-icon li img').hover(function() {
		jQuery(this).animate({
			opacity: 0.5
		  }, {duration:200, queue:false} );
	},
	function() {
		jQuery(this).animate({
			opacity: 1
		  }, {duration:200, queue:false} );
	});
});
