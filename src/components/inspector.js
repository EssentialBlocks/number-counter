/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const {
	ButtonGroup,
	Button,
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	BaseControl,
	RangeControl,
	Dropdown,
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
import { TypographyIcon } from "../../util/icons";
import FontPicker from "../../util/typography-control/FontPicker";

import {
	BACKGROUND_TYPES,
	BACKGROUND_SIZES,
	BORDER_STYLES,
	SHADOW_HOVER_OPTIONS,
	SEPARATOR_OPTIONS,
	LAYOUT_OPTIONS,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
	FONT_SIZE_UNITS,
	LETTER_SPACING_LINE_HEIGHT_UNITS,
} from "./constants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		// counter settings attributes ⬇
		startValue,
		target,
		counterPrefix,
		counterSuffix,
		duration,
		isShowSeparator,
		separastorSelectLabel,
		titleColor,
		numberColor,
		numPrefixColor,
		numSuffixColor,
		layoutLabel,

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
		backgroundColor,
		gradientColor,
		imageURL,
		imageID,
		backgroundSize,

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

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("Counter Settings")} initialOpen={false}>
					<BaseControl id="eb-counter-start-value">
						<TextControl
							label={__("Starting Number")}
							value={startValue}
							type="number"
							onChange={(startValue) => setAttributes({ startValue })}
						/>
					</BaseControl>
					<BaseControl id="eb-counter-end-value">
						<TextControl
							label={__("Ending Number")}
							value={target || " "}
							type="number"
							onChange={(target) => setAttributes({ target })}
						/>
					</BaseControl>
					<BaseControl id="eb-counter-duration">
						<TextControl
							label={__("Animation Duration")}
							value={duration || " "}
							type="number"
							onChange={(duration) => setAttributes({ duration })}
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

				<PanelBody title={__("Typography")} initialOpen={false}>
					<BaseControl label={__("Number ")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
									<TypographyIcon />
								</Button>
							)}
							renderContent={() => (
								<div className="eb-panel-control" style={{ padding: "0.2rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={numberFontFamily}
										onChange={(FontFamily) => {
											setAttributes({
												numberFontFamily: FontFamily,
											});
										}}
									/>

									<UnitControl
										selectedUnit={numberSizeUnit}
										unitTypes={FONT_SIZE_UNITS}
										onClick={(SizeUnit) =>
											setAttributes({
												numberSizeUnit: SizeUnit,
											})
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={numberFontSize}
										onChange={(FontSize) =>
											setAttributes({
												numberFontSize: FontSize,
											})
										}
										step={numberSizeUnit === "em" ? 0.1 : 1}
										min={0}
										max={numberSizeUnit === "em" ? 10 : 300}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={numberFontWeight}
										options={FONT_WEIGHTS}
										onChange={(FontWeight) =>
											setAttributes({
												numberFontWeight: FontWeight,
											})
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={numberTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(TextTransform) =>
											setAttributes({
												numberTextTransform: TextTransform,
											})
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={numberTextDecoration}
										options={TEXT_DECORATION}
										onChange={(TextDecoration) =>
											setAttributes({
												numberTextDecoration: TextDecoration,
											})
										}
									/>

									<UnitControl
										selectedUnit={numberSizeUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LetterSpacingUnit) =>
											setAttributes({
												numberLetterSpacingUnit: LetterSpacingUnit,
											})
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={numberLetterSpacing}
										onChange={(LetterSpacing) =>
											setAttributes({
												numberLetterSpacing: LetterSpacing,
											})
										}
										min={0}
										max={numberLetterSpacingUnit === "em" ? 10 : 100}
										step={numberLetterSpacingUnit === "em" ? 0.1 : 1}
									/>

									<UnitControl
										selectedUnit={numberLineHeightUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LineHeightUnit) =>
											setAttributes({
												numberLineHeightUnit: LineHeightUnit,
											})
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={numberLineHeight}
										onChange={(LineHeight) =>
											setAttributes({
												numberLineHeight: LineHeight,
											})
										}
										min={0}
										max={numberLineHeightUnit === "em" ? 10 : 600}
										step={numberLineHeightUnit === "em" ? 0.1 : 1}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl label={__("Title ")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
									<TypographyIcon />
								</Button>
							)}
							renderContent={() => (
								<div className="eb-panel-control" style={{ padding: "0.2rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={titleFontFamily}
										onChange={(FontFamily) => {
											setAttributes({
												titleFontFamily: FontFamily,
											});
										}}
									/>

									<UnitControl
										selectedUnit={titleSizeUnit}
										unitTypes={FONT_SIZE_UNITS}
										onClick={(SizeUnit) =>
											setAttributes({
												titleSizeUnit: SizeUnit,
											})
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={titleFontSize}
										onChange={(FontSize) =>
											setAttributes({
												titleFontSize: FontSize,
											})
										}
										step={titleSizeUnit === "em" ? 0.1 : 1}
										min={0}
										max={titleSizeUnit === "em" ? 10 : 300}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={titleFontWeight}
										options={FONT_WEIGHTS}
										onChange={(FontWeight) =>
											setAttributes({
												titleFontWeight: FontWeight,
											})
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={titleTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(TextTransform) =>
											setAttributes({
												titleTextTransform: TextTransform,
											})
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={titleTextDecoration}
										options={TEXT_DECORATION}
										onChange={(TextDecoration) =>
											setAttributes({
												titleTextDecoration: TextDecoration,
											})
										}
									/>

									<UnitControl
										selectedUnit={titleSizeUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LetterSpacingUnit) =>
											setAttributes({
												titleLetterSpacingUnit: LetterSpacingUnit,
											})
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={titleLetterSpacing}
										onChange={(LetterSpacing) =>
											setAttributes({
												titleLetterSpacing: LetterSpacing,
											})
										}
										min={0}
										max={titleLetterSpacingUnit === "em" ? 10 : 100}
										step={titleLetterSpacingUnit === "em" ? 0.1 : 1}
									/>

									<UnitControl
										selectedUnit={titleLineHeightUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LineHeightUnit) =>
											setAttributes({
												titleLineHeightUnit: LineHeightUnit,
											})
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={titleLineHeight}
										onChange={(LineHeight) =>
											setAttributes({
												titleLineHeight: LineHeight,
											})
										}
										min={0}
										max={titleLineHeightUnit === "em" ? 10 : 600}
										step={titleLineHeightUnit === "em" ? 0.1 : 1}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl
						label={__("Number Prefix")}
						className="eb-typography-base"
					>
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
									<TypographyIcon />
								</Button>
							)}
							renderContent={() => (
								<div className="eb-panel-control" style={{ padding: "0.2rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={prefixFontFamily}
										onChange={(FontFamily) => {
											setAttributes({
												prefixFontFamily: FontFamily,
											});
										}}
									/>

									<UnitControl
										selectedUnit={prefixSizeUnit}
										unitTypes={FONT_SIZE_UNITS}
										onClick={(SizeUnit) =>
											setAttributes({
												prefixSizeUnit: SizeUnit,
											})
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={prefixFontSize}
										onChange={(FontSize) =>
											setAttributes({
												prefixFontSize: FontSize,
											})
										}
										step={prefixSizeUnit === "em" ? 0.1 : 1}
										min={0}
										max={prefixSizeUnit === "em" ? 10 : 300}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={prefixFontWeight}
										options={FONT_WEIGHTS}
										onChange={(FontWeight) =>
											setAttributes({
												prefixFontWeight: FontWeight,
											})
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={prefixTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(TextTransform) =>
											setAttributes({
												prefixTextTransform: TextTransform,
											})
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={prefixTextDecoration}
										options={TEXT_DECORATION}
										onChange={(TextDecoration) =>
											setAttributes({
												prefixTextDecoration: TextDecoration,
											})
										}
									/>

									<UnitControl
										selectedUnit={prefixSizeUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LetterSpacingUnit) =>
											setAttributes({
												prefixLetterSpacingUnit: LetterSpacingUnit,
											})
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={prefixLetterSpacing}
										onChange={(LetterSpacing) =>
											setAttributes({
												prefixLetterSpacing: LetterSpacing,
											})
										}
										min={0}
										max={prefixLetterSpacingUnit === "em" ? 10 : 100}
										step={prefixLetterSpacingUnit === "em" ? 0.1 : 1}
									/>

									<UnitControl
										selectedUnit={prefixLineHeightUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LineHeightUnit) =>
											setAttributes({
												prefixLineHeightUnit: LineHeightUnit,
											})
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={prefixLineHeight}
										onChange={(LineHeight) =>
											setAttributes({
												prefixLineHeight: LineHeight,
											})
										}
										min={0}
										max={prefixLineHeightUnit === "em" ? 10 : 600}
										step={prefixLineHeightUnit === "em" ? 0.1 : 1}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl
						label={__("Number Suffix")}
						className="eb-typography-base"
					>
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
									<TypographyIcon />
								</Button>
							)}
							renderContent={() => (
								<div className="eb-panel-control" style={{ padding: "0.2rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={suffixFontFamily}
										onChange={(FontFamily) => {
											setAttributes({
												suffixFontFamily: FontFamily,
											});
										}}
									/>

									<UnitControl
										selectedUnit={suffixSizeUnit}
										unitTypes={FONT_SIZE_UNITS}
										onClick={(SizeUnit) =>
											setAttributes({
												suffixSizeUnit: SizeUnit,
											})
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={suffixFontSize}
										onChange={(FontSize) =>
											setAttributes({
												suffixFontSize: FontSize,
											})
										}
										step={suffixSizeUnit === "em" ? 0.1 : 1}
										min={0}
										max={suffixSizeUnit === "em" ? 10 : 300}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={suffixFontWeight}
										options={FONT_WEIGHTS}
										onChange={(FontWeight) =>
											setAttributes({
												suffixFontWeight: FontWeight,
											})
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={suffixTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(TextTransform) =>
											setAttributes({
												suffixTextTransform: TextTransform,
											})
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={suffixTextDecoration}
										options={TEXT_DECORATION}
										onChange={(TextDecoration) =>
											setAttributes({
												suffixTextDecoration: TextDecoration,
											})
										}
									/>

									<UnitControl
										selectedUnit={suffixSizeUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LetterSpacingUnit) =>
											setAttributes({
												suffixLetterSpacingUnit: LetterSpacingUnit,
											})
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={suffixLetterSpacing}
										onChange={(LetterSpacing) =>
											setAttributes({
												suffixLetterSpacing: LetterSpacing,
											})
										}
										min={0}
										max={suffixLetterSpacingUnit === "em" ? 10 : 100}
										step={suffixLetterSpacingUnit === "em" ? 0.1 : 1}
									/>

									<UnitControl
										selectedUnit={suffixLineHeightUnit}
										unitTypes={LETTER_SPACING_LINE_HEIGHT_UNITS}
										onClick={(LineHeightUnit) =>
											setAttributes({
												suffixLineHeightUnit: LineHeightUnit,
											})
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={suffixLineHeight}
										onChange={(LineHeight) =>
											setAttributes({
												suffixLineHeight: LineHeight,
											})
										}
										min={0}
										max={suffixLineHeightUnit === "em" ? 10 : 600}
										step={suffixLineHeightUnit === "em" ? 0.1 : 1}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Colors")} initialOpen={false}>
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
				</PanelBody>

				<PanelBody title={__("Spacing")} initialOpen={false}>
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
				</PanelBody>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
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
				</PanelBody>

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
								colorTwo="#8e9eab"
								colorOne="#eef2f3"
								angle={45}
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
