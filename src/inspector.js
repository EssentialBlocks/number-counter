/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	BaseControl,
	TabPanel,
} = wp.components;
const { useEffect } = wp.element;

const { select } = wp.data;

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";
import ColorControl from "../util/color-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
import TypographyDropdown from "../util/typography-control-v2";
import BackgroundControl from "../util/background-control";
import BorderShadowControl from "../util/border-shadow-control";

import { SEPARATOR_OPTIONS, LAYOUT_OPTIONS } from "./constants";

import {
	typoPrefix_numPrefix,
	typoPrefix_numSuffix,
	typoPrefix_number,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";

import { wrapperMargin, wrapperPadding } from "./constants/dimensionsConstants";
import { WrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";
import { rgNumTitle, rgNumPrefix, rgNumSuffix } from "./constants/rangeNames";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

const Inspector = (props) => {
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
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
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

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody
										title={__("Counter Settings")}
										// initialOpen={false}
									>
										<BaseControl id="eb-counter-start-value">
											<TextControl
												label={__("Starting Number")}
												value={startValue}
												type="number"
												onChange={(value) =>
													!/[\-\.]/.test(value) &&
													setAttributes({ startValue: value })
												}
											/>
										</BaseControl>
										<BaseControl id="eb-counter-end-value">
											<TextControl
												label={__("Ending Number")}
												value={target}
												type="number"
												onChange={(value) =>
													!/[\-\.]/.test(value) &&
													setAttributes({ target: value })
												}
											/>
										</BaseControl>
										<BaseControl id="eb-counter-duration">
											<TextControl
												label={__("Animation Duration")}
												value={duration}
												type="number"
												onChange={(value) =>
													!/[\-\.]/.test(value) &&
													setAttributes({ duration: value })
												}
											/>
										</BaseControl>
										<BaseControl id="eb-counter-prefix">
											<TextControl
												label={__("Number Prefix")}
												value={counterPrefix}
												onChange={(counterPrefix) =>
													setAttributes({ counterPrefix })
												}
											/>
										</BaseControl>
										<BaseControl id="eb-counter-suffix">
											<TextControl
												label={__("Number Suffix")}
												value={counterSuffix}
												onChange={(counterSuffix) =>
													setAttributes({ counterSuffix })
												}
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
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Number")}>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_number}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color")}
											color={numberColor}
											onChange={(numberColor) => setAttributes({ numberColor })}
										/>
									</PanelBody>

									<PanelBody title={__("Title")}>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_title}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>
									</PanelBody>

									<PanelBody title={__("Number prefix")} initialOpen={false}>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_numPrefix}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color")}
											color={numPrefixColor}
											onChange={(numPrefixColor) =>
												setAttributes({ numPrefixColor })
											}
										/>
									</PanelBody>

									<PanelBody title={__("Number Suffix")} initialOpen={false}>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_numSuffix}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Color")}
											color={numSuffixColor}
											onChange={(numSuffixColor) =>
												setAttributes({ numSuffixColor })
											}
										/>
									</PanelBody>

									<PanelBody title={__("Spacing")} initialOpen={false}>
										<ResponsiveRangeController
											baseLabel={__("Number & Title Gap", "Number-counter")}
											controlName={rgNumTitle}
											resRequiredProps={resRequiredProps}
											max={100}
										/>
										<ResponsiveRangeController
											baseLabel={__("Number & Prefix Gap", "Number-counter")}
											controlName={rgNumPrefix}
											resRequiredProps={resRequiredProps}
											max={100}
										/>
										<ResponsiveRangeController
											baseLabel={__("Number & Suffix Gap", "Number-counter")}
											controlName={rgNumSuffix}
											resRequiredProps={resRequiredProps}
											max={100}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody title={__("Margin Padding")}>
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

									<PanelBody title={__("Background")} initialOpen={false}>
										<BackgroundControl
											controlName={WrapBg}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={wrpBdShadow}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};
export default Inspector;
