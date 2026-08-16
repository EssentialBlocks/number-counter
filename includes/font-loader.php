<?php

/**
 * Load google fonts.
 *
 * Fonts are derived from the block's own typography attributes at render time.
 *
 * The previous implementation read a `_eb_attr` post meta that the v1 typography
 * picker used to write. The v2 picker (the one this plugin ships, see
 * config/entries.js -> typography-control-v2) only sets the block attributes and
 * never writes that meta, so the meta was always empty and no font stylesheet was
 * ever enqueued on the frontend. The editor kept working because it loads fonts
 * separately through WebFont.load() from the live attributes.
 *
 * Reading the attributes instead means published posts are fixed without being
 * re-saved, since the attributes are already stored in the post content.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}
if (!class_exists('Counter_Font_Loader')) {
	class Counter_Font_Loader
	{

		private static $instance;

		/**
		 * Style handle for the combined Google Fonts request.
		 */
		const HANDLE = 'eb-block-fonts';

		/**
		 * Collected fonts for this request, keyed by family name.
		 *
		 * @var array<string, array{weights: string[], italic: bool}>
		 */
		private static $fonts = array();

		/**
		 * Locally available families that must never be requested from Google.
		 */
		private static $system = array(
			'Arial',
			'Tahoma',
			'Verdana',
			'Helvetica',
			'Times New Roman',
			'Trebuchet MS',
			'Georgia',
		);

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
		 * Collect the Google fonts used by one rendered block and enqueue them.
		 *
		 * Called from the block's render_callback, so it only ever runs for blocks
		 * that are actually on the page — no post meta and no content parsing.
		 *
		 * @param array $attributes Block attributes.
		 */
		public static function enqueue_for_attributes($attributes)
		{
			if (!is_array($attributes) || empty($attributes)) {
				return;
			}

			$changed = false;

			foreach ($attributes as $key => $value) {
				// Mirrors the editor's own /^(\w+)FontFamily/ match in the controls
				// package, so both sides pick up exactly the same attributes.
				if (!is_string($key) || !preg_match('/^(.+)FontFamily$/', $key, $matches)) {
					continue;
				}
				if (!is_string($value)) {
					continue;
				}

				$family = trim($value);
				if ('' === $family || 'Default' === $family) {
					continue;
				}
				if (in_array($family, self::$system, true)) {
					continue;
				}

				$prefix = $matches[1];

				if (!isset(self::$fonts[$family])) {
					self::$fonts[$family] = array(
						'weights' => array(),
						'italic'  => false,
					);
					$changed = true;
				}

				$weight = isset($attributes[$prefix . 'FontWeight'])
					? (string) $attributes[$prefix . 'FontWeight']
					: '';

				// The control only ever emits 100-900 in hundreds; ignore anything else
				// so a stray value cannot produce a variant Google will reject.
				if (preg_match('/^[1-9]00$/', $weight)
					&& !in_array($weight, self::$fonts[$family]['weights'], true)) {
					self::$fonts[$family]['weights'][] = $weight;
					$changed = true;
				}

				$style = isset($attributes[$prefix . 'FontStyle'])
					? (string) $attributes[$prefix . 'FontStyle']
					: '';

				if ('italic' === $style && !self::$fonts[$family]['italic']) {
					self::$fonts[$family]['italic'] = true;
					$changed = true;
				}
			}

			if ($changed) {
				self::enqueue();
			}
		}

		/**
		 * Build the combined Google Fonts URL for everything collected so far.
		 *
		 * @return string Empty string when there is nothing to request.
		 */
		private static function build_url()
		{
			$families = array();

			foreach (self::$fonts as $family => $data) {
				$weights = $data['weights'];

				// Always anchor the request with 400. The v1 API answers 400 Bad Request
				// when none of the requested weights exist for a family — asking for only
				// `700` on a regular-only face such as ADLaM Display fails outright — and
				// one rejected family takes the whole combined request down with it.
				// Every Google family ships a regular face, so 400 keeps the URL valid
				// while Google still serves any of the other weights that do exist.
				if (!in_array('400', $weights, true)) {
					$weights[] = '400';
				}

				// Sort so the same set of fonts always produces the same URL, which keeps
				// it cacheable and avoids duplicate requests across renders.
				sort($weights, SORT_STRING);

				$variants = $weights;
				if ($data['italic']) {
					foreach ($weights as $weight) {
						$variants[] = $weight . 'italic';
					}
				}

				$families[] = str_replace(' ', '+', $family) . ':' . implode(',', $variants);
			}

			if (empty($families)) {
				return '';
			}

			// `|`, `:` and `,` all survive esc_url(); its allowlist permits them.
			return '//fonts.googleapis.com/css?family=' . implode('|', $families) . '&display=swap';
		}

		/**
		 * Register and enqueue the combined stylesheet.
		 *
		 * Re-registers on each change so that a second block on the same page extends
		 * the single existing request rather than adding another stylesheet.
		 */
		private static function enqueue()
		{
			$url = self::build_url();
			if ('' === $url) {
				return;
			}

			if (wp_style_is(self::HANDLE, 'registered')) {
				wp_deregister_style(self::HANDLE);
			}

			// null version: Google rejects nothing, but an appended ?ver= is noise.
			wp_register_style(self::HANDLE, $url, array(), null);
			wp_enqueue_style(self::HANDLE);
		}
	}
	Counter_Font_Loader::register();
}
