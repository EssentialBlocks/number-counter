/**
 * WordPress dependencies
 */

const { RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */

const Save = ({ attributes }) => {
	const {
		// counter settings attributes ⬇
		target,
		duration,
		counterTitle,
		counterSuffix,
		counterPrefix,
		startValue,
		isShowSeparator,
		separator,
		titleColor,
		numberColor,
		numPrefixColor,
		numSuffixColor,
		wrapperFlexDirection,

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

		// Typography Attributes  ⬇
		// title typography attributes  ⬇
		titleFontFamily,
		titleSizeUnit,
		titleFontSize,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacingUnit,
		titleLetterSpacing,
		titleLineHeightUnit,
		titleLineHeight,

		// number typography attributes  ⬇
		numberFontFamily,
		numberSizeUnit,
		numberFontSize,
		numberFontWeight,
		numberTextTransform,
		numberTextDecoration,
		numberLetterSpacingUnit,
		numberLetterSpacing,
		numberLineHeightUnit,
		numberLineHeight,

		// prefix typography attributes  ⬇
		prefixFontFamily,
		prefixSizeUnit,
		prefixFontSize,
		prefixFontWeight,
		prefixTextTransform,
		prefixTextDecoration,
		prefixLetterSpacingUnit,
		prefixLetterSpacing,
		prefixLineHeightUnit,
		prefixLineHeight,

		// suffix typography attributes ⬇
		suffixFontFamily,
		suffixSizeUnit,
		suffixFontSize,
		suffixFontWeight,
		suffixTextTransform,
		suffixTextDecoration,
		suffixLetterSpacingUnit,
		suffixLetterSpacing,
		suffixLineHeightUnit,
		suffixLineHeight,
	} = attributes;

	const titleStyles = {
		fontFamily: titleFontFamily || "inherit",
		fontSize: titleFontSize ? `${titleFontSize}${titleSizeUnit}` : "40px",
		fontWeight: titleFontWeight,
		textTransform: titleTextTransform,
		textDecoration: titleTextDecoration,
		letterSpacing: `${titleLetterSpacing}${titleLetterSpacingUnit}`,
		lineHeight: `${titleLineHeight}${titleLineHeightUnit}`,

		color: titleColor,
	};
	const numberStyles = {
		fontFamily: numberFontFamily || "inherit",
		fontSize: numberFontSize ? `${numberFontSize}${numberSizeUnit}` : "64px",
		fontWeight: numberFontWeight,
		textTransform: numberTextTransform,
		textDecoration: numberTextDecoration,
		letterSpacing: `${numberLetterSpacing}${numberLetterSpacingUnit}`,
		lineHeight: `${numberLineHeight}${numberLineHeightUnit}`,

		color: numberColor,
		paddingLeft: `${gapNumPrefix}px`,
		paddingRight: `${gapNumSuffix}px`,
	};
	const numPrefixStyles = {
		fontFamily: prefixFontFamily || "inherit",
		fontSize: prefixFontSize ? `${prefixFontSize}${prefixSizeUnit}` : "inherit",
		fontWeight: prefixFontWeight,
		textTransform: prefixTextTransform,
		textDecoration: prefixTextDecoration,
		letterSpacing: `${prefixLetterSpacing}${prefixLetterSpacingUnit}`,
		lineHeight: `${prefixLineHeight}${prefixLineHeightUnit}`,

		color: numPrefixColor,
	};
	const numSuffixStyles = {
		fontFamily: suffixFontFamily || "inherit",
		fontSize: suffixFontSize ? `${suffixFontSize}${suffixSizeUnit}` : "inherit",
		fontWeight: suffixFontWeight,
		textTransform: suffixTextTransform,
		textDecoration: suffixTextDecoration,
		letterSpacing: `${suffixLetterSpacing}${suffixLetterSpacingUnit}`,
		lineHeight: `${suffixLineHeight}${suffixLineHeightUnit}`,

		color: numSuffixColor,
	};

	const wrapperStyles = {
		marginTop: `${marginTop || 0}${marginUnit}`,
		marginBottom: `${marginBottom || 0}${marginUnit}`,
		marginLeft: `${marginLeft || 0}${marginUnit}`,
		marginRight: `${marginRight || 0}${marginUnit}`,
		paddingTop: `${paddingTop || 0}${paddingUnit}`,
		paddingBottom: `${paddingBottom || 0}${paddingUnit}`,
		paddingRight: `${paddingRight || 0}${paddingUnit}`,
		paddingLeft: `${paddingLeft || 0}${paddingUnit}`,
		gap: `${gapNumTitle}px`,
		flexDirection: wrapperFlexDirection,
		backgroundImage:
			backgroundType === "image" && imageURL
				? `url("${imageURL}")`
				: backgroundType === "gradient"
				? gradientColor
				: "none",
		backgroundSize: backgroundSize,
		backgroundColor:
			(backgroundType === "fill" && backgroundColor) || "transparent",
		border: `${borderWidth || 0}px ${borderStyle} ${borderColor || "#000000"}`,
		borderRadius: `${borderRadius || 0}${radiusUnit}`,
		boxShadow: `${shadowColor || "#000000"} ${hOffset || 0}px ${
			vOffset || 0
		}px ${blur || 0}px ${spread || 0}px ${inset ? "inset" : ""}`,
		transition: wrapperTransitionTime
			? `${wrapperTransitionTime / 1000}s`
			: ".5s",
	};

	return (
		<div
			className="eb-counter-wrapper"
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
					className="eb-counter"
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
	);
};

export default Save;
