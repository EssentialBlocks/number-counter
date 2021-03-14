import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";

registerBlockType("essential-blocks-separate/counter", {
	apiVersion: 2,
	title: __("Counter", "block"),
	description: __(
		`Put spotlight in important data using Counter block for Gutenberg. Customize the designs by adding proper Animation effects with flexibility and many more!`,
		"block"
	),
	category: "widgets",
	icon,
	attributes,
	keywords: [
		__("EB counter", "essential-blocks"),
		__("counter", "essential-blocks"),
		__("counter up", "essential-blocks"),
	],
	edit: Edit,
	save,
});
