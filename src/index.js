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

registerBlockType("create-block/counter-up-block", {
	apiVersion: 2,
	title: __("Counter Up", "block"),
	description: __(
		"Put spotlight on your statistics using animated Counter-Up for Gutenberg ",
		"block"
	),
	category: "widgets",
	icon,
	attributes,
	keywords: [
		__("EB counter up", "essential-blocks"),
		__("counter up", "essential-blocks"),
		__("counter", "essential-blocks"),
	],
	edit: Edit,
	save,
});
