export default {
	// counter settings attributes ⬇
	startValue: {
		type: "string",
		default: "0",
	},
	target: {
		type: "string",
		default: "5000",
	},
	duration: {
		type: "string",
		default: "1000",
	},
	counterTitle: {
		type: "string",
		default: "Active Users",
	},
	counterPrefix: {
		type: "string",
		default: "",
	},
	counterSuffix: {
		type: "string",
		default: "+",
	},
	isShowSeparator: {
		type: "boolean",
		default: true,
	},
	separator: {
		type: "string",
		default: ",",
	},
	separastorSelectLabel: {
		type: "string",
		default: "Default",
	},
	wrapperFlexDirection: {
		type: "string",
		default: "column",
	},
	layoutLabel: {
		type: "string",
		default: "Default",
	},
	titleColor: {
		type: "string",
		default: "#566162",
	},
	numberColor: {
		type: "string",
		default: "#3074ff",
	},
	numPrefixColor: {
		type: "string",
		default: "#3074ff",
	},
	numSuffixColor: {
		type: "string",
		default: "#3074ff",
	},

	// spacing attributes ⬇
	gapNumTitle: {
		type: "number",
		default: 30,
	},
	gapNumPrefix: {
		type: "number",
	},
	gapNumSuffix: {
		type: "number",
	},

	// margin padding attributes ⬇
	marginUnit: {
		type: "string",
		default: "px",
	},
	marginTop: {
		type: "string",
		default: "0",
	},
	marginRight: {
		type: "string",
		default: "0",
	},
	marginBottom: {
		type: "string",
		default: "0",
	},
	marginLeft: {
		type: "string",
		default: "0",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	paddingTop: {
		type: "string",
		default: "0",
	},
	paddingRight: {
		type: "string",
		default: "0",
	},
	paddingBottom: {
		type: "string",
		default: "10",
	},
	paddingLeft: {
		type: "string",
		default: "0",
	},

	// background attributes ⬇
	backgroundType: {
		type: "string",
		default: "fill",
	},
	backgroundColor: {
		type: "string",
		default: "transparent",
	},
	gradientColor: {
		type: "string",
		default: "linear-gradient(45deg,#eef2f3,#8e92ab)",
	},
	backgroundSize: {
		type: "string",
		default: "cover",
	},
	imageURL: {
		type: "string",
	},
	imageID: {
		type: "string",
	},

	// border attributes ⬇
	borderColor: {
		type: "string",
		default: "#000000",
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	borderWidth: {
		type: "number",
		default: 0,
	},
	borderRadius: {
		type: "number",
		default: 0,
	},
	radiusUnit: {
		type: "string",
		default: "px",
	},

	// shadow attributes  ⬇
	hOffset: {
		type: "number",
	},
	vOffset: {
		type: "number",
	},
	blur: {
		type: "number",
	},
	spread: {
		type: "number",
	},
	shadowColor: {
		type: "string",
	},
	inset: {
		type: "boolean",
		default: false,
	},
	shadowType: {
		type: "string",
		default: "normal",
	},
	hoverHOffset: {
		type: "number",
	},
	hoverVOffset: {
		type: "number",
	},
	hoverBlur: {
		type: "number",
	},
	hoverSpread: {
		type: "number",
	},
	hoverShadowColor: {
		type: "string",
	},
	hoverInset: {
		type: "boolean",
		default: false,
	},
	isHover: {
		type: "boolean",
		default: false,
	},
	wrapperTransitionTime: {
		type: "string",
		default: "500",
	},

	// Typography Attributes  ⬇
	// title typography attributes  ⬇
	titleFontFamily: {
		type: "string",
	},
	titleSizeUnit: {
		type: "string",
		default: "px",
	},
	titleFontSize: {
		type: "number",
	},
	titleFontWeight: {
		type: "string",
		default: "400",
	},
	titleTextTransform: {
		type: "string",
		default: "none",
	},
	titleTextDecoration: {
		type: "string",
		default: "initial",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLetterSpacing: {
		type: "number",
		default: 0,
	},
	titleLineHeightUnit: {
		type: "string",
		default: "em",
	},
	titleLineHeight: {
		type: "number",
		default: 1,
	},

	// number typography attributes  ⬇
	numberFontFamily: {
		type: "string",
	},
	numberSizeUnit: {
		type: "string",
		default: "px",
	},
	numberFontSize: {
		type: "number",
	},
	numberFontWeight: {
		type: "string",
		default: "400",
	},
	numberTextTransform: {
		type: "string",
		default: "none",
	},
	numberTextDecoration: {
		type: "string",
		default: "initial",
	},
	numberLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	numberLetterSpacing: {
		type: "number",
		default: 0,
	},
	numberLineHeightUnit: {
		type: "string",
		default: "em",
	},
	numberLineHeight: {
		type: "number",
		default: 1,
	},

	// prefix typography attributes  ⬇
	prefixFontFamily: {
		type: "string",
	},
	prefixSizeUnit: {
		type: "string",
		default: "px",
	},
	prefixFontSize: {
		type: "number",
	},
	prefixFontWeight: {
		type: "string",
		default: "400",
	},
	prefixTextTransform: {
		type: "string",
		default: "none",
	},
	prefixTextDecoration: {
		type: "string",
		default: "initial",
	},
	prefixLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	prefixLetterSpacing: {
		type: "number",
		default: 0,
	},
	prefixLineHeightUnit: {
		type: "string",
		default: "em",
	},
	prefixLineHeight: {
		type: "number",
		default: 1,
	},

	// suffix typography attributes  ⬇
	suffixFontFamily: {
		type: "string",
	},
	suffixSizeUnit: {
		type: "string",
		default: "px",
	},
	suffixFontSize: {
		type: "number",
	},
	suffixFontWeight: {
		type: "string",
		default: "400",
	},
	suffixTextTransform: {
		type: "string",
		default: "none",
	},
	suffixTextDecoration: {
		type: "string",
		default: "initial",
	},
	suffixLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	suffixLetterSpacing: {
		type: "number",
		default: 0,
	},
	suffixLineHeightUnit: {
		type: "string",
		default: "em",
	},
	suffixLineHeight: {
		type: "number",
		default: 1,
	},
};
