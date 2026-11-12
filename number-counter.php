<?php

/**
 * Plugin Name:     Number Counter
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Put spotlight in important data using Counter block for Gutenberg. Customize the designs by adding proper Animation effects with flexibility and many more!
 * Version:         1.2.1
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPLv3 or later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     number-counter
 * Requires at least: 6.0
 * Tested up to:    7.0
 * Requires PHP:    7.4
 *
 * @package         create-block
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

define('NUMBER_COUNTER_BLOCK_VERSION', "1.2.1");
define('NUMBER_COUNTER_BLOCK_ADMIN_URL', plugin_dir_url(__FILE__));
define('NUMBER_COUNTER_BLOCK_ADMIN_PATH', dirname(__FILE__));

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/helpers.php';

// style-handler is a git submodule; guard so an uninitialised checkout does not fatal.
if (file_exists(__DIR__ . '/lib/style-handler/style-handler.php')) {
	require_once __DIR__ . '/lib/style-handler/style-handler.php';
}

function number_counter_init()
{

	$script_asset_path = NUMBER_COUNTER_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
	if (!file_exists($script_asset_path)) {
		// Bail instead of throwing: `Error` does not exist before PHP 7, and an
		// uncaught throw on `init` takes the whole site down.
		error_log(
			'You need to run `npm start` or `npm run build` for the "number-counter/number-counter" block first.'
		);
		return;
	}
	$script_asset = require($script_asset_path);
	if (!is_array($script_asset)) {
		return;
	}
	$all_dependencies = array_merge($script_asset['dependencies'], array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-block-editor',
		'number-counter-block-controls-util',
		'essential-blocks-eb-animation'
	));

	$index_js     = NUMBER_COUNTER_BLOCK_ADMIN_URL . 'dist/index.js';
	wp_register_script(
		'essential-blocks-separate-number-counter-editor',
		$index_js,
		$all_dependencies,
		$script_asset['version'],
		true
	);

	$load_animation_js = NUMBER_COUNTER_BLOCK_ADMIN_URL . 'assets/js/eb-animation-load.js';
	wp_register_script(
		'essential-blocks-eb-animation',
		$load_animation_js,
		array(),
		NUMBER_COUNTER_BLOCK_VERSION,
		true
	);

	$animate_css = NUMBER_COUNTER_BLOCK_ADMIN_URL . 'assets/css/animate.min.css';
	wp_register_style(
		'essential-blocks-animation',
		$animate_css,
		array(),
		NUMBER_COUNTER_BLOCK_VERSION
	);
	$frontend_js = NUMBER_COUNTER_BLOCK_ADMIN_URL . 'dist/frontend/index.js';
	wp_register_script(
		'essential-blocks-counter-frontend',
		$frontend_js,
		array(),
		NUMBER_COUNTER_BLOCK_VERSION,
		true
	);

	wp_register_style(
		'fontpicker-default-theme',
		NUMBER_COUNTER_BLOCK_ADMIN_URL . 'assets/css/fonticonpicker.base-theme.react.css',
		array(),
		NUMBER_COUNTER_BLOCK_VERSION,
		"all"
	);

	wp_register_style(
		'fontpicker-matetial-theme',
		NUMBER_COUNTER_BLOCK_ADMIN_URL . 'assets/css/fonticonpicker.material-theme.react.css',
		array(),
		NUMBER_COUNTER_BLOCK_VERSION,
		"all"
	);

	wp_register_style(
		'fontawesome-frontend-css',
		NUMBER_COUNTER_BLOCK_ADMIN_URL . 'assets/css/font-awesome5.css',
		array(),
		NUMBER_COUNTER_BLOCK_VERSION,
		"all"
	);

	$eb_has_block = WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/number-counter' );
	$block_args   = array(
		'editor_script' => 'essential-blocks-separate-number-counter-editor',
		'editor_style' 	=> 'number-counter-editor-css',
		'render_callback' => function ($attributes, $content) {
			if (!is_admin()) {
				wp_enqueue_style('fontawesome-frontend-css');
				wp_enqueue_style('essential-blocks-animation');
				wp_enqueue_script('essential-blocks-counter-frontend');
				wp_enqueue_script('essential-blocks-eb-animation');
				// Google fonts are derived from this block's own typography
				// attributes, so published posts work without a re-save.
				Counter_Font_Loader::enqueue_for_attributes($attributes);
			}
			return $content;
		}
	);

	// Essential Blocks has its own version of this block under another name. Posts saved
	// with this one still need its render callback and front-end assets, so keep it
	// registered, but leave out the editor bundle, which can't run beside Essential Blocks.
	if ( $eb_has_block ) {
		unset( $block_args['editor_script'], $block_args['editor_style'] );
	}

	register_block_type(
		Number_Counter_Helper::get_block_register_path("number-counter/number-counter", NUMBER_COUNTER_BLOCK_ADMIN_PATH),
		$block_args
	);
}

add_action('init', 'number_counter_init', 99);

/**
 * The editor canvas is an iframe, and styles enqueued on admin_enqueue_scripts stay in the
 * outer admin page. Load the icon font and animation styles through enqueue_block_assets so
 * icons and the animation preview render inside the canvas. Frontend loading stays with the
 * render callback, so these are not added to every frontend page.
 */
function number_counter_editor_canvas_styles()
{
	if (!is_admin()) {
		return;
	}
	wp_enqueue_style('fontawesome-frontend-css');
	wp_enqueue_style('essential-blocks-animation');
}
add_action('enqueue_block_assets', 'number_counter_editor_canvas_styles');

/**
 * Block icons are filled #6C3BFF, which almost disappears on the highlighted row of
 * the "/" inserter, a selected List View row and the drag chip. Recolour them there,
 * as Essential Blocks does. The handle is shared, so the stylesheet prints once when
 * several of these plugins are active.
 */
function number_counter_block_icon_selected_style() {
	wp_enqueue_style(
		'eb-block-icon-selected',
		plugins_url( 'assets/css/block-icon-selected.css', __FILE__ ),
		[],
		NUMBER_COUNTER_BLOCK_VERSION
	);
}
add_action( 'enqueue_block_editor_assets', 'number_counter_block_icon_selected_style' );

/**
 * Let Essential Blocks' animation assets win on the front end when it is active.
 *
 * Both plugins register these handles and the first registration wins. This
 * plugin's loader doesn't set `window.ebAnimationLoaded`, so Essential Blocks'
 * failsafe would reveal every animated block without playing it. Essential Blocks
 * registers its own at priority 20 and handles the same `.eb___animated` classes.
 */
function number_counter_use_essential_blocks_animation() {
    if ( defined( 'ESSENTIAL_BLOCKS_VERSION' ) ) {
        wp_deregister_script( 'essential-blocks-eb-animation' );
        wp_deregister_style( 'essential-blocks-animation' );
    }
}
add_action( 'wp_enqueue_scripts', 'number_counter_use_essential_blocks_animation', 19 );
