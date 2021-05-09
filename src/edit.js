/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from "@wordpress/element";

import "./editor.scss";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import {
	typoPrefix_title,
	typoPrefix_number,
	typoPrefix_numPrefix,
	typoPrefix_numSuffix,
} from "./constants/typographyPrefixConstants";
import { wrapperPadding, wrapperMargin } from "./constants/dimensionsConstants";

import {
	generateRandomNumber,
	textInsideForEdit,
	softMinifyCssStrings,
	hasVal,
	isCssExists,
	generateDimensionsControlStyles,
	generateTypographyStyles,
} from "./helpers";

const Edit = (props) => {
	const { isSelected, attributes, setAttributes, clientId } = props;

	const {
		// responsive control attributes ⬇
		resOption,

		// blockId attribute for making unique className and other uniqueness ⬇
		blockId,

		// blockMeta is for keeping all the styles ⬇
		blockMeta,

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
		titleColor = "#fff",
		numberColor = "#fff",
		numPrefixColor,
		numSuffixColor,

		// spacing attributes ⬇
		gapNumTitle = 20,
		gapNumPrefix,
		gapNumSuffix,

		TABgapNumTitle,
		TABgapNumPrefix,
		TABgapNumSuffix,

		MOBgapNumTitle,
		MOBgapNumPrefix,
		MOBgapNumSuffix,

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
		hOffset = 0,
		vOffset = 0,
		blur = 0,
		spread = 0,
		inset,

		hoverShadowColor = shadowColor,
		hoverHOffset = hOffset,
		hoverVOffset = vOffset,
		hoverBlur = blur,
		hoverSpread = spread,

		// transition attributes ⬇
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

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

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

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-counter";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		// console.log({ all_blocks });

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						// console.log("found a duplicate");
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);

		// console.log({ blockId });
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// CSS/styling Codes Starts from Here
	//
	// function to generate typography styles for an element based on it's prefix

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
		defaultFontSize: 40,
	});

	const {
		typoStylesDesktop: numberTypoStylesDesktop,
		typoStylesTab: numberTypoStylesTab,
		typoStylesMobile: numberTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_number,
		defaultFontSize: 40,
	});

	const {
		typoStylesDesktop: numPrefixTypoStylesDesktop,
		typoStylesTab: numPrefixTypoStylesTab,
		typoStylesMobile: numPrefixTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_numPrefix,
	});

	const {
		typoStylesDesktop: numSuffixTypoStylesDesktop,
		typoStylesTab: numSuffixTypoStylesTab,
		typoStylesMobile: numSuffixTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_numSuffix,
	});

	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: wrapperMargin,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: wrapperPadding,
		styleFor: "padding",
	});

	const wrapperStylesDesktop = `

	.${blockId} .eb-counter-title,
	.${blockId} h4.eb-counter-number {
		margin: 0;
		padding: 0;
	}

	.${blockId}{
		text-align: center;
		display: flex;

		${wrapperMarginStylesDesktop}
		${wrapperPaddingStylesDesktop}
		
		${gapNumTitle ? `gap: ${gapNumTitle}px;` : " "}
		${wrapperFlexDirection ? `flex-direction: ${wrapperFlexDirection};` : " "}
		
		background-image:
			${
				backgroundType === "image" && imageURL
					? `url("${imageURL}")`
					: backgroundType === "gradient"
					? gradientColor
					: "none"
			};

		${backgroundSize ? `background-size: ${backgroundSize};` : " "}
		${backgroundColor ? `background-color: ${backgroundColor};` : " "}	
		${borderColor ? `border: ${borderWidth}px ${borderStyle} ${borderColor};` : " "}
		${borderRadius ? `border-radius: ${borderRadius}${radiusUnit};` : " "}

		${
			shadowColor
				? `box-shadow: ${shadowColor} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${
						inset ? "inset" : ""
				  };`
				: " "
		}

		transition: ${
			wrapperTransitionTime ? `${wrapperTransitionTime / 1000}s` : ".5s"
		};
	}

	.${blockId}:hover{		
		${
			hoverShadowColor
				? `
				box-shadow: ${hoverShadowColor} ${hoverHOffset}px ${hoverVOffset}px ${hoverBlur}px ${hoverSpread}px ${
						inset ? "inset" : " "
				  };`
				: " "
		}
				
	}
	`;

	const wrapperStylesTab = `
	.${blockId}{
		${wrapperMarginStylesTab}
		${wrapperPaddingStylesTab}

		${hasVal(TABgapNumTitle) ? `gap: ${TABgapNumTitle}px;` : " "}	
	}
	`;

	const wrapperStylesMobile = `
	.${blockId}{
		
		${wrapperMarginStylesTab}
		${wrapperPaddingStylesTab}

		${hasVal(MOBgapNumTitle) ? `gap: ${MOBgapNumTitle}px;` : " "}
	}
	`;

	const numberStylesDesktop = `
	.${blockId} .eb-counter-number{
		${numberTypoStylesDesktop}
		${numberColor ? ` color : ${numberColor};` : " "}
		${hasVal(gapNumPrefix) ? `padding-left: ${gapNumPrefix}px;` : " "}
		${hasVal(gapNumSuffix) ? `padding-right: ${gapNumSuffix}px;` : " "}
	}
	`;

	const numberStylesTab = `
	.${blockId} .eb-counter-number{
		${numberTypoStylesTab}
		${hasVal(TABgapNumPrefix) ? `padding-left: ${TABgapNumPrefix}px;` : " "}
		${hasVal(TABgapNumSuffix) ? `padding-right: ${TABgapNumSuffix}px;` : " "}
	} `;

	const numberStylesMobile = `
	.${blockId} .eb-counter-number{
		${numberTypoStylesMobile}
		${hasVal(MOBgapNumPrefix) ? `padding-left: ${MOBgapNumPrefix}px;` : " "}
		${hasVal(MOBgapNumSuffix) ? `padding-right: ${MOBgapNumSuffix}px;` : " "}
	}`;

	const titleStylesDesktop = `
	.${blockId} .eb-counter-title{
		${titleTypoStylesDesktop}
		${titleColor ? `color : ${titleColor};` : " "}
	}
	`;

	const titleStylesTab = `
	.${blockId} .eb-counter-title{
		${titleTypoStylesTab}
	}  `;

	const titleStylesMobile = `
	.${blockId} .eb-counter-title{
		${titleTypoStylesMobile}
	} `;

	const numPrefixStylesDesktop = `
	.${blockId} .eb-counter-prefix{
		${numPrefixTypoStylesDesktop}
		${numPrefixColor ? `color : ${numPrefixColor};` : " "}
	}
	`;

	const numPrefixStylesTab = `
	.${blockId} .eb-counter-prefix{
		${numPrefixTypoStylesTab}
	}  `;

	const numPrefixStylesMobile = `
	.${blockId} .eb-counter-prefix{
		${numPrefixTypoStylesMobile}
	}  `;

	const numSuffixStylesDesktop = `
	.${blockId} .eb-counter-suffix{
		${numSuffixTypoStylesDesktop}
		${numSuffixColor ? `color : ${numSuffixColor};` : " "}
	}
	`;

	const numSuffixStylesTab = `
	.${blockId} .eb-counter-suffix{
		${numSuffixTypoStylesTab}
	} `;

	const numSuffixStylesMobile = `
	.${blockId} .eb-counter-suffix{
		${numSuffixTypoStylesMobile}
	}

	`;

	const desktopAllStyles = `
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(numberStylesDesktop) ? numberStylesDesktop : " "}
		${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		${isCssExists(numPrefixStylesDesktop) ? numPrefixStylesDesktop : " "}
		${isCssExists(numSuffixStylesDesktop) ? numSuffixStylesDesktop : " "}
	`;

	const tabAllStyles = `
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(numberStylesTab) ? numberStylesTab : " "}
		${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		${isCssExists(numPrefixStylesTab) ? numPrefixStylesTab : " "}
		${isCssExists(numSuffixStylesTab) ? numSuffixStylesTab : " "}
	`;

	const mobileAllStyles = `
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(numberStylesMobile) ? numberStylesMobile : " "}
		${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		${isCssExists(numPrefixStylesMobile) ? numPrefixStylesMobile : " "}
		${isCssExists(numSuffixStylesMobile) ? numSuffixStylesMobile : " "}
	`;

	//
	// CSS/styling Codes Ends Here
	//

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	// console.log("--edit theke", { attributes });

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>
			<div className={`eb-counter-wrapper ${blockId}`}>
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
		</div>,
	];
};

export default Edit;
