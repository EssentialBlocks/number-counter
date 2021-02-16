const { __ } = wp.i18n;
const { useState, useEffect } = wp.element;
const { BaseControl, Dropdown, Tooltip, ColorPicker } = wp.components;
import "./style.css";

const ColorControl = ({ label, color, onChange }) => {
	const [bgColor, setBgColor] = useState(color);

	useEffect(() => {
		setBgColor(color);
	}, [color]);

	const onChangeComplete = ({ rgb, hex }) => {
		let color = rgb ? `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})` : hex;
		onChange(color);
	};

	const colorStyles = {
		padding: 2,
		borderRadius: 0,
		background: "white",
		border: "1px solid #ebebeb",
	};

	return (
		<BaseControl label={label || ""} className="eb-color-base">
			<Dropdown
				renderToggle={({ isOpen, onToggle }) => (
					<Tooltip text={color || "default"}>
						<div className="eb-color-ball" style={color && colorStyles}>
							<div
								style={{
									height: 16,
									width: 16,
									borderRadius: "0%",
									boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
									backgroundColor: bgColor,
								}}
								aria-expanded={isOpen}
								onClick={onToggle}
								aria-label={color || "default"}
							></div>
						</div>
					</Tooltip>
				)}
				renderContent={() => (
					<ColorPicker
						color={color}
						onChangeComplete={(color) => onChangeComplete(color)}
					/>
				)}
			/>
		</BaseControl>
	);
};

export default ColorControl;
