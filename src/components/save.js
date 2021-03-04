/**
 * WordPress dependencies
 */

const { RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */

import {
	title,
	number,
	numPrefix,
	numSuffix,
} from "./constants/typographyPrefixConstants";

const Save = (props) => {
	const { attributes } = props;
	console.log("--------save:", props);
	const {
		// to make unique className ⬇
		randomNumber,

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

		TABtitleColor = TABtitleColor || titleColor,
		TABnumberColor = TABnumberColor || numberColor,
		TABnumPrefixColor = TABnumPrefixColor || numPrefixColor,
		TABnumSuffixColor = TABnumSuffixColor || numSuffixColor,

		MOBtitleColor = MOBtitleColor || TABtitleColor || titleColor,
		MOBnumberColor = MOBnumberColor || TABnumberColor || numberColor,
		MOBnumPrefixColor = MOBnumPrefixColor ||
			TABnumPrefixColor ||
			numPrefixColor,
		MOBnumSuffixColor = MOBnumSuffixColor ||
			TABnumSuffixColor ||
			numSuffixColor,

		// spacing attributes ⬇
		gapNumTitle,
		gapNumPrefix,
		gapNumSuffix,

		TABgapNumTitle = TABgapNumTitle || gapNumTitle,
		TABgapNumPrefix = TABgapNumPrefix || gapNumPrefix,
		TABgapNumSuffix = TABgapNumSuffix || gapNumSuffix,

		MOBgapNumTitle = MOBgapNumTitle || TABgapNumTitle || gapNumTitle,
		MOBgapNumPrefix = MOBgapNumPrefix || TABgapNumPrefix || gapNumPrefix,
		MOBgapNumSuffix = MOBgapNumSuffix || TABgapNumSuffix || gapNumSuffix,

		// margin padding attributes ⬇
		marginUnit,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		paddingUnit,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,

		TABmarginUnit = TABmarginUnit || marginUnit,
		TABmarginTop = TABmarginTop || marginTop,
		TABmarginRight = TABmarginRight || marginRight,
		TABmarginBottom = TABmarginBottom || marginBottom,
		TABmarginLeft = TABmarginLeft || marginLeft,
		TABpaddingUnit = TABpaddingUnit || paddingUnit,
		TABpaddingTop = TABpaddingTop || paddingTop,
		TABpaddingRight = TABpaddingRight || paddingRight,
		TABpaddingBottom = TABpaddingBottom || paddingBottom,
		TABpaddingLeft = TABpaddingLeft || paddingLeft,

		MOBmarginUnit = MOBmarginUnit || TABmarginUnit || marginUnit,
		MOBmarginTop = MOBmarginTop || TABmarginTop || marginTop,
		MOBmarginRight = MOBmarginRight || TABmarginRight || marginRight,
		MOBmarginBottom = MOBmarginBottom || TABmarginBottom || marginBottom,
		MOBmarginLeft = MOBmarginLeft || TABmarginLeft || marginLeft,
		MOBpaddingUnit = MOBpaddingUnit || TABpaddingUnit || paddingUnit,
		MOBpaddingTop = MOBpaddingTop || TABpaddingTop || paddingTop,
		MOBpaddingRight = MOBpaddingRight || TABpaddingRight || paddingRight,
		MOBpaddingBottom = MOBpaddingBottom || TABpaddingBottom || paddingBottom,
		MOBpaddingLeft = MOBpaddingLeft || TABpaddingLeft || paddingLeft,

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
		hOffset,
		vOffset,
		blur,
		spread,
		inset,
		hoverShadowColor,
		hoverHOffset,
		hoverVOffset,
		hoverBlur,
		hoverSpread,
		hoverInset,
		wrapperTransitionTime,
	} = attributes;

	// function to generate typography styles for an element based on it's prefix
	const generateTypographyStyles = (
		prefixConstant,
		defaultFontSize = false
	) => {
		const {
			[`${prefixConstant}FontFamily`]: fontFamily = fontFamily || "inherit",
			[`${prefixConstant}FontWeight`]: fontWeight,
			[`${prefixConstant}TextTransform`]: textTransform,
			[`${prefixConstant}TextDecoration`]: textDecoration,
			[`${prefixConstant}FontSize`]: fontSize = fontSize ||
				defaultFontSize ||
				"inherit",
			[`${prefixConstant}SizeUnit`]: sizeUnit,
			[`${prefixConstant}LetterSpacing`]: letterSpacing,
			[`${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
			[`${prefixConstant}LineHeight`]: lineHeight,
			[`${prefixConstant}LineHeightUnit`]: lineHeightUnit,

			// [`TAB${prefixConstant}FontFamily`]: TABfontFamily = TABfontFamily ||
			// 	fontFamily,
			// [`TAB${prefixConstant}FontWeight`]: TABfontWeight = TABfontWeight ||
			// 	fontWeight,
			// [`TAB${prefixConstant}TextTransform`]: TABtextTransform = TABtextTransform ||
			// 	textTransform,
			// [`TAB${prefixConstant}TextDecoration`]: TABtextDecoration = TABtextDecoration ||
			// 	textDecoration,
			// [`TAB${prefixConstant}FontSize`]: TABfontSize = TABfontSize || fontSize,
			// [`TAB${prefixConstant}SizeUnit`]: TABsizeUnit = TABsizeUnit || sizeUnit,
			// [`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing = TABletterSpacing ||
			// 	letterSpacing,
			// [`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit = TABletterSpacingUnit ||
			// 	letterSpacingUnit,
			// [`TAB${prefixConstant}LineHeight`]: TABlineHeight = TABlineHeight ||
			// 	lineHeight,
			// [`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit = TABlineHeightUnit ||
			// 	lineHeightUnit,

			// [`MOB${prefixConstant}FontFamily`]: MOBfontFamily = MOBfontFamily ||
			// 	TABfontFamily ||
			// 	fontFamily,
			// [`MOB${prefixConstant}FontWeight`]: MOBfontWeight = MOBfontWeight ||
			// 	TABfontWeight ||
			// 	fontWeight,
			// [`MOB${prefixConstant}TextTransform`]: MOBtextTransform = MOBtextTransform ||
			// 	TABtextTransform ||
			// 	textTransform,
			// [`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration = MOBtextDecoration ||
			// 	TABtextDecoration ||
			// 	textDecoration,
			// [`MOB${prefixConstant}FontSize`]: MOBfontSize = MOBfontSize ||
			// 	TABfontSize ||
			// 	fontSize,
			// [`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit = MOBsizeUnit ||
			// 	TABsizeUnit ||
			// 	sizeUnit,
			// [`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing = MOBletterSpacing ||
			// 	TABletterSpacing ||
			// 	letterSpacing,
			// [`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
			// 	TABletterSpacingUnit ||
			// 	letterSpacingUnit,
			// [`MOB${prefixConstant}LineHeight`]: MOBlineHeight = MOBlineHeight ||
			// 	TABlineHeight ||
			// 	lineHeight,
			// [`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit = MOBlineHeightUnit ||
			// 	TABlineHeightUnit ||
			// 	lineHeightUnit,

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
				TABsizeUnit ||
				sizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
				TABletterSpacingUnit ||
				letterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
			[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit = MOBlineHeightUnit ||
				TABlineHeightUnit ||
				lineHeightUnit,
		} = attributes;

		const typoStylesDesktop = `
			font-family: ${fontFamily};
			font-size: ${fontSize}${sizeUnit};
			line-height: ${lineHeight}${lineHeightUnit};
			font-weight: ${fontWeight};
			text-decoration: ${textDecoration};
			text-transform: ${textTransform};
			letter-spacing: ${letterSpacing}${letterSpacingUnit};
		`;

		const typoStylesTab = `
			${TABfontFamily ? `font-family: ${TABfontFamily};` : " "}
			${TABfontSize ? `font-size: ${TABfontSize}${TABsizeUnit};` : " "}
			
			${TABlineHeight ? `line-height: ${TABlineHeight}${TABlineHeightUnit};` : " "}
			${TABfontWeight ? `font-weight: ${TABfontWeight};` : " "}
			${TABtextDecoration ? `text-decoration: ${TABtextDecoration};` : " "}
			${TABtextTransform ? `text-transform: ${TABtextTransform};` : " "}
			${
				TABletterSpacing
					? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};`
					: " "
			}
		`;

		const typoStylesMobile = `
			${MOBfontFamily ? `font-family: ${MOBfontFamily};` : " "}
			${MOBfontSize ? `font-size: ${MOBfontSize}${MOBsizeUnit};` : " "}
			${MOBlineHeight ? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};` : " "}
			${MOBfontWeight ? `font-weight: ${MOBfontWeight};` : " "}
			${MOBtextDecoration ? `text-decoration: ${MOBtextDecoration};` : " "}
			${MOBtextTransform ? `text-transform: ${MOBtextTransform};` : " "}
			${
				MOBletterSpacing
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
	} = generateTypographyStyles(title, 40);

	const {
		typoStylesDesktop: numberTypoStylesDesktop,
		typoStylesTab: numberTypoStylesTab,
		typoStylesMobile: numberTypoStylesMobile,
	} = generateTypographyStyles(number, 40);

	const {
		typoStylesDesktop: numPrefixTypoStylesDesktop,
		typoStylesTab: numPrefixTypoStylesTab,
		typoStylesMobile: numPrefixTypoStylesMobile,
	} = generateTypographyStyles(numPrefix);

	const {
		typoStylesDesktop: numSuffixTypoStylesDesktop,
		typoStylesTab: numSuffixTypoStylesTab,
		typoStylesMobile: numSuffixTypoStylesMobile,
	} = generateTypographyStyles(numSuffix);

	const wrapperStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber}{
		margin-top: ${marginTop || 0}${marginUnit};
		margin-bottom: ${marginBottom || 0}${marginUnit};
		margin-left: ${marginLeft || 0}${marginUnit};
		margin-right: ${marginRight || 0}${marginUnit};
		padding-top: ${paddingTop || 0}${paddingUnit};
		padding-bottom: ${paddingBottom || 0}${paddingUnit};
		padding-right: ${paddingRight || 0}${paddingUnit};
		padding-left: ${paddingLeft || 0}${paddingUnit};
		gap: ${gapNumTitle}px;
		flex-direction: ${wrapperFlexDirection};
		background-image:
			${
				backgroundType === "image" && imageURL
					? `url("${imageURL}")`
					: backgroundType === "gradient"
					? gradientColor
					: "none"
			};
		background-size: ${backgroundSize};
		background-color:
			${(backgroundType === "fill" && backgroundColor) || "transparent"};
		border: ${borderWidth || 0}px ${borderStyle} ${borderColor || "#000000"};
		border-radius: ${borderRadius || 0}${radiusUnit};
		box-shadow: ${shadowColor || "#000000"} ${hOffset || 0}px ${vOffset || 0}px ${
		blur || 0
	}px ${spread || 0}px ${inset ? "inset" : ""};
		transition: ${
			wrapperTransitionTime ? `${wrapperTransitionTime / 1000}s` : ".5s"
		};
	}
	`;

	const wrapperStylesTab = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber}{
		margin-top: ${TABmarginTop || 0}${TABmarginUnit};
		margin-bottom: ${TABmarginBottom || 0}${TABmarginUnit};
		margin-left: ${TABmarginLeft || 0}${TABmarginUnit};
		margin-right: ${TABmarginRight || 0}${TABmarginUnit};
		padding-top: ${TABpaddingTop || 0}${TABpaddingUnit};
		padding-bottom: ${TABpaddingBottom || 0}${TABpaddingUnit};
		padding-right: ${TABpaddingRight || 0}${TABpaddingUnit};
		padding-left: ${TABpaddingLeft || 0}${TABpaddingUnit};
		gap: ${TABgapNumTitle}px;	
	}
	`;

	const wrapperStylesMobile = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber}{
		margin-top: ${MOBmarginTop || 0}${MOBmarginUnit};
		margin-bottom: ${MOBmarginBottom || 0}${MOBmarginUnit};
		margin-left: ${MOBmarginLeft || 0}${MOBmarginUnit};
		margin-right: ${MOBmarginRight || 0}${MOBmarginUnit};
		padding-top: ${MOBpaddingTop || 0}${MOBpaddingUnit};
		padding-bottom: ${MOBpaddingBottom || 0}${MOBpaddingUnit};
		padding-right: ${MOBpaddingRight || 0}${MOBpaddingUnit};
		padding-left: ${MOBpaddingLeft || 0}${MOBpaddingUnit};
		gap: ${MOBgapNumTitle}px;
	}
	`;

	const numberStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
		${numberTypoStylesDesktop}
		color : ${numberColor};
		padding-left: ${gapNumPrefix}px;
		padding-right: ${gapNumSuffix}px;
	}
	`;

	const numberStylesTab = `   
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
		${numberTypoStylesTab}
		color : ${TABnumberColor};
		padding-left: ${TABgapNumPrefix}px;
		padding-right: ${TABgapNumSuffix}px;
	} `;

	const numberStylesMobile = `
	 .eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
		${numberTypoStylesMobile}
		color : ${MOBnumberColor};
		padding-left: ${MOBgapNumPrefix}px;
		padding-right: ${MOBgapNumSuffix}px;
	}`;

	const titleStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
		${titleTypoStylesDesktop}
		color : ${titleColor};
	}
	`;

	const titleStylesTab = `  
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
		${titleTypoStylesTab}
		color : ${TABtitleColor};
	}  `;

	const titleStylesMobile = `  	
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
		${titleTypoStylesMobile}
		color : ${MOBtitleColor};
	} `;

	const numPrefixStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
		${numPrefixTypoStylesDesktop}
		color : ${numPrefixColor};
	}
	`;

	const numPrefixStylesTab = `  
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
		${numPrefixTypoStylesTab}
		color : ${TABnumPrefixColor};
	}  `;

	const numPrefixStylesMobile = `  
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
		${numPrefixTypoStylesMobile}
		color : ${MOBnumPrefixColor};
	}  `;

	const numSuffixStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
		${numSuffixTypoStylesDesktop}
		color : ${numSuffixColor};
	}
	`;

	const numSuffixStylesTab = `   				
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
		${numSuffixTypoStylesTab}
		color : ${TABnumSuffixColor};
	} `;

	const numSuffixStylesMobile = `   	
				
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
		${numSuffixTypoStylesMobile}
		color : ${MOBnumSuffixColor};
	}

	`;

	const desktopAllStyles = `
		${wrapperStylesDesktop}
		${numberStylesDesktop}
		${titleStylesDesktop}
		${numPrefixStylesDesktop}
		${numSuffixStylesDesktop}
	`.replaceAll(/\s+(?!(all|and|\(max|\min|\d{1,4}px\)))/g, " ");

	const tabAllStyles = `
		${wrapperStylesTab}
		${numberStylesTab}
		${titleStylesTab}
		${numPrefixStylesTab}
		${numSuffixStylesTab}
	`.replaceAll(/\s+(?!(all|and|\(max|\min|\d{1,4}px\)))/g, " ");

	const mobileAllStyles = `
		${wrapperStylesMobile}
		${numberStylesMobile}
		${titleStylesMobile}
		${numPrefixStylesMobile}
		${numSuffixStylesMobile}
	`.replaceAll(/\s+(?!(all|and|\(max|\min|\d{1,4}px\)))/g, " ");

	return (
		<>
			<style>
				{`${desktopAllStyles}@media all and (max-width: 1030px){${tabAllStyles}}@media all and (max-width: 680px){${mobileAllStyles}}`}
			</style>

			<div
				className={`eb-counter-wrapper eb-counter-wrapper-${randomNumber}`}
				data-shadowColor={shadowColor || "#00000000"}
				data-hOffset={hOffset || 0}
				data-vOffset={vOffset || 0}
				data-blur={blur || 0}
				data-spread={spread || 0}
				data-inset={inset ? "inset" : " "}
				data-hoverShadowColor={hoverShadowColor || "#00000000"}
				data-hoverHOffset={hoverHOffset || 0}
				data-hoverVOffset={hoverVOffset || 0}
				data-hoverBlur={hoverBlur || 0}
				data-hoverSpread={hoverSpread || 0}
				data-hoverInset={hoverInset ? "inset" : " "}
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
