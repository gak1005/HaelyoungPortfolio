/**handles:fukasawa_global**/
jQuery(document).ready(function(t){function i(){t(".flexslider").flexslider({animation:"slide",controlNav:!1,smoothHeight:!1,start:function(){$grid.masonry()}})}$wrapper=t(".posts"),$wrapper.length&&($grid=$wrapper.imagesLoaded(function(){$grid=$wrapper.masonry({itemSelector:".post-container",stagger:0,transitionDuration:0}),t(".post-container").animate({opacity:1},300)})),t(".nav-toggle").on("click",function(){t(this).toggleClass("active"),t(".mobile-navigation").slideToggle()}),t(window).resize(function(){t(window).width()>1e3&&(t(".nav-toggle").removeClass("active"),t(".mobile-navigation").hide())}),i();var o=".post iframe, .post object, .post video, .widget-content iframe, .widget-content object, .widget-content iframe",e=function(i){t(i).each(function(){var i=t(this),o=i.parent(),e=o.width();i.attr("data-origwidth")||(i.attr("data-origwidth",i.attr("width")),i.attr("data-origheight",i.attr("height")));var a=e/i.attr("data-origwidth");i.css("width",e+"px"),i.css("height",i.attr("data-origheight")*a+"px")})};e(o),t(window).resize(function(){e(o)}),t(document.body).on("post-load",function(){$wrapper.imagesLoaded(function(){$wrapper.masonry({itemSelector:".post-container"})}),e(o),i(),$wrapper.masonry("reloadItems").on("layoutComplete",function(){t(".post-container").animate({opacity:1},300)})})});