import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import { borderRadius } from '../../../theme/radiusses';
import { spacing } from '../../../theme/spacing';
import LinksWithIcon from '../LinksWithIcon/LinksWithIcon';

const NavigationSection = ({ navigation }) => {
	return (
		<StyledContainer>
			{navigation.map((link, i) => {
				return (
					<BoxContainer key={i}>
						<LinksWithIcon
							textType={link.textType}
							flexType={link.flexType}
							icon={link.icon}
							text={link.text}
							onPress={() => alert('hello')}
						/>
					</BoxContainer>
				);
			})}
		</StyledContainer>
	);
};

export default NavigationSection;

const StyledContainer = styled.View`
	width: 100%;
	height: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const BoxContainer = styled.View`
	background-color: ${colors.white};
	max-height: 80px;
	width: 100px;
	border-radius: ${borderRadius.medium};
	margin-bottom: ${spacing.medium};
`;
