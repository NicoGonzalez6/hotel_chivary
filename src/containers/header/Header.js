import React, { useState } from 'react';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import styled from 'styled-components';
import BarsMenu from '../../assets/icons/barsMenu.png';
import Text from '../../components/atoms/Text/Text';
import UserMenu from '../../assets/icons/user.png';
import Sidenav from '../sidenav/Sidenav';
import { Animated } from 'react-native';

const Header = ({ userInfo }) => {
	const [fadeAnimation] = useState(new Animated.Value(0));
	const [indexAnimation] = useState(new Animated.Value(0));

	const fadeIn = () => {
		Animated.timing(fadeAnimation, {
			toValue: 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const indexIn = () => {
		Animated.timing(indexAnimation, {
			toValue: 2000,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		Animated.timing(fadeAnimation, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const indexOut = () => {
		Animated.timing(indexAnimation, {
			toValue: 0,
			duration: 210,
			useNativeDriver: true,
		}).start();
	};

	const closeHandler = () => {
		fadeOut();
		indexOut();
	};

	return (
		<StyledView>
			<Sidenav
				fadeAnimation={fadeAnimation}
				indexAnimation={indexAnimation}
				userInfo={userInfo}
				onClose={closeHandler}
			/>
			<StyledMenu>
				<Touchable
					onPress={() => {
						fadeIn();
						indexIn();
					}}
				>
					<StyledImage source={BarsMenu} />
				</Touchable>

				<Text textType='text' textColor='white'>{`Hola ${
					userInfo.userName || userInfo.name
				}!`}</Text>
			</StyledMenu>
			<StyledAccount>
				<Touchable
					onPress={() => {
						alert('account');
					}}
				>
					<StyledMenuImage source={UserMenu} />
				</Touchable>
			</StyledAccount>
		</StyledView>
	);
};

export default Header;

const StyledView = styled.View`
	padding: ${spacing.container.header};
	height: 120px;
	background-color: ${colors.primary};
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	position: relative;
`;

const StyledMenu = styled.View`
	flex-direction: row;
	align-items: center;
	width: 50%;
	min-height: 35px;
`;

const Touchable = styled.TouchableOpacity``;

const StyledImage = styled.Image`
	margin-right: 10px;
	height: 35px;
`;

const StyledMenuImage = styled.Image``;

const StyledAccount = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	width: 50%;
	min-height: 35px;
`;
