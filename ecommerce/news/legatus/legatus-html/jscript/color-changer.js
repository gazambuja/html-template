
jQuery(document).ready(function($){
	jQuery("body").append('<!-- BEGIN #color-select --><div id="color-select"><div id="picker"></div><div id="icon-brush"></div>'+
	'<a href="javascript:void(0);" class="width-changer"><font class="change-width-stretched"><span class="width-switcher">&#59204;</span><b>Stretched Width</b><span>Website is Stretched to Fit Whole Screen</span></font><font class="change-width-boxed" style="display:none;"><span class="width-switcher">&#59206;</span><b>Boxed Width</b><span>Website is Boxed &amp; Locked in Constant Width</span></font></a>'+

	'<a href="javascript:void(0);" class="color-changer"><span class="color-picker" style="background:#264c84;" data-target="scheme">&nbsp;</span><b>Color Scheme</b><span>Main color of theme</span></a>'+
	
	'<a href="javascript:void(0);" class="color-changer"><span class="color-picker" style="background:#264c84;" data-target="links">&nbsp;</span><b>Links Color</b><span>Color of Hyperlinks</span></a>'+
	
	'<a href="javascript:void(0);" class="color-changer"><span class="color-picker" style="background:#ffffff;" data-target="background-color">&nbsp;</span><b>Background Color</b><span>Background color &amp; image</span></a>'+
	
	'<span class="texture-changer"><br/>'+
		
		'<b style="margin-left:0px;">Background Texture</b><span style="margin-left:0px;">Choose Background Texture</span>'+
		'<font class="texture-pack">'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-texture-1.jpg\');">&nbsp;</a>'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-texture-2.jpg\');">&nbsp;</a>'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-texture-3.jpg\');">&nbsp;</a>'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-texture-4.jpg\');">&nbsp;</a>'+
		'</font>'+
		'<font class="photo-pack">'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-photo-1.jpg\');margin-top:10px;">&nbsp;</a>'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-photo-2.jpg\');margin-top:10px;">&nbsp;</a>'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-photo-3.jpg\');margin-top:10px;">&nbsp;</a>'+
			'<a href="#" class="background-bulb" style="background-image:url(\'images/background-photo-4.jpg\');margin-top:10px;">&nbsp;</a>'+
		'</font>'+
		
	'</span>'+
	
	'<!-- END #color-select --></div>');
	
	$('.color-changer').iris({
		hide: true,
		width: 180,
		change: function(event, ui) {
			$(this).children().eq(0).css('background-color', ui.color.toString());
			var color = ui.color.toString();
			
			if($(this).children()[0].getAttribute('data-target') == "scheme"){
				jQuery(".content-article-title").css("color",color).css("border-bottom", "3px solid "+color);
				jQuery(".breaking-news .breaking-title, .breaking-news .breaking-controls, .main-content-right .panel h3, .content-panel .panel-header b, .page-pager > span, .page-pager > a:hover, .shortcode-content .spacer-break-2, .shortcode-content .spacer-break-3, .shortcode-content .spacer-break-4, .shortcode-content table thead, .shortcode-content .accordion > div > a, .content .filter a.active, .article-array li:before").css("background-color",color);
			}else
			if($(this).children()[0].getAttribute('data-target') == "background-color"){
				jQuery("body").css("background-color",color);
				jQuery("body").css("background-image","none");
			}else
			if($(this).children()[0].getAttribute('data-target') == "links"){
				jQuery(".content a").css("color",color);
			}else
			if($(this).children()[0].getAttribute('data-target') == "background"){
				jQuery("body").css("background",color);
			}
			
		}
	});
	
	$(".color-changer").click(function (){
		$(this).iris('toggle');
	});
	
	$(".texture-pack .background-bulb").click(function (){
		$("body").css('background', $(this).css("background-image"));
		return false;
	});
	
	$(".photo-pack .background-bulb").click(function (){
		$("body").css('background-image', $(this).css("background-image")).css("background-size", "100%").css("background-position", "center").css("background-attachment", "fixed");
		return false;
	});
	
	// $(".color-changer").mouseover(function (){
	// 	if($(this).children()[0].getAttribute('data-target') == "scheme"){
	// 		jQuery("h2 a.article-comment-icon, h3 a.article-comment-icon, h4 a.article-comment-icon").css("outline","rgba(0,0,0,0.6) dotted 4px");
	// 	}else
	// 	if($(this).children()[0].getAttribute('data-target') == "links"){
	// 		jQuery(".content a").css("outline","rgba(0,0,0,0.6) dotted 4px");
	// 	}
	// }).mouseout(function (){
	// 	if($(this).children()[0].getAttribute('data-target') == "scheme"){
	// 		jQuery("h2 a.article-comment-icon, h3 a.article-comment-icon, h4 a.article-comment-icon").css("outline","none");
	// 	}else
	// 	if($(this).children()[0].getAttribute('data-target') == "links"){
	// 		jQuery(".content a").css("outline","none");
	// 	}
	// });


	jQuery(".width-changer").click(function(){
		if(jQuery(".boxed").hasClass("active")){
			jQuery(".change-width-stretched").css("display", "block");
			jQuery(".change-width-boxed").css("display", "none");
		}else{
			jQuery(".change-width-stretched").css("display", "none");
			jQuery(".change-width-boxed").css("display", "block");
		}
		jQuery(".boxed").toggleClass("active");
	});
	
	jQuery("#icon-brush").click(function(){
		if(jQuery(this).parent().attr('class') == "active"){
			jQuery(this).parent().attr("class","");
			jQuery(".farbtastic").hide();
		}else{
			jQuery(this).parent().attr("class","active");
		}
	});
});