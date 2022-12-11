import React from 'react';
import styled from 'styled-components';
import { buttonTypes } from '../../../constants/types/buttonTypes';
import { colors } from '../../../theme/colors';
import Text from '../Text/Text';
import PropTypes from 'prop-types';
import { textTypes } from '../../../constants/types/textTypes';
import { borderRadius } from '../../../theme/radiusses';
import { spacing } from '../../../theme/spacing';

const Button = ({ children, onPress, btnType = 'primary', Icon }) => {
	return (
		<StyledButton onPress={onPress} btnType={btnType}>
			{Icon && <Image resizeMode='contain' source={Icon} />}
			<Text
				textType={textTypes.subtitle}
				textColor={
					btnType == buttonTypes.primary ? 'white' : 'softText'
				}
			>
				{children}
			</Text>
		</StyledButton>
	);
};

export default Button;

Button.propTypes = {
	btnType: PropTypes.oneOf(Object.keys(buttonTypes)),
};

const StyledButton = styled.Pressable`
	background-color: ${({ btnType }) => {
		if (btnType == buttonTypes.primary) {
			return colors.primary;
		} else if (btnType == buttonTypes.secundary) {
			return colors.transparent;
		}
	}};
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	align-items: center;
	padding: ${spacing.buttons.medium};
	border-radius: ${borderRadius.medium};
	border: ${({ btnType }) => {
		if (btnType == buttonTypes.primary) {
			return `0px solid ${colors.transparent}`;
		} else if (btnType == buttonTypes.secundary) {
			return `1px solid ${colors.inputBorders}`;
		}
	}};
`;

const Image = styled.Image`
	width: 18px;
	height: 18px;
	margin-right: 10px;
`;
