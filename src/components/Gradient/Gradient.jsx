import React, { useEffect, useState } from 'react';
import { copyToClipboard, rgbLogBlend } from '../../helper/util';
import HexInput from '../shared/HexInput';
import {
	Color,
	ColorBox,
	ColorBoxContainer,
	GradientContainer,
	OptionsContainer,
} from './Gradient.styled';
import StepSize from './StepSize';

const GradientList = ({ firstColor, secondColor, stepSize }) => {
	const [gradientColors, setGradientColors] = useState([]);
	const step = 1 / stepSize;

	useEffect(() => {
		const isFirstColorOkay = firstColor.length === 3 || firstColor.length === 6;
		const isSecondColorOkay =
			secondColor.length === 3 || secondColor.length === 6;
		if (isFirstColorOkay && isSecondColorOkay) {
			for (let i = 0; i <= stepSize; i++) {
				const newColor = rgbLogBlend(i * step, firstColor, secondColor);
				setGradientColors((prevColors) => {
					return [...prevColors, newColor];
				});
			}
		}
		return () => {
			setGradientColors([]);
		};
	}, [firstColor, secondColor, step, stepSize]);

	return (
		<ColorBoxContainer>
			{gradientColors.length > 1 &&
				gradientColors.map((color, i) => (
					<ColorBox
						key={i}
						onClick={() => {
							copyToClipboard(color);
						}}
					>
						<Color hexCode={color} />
						{/* <span>{color}</span> */}
					</ColorBox>
				))}
		</ColorBoxContainer>
	);
};

const GradientGenerator = ({ hexCode }) => {
	const [secondColor, setSecondColor] = useState('');
	const [stepSize, setStepSize] = useState('3');
	const changeSecondColor = (color) => {
		if (color.length === 3 || color.length === 6) setSecondColor(color);
	};
	const changeStepSize = (stepSize) => {
		setStepSize(stepSize);
	};

	return (
		<GradientContainer>
			<OptionsContainer>
				<div>
					<span>Second color</span>
					<HexInput onChangeHexCode={changeSecondColor} />
				</div>
				<div>
					<span>Step size</span>
					<StepSize onChange={changeStepSize} />
				</div>
			</OptionsContainer>
			<span>You can click boxes to copy it's color in RGB format.</span>
			{secondColor && (
				<GradientList
					firstColor={hexCode}
					secondColor={secondColor}
					stepSize={stepSize}
				/>
			)}
		</GradientContainer>
	);
};

export default GradientGenerator;
