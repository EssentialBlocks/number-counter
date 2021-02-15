const { __ } = wp.i18n;

export const SEPARATOR_OPTIONS = [
	{ label: __("Default"), value: "Default" },
	{ label: __("Dot"), value: "Dot" },
	{ label: __("Space"), value: "Space" },
];

export const LAYOUT_OPTIONS = [
	{ label: __("Default"), value: "Default" },
	{ label: __("Reverse"), value: "Reverse" },
];

export const FONT_WEIGHTS = [
	{ label: __("100"), value: "100" },
	{ label: __("200"), value: "200" },
	{ label: __("300"), value: "300" },
	{ label: __("400"), value: "400" },
	{ label: __("500"), value: "500" },
	{ label: __("600"), value: "600" },
	{ label: __("700"), value: "700" },
	{ label: __("800"), value: "800" },
	{ label: __("900"), value: "900" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];

export const FONT_SIZE_UNITS = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "%", value: "%" },
];

export const LETTER_SPACING_LINE_HEIGHT_UNITS = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
];

export const BACKGROUND_TYPES = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Gradient"), value: "gradient" },
	{ label: __("Image"), value: "image" },
];

export const BACKGROUND_SIZES = [
	{ label: __("Auto"), value: "auto" },
	{ label: __("Cover"), value: "cover" },
	{ label: __("Contain"), value: "contain" },
];

export const BORDER_STYLES = [
	{ label: __("None"), value: "none" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];

export const SHADOW_HOVER_OPTIONS = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];
