<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('Number_Counter_Helper')) {
class Number_Counter_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        global $pagenow;

        $query_string = isset($_SERVER['QUERY_STRING']) ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'])) : '';

        /**
         * Only for admin add/edit pages/posts.
         *
         * strpos() instead of str_contains() — str_contains() is PHP 8.0+ and is only
         * polyfilled by WordPress from 5.9 onwards, so it fatals on WP 5.6-5.8 / PHP 7.x.
         */
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($query_string) && strpos($query_string, 'gutenberg-edit-site') !== false)) {

            $controls_asset_path = NUMBER_COUNTER_BLOCK_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($controls_asset_path)) {
                return;
            }

            /**
             * require, not include_once: include_once returns bool `true` on a repeat
             * include, and indexing that bool is a warning on PHP 7.4 and PHP 8.x.
             */
            $controls_dependencies = require $controls_asset_path;
            if (!is_array($controls_dependencies)) {
                return;
            }

            wp_register_script(
                "number-counter-block-controls-util",
                NUMBER_COUNTER_BLOCK_ADMIN_URL . 'dist/modules.js',
                array_merge($controls_dependencies['dependencies']),
                $controls_dependencies['version'],
                true
            );

            /**
             * The editor bundle compares `eb_wp_version` numerically (>= 5.8), so it has to
             * stay a float. A plain (float) cast on a "6.10"/"7.10" style release reads as
             * 6.1/7.1, so derive the floor with version_compare() first.
             */
            $wp_version_raw   = get_bloginfo('version');
            $wp_version_float = (float) $wp_version_raw;
            if ($wp_version_float < 5.8 && version_compare($wp_version_raw, '5.8', '>=')) {
                $wp_version_float = 5.8;
            }

            wp_localize_script('number-counter-block-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => $wp_version_float,
                'rest_rootURL' => get_rest_url(),
				'fontAwesome' => "true"
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('number-counter-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('number-counter-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

			wp_register_style(
				'essential-blocks-iconpicker-css',
				NUMBER_COUNTER_BLOCK_ADMIN_URL . 'dist/style-modules.css',
				[],
				NUMBER_COUNTER_BLOCK_VERSION,
				'all'
			);

            wp_enqueue_style(
                'countdown-editor-css',
                NUMBER_COUNTER_BLOCK_ADMIN_URL . 'dist/modules.css',
                array(
                    'fontawesome-frontend-css',
                    'fontpicker-default-theme',
                    'fontpicker-matetial-theme',
                    'essential-blocks-animation',
					'essential-blocks-iconpicker-css'
                ),
                $controls_dependencies['version'],
                'all'
            );
        }
    }

    public static function get_block_register_path($blockname, $blockPath)
    {
        // version_compare(), not a float cast: (float) "5.10" is 5.1 and would take the wrong branch.
        if (version_compare(get_bloginfo('version'), '5.7', '<')) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Number_Counter_Helper::register();
}
