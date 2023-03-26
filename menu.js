$(document).ready(function(){
	$('#menu_icon').click(function(){
		$(this).toggleClass('open');
		$(".menu_logo").toggleClass("hide");
		$(".menu_items").toggleClass("hide");
		$(".menu").toggleClass("background_transparency");
	});
});

