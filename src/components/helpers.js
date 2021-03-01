// function to generate typography attributes for multiple typography control based on the array of prefix
export const generateTypographyAttributes = (prefixArray) => {
	const templateForTypographyAttributes = `{
		"_prefix_FontFamily":{
			"type":"string"
		},
		"_prefix_SizeUnit":{
			"type":"string",
			"default":"px"
		},
		"_prefix_FontSize":{
			"type":"number"
		},
		"_prefix_FontWeight":{
			"type":"string",
			"default":"400"
		},
		"_prefix_TextTransform":{
			"type":"string",
			"default":"none"
		},
		"_prefix_TextDecoration":{
			"type":"string",
			"default":"initial"
		},
		"_prefix_LetterSpacingUnit":{
			"type":"string",
			"default":"px"
		},
		"_prefix_LetterSpacing":{
			"type":"number",
			"default":0
		},
		"_prefix_LineHeightUnit":{
			"type":"string",
			"default":"em"
		},
		"_prefix_LineHeight":{
			"type":"number",
			"default":1
		},
		"TAB_prefix_FontFamily":{
			"type":"string"
		},
		"TAB_prefix_SizeUnit":{
			"type":"string"
		},
		"TAB_prefix_FontSize":{
			"type":"number"
		},
		"TAB_prefix_FontWeight":{
			"type":"string"
		},
		"TAB_prefix_TextTransform":{
			"type":"string"
		},
		"TAB_prefix_TextDecoration":{
			"type":"string"
		},
		"TAB_prefix_LetterSpacingUnit":{
			"type":"string"
		},
		"TAB_prefix_LetterSpacing":{
			"type":"number"
		},
		"TAB_prefix_LineHeightUnit":{
			"type":"string"
		},
		"TAB_prefix_LineHeight":{
			"type":"number"
		},
		"MOB_prefix_FontFamily":{
			"type":"string"
		},
		"MOB_prefix_SizeUnit":{
			"type":"string"
		},
		"MOB_prefix_FontSize":{
			"type":"number"
		},
		"MOB_prefix_FontWeight":{
			"type":"string"
		},
		"MOB_prefix_TextTransform":{
			"type":"string"
		},
		"MOB_prefix_TextDecoration":{
			"type":"string"
		},
		"MOB_prefix_LetterSpacingUnit":{
			"type":"string"
		},
		"MOB_prefix_LetterSpacing":{
			"type":"number"
		},
		"MOB_prefix_LineHeightUnit":{
			"type":"string"
		},
		"MOB_prefix_LineHeight":{
			"type":"number"
		}
		
	}`;

	return prefixArray.reduce((total, current) => {
		const result = templateForTypographyAttributes.replace(
			/_prefix_/g,
			current
		);
		return {
			...total,
			...JSON.parse(result),
		};
	}, {});
};

// function to generate typography styles for an element based on it's prefix
export const generateTypographyStyles = (
	attributes,
	prefix,
	defaultFontSize = false
) => {
	return {
		fontFamily: attributes[`${prefix}FontFamily`]
			? attributes[`${prefix}FontFamily`]
			: "inherit",
		// fontSize: defaultFontSize
		// 	? `${attributes[`${prefix}FontSize`] || defaultFontSize}${
		// 			attributes[`${prefix}SizeUnit`]
		// 	  }`
		// 	: attributes[`${prefix}FontSize`]
		// 	? `${attributes[`${prefix}FontSize`]}${attributes[`${prefix}SizeUnit`]}`
		// 	: "inherit",

		fontSize: attributes[`${prefix}FontSize`]
			? `${attributes[`${prefix}FontSize`]}${attributes[`${prefix}SizeUnit`]}`
			: defaultFontSize
			? `${defaultFontSize}${attributes[`${prefix}SizeUnit`]}`
			: "inherit",

		fontWeight: attributes[`${prefix}FontWeight`],
		textTransform: attributes[`${prefix}TextTransform`],
		textDecoration: attributes[`${prefix}TextDecoration`],
		letterSpacing: `${attributes[`${prefix}LetterSpacing`]}${
			attributes[`${prefix}LetterSpacingUnit`]
		} `,
		lineHeight: `${attributes[`${prefix}LineHeight`]}${
			attributes[`${prefix}LineHeightUnit`]
		} `,
	};
};

// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown
export const textInsideForEdit = (value, isShowSeparator, separator) =>
	isShowSeparator
		? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
		: value.toString();

export const generateRandomNumber = () =>
	Math.floor(Math.random() * 1000000000);
