<?php

/**
 * Enqueue scripts and styles.
 *
 * @since Twenty Fifteen 1.0
 */
function theme_scripts() {
	// wp load jquery
	wp_enqueue_script('jquery');

	// load bootstrap css
	wp_enqueue_style('bootstrap-styles', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');

	// Load our main stylesheet.
	wp_enqueue_style( 'style', get_stylesheet_uri());

	// load bootstrap js
	wp_enqueue_script( 'bootstrap-js', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery') );

	// load main js file
	wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/assets/js/main.js', array( 'jquery' ) );

	// fonts
	wp_enqueue_style( 'fonts', '//fonts.googleapis.com/css?family=Open+Sans:%20400,300,600,700|Merriweather');
	wp_enqueue_style( 'fonts', '//fonts.googleapis.com/css?family=Lato:300');

	// fontawesome
	wp_enqueue_style('fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');
}

add_action( 'wp_enqueue_scripts', 'theme_scripts' );

// enable menus for this theme
add_theme_support( 'menus' );

// post thumbnails
add_theme_support( 'post-thumbnails' ); 

/**
 * Filter the except length to 20 characters.
 *
 * @param int $length Excerpt length.
 * @return int (Maybe) modified excerpt length.
 */
function wpdocs_custom_excerpt_length( $length ) {
    return 20;
}

add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

// Custom image sizes - this will create another image whenever you upload one with this format.
add_image_size( 'blog', 720, 500, true ); // 220 pixels wide by 180 pixels tall, hard crop mode