import * as prefixObjs from "./constants/typographyPrefixConstants";
import { wrapperMargin, wrapperPadding } from "./constants/dimensionsConstants";
import { WrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";
import { rgNumTitle, rgNumPrefix, rgNumSuffix } from "./constants/rangeNames";
import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes,
} from "../util/helpers";

export default {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "Desktop",
	},

	// blockId attribute for making unique className and other uniqueness ⬇
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},

	// blockMeta is for keeping all the styles ⬇
	blockMeta: {
		type: "object",
	},

	// counter settings attributes ⬇
	startValue: {
		type: "string",
		default: "0",
	},
	target: {
		type: "string",
		default: "50000",
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

	// // spacing attributes ⬇
	// gapNumTitle: {
	// 	type: "number",
	// },
	// gapNumPrefix: {
	// 	type: "number",
	// },
	// gapNumSuffix: {
	// 	type: "number",
	// },

	// TABgapNumTitle: {
	// 	type: "number",
	// },
	// TABgapNumPrefix: {
	// 	type: "number",
	// },
	// TABgapNumSuffix: {
	// 	type: "number",
	// },

	// MOBgapNumTitle: {
	// 	type: "number",
	// },
	// MOBgapNumPrefix: {
	// 	type: "number",
	// },
	// MOBgapNumSuffix: {
	// 	type: "number",
	// },

	// // background attributes ⬇
	// backgroundType: {
	// 	type: "string",
	// 	default: "gradient",
	// },
	// backgroundColor: {
	// 	type: "string",
	// },
	// gradientColor: {
	// 	type: "string",
	// 	default: "linear-gradient(45deg,#7967ff,#c277f2)",
	// },
	// backgroundSize: {
	// 	type: "string",
	// },
	// imageURL: {
	// 	type: "string",
	// },
	// imageID: {
	// 	type: "string",
	// },

	// TABbackgroundType: {
	// 	type: "string",
	// },
	// TABbackgroundColor: {
	// 	type: "string",
	// },
	// TABgradientColor: {
	// 	type: "string",
	// },
	// TABbackgroundSize: {
	// 	type: "string",
	// },
	// TABimageURL: {
	// 	type: "string",
	// },
	// TABimageID: {
	// 	type: "string",
	// },

	// MOBbackgroundType: {
	// 	type: "string",
	// },
	// MOBbackgroundColor: {
	// 	type: "string",
	// },
	// MOBgradientColor: {
	// 	type: "string",
	// },
	// MOBbackgroundSize: {
	// 	type: "string",
	// },
	// MOBimageURL: {
	// 	type: "string",
	// },
	// MOBimageID: {
	// 	type: "string",
	// },

	// // border attributes ⬇
	// borderColor: {
	// 	type: "string",
	// },
	// borderStyle: {
	// 	type: "string",
	// 	default: "solid",
	// },
	// borderWidth: {
	// 	type: "number",
	// },
	// borderRadius: {
	// 	type: "number",
	// },
	// radiusUnit: {
	// 	type: "string",
	// 	default: "px",
	// },

	// // shadow attributes  ⬇
	// hOffset: {
	// 	type: "number",
	// },
	// vOffset: {
	// 	type: "number",
	// },
	// blur: {
	// 	type: "number",
	// },
	// spread: {
	// 	type: "number",
	// },
	// shadowColor: {
	// 	type: "string",
	// },
	// inset: {
	// 	type: "boolean",
	// 	default: false,
	// },
	// shadowType: {
	// 	type: "string",
	// 	default: "normal",
	// },
	// hoverHOffset: {
	// 	type: "number",
	// },
	// hoverVOffset: {
	// 	type: "number",
	// },
	// hoverBlur: {
	// 	type: "number",
	// },
	// hoverSpread: {
	// 	type: "number",
	// },
	// hoverShadowColor: {
	// 	type: "string",
	// },
	// isHover: {
	// 	type: "boolean",
	// 	default: false,
	// },
	// wrapperTransitionTime: {
	// 	type: "string",
	// 	default: "500",
	// },

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),

	// margin padding attributes ⬇
	...generateDimensionsAttributes(wrapperMargin),
	...generateDimensionsAttributes(wrapperPadding, {
		top: 30,
		bottom: 30,
		right: 10,
		left: 10,
		isLinked: false,
	}),
	// Background attributes ⬇
	...generateBackgroundAttributes(WrapBg, {
		isBgDefaultGradient: true,
		defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
	}),
	// border & shadow attributes ⬇
	...generateBorderShadowAttributes(wrpBdShadow),

	// Responsive Range Controller attributes
	...generateResponsiveRangeAttributes(rgNumTitle, {
		defaultRange: 20,
	}),
	...generateResponsiveRangeAttributes(rgNumPrefix),
	...generateResponsiveRangeAttributes(rgNumSuffix),
};
