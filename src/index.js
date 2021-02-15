/**
 * WordPress depencencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import icon from "./icon";
// import example from "./example";
import "./style.scss";

registerBlockType("block/counter-up-block", {
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
	save: Save,
	// example: example,
});
