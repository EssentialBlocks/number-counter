// parseGradientColor function parses the gradientColor Strings
export const parseGradientColor = (_gradientColor) => {
	console.log({ _gradientColor });
	const gradientColor =
		_gradientColor || "linear-gradient(45deg,#8200ff,#ff0071)";
	let angle = 45,
		color1Position = 0,
		color2Position = 100,
		radialShape,
		radialX = 50,
		radialY = 50;

	const [color1, color2] = gradientColor.match(
		/\#[a-f\d]{6}|rgba?\([\d\,\.]{3,16}\)/gi
	);

	const [gradientType] = gradientColor.match(/\w{6}(?=-)/i);

	if (gradientType == "linear") {
		angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];
		const colorsPositions = gradientColor.match(/\d{1,3}(?=\%)/gi) || [0, 100];
		color1Position = colorsPositions[0];
		color2Position = colorsPositions[1];
	} else {
		radialShape = gradientColor.match(/\w+(?= at)/i)[0];
		radialX = gradientColor.match(/(?<=at )\d{1,3}/i)[0];
		radialY = gradientColor.match(/(?<=% )\d{1,3}/i)[0];
		color1Position = gradientColor.match(/\d{1,3}(?=% ,)/gi)[0];
		color2Position = gradientColor.match(/\d{1,3}(?=%\))/gi)[0];
	}

	return {
		gradientType,
		angle: parseInt(angle),
		color1,
		color2,
		color1Position: parseInt(color1Position),
		color2Position: parseInt(color2Position),
		radialShape,
		radialX: parseInt(radialX),
		radialY: parseInt(radialY),
	};
};
