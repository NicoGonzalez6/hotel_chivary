import React from 'react';
import styled from 'styled-components';
import Text from '../../components/atoms/Text/Text';
import { textTypes } from '../../constants/types/textTypes';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import LeftArrow from '../../assets/icons/leftArrow.png';

const SimpleHeader = ({ title, navigation }) => {
	return (
		<StyledHeader>
			<Touchable onPress={() => navigation.goBack()}>
				<StyledImage source={LeftArrow} />
			</Touchable>
			<Text textColor='white' textType={textTypes.subtitle}>
				{title}
			</Text>
		</StyledHeader>
	);
};

export default SimpleHeader;

const StyledHeader = styled.View`
	padding: ${spacing.container.header};
	height: 120px;
	background-color: ${colors.primary};
	flex-direction: row;
	align-items: flex-end;
`;

const StyledImage = styled.Image`
	margin-right: ${spacing.medium};
`;

const Touchable = styled.TouchableOpacity``;
