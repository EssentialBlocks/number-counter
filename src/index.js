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

registerBlockType("number-counter/number-counter", {
	apiVersion: 2,
	title: __("Number Counter", "number-counter"),
	description: __(
		`Put spotlight in important data using Counter block for Gutenberg. Customize the designs by adding proper Animation effects with flexibility and many more!`,
		"block"
	),
	category: "widgets",
	icon,
	attributes,
	keywords: [
		__("EB counter", "number-counter"),
		__("counter", "number-counter"),
		__("counter up", "number-counter"),
	],
	edit: Edit,
	save,
});
