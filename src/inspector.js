/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

import {
	ButtonGroup,
	Button,
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	BaseControl,
	RangeControl,
} from "@wordpress/components";

/**
 * Internal dependencies
 */

import ColorControl from "../util/color-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import UnitControl from "../util/unit-control";
import GradientColorController from "../util/gradient-color-controller";
import ImageAvatar from "../util/image-avatar";
import ResetControl from "../util/reset-control";
import ToggleButton from "../util/toggle-button";
import TypographyDropdown from "../util/typography-control-v2";
import ResPanelBody from "./ResPanelBody";

import BackgroundControl from "../util/background-control";
import BorderShadowControl from "../util/border-shadow-control";

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
	typoPrefix_numPrefix,
	typoPrefix_numSuffix,
	typoPrefix_number,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";

import { wrapperMargin, wrapperPadding } from "./constants/dimensionsConstants";
import { WrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";

const Inspector = (props) => {
	// console.log("--------inspector:", { props });
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

		// // background attributes ⬇
		// backgroundType,
		// backgroundColor,
		// gradientColor,
		// imageURL,
		// imageID,
		// backgroundSize,

		// // border attributes ⬇
		// borderWidth,
		// radiusUnit,
		// borderRadius,
		// borderStyle,
		// borderColor,

		// // shadow attributes  ⬇
		// shadowType,
		// shadowColor,
		// hOffset,
		// vOffset,
		// blur,
		// spread,
		// inset,
		// hoverShadowColor,
		// hoverHOffset,
		// hoverVOffset,
		// hoverBlur,
		// hoverSpread,
		// wrapperTransitionTime,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		const bodyClasses = document.body.className;
		// console.log("----log from inspector useEffect with empty []", {
		// 	bodyClasses,
		// });

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

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		const allEbBlocksWrapper = document.querySelectorAll(
			".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"
		);
		// console.log("---inspector", { allEbBlocksWrapper });
		if (allEbBlocksWrapper.length < 1) return;
		allEbBlocksWrapper.forEach((styleTag) => {
			const cssStrings = styleTag.textContent;
			const minCss = cssStrings.replace(/\s+/g, " ");
			const regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
			let newCssStrings = " ";
			if (resOption === "tab") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];
				// console.log({ tabCssStrings });
				newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
			} else if (resOption === "mobile") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];

				const mobCssStrings = (minCss.match(
					/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
				) || [" "])[0];

				// console.log({ tabCssStrings, mobCssStrings });

				newCssStrings = minCss.replace(
					regexCssMimmikSpace,
					`${tabCssStrings} ${mobCssStrings}`
				);
			} else {
				newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
			}
			styleTag.textContent = newCssStrings;
		});
	}, [resOption]);

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

	// console.log("---from inspector outside without any useEffect: ", {
	// 	resOption,
	// });

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
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

				<PanelBody title={__("Typography")} initialOpen={false}>
					<TypographyDropdown
						baseLabel="Title"
						typographyPrefixConstant={typoPrefix_title}
						resRequiredProps={resRequiredProps}
					/>
					<TypographyDropdown
						baseLabel="Number"
						typographyPrefixConstant={typoPrefix_number}
						resRequiredProps={resRequiredProps}
					/>
					<TypographyDropdown
						baseLabel="Number prefix"
						typographyPrefixConstant={typoPrefix_numPrefix}
						resRequiredProps={resRequiredProps}
					/>
					<TypographyDropdown
						baseLabel="Number Suffix"
						typographyPrefixConstant={typoPrefix_numSuffix}
						resRequiredProps={resRequiredProps}
					/>
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

				<ResPanelBody
					title={__("Spacing")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<ResetControl
								onReset={() => setAttributes({ gapNumTitle: undefined })}
							>
								<RangeControl
									label={__("Number & Title Gap")}
									value={gapNumTitle}
									onChange={(gapNumTitle) => setAttributes({ gapNumTitle })}
									min={0}
									max={100}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ gapNumPrefix: undefined })}
							>
								<RangeControl
									label={__("Number & Prefix Gap")}
									value={gapNumPrefix}
									onChange={(gapNumPrefix) => setAttributes({ gapNumPrefix })}
									min={0}
									max={100}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ gapNumSuffix: undefined })}
							>
								<RangeControl
									label={__("Number & Suffix Gap")}
									value={gapNumSuffix}
									onChange={(gapNumSuffix) => setAttributes({ gapNumSuffix })}
									min={0}
									max={100}
								/>
							</ResetControl>
						</>
					)}
					{resOption == "tab" && (
						<>
							<ResetControl
								onReset={() => setAttributes({ TABgapNumTitle: undefined })}
							>
								<RangeControl
									label={__("Number & Title Gap")}
									value={TABgapNumTitle}
									onChange={(TABgapNumTitle) =>
										setAttributes({ TABgapNumTitle })
									}
									min={0}
									max={100}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ TABgapNumPrefix: undefined })}
							>
								<RangeControl
									label={__("Number & Prefix Gap")}
									value={TABgapNumPrefix}
									onChange={(TABgapNumPrefix) =>
										setAttributes({ TABgapNumPrefix })
									}
									min={0}
									max={100}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ TABgapNumSuffix: undefined })}
							>
								<RangeControl
									label={__("Number & Suffix Gap")}
									value={TABgapNumSuffix}
									onChange={(TABgapNumSuffix) =>
										setAttributes({ TABgapNumSuffix })
									}
									min={0}
									max={100}
								/>
							</ResetControl>
						</>
					)}
					{resOption == "mobile" && (
						<>
							<ResetControl
								onReset={() => setAttributes({ MOBgapNumTitle: undefined })}
							>
								<RangeControl
									label={__("Number & Title Gap")}
									value={MOBgapNumTitle}
									onChange={(MOBgapNumTitle) =>
										setAttributes({ MOBgapNumTitle })
									}
									min={0}
									max={100}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ MOBgapNumPrefix: undefined })}
							>
								<RangeControl
									label={__("Number & Prefix Gap")}
									value={MOBgapNumPrefix}
									onChange={(MOBgapNumPrefix) =>
										setAttributes({ MOBgapNumPrefix })
									}
									min={0}
									max={100}
								/>
							</ResetControl>

							<ResetControl
								onReset={() => setAttributes({ MOBgapNumSuffix: undefined })}
							>
								<RangeControl
									label={__("Number & Suffix Gap")}
									value={MOBgapNumSuffix}
									onChange={(MOBgapNumSuffix) =>
										setAttributes({ MOBgapNumSuffix })
									}
									min={0}
									max={100}
								/>
							</ResetControl>
						</>
					)}
				</ResPanelBody>

				<PanelBody title={__("Margin Padding")} initialOpen={false}>
					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						controlName={wrapperMargin}
						baseLabel="Margin"
					/>
					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						controlName={wrapperPadding}
						baseLabel="Padding"
					/>
				</PanelBody>

				<PanelBody title={__("Counter Background")} initialOpen={false}>
					<>
						{/* <BaseControl label={__("Background Type")}>
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
								onChange={(backgroundColor) =>
									setAttributes({ backgroundColor })
								}
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
										<ImageAvatar
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
						)} */}
					</>
					<BackgroundControl
						controlName={WrapBg}
						resRequiredProps={resRequiredProps}
					/>
				</PanelBody>

				<PanelBody title={__("Counter Border ")} initialOpen={false}>
					<BorderShadowControl
						controlName={wrpBdShadow}
						resRequiredProps={resRequiredProps}
					/>
				</PanelBody>

				<>
					{/* <PanelBody title={__("Border")} initialOpen={false}>
						<ColorControl
							label={__("Border Color")}
							color={borderColor}
							onChange={(borderColor) => setAttributes({ borderColor })}
						/>

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
					</PanelBody>

					<PanelBody title={__("Shadow")} initialOpen={false}>
						<span
							className={
								shadowType === "normal" ? "blueOnNormal" : "blueOnHover"
							}
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

								<ResetControl
									onReset={() => setAttributes({ blur: undefined })}
								>
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
							</>
						)}

						<ToggleControl
							label={__("Inset")}
							checked={inset}
							onChange={() => setAttributes({ inset: !inset })}
						/>

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
				 */}
				</>
			</span>
		</InspectorControls>
	);
};
export default Inspector;
