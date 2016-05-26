/*
|--------------------------------------------------------------------------
| wp_nav_menu() hook
|--------------------------------------------------------------------------
|
| Add data attribute to the wordpress nav menu items
|
*/

jQuery(document).ready(function( $ ) {
	$(".navbar-nav li").each(function() {
		$(this).find("span").attr('data-hover', $(this).text());
	});
});