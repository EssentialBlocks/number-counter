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
import { generateTypographyStyles } from "./helpers";

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
		hoverShadowColor,
		hoverHOffset,
		hoverVOffset,
		hoverBlur,
		hoverSpread,
		hoverInset,
		wrapperTransitionTime,
	} = attributes;

	const titleStyles = {
		...generateTypographyStyles(attributes, title, 40),

		// color: titleColor,
	};
	const numberStyles = {
		...generateTypographyStyles(attributes, number, 64),

		// color: numberColor,
		paddingLeft: `${gapNumPrefix}px`,
		paddingRight: `${gapNumSuffix}px`,
	};
	const numPrefixStyles = {
		...generateTypographyStyles(attributes, numPrefix),

		// color: numPrefixColor,
	};
	const numSuffixStyles = {
		...generateTypographyStyles(attributes, numSuffix),

		// color: numSuffixColor,
	};

	const wrapperStyles = {
		// marginTop: `${marginTop || 0}${marginUnit}`,
		// marginBottom: `${marginBottom || 0}${marginUnit}`,
		// marginLeft: `${marginLeft || 0}${marginUnit}`,
		// marginRight: `${marginRight || 0}${marginUnit}`,
		// paddingTop: `${paddingTop || 0}${paddingUnit}`,
		// paddingBottom: `${paddingBottom || 0}${paddingUnit}`,
		// paddingRight: `${paddingRight || 0}${paddingUnit}`,
		// paddingLeft: `${paddingLeft || 0}${paddingUnit}`,
		// gap: `${gapNumTitle}px`,
		// flexDirection: wrapperFlexDirection,
		// backgroundImage:
		// 	backgroundType === "image" && imageURL
		// 		? `url("${imageURL}")`
		// 		: backgroundType === "gradient"
		// 		? gradientColor
		// 		: "none",
		// backgroundSize: backgroundSize,
		// backgroundColor:
		// 	(backgroundType === "fill" && backgroundColor) || "transparent",
		// border: `${borderWidth || 0}px ${borderStyle} ${borderColor || "#000000"}`,
		// borderRadius: `${borderRadius || 0}${radiusUnit}`,
		// boxShadow: `${shadowColor || "#000000"} ${hOffset || 0}px ${
		// 	vOffset || 0
		// }px ${blur || 0}px ${spread || 0}px ${inset ? "inset" : ""}`,
		// transition: wrapperTransitionTime
		// 	? `${wrapperTransitionTime / 1000}s`
		// 	: ".5s",
	};

	return (
		<>
			<style>
				{`
				
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

				
				.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
					color : ${numberColor};
				}
				
				.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
					color : ${titleColor};
				}
			
				.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
					color : ${numPrefixColor};
				}
			
				.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
					color : ${numSuffixColor};
				}


				@media all and (max-width: 1190px) {
					h2 {
						color: blue !important;
					}

					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
						color : ${TABnumberColor || numberColor};
					}

					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
						color : ${TABtitleColor || titleColor};
					}
				
					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
						color : ${TABnumPrefixColor || numPrefixColor};
					}
				
					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
						color : ${TABnumSuffixColor || numSuffixColor};
					}

				}

				@media all and (max-width: 700px) {
					h2 {
						color: red !important;
					}
				
					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-number{
						color : ${MOBnumberColor || TABnumberColor || numberColor};
					}
						
					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-title{
						color : ${MOBtitleColor || TABtitleColor || titleColor};
					}
				
					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-prefix{
						color : ${MOBnumPrefixColor || TABnumPrefixColor || numPrefixColor};
					}
				
					.eb-counter-wrapper.eb-counter-wrapper-${randomNumber} .eb-counter-suffix{
						color : ${MOBnumSuffixColor || TABnumSuffixColor || numSuffixColor};
					}

				}

				`}
			</style>

			<div
				className={`eb-counter-wrapper eb-counter-wrapper-${randomNumber}`}
				style={wrapperStyles}
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
					<span className="eb-counter-prefix" style={numPrefixStyles}>
						{counterPrefix}
					</span>
					<span
						className="eb-counter eb-counter-number"
						data-duration={duration ? Math.floor(Math.abs(duration)) : 0}
						data-startValue={startValue ? Math.floor(Math.abs(startValue)) : 0}
						data-target={target ? Math.floor(Math.abs(target)) : 0}
						data-separator={separator}
						data-isShowSeparator={isShowSeparator}
						style={numberStyles}
					>
						0
					</span>
					<span className="eb-counter-suffix" style={numSuffixStyles}>
						{counterSuffix}
					</span>
				</h4>

				<RichText.Content
					tagName="h3"
					style={titleStyles}
					className="eb-counter-title"
					value={counterTitle}
				/>
			</div>
		</>
	);
};

export default Save;
