import * as prefixObjs from "./constants/typographyPrefixConstants";
import { generateTypographyAttributes } from "./helpers";

export default {
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},

	// uniqueIdNumber attribute for making unique className
	uniqueIdNumber: {
		type: "number",
	},
	blockId: {
		type: "string"
	},
	blockRoot: {
		type: 'string',
		default: 'essential_block'
	},
	blockMeta: {
		type: 'string',
		default: '',
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),

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
	},

	// color attributes ⬇
	titleColor: {
		type: "string",
		// default: "#566162",
	},
	numberColor: {
		type: "string",
		// default: "#3074ff",
	},
	numPrefixColor: {
		type: "string",
		// default: "#3074ff",
	},
	numSuffixColor: {
		type: "string",
		// default: "#3074ff",
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
		default: 20,
	},
	gapNumPrefix: {
		type: "number",
		default: 0,
	},
	gapNumSuffix: {
		type: "number",
		default: 0,
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
		type: "number",
	},
	marginRight: {
		type: "number",
	},
	marginBottom: {
		type: "number",
	},
	marginLeft: {
		type: "number",
	},

	paddingUnit: {
		type: "string",
		default: "px",
	},

	paddingTop: {
		type: "number",
		default: 30,
	},
	paddingRight: {
		type: "number",
		default: 10,
	},
	paddingBottom: {
		type: "number",
		default: 30,
	},
	paddingLeft: {
		type: "number",
		default: 10,
	},

	TABmarginUnit: {
		type: "string",
	},

	TABmarginTop: {
		type: "number",
	},
	TABmarginRight: {
		type: "number",
	},
	TABmarginBottom: {
		type: "number",
	},
	TABmarginLeft: {
		type: "number",
	},

	TABpaddingUnit: {
		type: "string",
	},

	TABpaddingTop: {
		type: "number",
	},
	TABpaddingRight: {
		type: "number",
	},
	TABpaddingBottom: {
		type: "number",
	},
	TABpaddingLeft: {
		type: "number",
	},

	MOBmarginUnit: {
		type: "string",
	},

	MOBmarginTop: {
		type: "number",
	},
	MOBmarginRight: {
		type: "number",
	},
	MOBmarginBottom: {
		type: "number",
	},
	MOBmarginLeft: {
		type: "number",
	},

	MOBpaddingUnit: {
		type: "string",
	},

	MOBpaddingTop: {
		type: "number",
	},
	MOBpaddingRight: {
		type: "number",
	},
	MOBpaddingBottom: {
		type: "number",
	},
	MOBpaddingLeft: {
		type: "number",
	},

	// background attributes ⬇
	backgroundType: {
		type: "string",
		default: "fill",
	},
	backgroundColor: {
		type: "string",
	},
	gradientColor: {
		type: "string",
		default: "linear-gradient(45deg,#8200ff,#ff0071)",
	},
	backgroundSize: {
		type: "string",
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
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	borderWidth: {
		type: "number",
	},
	borderRadius: {
		type: "number",
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
