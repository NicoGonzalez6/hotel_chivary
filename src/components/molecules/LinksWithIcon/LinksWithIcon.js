import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../../theme/spacing';
import Text from '../../atoms/Text/Text';
import PropTypes from 'prop-types';
import { colors } from '../../../theme/colors';
import { textTypes } from '../../../constants/types/textTypes';

const LinksWithIcon = ({
	text,
	icon,
	textType = 'text',
	textColor,
	flexType = 'row',
	onPress,
}) => {
	return (
		<LinksContainer flexType={flexType} onPress={onPress}>
			{icon && <StyledImage source={icon} flexType={flexType} />}
			<Text
				textAlign={'center'}
				textType={textType}
				textColor={textColor}
			>
				{text}
			</Text>
		</LinksContainer>
	);
};

export default LinksWithIcon;

LinksWithIcon.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.node,
	flexType: PropTypes.oneOf(['row', 'column']),
	textType: PropTypes.oneOf(Object.keys(textTypes)),
	textColor: PropTypes.oneOf(Object.keys(colors)),
	onPress: PropTypes.func,
};

const LinksContainer = styled.TouchableOpacity`
	padding: ${spacing.medium} 0px;
	display: flex;
	flex-direction: ${({ flexType }) => {
		return flexType;
	}};
	align-items: center;
`;

const StyledImage = styled.Image`
	height: 35px;
	width: 35px;
	margin-right: ${({ flexType }) => {
		return flexType == 'column' ? `${0}px` : `${10}px`;
	}};
	margin-bottom: ${({ flexType }) => {
		return flexType == 'column' ? `${5}px` : `${0}px`;
	}};
`;
