/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;
const { useEffect, useRef } = wp.element;

const { select } = wp.data;

/**
 * Internal dependencies
 */

import "./editor.scss";

import Inspector from "./inspector";
import {
	typoPrefix_title,
	typoPrefix_number,
	typoPrefix_numPrefix,
	typoPrefix_numSuffix,
} from "./constants/typographyPrefixConstants";
import { wrapperPadding, wrapperMargin } from "./constants/dimensionsConstants";

import { WrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";
import { rgNumTitle, rgNumPrefix, rgNumSuffix } from "./constants/rangeNames";
import {
	textInsideForEdit,
	softMinifyCssStrings,
	hasVal,
	isCssExists,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBackgroundControlStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

const Edit = (props) => {
	const { isSelected, attributes, setAttributes, clientId } = props;

	const {
		// responsive control attributes ⬇
		resOption,

		// blockId attribute for making unique className and other uniqueness ⬇
		blockId,

		// blockMeta is for keeping all the styles ⬇
		blockMeta,

		// counter settings attributes ⬇
		target,
		duration,
		counterTitle,
		counterSuffix,
		counterPrefix,
		startValue,
		isShowSeparator,
		separator,
		wrapperFlexDirection,

		// counter color attributes ⬇
		titleColor = "#fff",
		numberColor = "#fff",
		numPrefixColor,
		numSuffixColor,

		// spacing attributes ⬇
		gapNumTitle = 20,
		gapNumPrefix,
		gapNumSuffix,

		TABgapNumTitle,
		TABgapNumPrefix,
		TABgapNumSuffix,

		MOBgapNumTitle,
		MOBgapNumPrefix,
		MOBgapNumSuffix,

		// // background attributes ⬇
		// backgroundType,
		// imageURL,
		// gradientColor,
		// backgroundSize,
		// backgroundColor,

		// // border attributes ⬇
		// borderWidth,
		// borderStyle,
		// borderColor,
		// borderRadius,
		// radiusUnit,

		// // shadow attributes  ⬇
		// shadowColor,
		// hOffset = 0,
		// vOffset = 0,
		// blur = 0,
		// spread = 0,
		// inset,

		// hoverShadowColor = shadowColor,
		// hoverHOffset = hOffset,
		// hoverVOffset = vOffset,
		// hoverBlur = blur,
		// hoverSpread = spread,

		// // transition attributes ⬇
		// wrapperTransitionTime,
	} = attributes;

	const counterRef = useRef(null);

	const CounterAnimation = () => {
		const time =
			duration && Math.floor(Math.abs(duration)) > 499
				? Math.floor(Math.abs(duration)) - 200
				: 300;
		const endTarget = target ? Math.floor(Math.abs(target)) : 0;
		let cleanStartValue =
			startValue && Math.floor(Math.abs(startValue)) < endTarget
				? Math.floor(Math.abs(startValue))
				: 0;
		const increaseBy = ((endTarget - cleanStartValue) / time) * 53;
		let timeoutIdInside;
		const timeoutId = setTimeout(() => {
			function updateCount() {
				cleanStartValue += increaseBy;
				counterRef.current.innerText = textInsideForEdit(
					Math.floor(cleanStartValue),
					isShowSeparator,
					separator
				);
				if (cleanStartValue < endTarget) {
					timeoutIdInside = setTimeout(() => {
						updateCount();
					}, 53);
				} else {
					counterRef.current.innerText = textInsideForEdit(
						endTarget,
						isShowSeparator,
						separator
					);
				}
			}
			updateCount();
		}, 200);
		return () => {
			clearTimeout(timeoutId);
			clearTimeout(timeoutIdInside);
		};
	};

	useEffect(() => CounterAnimation(), [
		target,
		duration,
		startValue,
		separator,
		isShowSeparator,
	]);

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		const BLOCK_PREFIX = "eb-counter";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// CSS/styling Codes Starts from Here
	//
	// function to generate typography styles for an element based on it's prefix

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
		defaultFontSize: 40,
	});

	const {
		typoStylesDesktop: numberTypoStylesDesktop,
		typoStylesTab: numberTypoStylesTab,
		typoStylesMobile: numberTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_number,
		defaultFontSize: 40,
	});

	const {
		typoStylesDesktop: numPrefixTypoStylesDesktop,
		typoStylesTab: numPrefixTypoStylesTab,
		typoStylesMobile: numPrefixTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_numPrefix,
	});

	const {
		typoStylesDesktop: numSuffixTypoStylesDesktop,
		typoStylesTab: numSuffixTypoStylesTab,
		typoStylesMobile: numSuffixTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_numSuffix,
	});

	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: wrapperMargin,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: wrapperPadding,
		styleFor: "padding",
	});

	const {
		backgroundStylesDesktop,
		hoverBackgroundStylesDesktop,
		backgroundStylesTab,
		hoverBackgroundStylesTab,
		backgroundStylesMobile,
		hoverBackgroundStylesMobile,
		overlayStylesDesktop,
		hoverOverlayStylesDesktop,
		overlayStylesTab,
		hoverOverlayStylesTab,
		overlayStylesMobile,
		hoverOverlayStylesMobile,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WrapBg,
	});

	const {
		styesDesktop: bdShadowStyesDesktop,
		styesTab: bdShadowStyesTab,
		styesMobile: bdShadowStyesMobile,
		stylesHoverDesktop: bdShadowStylesHoverDesktop,
		stylesHoverTab: bdShadowStylesHoverTab,
		stylesHoverMobile: bdShadowStylesHoverMobile,
	} = generateBorderShadowStyles({
		controlName: wrpBdShadow,
		attributes,
	});

	const {
		rangeStylesDesktop: numTitleGapDesktop,
		rangeStylesTab: numTitleGapTab,
		rangeStylesMobile: numTitleGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: rgNumTitle,
		property: "gap",
		attributes,
	});

	const {
		rangeStylesDesktop: numPrefixGapDesktop,
		rangeStylesTab: numPrefixGapTab,
		rangeStylesMobile: numPrefixGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: rgNumPrefix,
		property: "padding-left",
		attributes,
	});

	const {
		rangeStylesDesktop: numSuffixGapDesktop,
		rangeStylesTab: numSuffixGapTab,
		rangeStylesMobile: numSuffixGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: rgNumSuffix,
		property: "padding-right",
		attributes,
	});

	const wrapperStylesDesktop = `

	.eb-counter-wrapper.${blockId} .eb-counter-title,
	.eb-counter-wrapper.${blockId} h4.eb-counter-number {
		margin: 0;
		padding: 0;
	}

	.eb-counter-wrapper.${blockId} > * {
		position: relative;
	}	

	.eb-counter-wrapper.${blockId}{
		text-align: center;
		display: flex;

		${wrapperMarginStylesDesktop}
		${wrapperPaddingStylesDesktop}
		
		${numTitleGapDesktop}
		${wrapperFlexDirection ? `flex-direction: ${wrapperFlexDirection};` : " "}
	
		${backgroundStylesDesktop}
		${bdShadowStyesDesktop}
	}


	.eb-counter-wrapper.${blockId}:hover{	
		${hoverBackgroundStylesDesktop}
		${bdShadowStylesHoverDesktop}
	}
	
	.eb-counter-wrapper.${blockId}:before{
		${overlayStylesDesktop}
	}
	
	.eb-counter-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesDesktop}
	}

	`;

	const wrapperStylesTab = `
	.eb-counter-wrapper.${blockId}{
		${wrapperMarginStylesTab}
		${wrapperPaddingStylesTab}
		${backgroundStylesTab}
		${bdShadowStyesTab}

		${numTitleGapTab}
				
	}

	.eb-counter-wrapper.${blockId}:hover{		
		${hoverBackgroundStylesTab}
		${bdShadowStylesHoverTab}
	}
	
	.eb-counter-wrapper.${blockId}:before{
		${overlayStylesTab}
	}
	
	.eb-counter-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesTab}
	}

	`;

	const wrapperStylesMobile = `
	.eb-counter-wrapper.${blockId}{
		${wrapperMarginStylesMobile}
		${wrapperPaddingStylesMobile}
		${backgroundStylesMobile}
		${bdShadowStyesMobile}

		${numTitleGapMobile}

		
	}
	
	.eb-counter-wrapper.${blockId}:hover{		
		${hoverBackgroundStylesMobile}
		${bdShadowStylesHoverMobile}
	}

	.eb-counter-wrapper.${blockId}:before{
		${overlayStylesMobile}
	}
	
	.eb-counter-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesMobile}
	}

	`;

	const numberStylesDesktop = `
	.eb-counter-wrapper.${blockId} .eb-counter-number{
		${numberTypoStylesDesktop}
		${numberColor ? ` color : ${numberColor};` : " "}
		
		${numPrefixGapDesktop}
		${numSuffixGapDesktop}
		
	}
	`;

	const numberStylesTab = `
	.eb-counter-wrapper.${blockId} .eb-counter-number{
		${numberTypoStylesTab}	
			
		${numPrefixGapTab}
		${numSuffixGapTab}

	} `;

	const numberStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-number{
		${numberTypoStylesMobile}
		
		${numPrefixGapMobile}
		${numSuffixGapMobile}

	}`;

	const titleStylesDesktop = `
	.eb-counter-wrapper.${blockId} .eb-counter-title{
		${titleTypoStylesDesktop}
		${titleColor ? `color : ${titleColor};` : " "}
	}
	`;

	const titleStylesTab = `
	.eb-counter-wrapper.${blockId} .eb-counter-title{
		${titleTypoStylesTab}
	}  `;

	const titleStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-title{
		${titleTypoStylesMobile}
	} `;

	const numPrefixStylesDesktop = `
	.eb-counter-wrapper.${blockId} .eb-counter-prefix{
		${numPrefixTypoStylesDesktop}
		${numPrefixColor ? `color : ${numPrefixColor};` : " "}
	}
	`;

	const numPrefixStylesTab = `
	.eb-counter-wrapper.${blockId} .eb-counter-prefix{
		${numPrefixTypoStylesTab}
	}  `;

	const numPrefixStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-prefix{
		${numPrefixTypoStylesMobile}
	}  `;

	const numSuffixStylesDesktop = `
	.eb-counter-wrapper.${blockId} .eb-counter-suffix{
		${numSuffixTypoStylesDesktop}
		${numSuffixColor ? `color : ${numSuffixColor};` : " "}
	}
	`;

	const numSuffixStylesTab = `
	.eb-counter-wrapper.${blockId} .eb-counter-suffix{
		${numSuffixTypoStylesTab}
	} `;

	const numSuffixStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-suffix{
		${numSuffixTypoStylesMobile}
	}

	`;

	const desktopAllStyles = `
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(numberStylesDesktop) ? numberStylesDesktop : " "}
		${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		${isCssExists(numPrefixStylesDesktop) ? numPrefixStylesDesktop : " "}
		${isCssExists(numSuffixStylesDesktop) ? numSuffixStylesDesktop : " "}
	`;

	const tabAllStyles = `
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(numberStylesTab) ? numberStylesTab : " "}
		${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		${isCssExists(numPrefixStylesTab) ? numPrefixStylesTab : " "}
		${isCssExists(numSuffixStylesTab) ? numSuffixStylesTab : " "}
	`;

	const mobileAllStyles = `
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(numberStylesMobile) ? numberStylesMobile : " "}
		${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		${isCssExists(numPrefixStylesMobile) ? numPrefixStylesMobile : " "}
		${isCssExists(numSuffixStylesMobile) ? numSuffixStylesMobile : " "}
	`;

	//
	// CSS/styling Codes Ends Here
	//

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>
			<div className={`${blockId} eb-counter-wrapper`}>
				<h4 className="eb-counter-number">
					<span className="eb-counter-prefix">{counterPrefix}</span>
					<span ref={counterRef} className="eb-counter eb-counter-number">
						0
					</span>
					<span className="eb-counter-suffix">{counterSuffix}</span>
				</h4>
				<RichText
					tagName="h3"
					className="eb-counter-title"
					value={counterTitle}
					formattingControl={["bold", "italic"]}
					onChange={(counterTitle) => setAttributes({ counterTitle })}
				/>
			</div>
		</div>,
	];
};

export default Edit;
