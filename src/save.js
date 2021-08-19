/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RichText, useBlockProps } = wp.blockEditor;

/**
 * Internal dependencies
 */

const Save = ({ attributes }) => {
	const {
		// blockId attribute for making unique className and other uniqueness ⬇
		blockId,

		// counter settings attributes ⬇
		target,
		duration,
		counterTitle,
		counterSuffix,
		counterPrefix,
		startValue,
		isShowSeparator,
		separator,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`${blockId} eb-counter-wrapper`}>
				<h4 className="eb-counter-number">
					<span className="eb-counter-prefix">{counterPrefix}</span>
					<span
						className="eb-counter eb-counter-number"
						data-duration={duration ? Math.floor(Math.abs(duration)) : 0}
						data-startValue={startValue ? Math.floor(Math.abs(startValue)) : 0}
						data-target={target ? Math.floor(Math.abs(target)) : 0}
						data-separator={separator}
						data-isShowSeparator={isShowSeparator}
					>
						0
					</span>
					<span className="eb-counter-suffix">{counterSuffix}</span>
				</h4>

				<RichText.Content
					tagName="h3"
					className="eb-counter-title"
					value={counterTitle}
				/>
			</div>
		</div>
	);
};

export default Save;
