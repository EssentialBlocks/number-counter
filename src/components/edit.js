/**
 * WordPress dependencies
 */
const { useRef, useEffect } = wp.element;
const { RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown
const textInsideForEdit = (value, isShowSeparator, separator) =>
	isShowSeparator
		? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
		: value.toString();

const Edit = ({ isSelected, attributes, setAttributes }) => {
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
		isHover,
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
		boxShadow: isHover
			? `${hoverHOffset || 0}px ${hoverVOffset || 0}px ${hoverBlur || 0}px ${
					hoverSpread || 0
			  }px ${hoverShadowColor || "#000000"} ${hoverInset ? "inset" : ""}`
			: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${spread || 0}px ${
					shadowColor || "#000000"
			  } ${inset ? "inset" : ""}`,
		transition: wrapperTransitionTime
			? `${wrapperTransitionTime / 1000}s`
			: ".5s",
	};
	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		<div
			className="eb-counter-wrapper"
			onMouseEnter={() => setAttributes({ isHover: true })}
			onMouseLeave={() => setAttributes({ isHover: false })}
			style={wrapperStyles}
		>
			<h4 className="eb-counter-number">
				<span className="eb-counter-prefix" style={numPrefixStyles}>
					{counterPrefix}
				</span>
				<span ref={counterRef} className="eb-counter" style={numberStyles}>
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
		</div>,
	];
};

export default Edit;
