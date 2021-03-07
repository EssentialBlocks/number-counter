import * as prefixObjs from "./components/constants/typographyPrefixConstants";
import { generateTypographyAttributes } from "./components/helpers";

export default {
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},

	// randomNumber attribute for making unique className
	randomNumber: {
		type: "number",
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),

	// MOBnumberFontFamily: { type: "string" },
	// MOBnumberFontSize: { type: "number" },
	// MOBnumberFontWeight: { type: "string" },
	// MOBnumberLetterSpacing: { type: "number" },
	// MOBnumberLetterSpacingUnit: { type: "string" },
	// MOBnumberLineHeight: { type: "number" },
	// MOBnumberLineHeightUnit: { type: "string" },
	// MOBnumberSizeUnit: { type: "string" },
	// MOBnumberTextDecoration: { type: "string" },
	// MOBnumberTextTransform: { type: "string" },
	// MOBprefixFontFamily: { type: "string" },
	// MOBprefixFontSize: { type: "number" },
	// MOBprefixFontWeight: { type: "string" },
	// MOBprefixLetterSpacing: { type: "number" },
	// MOBprefixLetterSpacingUnit: { type: "string" },
	// MOBprefixLineHeight: { type: "number" },
	// MOBprefixLineHeightUnit: { type: "string" },
	// MOBprefixSizeUnit: { type: "string" },
	// MOBprefixTextDecoration: { type: "string" },
	// MOBprefixTextTransform: { type: "string" },
	// MOBsuffixFontFamily: { type: "string" },
	// MOBsuffixFontSize: { type: "number" },
	// MOBsuffixFontWeight: { type: "string" },
	// MOBsuffixLetterSpacing: { type: "number" },
	// MOBsuffixLetterSpacingUnit: { type: "string" },
	// MOBsuffixLineHeight: { type: "number" },
	// MOBsuffixLineHeightUnit: { type: "string" },
	// MOBsuffixSizeUnit: { type: "string" },
	// MOBsuffixTextDecoration: { type: "string" },
	// MOBsuffixTextTransform: { type: "string" },
	// MOBtitleFontFamily: { type: "string" },
	// MOBtitleFontSize: { type: "number" },
	// MOBtitleFontWeight: { type: "string" },
	// MOBtitleLetterSpacing: { type: "number" },
	// MOBtitleLetterSpacingUnit: { type: "string" },
	// MOBtitleLineHeight: { type: "number" },
	// MOBtitleLineHeightUnit: { type: "string" },
	// MOBtitleSizeUnit: { type: "string" },
	// MOBtitleTextDecoration: { type: "string" },
	// MOBtitleTextTransform: { type: "string" },
	// TABnumberFontFamily: { type: "string" },
	// TABnumberFontSize: { type: "number" },
	// TABnumberFontWeight: { type: "string" },
	// TABnumberLetterSpacing: { type: "number" },
	// TABnumberLetterSpacingUnit: { type: "string" },
	// TABnumberLineHeight: { type: "number" },
	// TABnumberLineHeightUnit: { type: "string" },
	// TABnumberSizeUnit: { type: "string" },
	// TABnumberTextDecoration: { type: "string" },
	// TABnumberTextTransform: { type: "string" },
	// TABprefixFontFamily: { type: "string" },
	// TABprefixFontSize: { type: "number" },
	// TABprefixFontWeight: { type: "string" },
	// TABprefixLetterSpacing: { type: "number" },
	// TABprefixLetterSpacingUnit: { type: "string" },
	// TABprefixLineHeight: { type: "number" },
	// TABprefixLineHeightUnit: { type: "string" },
	// TABprefixSizeUnit: { type: "string" },
	// TABprefixTextDecoration: { type: "string" },
	// TABprefixTextTransform: { type: "string" },
	// TABsuffixFontFamily: { type: "string" },
	// TABsuffixFontSize: { type: "number" },
	// TABsuffixFontWeight: { type: "string" },
	// TABsuffixLetterSpacing: { type: "number" },
	// TABsuffixLetterSpacingUnit: { type: "string" },
	// TABsuffixLineHeight: { type: "number" },
	// TABsuffixLineHeightUnit: { type: "string" },
	// TABsuffixSizeUnit: { type: "string" },
	// TABsuffixTextDecoration: { type: "string" },
	// TABsuffixTextTransform: { type: "string" },
	// TABtitleFontFamily: { type: "string" },
	// TABtitleFontSize: { type: "number" },
	// TABtitleFontWeight: { type: "string" },
	// TABtitleLetterSpacing: { type: "number" },
	// TABtitleLetterSpacingUnit: { type: "string" },
	// TABtitleLineHeight: { type: "number" },
	// TABtitleLineHeightUnit: { type: "string" },
	// TABtitleSizeUnit: { type: "string" },
	// TABtitleTextDecoration: { type: "string" },
	// TABtitleTextTransform: { type: "string" },
	// numberFontFamily: { type: "string" },
	// numberFontSize: { type: "number" },
	// numberFontWeight: { type: "string", default: "400" },
	// numberLetterSpacing: { type: "number", default: 0 },
	// numberLetterSpacingUnit: { type: "string", default: "px" },
	// numberLineHeight: { type: "number", default: 1 },
	// numberLineHeightUnit: { type: "string", default: "em" },
	// numberSizeUnit: { type: "string", default: "px" },
	// numberTextDecoration: { type: "string", default: "initial" },
	// numberTextTransform: { type: "string", default: "none" },
	// prefixFontFamily: { type: "string" },
	// prefixFontSize: { type: "number" },
	// prefixFontWeight: { type: "string", default: "400" },
	// prefixLetterSpacing: { type: "number", default: 0 },
	// prefixLetterSpacingUnit: { type: "string", default: "px" },
	// prefixLineHeight: { type: "number", default: 1 },
	// prefixLineHeightUnit: { type: "string", default: "em" },
	// prefixSizeUnit: { type: "string", default: "px" },
	// prefixTextDecoration: { type: "string", default: "initial" },
	// prefixTextTransform: { type: "string", default: "none" },
	// suffixFontFamily: { type: "string" },
	// suffixFontSize: { type: "number" },
	// suffixFontWeight: { type: "string", default: "400" },
	// suffixLetterSpacing: { type: "number", default: 0 },
	// suffixLetterSpacingUnit: { type: "string", default: "px" },
	// suffixLineHeight: { type: "number", default: 1 },
	// suffixLineHeightUnit: { type: "string", default: "em" },
	// suffixSizeUnit: { type: "string", default: "px" },
	// suffixTextDecoration: { type: "string", default: "initial" },
	// suffixTextTransform: { type: "string", default: "none" },
	// titleFontFamily: { type: "string" },
	// titleFontSize: { type: "number" },
	// titleFontWeight: { type: "string", default: "400" },
	// titleLetterSpacing: { type: "number", default: 0 },
	// titleLetterSpacingUnit: { type: "string", default: "px" },
	// titleLineHeight: { type: "number", default: 1 },
	// titleLineHeightUnit: { type: "string", default: "em" },
	// titleSizeUnit: { type: "string", default: "px" },
	// titleTextDecoration: { type: "string", default: "initial" },
	// titleTextTransform: { type: "string", default: "none" },

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
	},
	layoutLabel: {
		type: "string",
		default: "Default",
	},

	// color attributes ⬇
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

	TABtitleColor: {
		type: "string",
	},
	TABnumberColor: {
		type: "string",
	},
	TABnumPrefixColor: {
		type: "string",
	},
	TABnumSuffixColor: {
		type: "string",
	},

	MOBtitleColor: {
		type: "string",
	},
	MOBnumberColor: {
		type: "string",
	},
	MOBnumPrefixColor: {
		type: "string",
	},
	MOBnumSuffixColor: {
		type: "string",
	},

	// spacing attributes ⬇
	gapNumTitle: {
		type: "number",
	},
	gapNumPrefix: {
		type: "number",
	},
	gapNumSuffix: {
		type: "number",
	},

	TABgapNumTitle: {
		type: "number",
	},
	TABgapNumPrefix: {
		type: "number",
	},
	TABgapNumSuffix: {
		type: "number",
	},

	MOBgapNumTitle: {
		type: "number",
	},
	MOBgapNumPrefix: {
		type: "number",
	},
	MOBgapNumSuffix: {
		type: "number",
	},

	// margin padding attributes ⬇
	marginUnit: {
		type: "string",
		default: "px",
	},
	marginTop: {
		type: "string",
	},
	marginRight: {
		type: "string",
	},
	marginBottom: {
		type: "string",
	},
	marginLeft: {
		type: "string",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	paddingTop: {
		type: "string",
		default: "50",
	},
	paddingRight: {
		type: "string",
		default: "10",
	},
	paddingBottom: {
		type: "string",
		default: "50",
	},
	paddingLeft: {
		type: "string",
		default: "10",
	},

	TABmarginUnit: {
		type: "string",
	},
	TABmarginTop: {
		type: "string",
	},
	TABmarginRight: {
		type: "string",
	},
	TABmarginBottom: {
		type: "string",
	},
	TABmarginLeft: {
		type: "string",
	},
	TABpaddingUnit: {
		type: "string",
	},
	TABpaddingTop: {
		type: "string",
	},
	TABpaddingRight: {
		type: "string",
	},
	TABpaddingBottom: {
		type: "string",
	},
	TABpaddingLeft: {
		type: "string",
	},

	MOBmarginUnit: {
		type: "string",
	},
	MOBmarginTop: {
		type: "string",
	},
	MOBmarginRight: {
		type: "string",
	},
	MOBmarginBottom: {
		type: "string",
	},
	MOBmarginLeft: {
		type: "string",
	},
	MOBpaddingUnit: {
		type: "string",
	},
	MOBpaddingTop: {
		type: "string",
	},
	MOBpaddingRight: {
		type: "string",
	},
	MOBpaddingBottom: {
		type: "string",
	},
	MOBpaddingLeft: {
		type: "string",
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
		default: "linear-gradient(45deg,#8200ff,#ff0071)",
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

	TABbackgroundType: {
		type: "string",
	},
	TABbackgroundColor: {
		type: "string",
	},
	TABgradientColor: {
		type: "string",
	},
	TABbackgroundSize: {
		type: "string",
	},
	TABimageURL: {
		type: "string",
	},
	TABimageID: {
		type: "string",
	},

	MOBbackgroundType: {
		type: "string",
	},
	MOBbackgroundColor: {
		type: "string",
	},
	MOBgradientColor: {
		type: "string",
	},
	MOBbackgroundSize: {
		type: "string",
	},
	MOBimageURL: {
		type: "string",
	},
	MOBimageID: {
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
};
