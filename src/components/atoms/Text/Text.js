import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../theme/colors';
import { fontSizes, fontTypes } from '../../../theme/fonts';
import PropTypes from 'prop-types';
import { textTypes } from '../../../constants/types/textTypes';

const Text = ({
	children,
	textType = 'text',
	textColor = 'black',
	onPress,
	textAlign,
	fullWidth,
}) => {
	return (
		<StyledText
			textAlign={textAlign}
			textType={textType}
			textColor={textColor}
			onPress={onPress}
			fullWidth={fullWidth}
		>
			{children}
		</StyledText>
	);
};

Text.propTypes = {
	textType: PropTypes.oneOf(Object.keys(textTypes)),
	textColor: PropTypes.oneOf(Object.keys(colors)),
	onPress: PropTypes.func,
	textAlign: PropTypes.string,
};

export default Text;

const StyledText = styled.Text`
	color: ${({ textColor }) => {
		return colors[textColor];
	}};
	font-family: ${({ textType }) => {
		if (textType == textTypes.title) {
			return fontTypes.montserrat_bold;
		} else {
			return fontTypes.montserrat;
		}
	}};
	font-size: ${({ textType }) => {
		if (textType == textTypes.title) {
			return `${fontSizes['large']}px`;
		} else if (textType == textTypes.subtitle) {
			return `${fontSizes['medium']}px`;
		} else if (textType == textTypes.text) {
			return `${fontSizes['small']}px`;
		} else if (textType == textTypes.link) {
			return `${fontSizes['mini']}px`;
		}
	}};

	${({ fullWidth }) => {
		if (fullWidth) {
			return css`
				width: 100%;
			`;
		}
	}}

	${({ textAlign }) => {
		if (textAlign) {
			return css`
				text-align: ${textAlign};
			`;
		}
	}}
`;
