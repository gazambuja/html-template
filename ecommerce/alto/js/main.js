(function ($) {
 "use strict";
 
/*----------------------------
 TOP Menu Stick
------------------------------ */
$(window).on('scroll',function() {
if ($(this).scrollTop() > 240){  
    $('#sticky-header').addClass("sticky");
  }
  else{
    $('#sticky-header').removeClass("sticky");
  }
}); 
	
/*----------------------------
 tooltip
------------------------------ */
  $('[data-toggle="tooltip"]').tooltip({
      animated: 'fade',
      container: 'body'
}); 
 
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('#mobile-menu-active').meanmenu();	
		
/*----------------------------
 nivoSlider
------------------------------ */	
	$("#slider").nivoSlider({ 
    effect: 'fold',                 // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 500,                   // Slide transition speed 
    pauseTime: 3000,                  // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: false,               // Next & Prev navigation 
    controlNav: true,                 // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: true,               // Stop animation while hovering 
    manualAdvance: true,             // Force manual transitions 
    prevText: '<i class="fa fa-angle-left"></i>',   // Prev directionNav text 
    nextText: '<i class="fa fa-angle-right"></i>',  // Next directionNav text 
    randomStart: false,               // Start on a random slide 
    beforeChange: function(){},       // Triggers before a slide transition 
    afterChange: function(){},        // Triggers after a slide transition 
    slideshowEnd: function(){},       // Triggers after all slides have been shown 
    lastSlide: function(){},          // Triggers when last slide is shown 
    afterLoad: function(){}           // Triggers when slider has loaded 
});	

/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();

/*----------------------------
 tab-active
------------------------------ */  
  $(".tab-active").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 5,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  
/*----------------------------
 tab-active2
------------------------------ */  
  $(".tab-active2").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });  
  
/*----------------------------
 protofolio-active
------------------------------ */  
  $(".protofolio-active").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
   
/*----------------------------
related-products-active
------------------------------ */  
  $(".related-products-active").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
 brand-active
------------------------------ */  
  $(".brand-active").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 6,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
  
/*----------------------------
 blog-active
------------------------------ */  
  $(".blog-active").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
    
/*----------------------------
 product-active
------------------------------ */  
  $(".product-active").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
      
/*----------------------------
 testmonial-active
------------------------------ */  
  $(".testmonial-active").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
	
/*--------------------------
   chosen
---------------------------- */		
	var config = {
	'.chosen-select-deselect'  : {allow_single_deselect:true},
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
/*---------------------
	Category menu
--------------------- */
	$('#cate-toggle li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
	$('#cate-toggle>ul>li.has-sub>a').append('<span class="holder"></span>');
	
/*--------------------------
   Countdown
---------------------------- */	
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>days</div><div class="cdown hours"><span class="counting">%-H</span>hrs</div><div class="cdown minutes"><span class="counting">%M</span>mins</div><div class="cdown seconds"><span class="counting">%S</span>secs</div>'));
        });
    });
	
/* --------------------------------------------------------
   header-area
* -------------------------------------------------------*/ 	
	$('.btn_close').on('click',function(){
		$('.header_area').animate({left:'-199px'},500);
		$(this).hide();
		$('.btn_open').css('display','block');
	});
	
	$('.btn_open').on('click',function(){
		$('.header_area').animate({left:'0px'},500);
		$(this).hide();
		$('.btn_close').css('display','block');
	});

	
/*----------------------------
 price-slider active
------------------------------ */  
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 30, 470 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );

/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
	
/*--------------------------
 Zoom
---------------------------- */	
	$("#zoompro").elevateZoom({
		gallery : "gallery",
		galleryActiveClass: "active",
		zoomType: "inner",
		cursor: "crosshair"
	}); 	
/*----------------------------
 Instantiate MixItUp:
------------------------------ */
	$('#Container') .mixItUp();	

 /*----------------------------
 magnificPopup:
------------------------------ */	
	$('.magnify').magnificPopup({
	  type: 'image'
	});	
	
/* --------------------------------------------------------
   accordion
* -------------------------------------------------------*/ 
  $('.panel-heading a').on('click', function() {
    $('.panel-default').removeClass('actives');
    $(this).parents('.panel-default').addClass('actives');
  });	
  	
/* --------------------------------------------------------
   cart-plus-minus-button
* -------------------------------------------------------*/ 
	$(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	}); 
		
/* --------------------------------------------------------
   header-search2
* -------------------------------------------------------*/	
	$('.open').on('click',function(){
		$('.test ').toggleClass("show");
	});
	 	
})(jQuery); 