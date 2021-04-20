/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from "@wordpress/element";

import "./editor.scss";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import {
	title,
	number,
	numPrefix,
	numSuffix,
} from "./constants/typographyPrefixConstants";

import {
	textInsideForEdit,
	softMinifyCssStrings,
	hasVal,
	isCssExists,
} from "./helpers";

const Edit = (props) => {
	const BLOCK_PREFIX = "eb-counter";
	const unique_id = BLOCK_PREFIX+ "-" + Math.random().toString(36).substr(2, 7);

	const { isSelected, attributes, setAttributes } = props;

	const blockProps = useBlockProps({
		className: "eb-guten-block-main-parrent-wrapper",
	});

	const {
		blockId,
		blockMeta,
		// responsive control attributes ⬇
		resOption,

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
		titleColor,
		numberColor,
		numPrefixColor,
		numSuffixColor,

		TABtitleColor,
		TABnumberColor,
		TABnumPrefixColor,
		TABnumSuffixColor,

		MOBtitleColor = MOBtitleColor || TABtitleColor,
		MOBnumberColor = MOBnumberColor || TABnumberColor,
		MOBnumPrefixColor = MOBnumPrefixColor || TABnumPrefixColor,
		MOBnumSuffixColor = MOBnumSuffixColor || TABnumSuffixColor,

		// spacing attributes ⬇
		gapNumTitle,
		gapNumPrefix,
		gapNumSuffix,

		TABgapNumTitle,
		TABgapNumPrefix,
		TABgapNumSuffix,

		MOBgapNumTitle = MOBgapNumTitle || TABgapNumTitle,
		MOBgapNumPrefix = MOBgapNumPrefix || TABgapNumPrefix,
		MOBgapNumSuffix = MOBgapNumSuffix || TABgapNumSuffix,

		// margin padding attributes ⬇
		marginUnit,

		marginTop = marginTop || 0,
		marginRight = marginRight || 0,
		marginBottom = marginBottom || 0,
		marginLeft = marginLeft || 0,

		paddingUnit,

		paddingTop = paddingTop || 0,
		paddingRight = paddingRight || 0,
		paddingBottom = paddingBottom || 0,
		paddingLeft = paddingLeft || 0,

		TABmarginUnit = TABmarginUnit || marginUnit,

		TABmarginTop = TABmarginTop === 0
			? TABmarginTop
			: TABmarginTop || marginTop,
		TABmarginRight = TABmarginRight === 0
			? TABmarginRight
			: TABmarginRight || marginRight,
		TABmarginBottom = TABmarginBottom === 0
			? TABmarginBottom
			: TABmarginBottom || marginBottom,
		TABmarginLeft = TABmarginLeft === 0
			? TABmarginLeft
			: TABmarginLeft || marginLeft,

		TABpaddingUnit = TABpaddingUnit || paddingUnit,

		TABpaddingTop = TABpaddingTop === 0
			? TABpaddingTop
			: TABpaddingTop || paddingTop,
		TABpaddingRight = TABpaddingRight === 0
			? TABpaddingRight
			: TABpaddingRight || paddingRight,
		TABpaddingBottom = TABpaddingBottom === 0
			? TABpaddingBottom
			: TABpaddingBottom || paddingBottom,
		TABpaddingLeft = TABpaddingLeft === 0
			? TABpaddingLeft
			: TABpaddingLeft || paddingLeft,

		MOBmarginUnit = MOBmarginUnit || TABmarginUnit,

		MOBmarginTop = MOBmarginTop === 0
			? MOBmarginTop
			: MOBmarginTop || TABmarginTop,
		MOBmarginRight = MOBmarginRight === 0
			? MOBmarginRight
			: MOBmarginRight || TABmarginRight,
		MOBmarginBottom = MOBmarginBottom === 0
			? MOBmarginBottom
			: MOBmarginBottom || TABmarginBottom,
		MOBmarginLeft = MOBmarginLeft === 0
			? MOBmarginLeft
			: MOBmarginLeft || TABmarginLeft,

		MOBpaddingUnit = MOBpaddingUnit || TABpaddingUnit,

		MOBpaddingTop = MOBpaddingTop === 0
			? MOBpaddingTop
			: MOBpaddingTop || TABpaddingTop,
		MOBpaddingRight = MOBpaddingRight === 0
			? MOBpaddingRight
			: MOBpaddingRight || TABpaddingRight,
		MOBpaddingBottom = MOBpaddingBottom === 0
			? MOBpaddingBottom
			: MOBpaddingBottom || TABpaddingBottom,
		MOBpaddingLeft = MOBpaddingLeft === 0
			? MOBpaddingLeft
			: MOBpaddingLeft || TABpaddingLeft,

		// background attributes ⬇
		backgroundType,
		imageURL,
		gradientColor,
		backgroundSize,
		backgroundColor,

		// border attributes ⬇
		borderWidth,
		borderStyle,
		borderColor,
		borderRadius,
		radiusUnit,

		// shadow attributes  ⬇
		shadowColor,
		hOffset = hOffset || 0,
		vOffset = vOffset || 0,
		blur = blur || 0,
		spread = spread || 0,
		inset,

		hoverShadowColor = hoverShadowColor || shadowColor,
		hoverHOffset = hoverHOffset || hOffset,
		hoverVOffset = hoverVOffset || vOffset,
		hoverBlur = hoverBlur || blur,
		hoverSpread = hoverSpread || spread,
		hoverInset,

		// transition attributes ⬇
		wrapperTransitionTime,
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

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		const current_block_id = attributes.blockId;

		/**
		 * Define and Generate Unique Block ID
		*/
		if ( !current_block_id) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		 const all_blocks = wp.data.select("core/block-editor").getBlocks();

		 console.log({ all_blocks });
 
		 let duplicateFound = false;
		 const fixDuplicateBlockId = (blocks) => {
			 if (duplicateFound) return;
			 for (const item of blocks) {
				 const { innerBlocks } = item;
				 if (item.attributes.blockId === blockId) {
					 if (item.clientId !== clientId) {
						 setAttributes({ blockId: unique_id });
						 console.log("found a duplicate");
						 duplicateFound = true;
						 return;
					 } else if (innerBlocks.length > 0) {
						 fixDuplicateBlockId(innerBlocks);
					 }
				 } else if (innerBlocks.length > 0) {
					 fixDuplicateBlockId(innerBlocks);
				 }
			 }
		 };
 
		 fixDuplicateBlockId(all_blocks);
		
	}, []);

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		if (!/eb\-res\-option\-/i.test(bodyClasses)) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else {
			const resOption = bodyClasses
				.match(/eb-res-option-[^\s]+/g)[0]
				.split("-")[3];
			setAttributes({ resOption });
		}
	}, []);

	//
	// CSS/styling Codes Starts from Here
	//
	// function to generate typography styles for an element based on it's prefix
	const generateTypographyStylesForEdit = (
		prefixConstant,
		defaultFontSize = false
	) => {
		const {
			[`${prefixConstant}FontFamily`]: fontFamily,
			[`${prefixConstant}FontWeight`]: fontWeight,
			[`${prefixConstant}TextTransform`]: textTransform,
			[`${prefixConstant}TextDecoration`]: textDecoration,
			[`${prefixConstant}FontSize`]: fontSize = fontSize || defaultFontSize,
			[`${prefixConstant}SizeUnit`]: sizeUnit,
			[`${prefixConstant}LetterSpacing`]: letterSpacing,
			[`${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
			[`${prefixConstant}LineHeight`]: lineHeight,
			[`${prefixConstant}LineHeightUnit`]: lineHeightUnit,

			[`TAB${prefixConstant}FontFamily`]: TABfontFamily,
			[`TAB${prefixConstant}FontWeight`]: TABfontWeight,
			[`TAB${prefixConstant}TextTransform`]: TABtextTransform,
			[`TAB${prefixConstant}TextDecoration`]: TABtextDecoration,
			[`TAB${prefixConstant}FontSize`]: TABfontSize,
			[`TAB${prefixConstant}SizeUnit`]: TABsizeUnit = TABsizeUnit || sizeUnit,
			[`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit = TABletterSpacingUnit ||
				letterSpacingUnit,
			[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
			[`TAB${prefixConstant}LineHeight`]: TABlineHeight,
			[`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit = TABlineHeightUnit ||
				lineHeightUnit,

			[`MOB${prefixConstant}FontFamily`]: MOBfontFamily = MOBfontFamily ||
				TABfontFamily,
			[`MOB${prefixConstant}FontWeight`]: MOBfontWeight = MOBfontWeight ||
				TABfontWeight,
			[`MOB${prefixConstant}TextTransform`]: MOBtextTransform = MOBtextTransform ||
				TABtextTransform,
			[`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration = MOBtextDecoration ||
				TABtextDecoration,
			[`MOB${prefixConstant}FontSize`]: MOBfontSize = MOBfontSize ||
				TABfontSize,
			[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit = MOBsizeUnit ||
				TABsizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing = MOBletterSpacing ||
				TABletterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
				TABletterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight = MOBlineHeight ||
				TABlineHeight,
			[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit = MOBlineHeightUnit ||
				TABlineHeightUnit,
		} = attributes;

		const typoStylesDesktop = `
			${fontFamily ? `font-family: ${fontFamily};` : " "}
			${hasVal(fontSize) ? `font-size: ${fontSize}${sizeUnit};` : " "}
			${hasVal(lineHeight) ? `line-height: ${lineHeight}${lineHeightUnit};` : " "}
			${fontWeight ? `font-weight: ${fontWeight};` : " "}
			${textDecoration ? `text-decoration: ${textDecoration};` : " "}
			${textTransform ? `text-transform: ${textTransform};` : " "}
			${
				hasVal(letterSpacing)
					? `letter-spacing: ${letterSpacing}${letterSpacingUnit};`
					: " "
			}
		`;

		const typoStylesTab = `
			${TABfontFamily ? `font-family: ${TABfontFamily};` : " "}
			${hasVal(TABfontSize) ? `font-size: ${TABfontSize}${TABsizeUnit};` : " "}
			${
				hasVal(TABlineHeight)
					? `line-height: ${TABlineHeight}${TABlineHeightUnit};`
					: " "
			}
			${TABfontWeight ? `font-weight: ${TABfontWeight};` : " "}
			${TABtextDecoration ? `text-decoration: ${TABtextDecoration};` : " "}
			${TABtextTransform ? `text-transform: ${TABtextTransform};` : " "}
			${
				hasVal(TABletterSpacing)
					? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};`
					: " "
			}
		`;

		const typoStylesMobile = `
			${MOBfontFamily ? `font-family: ${MOBfontFamily};` : " "}
			${hasVal(MOBfontSize) ? `font-size: ${MOBfontSize}${MOBsizeUnit};` : " "}
			${
				hasVal(MOBlineHeight)
					? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};`
					: " "
			}
			${MOBfontWeight ? `font-weight: ${MOBfontWeight};` : " "}
			${MOBtextDecoration ? `text-decoration: ${MOBtextDecoration};` : " "}
			${MOBtextTransform ? `text-transform: ${MOBtextTransform};` : " "}
			${
				hasVal(MOBletterSpacing)
					? `letter-spacing: ${MOBletterSpacing}${MOBletterSpacingUnit};`
					: " "
			}
		`;

		return {
			typoStylesDesktop,
			typoStylesTab,
			typoStylesMobile,
		};
	};

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStylesForEdit(title, 40);

	const {
		typoStylesDesktop: numberTypoStylesDesktop,
		typoStylesTab: numberTypoStylesTab,
		typoStylesMobile: numberTypoStylesMobile,
	} = generateTypographyStylesForEdit(number, 40);

	const {
		typoStylesDesktop: numPrefixTypoStylesDesktop,
		typoStylesTab: numPrefixTypoStylesTab,
		typoStylesMobile: numPrefixTypoStylesMobile,
	} = generateTypographyStylesForEdit(numPrefix);

	const {
		typoStylesDesktop: numSuffixTypoStylesDesktop,
		typoStylesTab: numSuffixTypoStylesTab,
		typoStylesMobile: numSuffixTypoStylesMobile,
	} = generateTypographyStylesForEdit(numSuffix);

	const wrapperStylesDesktop = `
	.eb-counter-wrapper.${blockId}{
		
		margin: ${marginTop}${marginUnit} ${marginRight}${marginUnit} ${marginBottom}${marginUnit} ${marginLeft}${marginUnit};
		padding: ${paddingTop}${paddingUnit} ${paddingRight}${paddingUnit} ${paddingBottom}${paddingUnit} ${paddingLeft}${paddingUnit};

		${hasVal(gapNumTitle) ? `gap: ${gapNumTitle}px;` : " "}
		${wrapperFlexDirection ? `flex-direction: ${wrapperFlexDirection};` : " "}
		
		background-image:
			${
				backgroundType === "image" && imageURL
					? `url("${imageURL}")`
					: backgroundType === "gradient"
					? gradientColor
					: "none"
			};

		${backgroundSize ? `background-size: ${backgroundSize};` : " "}
		${backgroundColor ? `background-color: ${backgroundColor};` : " "}	
		${borderColor ? `border: ${borderWidth}px ${borderStyle} ${borderColor};` : " "}
		${borderRadius ? `border-radius: ${borderRadius}${radiusUnit};` : " "}

		${
			shadowColor
				? `box-shadow: ${shadowColor} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${
						inset ? "inset" : ""
				  };`
				: " "
		}

		transition: ${
			wrapperTransitionTime ? `${wrapperTransitionTime / 1000}s` : ".5s"
		};
	}

	.eb-counter-wrapper.${blockId}:hover{		
		${
			hoverShadowColor
				? `box-shadow: ${hoverShadowColor} ${hoverHOffset}px ${hoverVOffset}px ${hoverBlur}px ${hoverSpread}px ${
						hoverInset ? "inset" : " "
				  };`
				: " "
		}
	}
	`;

	const wrapperStylesTab = `
	.eb-counter-wrapper.${blockId}{
		margin: ${TABmarginTop}${TABmarginUnit} ${TABmarginRight}${TABmarginUnit} ${TABmarginBottom}${TABmarginUnit} ${TABmarginLeft}${TABmarginUnit};
		padding: ${TABpaddingTop}${TABpaddingUnit} ${TABpaddingRight}${TABpaddingUnit} ${TABpaddingBottom}${TABpaddingUnit} ${TABpaddingLeft}${TABpaddingUnit};
		
		${hasVal(TABgapNumTitle) ? `gap: ${TABgapNumTitle}px;` : " "}	
	}
	`;

	const wrapperStylesMobile = `
	.eb-counter-wrapper.${blockId}{
		margin: ${MOBmarginTop}${MOBmarginUnit} ${MOBmarginRight}${MOBmarginUnit} ${MOBmarginBottom}${MOBmarginUnit} ${MOBmarginLeft}${MOBmarginUnit};
		padding: ${MOBpaddingTop}${MOBpaddingUnit} ${MOBpaddingRight}${MOBpaddingUnit} ${MOBpaddingBottom}${MOBpaddingUnit} ${MOBpaddingLeft}${MOBpaddingUnit};

		${
			MOBgapNumTitle !== TABgapNumTitle && hasVal(MOBgapNumTitle)
				? `gap: ${MOBgapNumTitle}px;`
				: " "
		}
	}
	`;

	const numberStylesDesktop = `
	.eb-counter-wrapper.${blockId} .eb-counter-number{
		${numberTypoStylesDesktop}
		${numberColor ? ` color : ${numberColor};` : " "}
		${hasVal(gapNumPrefix) ? `padding-left: ${gapNumPrefix}px;` : " "}
		${hasVal(gapNumSuffix) ? `padding-right: ${gapNumSuffix}px;` : " "}
	}
	`;

	const numberStylesTab = `
	.eb-counter-wrapper.${blockId} .eb-counter-number{
		${numberTypoStylesTab}
		${TABnumberColor ? `color : ${TABnumberColor};` : " "}
		${hasVal(TABgapNumPrefix) ? `padding-left: ${TABgapNumPrefix}px;` : " "}
		${hasVal(TABgapNumSuffix) ? `padding-right: ${TABgapNumSuffix}px;` : " "}
	} `;

	const numberStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-number{
		${numberTypoStylesMobile}
		${MOBnumberColor ? `color : ${MOBnumberColor};` : " "}
		${hasVal(MOBgapNumPrefix) ? `padding-left: ${MOBgapNumPrefix}px;` : " "}
		${hasVal(MOBgapNumSuffix) ? `padding-right: ${MOBgapNumSuffix}px;` : " "}
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
		${TABtitleColor ? `color : ${TABtitleColor};` : " "}
	}  `;

	const titleStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-title{
		${titleTypoStylesMobile}
		${MOBtitleColor ? `color : ${MOBtitleColor};` : " "}
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
		${TABnumPrefixColor ? `color : ${TABnumPrefixColor};` : " "}
	}  `;

	const numPrefixStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-prefix{
		${numPrefixTypoStylesMobile}
		${MOBnumPrefixColor ? `color : ${MOBnumPrefixColor};` : " "}
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
		${TABnumSuffixColor ? `color : ${TABnumSuffixColor};` : " "}
	} `;

	const numSuffixStylesMobile = `
	.eb-counter-wrapper.${blockId} .eb-counter-suffix{
		${numSuffixTypoStylesMobile}
		${MOBnumSuffixColor ? `color : ${MOBnumSuffixColor};` : " "}
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
	/* ----------CSS/styling Codes Ends Here ---------- */

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			["desktop"]: desktopAllStyles,
			["tab"]: tabAllStyles,
			["mobile"]: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			console.log("Not Match");
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
				${softMinifyCssStrings(desktopAllStyles)}

				/*
					edit_mimmikcss_start
				*/

				${resOption === "tab" ? softMinifyCssStrings(tabAllStyles) : " "}
				${resOption === "mobile" ? softMinifyCssStrings(mobileAllStyles) : " "}

				/*
					edit_mimmikcss_end
				*/

				@media all and (max-width: 1030px) {				
					${softMinifyCssStrings(tabAllStyles)}
				}

				@media all and (max-width: 680px) {
					${softMinifyCssStrings(mobileAllStyles)}
				}
				`}
			</style>
			<div
				className={`eb-counter-wrapper ${blockId}`}
			>
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
