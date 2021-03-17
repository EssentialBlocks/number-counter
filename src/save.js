/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */

import {
	title,
	number,
	numPrefix,
	numSuffix,
} from "./constants/typographyPrefixConstants";

import { hardMinifyCssStrings, isCssExists, hasVal } from "./helpers";

const Save = (props) => {
	const { attributes } = props;
	// console.log("--------save:", { props });

	const {
		// to make unique className ⬇
		uniqueIdNumber,

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

		MOBtitleColor,
		MOBnumberColor,
		MOBnumPrefixColor,
		MOBnumSuffixColor,

		// spacing attributes ⬇
		gapNumTitle,
		gapNumPrefix,
		gapNumSuffix,

		TABgapNumTitle,
		TABgapNumPrefix,
		TABgapNumSuffix,

		MOBgapNumTitle,
		MOBgapNumPrefix,
		MOBgapNumSuffix,

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
		hoverInset = hoverInset || inset,

		// transition attributes ⬇
		wrapperTransitionTime,
	} = attributes;

	//
	// CSS/styling Codes Starts from Here
	//
	// function to generate typography styles for an element based on it's prefix
	const generateTypographyStylesForSave = (
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

			[`MOB${prefixConstant}FontFamily`]: MOBfontFamily,
			[`MOB${prefixConstant}FontWeight`]: MOBfontWeight,
			[`MOB${prefixConstant}TextTransform`]: MOBtextTransform,
			[`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration,
			[`MOB${prefixConstant}FontSize`]: MOBfontSize,
			[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit = MOBsizeUnit ||
				TABsizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
				TABletterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
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
	} = generateTypographyStylesForSave(title, 40);

	const {
		typoStylesDesktop: numberTypoStylesDesktop,
		typoStylesTab: numberTypoStylesTab,
		typoStylesMobile: numberTypoStylesMobile,
	} = generateTypographyStylesForSave(number, 40);

	const {
		typoStylesDesktop: numPrefixTypoStylesDesktop,
		typoStylesTab: numPrefixTypoStylesTab,
		typoStylesMobile: numPrefixTypoStylesMobile,
	} = generateTypographyStylesForSave(numPrefix);

	const {
		typoStylesDesktop: numSuffixTypoStylesDesktop,
		typoStylesTab: numSuffixTypoStylesTab,
		typoStylesMobile: numSuffixTypoStylesMobile,
	} = generateTypographyStylesForSave(numSuffix);

	const wrapperStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber}{
		
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

	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber}:hover{		
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
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber}{
		margin: ${TABmarginTop}${TABmarginUnit} ${TABmarginRight}${TABmarginUnit} ${TABmarginBottom}${TABmarginUnit} ${TABmarginLeft}${TABmarginUnit};
		padding: ${TABpaddingTop}${TABpaddingUnit} ${TABpaddingRight}${TABpaddingUnit} ${TABpaddingBottom}${TABpaddingUnit} ${TABpaddingLeft}${TABpaddingUnit};
		
		${hasVal(TABgapNumTitle) ? `gap: ${TABgapNumTitle}px;` : " "}	
	}
	`;

	const wrapperStylesMobile = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber}{
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
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-number{
		${numberTypoStylesDesktop}
		${numberColor ? ` color : ${numberColor};` : " "}
		${hasVal(gapNumPrefix) ? `padding-left: ${gapNumPrefix}px;` : " "}
		${hasVal(gapNumSuffix) ? `padding-right: ${gapNumSuffix}px;` : " "}
	}
	`;

	const numberStylesTab = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-number{
		${numberTypoStylesTab}
		${TABnumberColor ? `color : ${TABnumberColor};` : " "}
		${hasVal(TABgapNumPrefix) ? `padding-left: ${TABgapNumPrefix}px;` : " "}
		${hasVal(TABgapNumSuffix) ? `padding-right: ${TABgapNumSuffix}px;` : " "}
	} `;

	const numberStylesMobile = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-number{
		${numberTypoStylesMobile}
		${MOBnumberColor ? `color : ${MOBnumberColor};` : " "}
		${hasVal(MOBgapNumPrefix) ? `padding-left: ${MOBgapNumPrefix}px;` : " "}
		${hasVal(MOBgapNumSuffix) ? `padding-right: ${MOBgapNumSuffix}px;` : " "}
	}`;

	const titleStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-title{
		${titleTypoStylesDesktop}
		${titleColor ? `color : ${titleColor};` : " "}
	}
	`;

	const titleStylesTab = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-title{
		${titleTypoStylesTab}
		${TABtitleColor ? `color : ${TABtitleColor};` : " "}
	}  `;

	const titleStylesMobile = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-title{
		${titleTypoStylesMobile}
		${MOBtitleColor ? `color : ${MOBtitleColor};` : " "}
	} `;

	const numPrefixStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-prefix{
		${numPrefixTypoStylesDesktop}
		${numPrefixColor ? `color : ${numPrefixColor};` : " "}
	}
	`;

	const numPrefixStylesTab = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-prefix{
		${numPrefixTypoStylesTab}
		${TABnumPrefixColor ? `color : ${TABnumPrefixColor};` : " "}
	}  `;

	const numPrefixStylesMobile = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-prefix{
		${numPrefixTypoStylesMobile}
		${MOBnumPrefixColor ? `color : ${MOBnumPrefixColor};` : " "}
	}  `;

	const numSuffixStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-suffix{
		${numSuffixTypoStylesDesktop}
		${numSuffixColor ? `color : ${numSuffixColor};` : " "}
	}
	`;

	const numSuffixStylesTab = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-suffix{
		${numSuffixTypoStylesTab}
		${TABnumSuffixColor ? `color : ${TABnumSuffixColor};` : " "}
	} `;

	const numSuffixStylesMobile = `
	.eb-counter-wrapper.eb-counter-wrapper-${uniqueIdNumber} .eb-counter-suffix{
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

	//
	// CSS/styling Codes Ends Here
	//

	return (
		<>
			<style>
				{`${hardMinifyCssStrings(
					desktopAllStyles
				)}@media all and (max-width: 1030px){${hardMinifyCssStrings(
					tabAllStyles
				)}}@media all and (max-width: 680px){${hardMinifyCssStrings(
					mobileAllStyles
				)}}`}
			</style>

			<div
				className={`eb-counter-wrapper eb-counter-wrapper-${uniqueIdNumber}`}
			>
				<h4 className="eb-counter-number">
					<span className="eb-counter-prefix">{counterPrefix}</span>
					<span
						className="eb-counter eb-counter-number"
						data-duration={duration ? Math.floor(Math.abs(duration)) : 0}
						data-startValue={startValue ? Math.floor(Math.abs(startValue)) : 0}
						data-target={target ? Math.floor(Math.abs(target)) : 0}
						data-separator={separator}
						data-isShowSeparator={isShowSeparator}
					>
						0
					</span>
					<span className="eb-counter-suffix">{counterSuffix}</span>
				</h4>

				<RichText.Content
					tagName="h3"
					className="eb-counter-title"
					value={counterTitle}
				/>
			</div>
		</>
	);
};

export default Save;
