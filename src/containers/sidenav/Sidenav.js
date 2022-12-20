import React from 'react';
import {
	Animated,
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Image,
	Dimensions,
} from 'react-native';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import Text from '../../components/atoms/Text/Text';
import UserMenu from '../../assets/icons/user.png';
import CloseIcon from '../../assets/icons/close.png';
import { spacing } from '../../theme/spacing';
import { textTypes } from '../../constants/types/textTypes';
import userId from '../../assets/icons/userid.png';
import userDocs from '../../assets/icons/docs.png';
import secureUser from '../../assets/icons/security.png';
import router from '../../assets/icons/router.png';
import Button from '../../components/atoms/button/Button';
import questionUser from '../../assets/icons/question.png';
import LinksWithIcon from '../../components/molecules/LinksWithIcon/LinksWithIcon';

const Sidenav = ({ fadeAnimation, indexAnimation, userInfo, onClose }) => {
	const height = Dimensions.get('window').height;

	return (
		<Animated.View
			style={[
				styles(height).fadingContainer,
				{
					opacity: fadeAnimation,
					zIndex: indexAnimation,
				},
			]}
		>
			<TouchableOpacity style={[styles(height).fading]} activeOpacity={1}>
				<Header>
					<HeaderCenter>
						<HeaderUser>
							<ImageContainer>
								<Image source={UserMenu} />
							</ImageContainer>
							<Text
								textType={textTypes.subtitle}
								textColor='white'
							>
								{userInfo.userName || userInfo.name}
							</Text>
						</HeaderUser>
						<TouchableWithoutFeedback onPress={onClose}>
							<Image source={CloseIcon} />
						</TouchableWithoutFeedback>
					</HeaderCenter>
				</Header>
				<LinksContainer>
					<UserLinks>
						<LinksWithIcon
							icon={userId}
							text={'Datos personales'}
							textType={textTypes.text}
							textColor='black'
							flexType='row'
						/>
						<LinksWithIcon
							icon={userDocs}
							text={'Historial de puntos'}
							textType={textTypes.text}
							textColor='black'
							flexType='row'
						/>
						<LinksWithIcon
							icon={secureUser}
							text={'Seguridad y contraseñas'}
							textType={textTypes.text}
							textColor='black'
							flexType='row'
						/>
						<LinksWithIcon
							icon={router}
							text={'Acceso a internet'}
							textType={textTypes.text}
							textColor='black'
							flexType='row'
						/>
						<LinksWithIcon
							icon={questionUser}
							text={'Preguntas frecuentes'}
							textType={textTypes.text}
							textColor='black'
						/>
					</UserLinks>
					<SessionLinks>
						<Button>Cerrar sesion</Button>
					</SessionLinks>
				</LinksContainer>
			</TouchableOpacity>
		</Animated.View>
	);
};

export default Sidenav;

const styles = (props) => {
	return StyleSheet.create({
		fadingContainer: {
			position: 'absolute',
			width: '110%',
			top: 0,
			left: 0,
		},
		fading: {
			backgroundColor: 'white',
			position: 'absolute',
			width: '101%',
			flexDirection: 'column',
			minHeight: props,
		},
	});
};

const Header = styled.View`
	background-color: ${colors.primary};
	height: 120px;
	align-items: flex-end;
	justify-content: flex-start;
	flex-direction: row;
	padding: 10px 15px;
`;

const HeaderCenter = styled.View`
	height: 60px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`;

const HeaderUser = styled.View`
	display: flex;
	flex-direction: row;
	width: 50%;
	align-items: center;
`;

const ImageContainer = styled.View`
	background-color: ${colors.darkerPrimary};
	margin-right: 10px;
	height: 40px;
	width: 40px;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
`;

const LinksContainer = styled.View`
	padding: 10px 20px;
`;

const UserLinks = styled.View`
	height: 80%;
	margin-bottom: ${spacing.small};
`;

const SessionLinks = styled.View`
	height: 20%;
	align-items: center;
`;
