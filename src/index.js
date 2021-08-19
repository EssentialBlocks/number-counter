/**
 * WordPress dependeincies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import { CounterIcon } from "../util/icons";

import metadata from "../block.json";
import "./style.scss";
import attributes from "./attributes";

import example from "./example";

const { name, category } = metadata;

registerBlockType(name, {
	apiVersion: 2,
	title: __("Number Counter", "essential-blocks"),
	icon: CounterIcon,
	description: __(
		`Put spotlight in important data using Counter block for Gutenberg. Customize the designs by adding proper Animation effects with flexibility and many more!`,
		"block"
	),
	category,
	attributes,
	keywords: [
		__("EB number counter", "essential-blocks"),
		__("counter", "essential-blocks"),
		__("counter up", "essential-blocks"),
	],
	edit: Edit,
	save,
	example: example,
});
