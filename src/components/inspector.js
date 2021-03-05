/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const { useEffect } = wp.element;
const {
	ButtonGroup,
	Button,
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	BaseControl,
	RangeControl,
} = wp.components;

/**
 * Internal dependencies
 */

import ColorControl from "../../util/color-control";
import DimensionsControl from "../../util/dimensions-control";
import UnitControl from "../../util/unit-control";
import GradientColorController from "../../util/gradient-color-controller";
import ImageAvater from "../../util/image-avatar/ImageAvater";
import ResetControl from "../../util/reset-control";
import ToggleButton from "../../util/toggle-button";
import TypographyControl from "../../util/typography-component";
import ResPanelBody from "./ResPanelBody";

import {
	BACKGROUND_TYPES,
	BACKGROUND_SIZES,
	BORDER_STYLES,
	SHADOW_HOVER_OPTIONS,
	SEPARATOR_OPTIONS,
	LAYOUT_OPTIONS,
	FONT_SIZE_UNITS,
	LETTER_SPACING_LINE_HEIGHT_UNITS,
} from "./constants";

import {
	title,
	number,
	numPrefix,
	numSuffix,
} from "./constants/typographyPrefixConstants";

const Inspector = (props) => {
	console.log("--------inspector:", props);
	const { attributes, setAttributes } = props;
	const {
		// responsive control attributes ⬇
		resOption,

		// counter settings attributes ⬇
		startValue,
		target,
		counterPrefix,
		counterSuffix,
		duration,
		isShowSeparator,
		separastorSelectLabel,
		layoutLabel,

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
		backgroundColor,
		gradientColor,
		imageURL,
		imageID,
		backgroundSize,

		// TABbackgroundType = TABbackgroundType || backgroundType,
		// TABbackgroundColor = TABbackgroundColor || backgroundColor,
		// TABgradientColor = TABgradientColor || gradientColor,
		// TABbackgroundSize = TABbackgroundSize || backgroundSize,
		// TABimageURL = TABimageURL || imageURL,
		// TABimageID = TABimageID || imageID,

		// MOBbackgroundType = MOBbackgroundType ||
		// 	TABbackgroundType ||
		// 	backgroundType,
		// MOBbackgroundColor = MOBbackgroundColor ||
		// 	TABbackgroundColor ||
		// 	backgroundColor,
		// MOBgradientColor = MOBgradientColor || TABgradientColor || gradientColor,
		// MOBbackgroundSize = MOBbackgroundSize ||
		// 	TABbackgroundSize ||
		// 	backgroundSize,
		// MOBimageURL = MOBimageURL || TABimageURL || imageURL,
		// MOBimageID = MOBimageID || TABimageID || imageID,

		// border attributes ⬇
		borderWidth,
		radiusUnit,
		borderRadius,
		borderStyle,
		borderColor,

		// shadow attributes  ⬇
		shadowType,
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

		// // Typography Attributes  ⬇
		// // title typography attributes  ⬇
		// titleFontFamily,
		// titleSizeUnit,
		// titleFontSize,
		// titleFontWeight,
		// titleTextTransform,
		// titleTextDecoration,
		// titleLetterSpacingUnit,
		// titleLetterSpacing,
		// titleLineHeightUnit,
		// titleLineHeight,

		// // number typography attributes  ⬇
		// numberFontFamily,
		// numberSizeUnit,
		// numberFontSize,
		// numberFontWeight,
		// numberTextTransform,
		// numberTextDecoration,
		// numberLetterSpacingUnit,
		// numberLetterSpacing,
		// numberLineHeightUnit,
		// numberLineHeight,

		// // prefix typography attributes  ⬇
		// prefixFontFamily,
		// prefixSizeUnit,
		// prefixFontSize,
		// prefixFontWeight,
		// prefixTextTransform,
		// prefixTextDecoration,
		// prefixLetterSpacingUnit,
		// prefixLetterSpacing,
		// prefixLineHeightUnit,
		// prefixLineHeight,

		// // suffix typography attributes ⬇
		// suffixFontFamily,
		// suffixSizeUnit,
		// suffixFontSize,
		// suffixFontWeight,
		// suffixTextTransform,
		// suffixTextDecoration,
		// suffixLetterSpacingUnit,
		// suffixLetterSpacing,
		// suffixLineHeightUnit,
		// suffixLineHeight,
	} = attributes;

	useEffect(() => {
		const bodyClasses = document.body.className;
		console.log("----log from inspector useEffect with empty []", {
			bodyClasses,
		});
		if (bodyClasses.includes("eb-res-option-desktop")) {
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
	}, []);

	const handleSeparatorChange = (separastorSelectLabel) => {
		switch (separastorSelectLabel) {
			case "Default":
				setAttributes({ separator: "," });
				break;

			case "Dot":
				setAttributes({ separator: "." });
				break;

			case "Space":
				setAttributes({ separator: " " });
				break;
		}
		setAttributes({ separastorSelectLabel });
	};

	const handleLayoutChange = (layoutLabel) => {
		switch (layoutLabel) {
			case "Default":
				setAttributes({ wrapperFlexDirection: "column" });
				break;

			case "Reverse":
				setAttributes({ wrapperFlexDirection: "column-reverse" });
				break;
		}
		setAttributes({ layoutLabel });
	};

	console.log("---from inspector outside without any useEffect: ", {
		resOption,
	});

	const resRequiredProps = {
		setAttributes,
		resOption,
	};

	const generateTypographyAttributes = (prefixConstant) => {
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

		return {
			fontFamily,
			fontWeight,
			textTransform,
			textDecoration,
			fontSize,
			sizeUnit,
			letterSpacing,
			letterSpacingUnit,
			lineHeight,
			lineHeightUnit,
			TABfontFamily,
			TABfontWeight,
			TABtextTransform,
			TABtextDecoration,
			TABfontSize,
			TABsizeUnit,
			TABletterSpacing,
			TABletterSpacingUnit,
			TABlineHeight,
			TABlineHeightUnit,
			MOBfontFamily,
			MOBfontWeight,
			MOBtextTransform,
			MOBtextDecoration,
			MOBfontSize,
			MOBsizeUnit,
			MOBletterSpacing,
			MOBletterSpacingUnit,
			MOBlineHeight,
			MOBlineHeightUnit,
		};
	};
	const titleTypoAttrr = generateTypographyAttributes(title);
	console.log("------------title typo attributes", { titleTypoAttrr });

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("Counter Settings")} initialOpen={false}>
					<BaseControl id="eb-counter-start-value">
						<TextControl
							label={__("Starting Number")}
							value={startValue}
							type="number"
							onChange={(value) =>
								!/[\-\.]/.test(value) && setAttributes({ startValue: value })
							}
						/>
					</BaseControl>
					<BaseControl id="eb-counter-end-value">
						<TextControl
							label={__("Ending Number")}
							value={target}
							type="number"
							onChange={(value) =>
								!/[\-\.]/.test(value) && setAttributes({ target: value })
							}
						/>
					</BaseControl>
					<BaseControl id="eb-counter-duration">
						<TextControl
							label={__("Animation Duration")}
							value={duration}
							type="number"
							onChange={(value) =>
								!/[\-\.]/.test(value) && setAttributes({ duration: value })
							}
						/>
					</BaseControl>
					<BaseControl id="eb-counter-prefix">
						<TextControl
							label={__("Number Prefix")}
							value={counterPrefix}
							onChange={(counterPrefix) => setAttributes({ counterPrefix })}
						/>
					</BaseControl>
					<BaseControl id="eb-counter-suffix">
						<TextControl
							label={__("Number Suffix")}
							value={counterSuffix}
							onChange={(counterSuffix) => setAttributes({ counterSuffix })}
						/>
					</BaseControl>

					<SelectControl
						label={__("Layouts")}
						options={LAYOUT_OPTIONS}
						value={layoutLabel}
						onChange={(value) => handleLayoutChange(value)}
					/>

					<ToggleControl
						label={__("Thousand Separator")}
						checked={isShowSeparator}
						onChange={() =>
							setAttributes({
								isShowSeparator: !isShowSeparator,
							})
						}
					/>

					{isShowSeparator && (
						<SelectControl
							label={__("Separator")}
							options={SEPARATOR_OPTIONS}
							value={separastorSelectLabel}
							onChange={(value) => handleSeparatorChange(value)}
						/>
					)}
				</PanelBody>

				<ResPanelBody
					title={__("Typography")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					<TypographyControl
						baseLabel="Title"
						typographyPrefixConstant={title}
						typographyAttributes={generateTypographyAttributes(title)}
						resOption={resOption}
						setAttributes={setAttributes}
					/>
					<TypographyControl
						baseLabel="Number"
						typographyPrefixConstant={number}
						typographyAttributes={generateTypographyAttributes(number)}
						resOption={resOption}
						setAttributes={setAttributes}
					/>
					<TypographyControl
						baseLabel="Prefix"
						typographyPrefixConstant={numPrefix}
						typographyAttributes={generateTypographyAttributes(numPrefix)}
						resOption={resOption}
						setAttributes={setAttributes}
					/>
					<TypographyControl
						baseLabel="Suffix"
						typographyPrefixConstant={numSuffix}
						typographyAttributes={generateTypographyAttributes(numSuffix)}
						resOption={resOption}
						setAttributes={setAttributes}
					/>
				</ResPanelBody>

				<ResPanelBody
					title={__("Colors")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<ColorControl
								label={__("Number")}
								color={numberColor}
								onChange={(numberColor) => setAttributes({ numberColor })}
							/>
							<ColorControl
								label={__("Title")}
								color={titleColor}
								onChange={(titleColor) => setAttributes({ titleColor })}
							/>
							<ColorControl
								label={__("Number Prefix")}
								color={numPrefixColor}
								onChange={(numPrefixColor) => setAttributes({ numPrefixColor })}
							/>
							<ColorControl
								label={__("Number Suffix")}
								color={numSuffixColor}
								onChange={(numSuffixColor) => setAttributes({ numSuffixColor })}
							/>
						</>
					)}

					{resOption == "tab" && (
						<>
							<ColorControl
								label={__("Number")}
								color={TABnumberColor}
								onChange={(TABnumberColor) => setAttributes({ TABnumberColor })}
							/>
							<ColorControl
								label={__("Title")}
								color={TABtitleColor}
								onChange={(TABtitleColor) => setAttributes({ TABtitleColor })}
							/>
							<ColorControl
								label={__("Number Prefix")}
								color={TABnumPrefixColor}
								onChange={(TABnumPrefixColor) =>
									setAttributes({ TABnumPrefixColor })
								}
							/>
							<ColorControl
								label={__("Number Suffix")}
								color={TABnumSuffixColor}
								onChange={(TABnumSuffixColor) =>
									setAttributes({ TABnumSuffixColor })
								}
							/>
						</>
					)}

					{resOption == "mobile" && (
						<>
							<ColorControl
								label={__("Number")}
								color={MOBnumberColor}
								onChange={(MOBnumberColor) => setAttributes({ MOBnumberColor })}
							/>
							<ColorControl
								label={__("Title")}
								color={MOBtitleColor}
								onChange={(MOBtitleColor) => setAttributes({ MOBtitleColor })}
							/>
							<ColorControl
								label={__("Number Prefix")}
								color={MOBnumPrefixColor}
								onChange={(MOBnumPrefixColor) =>
									setAttributes({ MOBnumPrefixColor })
								}
							/>
							<ColorControl
								label={__("Number Suffix")}
								color={MOBnumSuffixColor}
								onChange={(MOBnumSuffixColor) =>
									setAttributes({ MOBnumSuffixColor })
								}
							/>
						</>
					)}
				</ResPanelBody>

				<ResPanelBody
					title={__("Spacing")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<RangeControl
								label={__("Number & Title Gap")}
								value={gapNumTitle}
								onChange={(gapNumTitle) => setAttributes({ gapNumTitle })}
								min={0}
								max={100}
							/>
							<RangeControl
								label={__("Number & Prefix Gap")}
								value={gapNumPrefix}
								onChange={(gapNumPrefix) => setAttributes({ gapNumPrefix })}
								min={0}
								max={100}
							/>
							<RangeControl
								label={__("Number & Suffix Gap")}
								value={gapNumSuffix}
								onChange={(gapNumSuffix) => setAttributes({ gapNumSuffix })}
								min={0}
								max={100}
							/>
						</>
					)}
					{resOption == "tab" && (
						<>
							<RangeControl
								label={__("Number & Title Gap")}
								value={TABgapNumTitle}
								onChange={(TABgapNumTitle) => setAttributes({ TABgapNumTitle })}
								min={0}
								max={100}
							/>
							<RangeControl
								label={__("Number & Prefix Gap")}
								value={TABgapNumPrefix}
								onChange={(TABgapNumPrefix) =>
									setAttributes({ TABgapNumPrefix })
								}
								min={0}
								max={100}
							/>
							<RangeControl
								label={__("Number & Suffix Gap")}
								value={TABgapNumSuffix}
								onChange={(TABgapNumSuffix) =>
									setAttributes({ TABgapNumSuffix })
								}
								min={0}
								max={100}
							/>
						</>
					)}
					{resOption == "mobile" && (
						<>
							<RangeControl
								label={__("Number & Title Gap")}
								value={MOBgapNumTitle}
								onChange={(MOBgapNumTitle) => setAttributes({ MOBgapNumTitle })}
								min={0}
								max={100}
							/>
							<RangeControl
								label={__("Number & Prefix Gap")}
								value={MOBgapNumPrefix}
								onChange={(MOBgapNumPrefix) =>
									setAttributes({ MOBgapNumPrefix })
								}
								min={0}
								max={100}
							/>
							<RangeControl
								label={__("Number & Suffix Gap")}
								value={MOBgapNumSuffix}
								onChange={(MOBgapNumSuffix) =>
									setAttributes({ MOBgapNumSuffix })
								}
								min={0}
								max={100}
							/>
						</>
					)}
				</ResPanelBody>

				<ResPanelBody
					title={__("Margin & Padding")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<UnitControl
								selectedUnit={marginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(marginUnit) => setAttributes({ marginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={marginTop}
								right={marginRight}
								bottom={marginBottom}
								left={marginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										marginTop: top,
										marginRight: right,
										marginBottom: bottom,
										marginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={paddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(paddingUnit) => setAttributes({ paddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={paddingTop}
								right={paddingRight}
								bottom={paddingBottom}
								left={paddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										paddingTop: top,
										paddingRight: right,
										paddingBottom: bottom,
										paddingLeft: left,
									})
								}
							/>
						</>
					)}
					{resOption == "tab" && (
						<>
							<UnitControl
								selectedUnit={TABmarginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABmarginUnit) => setAttributes({ TABmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={TABmarginTop}
								right={TABmarginRight}
								bottom={TABmarginBottom}
								left={TABmarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABmarginTop: top,
										TABmarginRight: right,
										TABmarginBottom: bottom,
										TABmarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={TABpaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABpaddingUnit) => setAttributes({ TABpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={TABpaddingTop}
								right={TABpaddingRight}
								bottom={TABpaddingBottom}
								left={TABpaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABpaddingTop: top,
										TABpaddingRight: right,
										TABpaddingBottom: bottom,
										TABpaddingLeft: left,
									})
								}
							/>
						</>
					)}
					{resOption == "mobile" && (
						<>
							<UnitControl
								selectedUnit={MOBmarginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBmarginUnit) => setAttributes({ MOBmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={MOBmarginTop}
								right={MOBmarginRight}
								bottom={MOBmarginBottom}
								left={MOBmarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBmarginTop: top,
										MOBmarginRight: right,
										MOBmarginBottom: bottom,
										MOBmarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={MOBpaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBpaddingUnit) => setAttributes({ MOBpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={MOBpaddingTop}
								right={MOBpaddingRight}
								bottom={MOBpaddingBottom}
								left={MOBpaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBpaddingTop: top,
										MOBpaddingRight: right,
										MOBpaddingBottom: bottom,
										MOBpaddingLeft: left,
									})
								}
							/>
						</>
					)}
				</ResPanelBody>

				<PanelBody title={__("Background")} initialOpen={false}>
					<BaseControl label={__("Background Type")}>
						<ButtonGroup>
							{BACKGROUND_TYPES.map(({ value, label }) => (
								<Button
									isPrimary={backgroundType === value}
									isSecondary={backgroundType !== value}
									onClick={() =>
										setAttributes({
											backgroundType: value,
										})
									}
								>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{backgroundType === "fill" && (
						<ColorControl
							label={__("Background Color")}
							color={backgroundColor}
							onChange={(backgroundColor) => setAttributes({ backgroundColor })}
						/>
					)}

					{backgroundType === "gradient" && (
						<PanelBody title={__("Gradient")} initialOpen={false}>
							<GradientColorController
								gradientColor={gradientColor}
								onChange={(gradientColor) => setAttributes({ gradientColor })}
							/>
						</PanelBody>
					)}

					{backgroundType === "image" && (
						<PanelBody title={__("Background Image")}>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										imageURL: media.url,
										imgeID: media.id,
									})
								}
								type="image"
								value={imageID}
								render={({ open }) =>
									!imageURL && (
										<Button
											className="eb-wrapper-upload-button"
											label={__("Upload Image")}
											icon="format-image"
											onClick={open}
										/>
									)
								}
							/>

							{imageURL && (
								<>
									<ImageAvater
										imageUrl={imageURL}
										onDeleteImage={() => setAttributes({ imageURL: null })}
									/>
									<BaseControl label={__("Background Size")}>
										<ButtonGroup>
											{BACKGROUND_SIZES.map(({ value, label }) => (
												<Button
													isPrimary={backgroundSize === value}
													isSecondary={backgroundSize !== value}
													onClick={() =>
														setAttributes({
															backgroundSize: value,
														})
													}
												>
													{label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>
								</>
							)}
						</PanelBody>
					)}
				</PanelBody>

				<PanelBody title={__("Border")} initialOpen={false}>
					<ResetControl
						onReset={() => setAttributes({ borderWidth: undefined })}
					>
						<RangeControl
							label={__("Border Width")}
							value={borderWidth}
							onChange={(borderWidth) => setAttributes({ borderWidth })}
							min={0}
							max={100}
						/>
					</ResetControl>

					<UnitControl
						selectedUnit={radiusUnit}
						unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
						onClick={(radiusUnit) => setAttributes({ radiusUnit })}
					/>

					<ResetControl
						onReset={() => setAttributes({ borderRadius: undefined })}
					>
						<RangeControl
							label={__("Border Radius")}
							value={borderRadius}
							onChange={(borderRadius) => setAttributes({ borderRadius })}
							min={0}
							max={100}
						/>
					</ResetControl>

					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={BORDER_STYLES}
						onChange={(borderStyle) => setAttributes({ borderStyle })}
					/>

					<ColorControl
						label={__("Border Color")}
						color={borderColor}
						onChange={(borderColor) => setAttributes({ borderColor })}
					/>
				</PanelBody>

				<PanelBody title={__("Shadow")} initialOpen={false}>
					<span
						className={shadowType === "normal" ? "blueOnNormal" : "blueOnHover"}
					>
						<ToggleButton
							options={SHADOW_HOVER_OPTIONS}
							onChange={(value) => setAttributes({ shadowType: value })}
						/>
					</span>
					{shadowType === "normal" && (
						<>
							<ColorControl
								label={__("Shadow Color")}
								color={shadowColor}
								onChange={(shadowColor) => setAttributes({ shadowColor })}
							/>

							<ResetControl
								onReset={() => setAttributes({ hOffset: undefined })}
							>
								<RangeControl
									label={__("Horizontal Offset")}
									value={hOffset}
									onChange={(hOffset) => setAttributes({ hOffset })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ vOffset: undefined })}
							>
								<RangeControl
									label={__("Vertical Offset")}
									value={vOffset}
									onChange={(vOffset) => setAttributes({ vOffset })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ResetControl onReset={() => setAttributes({ blur: undefined })}>
								<RangeControl
									label={__("Shadow Blur")}
									value={blur}
									onChange={(blur) => setAttributes({ blur })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ spread: undefined })}
							>
								<RangeControl
									label={__("Shadow Spread")}
									value={spread}
									onChange={(spread) => setAttributes({ spread })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ToggleControl
								label={__("Inset")}
								checked={inset}
								onChange={() => setAttributes({ inset: !inset })}
							/>
						</>
					)}

					{shadowType === "hover" && (
						<>
							<ColorControl
								label={__("Hover Shadow Color")}
								color={hoverShadowColor}
								onChange={(hoverShadowColor) =>
									setAttributes({ hoverShadowColor })
								}
							/>

							<ResetControl
								onReset={() => setAttributes({ hoverHOffset: undefined })}
							>
								<RangeControl
									label={__("Horizontal Offset")}
									value={hoverHOffset}
									onChange={(hoverHOffset) => setAttributes({ hoverHOffset })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ hoverVOffset: undefined })}
							>
								<RangeControl
									label={__("Vertical Offset")}
									value={hoverVOffset}
									onChange={(hoverVOffset) => setAttributes({ hoverVOffset })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ hoverBlur: undefined })}
							>
								<RangeControl
									label={__("Shadow Blur")}
									value={hoverBlur}
									onChange={(hoverBlur) => setAttributes({ hoverBlur })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ hoverSpread: undefined })}
							>
								<RangeControl
									label={__("Shadow Spread")}
									value={hoverSpread}
									onChange={(hoverSpread) => setAttributes({ hoverSpread })}
									min={0}
									max={20}
								/>
							</ResetControl>

							<ToggleControl
								label={__("Inset")}
								checked={hoverInset}
								onChange={() => setAttributes({ hoverInset: !hoverInset })}
							/>
						</>
					)}

					<BaseControl id="eb-counter-transition-time">
						<TextControl
							label={__("Transition")}
							value={wrapperTransitionTime}
							type="number"
							onChange={(wrapperTransitionTime) =>
								setAttributes({ wrapperTransitionTime })
							}
						/>
					</BaseControl>
				</PanelBody>
			</span>
		</InspectorControls>
	);
};
export default Inspector;
