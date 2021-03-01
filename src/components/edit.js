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
	console.log("--------edit:", props);
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
		isHover,
		hoverShadowColor,
		hoverHOffset,
		hoverVOffset,
		hoverBlur,
		hoverSpread,
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
		const bodyClasses = document.body.className;
		if (!bodyClasses.includes("eb-res-option-")) {
			document.body.classList.add("eb-res-option-desktop");
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

	// function to generate typography styles for an element based on it's prefix
	const generateTypographyStyles = (
		prefixConstant,
		defaultFontSize = false
	) => {
		const {
			[`${prefixConstant}FontFamily`]: fontFamily,
			[`${prefixConstant}FontWeight`]: fontWeight,
			[`${prefixConstant}TextTransform`]: textTransform,
			[`${prefixConstant}TextDecoration`]: textDecoration,
			[`${prefixConstant}FontSize`]: fontSize,
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
			[`TAB${prefixConstant}SizeUnit`]: TABsizeUnit,
			[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
			[`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
			[`TAB${prefixConstant}LineHeight`]: TABlineHeight,
			[`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit,

			[`MOB${prefixConstant}FontFamily`]: MOBfontFamily,
			[`MOB${prefixConstant}FontWeight`]: MOBfontWeight,
			[`MOB${prefixConstant}TextTransform`]: MOBtextTransform,
			[`MOB${prefixConstant}TextDecoration`]: MOBtextDecoration,
			[`MOB${prefixConstant}FontSize`]: MOBfontSize,
			[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit,
			[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
			[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
			[`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
			[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
		} = attributes;

		const typoStylesDesktop = `
			font-family: ${fontFamily ? fontFamily : "inherit"};
			

		`;

		return {
			fontFamily: fontFamily ? fontFamily : "inherit",
			// fontSize: defaultFontSize
			// 	? `${attributes[`${prefix}FontSize`] || defaultFontSize}${
			// 			attributes[`${prefix}SizeUnit`]
			// 	  }`
			// 	: attributes[`${prefix}FontSize`]
			// 	? `${attributes[`${prefix}FontSize`]}${attributes[`${prefix}SizeUnit`]}`
			// 	: "inherit",

			fontSize: attributes[`${prefixConstant}FontSize`]
				? `${attributes[`${prefixConstant}FontSize`]}${
						attributes[`${prefixConstant}SizeUnit`]
				  }`
				: defaultFontSize
				? `${defaultFontSize}${attributes[`${prefixConstant}SizeUnit`]}`
				: "inherit",

			fontWeight: attributes[`${prefixConstant}FontWeight`],
			textTransform: attributes[`${prefixConstant}TextTransform`],
			textDecoration: attributes[`${prefixConstant}TextDecoration`],
			letterSpacing: `${attributes[`${prefixConstant}LetterSpacing`]}${
				attributes[`${prefixConstant}LetterSpacingUnit`]
			} `,
			lineHeight: `${attributes[`${prefixConstant}LineHeight`]}${
				attributes[`${prefixConstant}LineHeightUnit`]
			} `,
		};
	};

	const titleStyles = {
		...generateTypographyStyles(title, 40),
	};
	const numberStyles = {
		...generateTypographyStyles(number, 64),
	};
	const numPrefixStyles = {
		...generateTypographyStyles(numPrefix),
	};
	const numSuffixStyles = {
		...generateTypographyStyles(numSuffix),
	};
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

	const numberStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
		color : ${numberColor};
		padding-left: ${gapNumPrefix}px;
		padding-right: ${gapNumSuffix}px;
	}
	`;

	const titleStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
		color : ${titleColor};
	}
	`;

	const numPrefixStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
		color : ${numPrefixColor};
	}
	`;

	const numSuffixStylesDesktop = `
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
		color : ${numSuffixColor};
	}
	`;

	const numberStylesTab = `   .eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
		color : ${TABnumberColor || numberColor};
	} `;

	const titleStylesTab = `  
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
		color : ${TABtitleColor || titleColor};
	}  `;

	const numPrefixStylesTab = `  
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
		color : ${TABnumPrefixColor || numPrefixColor};
	}  `;

	const numSuffixStylesTab = `   				
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
		color : ${TABnumSuffixColor || numSuffixColor};
	} `;

	const numberStylesMobile = ` .eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
		color : ${MOBnumberColor || TABnumberColor || numberColor};
	}`;

	const titleStylesMobile = `  	
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
		color : ${MOBtitleColor || TABtitleColor || titleColor};
	} `;

	const numPrefixStylesMobile = `  
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
		color : ${MOBnumPrefixColor || TABnumPrefixColor || numPrefixColor};
	}  `;

	const numSuffixStylesMobile = `   	
				
	.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
		color : ${MOBnumSuffixColor || TABnumSuffixColor || numSuffixColor};
	}

	`;

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		<>
			<style>
				{`
		
				${wrapperStylesDesktop}
				${numberStylesDesktop}
				${titleStylesDesktop}
				${numPrefixStylesDesktop}
				${numSuffixStylesDesktop}
				

				@media all and (max-width: 1030px) {				
					${numberStylesTab}
					${titleStylesTab}
					${numPrefixStylesTab}
					${numSuffixStylesTab}
				}

				@media all and (max-width: 680px) {
					${numberStylesMobile}
					${titleStylesMobile}
					${numPrefixStylesMobile}
					${numSuffixStylesMobile}
				}


				`}
			</style>
			<div
				className={`eb-counter-wrapper eb-counter-wrapper-${randomNumber}`}
				onMouseEnter={() => setAttributes({ isHover: true })}
				onMouseLeave={() => setAttributes({ isHover: false })}
			>
				<h4 className="eb-counter-number">
					<span className="eb-counter-prefix" style={numPrefixStyles}>
						{counterPrefix}
					</span>
					<span
						ref={counterRef}
						className="eb-counter eb-counter-number"
						style={numberStyles}
					>
						0
					</span>
					<span className="eb-counter-suffix" style={numSuffixStyles}>
						{counterSuffix}
					</span>
				</h4>
				<RichText
					tagName="h3"
					style={titleStyles}
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
