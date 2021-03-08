/**
 * WordPress dependencies
 */
const { useRef, useEffect } = wp.element;
const { RichText } = wp.blockEditor;

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

import { generateRandomNumber, textInsideForEdit } from "./helpers";

const Edit = (props) => {
	const { isSelected, attributes, setAttributes } = props;

	const wpDataMeta = wp.data
		.select("core/editor")
		.getEditedPostAttribute("meta");

	console.log("--------edit:", { props, wpDataMeta }, wp.data);
	const {
		// responsive control attributes ⬇
		resOption,

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
		wrapperFlexDirection = wrapperFlexDirection || "column",

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
		gapNumTitle = gapNumTitle || 0,
		gapNumPrefix = gapNumPrefix || 0,
		gapNumSuffix = gapNumSuffix || 0,

		TABgapNumTitle = TABgapNumTitle || gapNumTitle,
		TABgapNumPrefix = TABgapNumPrefix || gapNumPrefix,
		TABgapNumSuffix = TABgapNumSuffix || gapNumSuffix,

		MOBgapNumTitle = MOBgapNumTitle || TABgapNumTitle || gapNumTitle,
		MOBgapNumPrefix = MOBgapNumPrefix || TABgapNumPrefix || gapNumPrefix,
		MOBgapNumSuffix = MOBgapNumSuffix || TABgapNumSuffix || gapNumSuffix,

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
		borderWidth = borderWidth || 0,
		borderStyle,
		borderColor = borderColor || "#00000000",
		borderRadius = borderRadius || 0,
		radiusUnit,

		// shadow attributes  ⬇
		shadowColor = shadowColor || "#00000000",
		hOffset = hOffset || 0,
		vOffset = vOffset || 0,
		blur = blur || 0,
		spread = spread || 0,
		inset,
		isHover,
		hoverShadowColor = hoverShadowColor || shadowColor,
		hoverHOffset = hoverHOffset || hOffset,
		hoverVOffset = hoverVOffset || vOffset,
		hoverBlur = hoverBlur || blur,
		hoverSpread = hoverSpread || spread,
		hoverInset,
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

	useEffect(() => {
		const genRandomNumber = generateRandomNumber();
		const anotherSameClassElements = document.querySelectorAll(
			`.eb-counter-wrapper-${randomNumber}`
		);
		if (!randomNumber || anotherSameClassElements[1]) {
			setAttributes({
				randomNumber: genRandomNumber,
			});
		}
	}, []);

	useEffect(() => {
		const bodyClasses = document.body.className;
		if (!bodyClasses.includes("eb-res-option-")) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else if (bodyClasses.includes("eb-res-option-desktop")) {
			setAttributes({
				resOption: "desktop",
			});
		} else if (bodyClasses.includes("eb-res-option-tab")) {
			setAttributes({
				resOption: "tab",
			});
		} else if (bodyClasses.includes("eb-res-option-mobile")) {
			setAttributes({
				resOption: "mobile",
			});
		}
		console.log("-----edit er moddhe theke useEffect on [] log holo", {
			bodyClasses,
		});
	}, []);

	// function to generate typography styles for an element based on it's prefix
	const generateTypographyStylesForEdit = (
		prefixConstant,
		defaultFontSize = false
	) => {
		const {
			[`${prefixConstant}FontFamily`]: fontFamily = fontFamily || "inherit",
			[`${prefixConstant}FontWeight`]: fontWeight,
			[`${prefixConstant}TextTransform`]: textTransform,
			[`${prefixConstant}TextDecoration`]: textDecoration,
			[`${prefixConstant}FontSize`]: fontSize = fontSize || defaultFontSize,
			[`${prefixConstant}SizeUnit`]: sizeUnit,
			[`${prefixConstant}LetterSpacing`]: letterSpacing,
			[`${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
			[`${prefixConstant}LineHeight`]: lineHeight,
			[`${prefixConstant}LineHeightUnit`]: lineHeightUnit,

			[`TAB${prefixConstant}FontFamily`]: TABfontFamily = TABfontFamily ||
				fontFamily,
			[`TAB${prefixConstant}FontWeight`]: TABfontWeight = TABfontWeight ||
				fontWeight,
			[`TAB${prefixConstant}TextTransform`]: TABtextTransform = TABtextTransform ||
				textTransform,
			[`TAB${prefixConstant}TextDecoration`]: TABtextDecoration = TABtextDecoration ||
				textDecoration,
			[`TAB${prefixConstant}FontSize`]: TABfontSize = TABfontSize || fontSize,
			[`TAB${prefixConstant}SizeUnit`]: TABsizeUnit = TABsizeUnit || sizeUnit,
			[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing = TABletterSpacing ||
				letterSpacing,
			[`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit = TABletterSpacingUnit ||
				letterSpacingUnit,
			[`TAB${prefixConstant}LineHeight`]: TABlineHeight = TABlineHeight ||
				lineHeight,
			[`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit = TABlineHeightUnit ||
				lineHeightUnit,

			[`MOB${prefixConstant}FontFamily`]: MOBfontFamily = MOBfontFamily ||
				TABfontFamily ||
				fontFamily,
			[`MOB${prefixConstant}FontWeight`]: MOBfontWeight = MOBfontWeight ||
				TABfontWeight ||
				fontWeight,
			[`MOB${prefixConstant}TextTransform`]: MOBtextTransform = MOBtextTransform ||
				TABtextTransform ||
				textTransform,
			[`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration = MOBtextDecoration ||
				TABtextDecoration ||
				textDecoration,
			[`MOB${prefixConstant}FontSize`]: MOBfontSize = MOBfontSize ||
				TABfontSize ||
				fontSize,
			[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit = MOBsizeUnit ||
				TABsizeUnit ||
				sizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing = MOBletterSpacing ||
				TABletterSpacing ||
				letterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
				TABletterSpacingUnit ||
				letterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight = MOBlineHeight ||
				TABlineHeight ||
				lineHeight,
			[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit = MOBlineHeightUnit ||
				TABlineHeightUnit ||
				lineHeightUnit,

			// [`TAB${prefixConstant}FontFamily`]: TABfontFamily,
			// [`TAB${prefixConstant}FontWeight`]: TABfontWeight,
			// [`TAB${prefixConstant}TextTransform`]: TABtextTransform,
			// [`TAB${prefixConstant}TextDecoration`]: TABtextDecoration,
			// [`TAB${prefixConstant}FontSize`]: TABfontSize,
			// [`TAB${prefixConstant}SizeUnit`]: TABsizeUnit = TABsizeUnit || sizeUnit,
			// [`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit = TABletterSpacingUnit ||
			// 	letterSpacingUnit,
			// [`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
			// [`TAB${prefixConstant}LineHeight`]: TABlineHeight,
			// [`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit = TABlineHeightUnit ||
			// 	lineHeightUnit,

			// [`MOB${prefixConstant}FontFamily`]: MOBfontFamily,
			// [`MOB${prefixConstant}FontWeight`]: MOBfontWeight,
			// [`MOB${prefixConstant}TextTransform`]: MOBtextTransform,
			// [`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration,
			// [`MOB${prefixConstant}FontSize`]: MOBfontSize,
			// [`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit = MOBsizeUnit ||
			// 	TABsizeUnit ||
			// 	sizeUnit,
			// [`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
			// [`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit = MOBletterSpacingUnit ||
			// 	TABletterSpacingUnit ||
			// 	letterSpacingUnit,
			// [`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
			// [`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit = MOBlineHeightUnit ||
			// 	TABlineHeightUnit ||
			// 	lineHeightUnit,
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
			font-family: ${TABfontFamily};
			font-size: ${TABfontSize}${TABsizeUnit};
			line-height: ${TABlineHeight}${TABlineHeightUnit};
			font-weight: ${TABfontWeight};
			text-decoration: ${TABtextDecoration};
			text-transform: ${TABtextTransform};
			${
				TABletterSpacing
					? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};`
					: " "
			}
		`;

		const typoStylesMobile = `
			font-family: ${MOBfontFamily};
			font-size: ${MOBfontSize}${MOBsizeUnit};
			line-height: ${MOBlineHeight}${MOBlineHeightUnit};
			font-weight: ${MOBfontWeight};
			text-decoration: ${MOBtextDecoration};
			text-transform: ${MOBtextTransform};
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
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber}{
		margin-top: ${marginTop}${marginUnit};
		margin-bottom: ${marginBottom}${marginUnit};
		margin-left: ${marginLeft}${marginUnit};
		margin-right: ${marginRight}${marginUnit};
		padding-top: ${paddingTop}${paddingUnit};
		padding-bottom: ${paddingBottom}${paddingUnit};
		padding-right: ${paddingRight}${paddingUnit};
		padding-left: ${paddingLeft}${paddingUnit};
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
		border: ${borderWidth}px ${borderStyle} ${borderColor};
		border-radius: ${borderRadius}${radiusUnit};
		box-shadow: ${shadowColor} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${
		inset ? "inset" : ""
	};
		transition: ${
			wrapperTransitionTime ? `${wrapperTransitionTime / 1000}s` : ".5s"
		};
	}

	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber}:hover{
		box-shadow: ${hoverShadowColor} ${hoverHOffset}px ${hoverVOffset}px ${hoverBlur}px ${hoverSpread}px ${
		hoverInset ? "inset" : " "
	};

	}
	`;

	const wrapperStylesTab = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber}{
		margin-top: ${TABmarginTop}${TABmarginUnit};
		margin-bottom: ${TABmarginBottom}${TABmarginUnit};
		margin-left: ${TABmarginLeft}${TABmarginUnit};
		margin-right: ${TABmarginRight}${TABmarginUnit};
		padding-top: ${TABpaddingTop}${TABpaddingUnit};
		padding-bottom: ${TABpaddingBottom}${TABpaddingUnit};
		padding-right: ${TABpaddingRight}${TABpaddingUnit};
		padding-left: ${TABpaddingLeft}${TABpaddingUnit};
		
		gap: ${TABgapNumTitle}px;
	}
	`;

	const wrapperStylesMobile = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber}{
		margin-top: ${MOBmarginTop}${MOBmarginUnit};
		margin-bottom: ${MOBmarginBottom}${MOBmarginUnit};
		margin-left: ${MOBmarginLeft}${MOBmarginUnit};
		margin-right: ${MOBmarginRight}${MOBmarginUnit};
		padding-top: ${MOBpaddingTop}${MOBpaddingUnit};
		padding-bottom: ${MOBpaddingBottom}${MOBpaddingUnit};
		padding-right: ${MOBpaddingRight}${MOBpaddingUnit};
		padding-left: ${MOBpaddingLeft}${MOBpaddingUnit};

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
	`;

	const tabAllStyles = `
		${wrapperStylesTab}
		${numberStylesTab}
		${titleStylesTab}
		${numPrefixStylesTab}
		${numSuffixStylesTab}
	`;

	const mobileAllStyles = `
		${wrapperStylesMobile}
		${numberStylesMobile}
		${titleStylesMobile}
		${numPrefixStylesMobile}
		${numSuffixStylesMobile}
	`;

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		<>
			<style>
				{`
				${desktopAllStyles}

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? mobileAllStyles : " "}

				@media all and (max-width: 1030px) {				
					${tabAllStyles}
				}

				@media all and (max-width: 680px) {
					${mobileAllStyles}
				}
				`}
			</style>
			<div
				className={`eb-counter-wrapper eb-counter-wrapper-${randomNumber}`}
				onMouseEnter={() => setAttributes({ isHover: true })}
				onMouseLeave={() => setAttributes({ isHover: false })}
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
		</>,
	];
};

export default Edit;
