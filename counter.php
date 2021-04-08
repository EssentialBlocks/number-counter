<?php

/**
 * Plugin Name:     Counter
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Put spotlight in important data using Counter block for Gutenberg. Customize the designs by adding proper Animation effects with flexibility and many more! 
 * Version:         1.0.1
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     counter-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */


require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/util/style-handler/style-handler.php';


function create_block_counter_block_init()
{
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "essential-blocks-separate/counter" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require($script_asset_path);
	wp_register_script(
		'essential-blocks-separate-counter-block-editor',
		plugins_url($index_js, __FILE__),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations('essential-blocks-separate-counter-block-editor', 'counter');

	$editor_css = 'build/index.css';
	wp_register_style(
		'essential-blocks-separate-counter-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'essential-blocks-separate-counter-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	$frontend_js = "src/frontend.js";
	wp_enqueue_script(
		'essential-blocks-counter-frontend',
		plugins_url($frontend_js, __FILE__),
		array("wp-editor"),
		true
	);

	register_block_type(
		'essential-blocks-separate/counter',
		array(
			'editor_script' => 'essential-blocks-separate-counter-block-editor',
			'editor_style'  => 'essential-blocks-separate-counter-block-editor',
			'style'         => 'essential-blocks-separate-counter-block',
			'frontend_js'   => 'essential-blocks-counter-frontend',
		)
	);
}
add_action('init', 'create_block_counter_block_init');