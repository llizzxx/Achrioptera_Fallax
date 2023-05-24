$(document).ready(() => {
	$('.menu_x_burger_icon').click(() => {
		$('.menu_x_burger_icon').toggleClass('menu_x_icon menu_burger_icon')
		$('.menu_left_side_item').toggleClass('menu_item_hide')
		$('.menu_center_items').toggleClass('menu_item_hide')
		$('.menu').toggleClass('menu_background_transparency')
	})
})

