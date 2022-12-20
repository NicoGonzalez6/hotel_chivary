import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinksWithIcon from '../../components/molecules/LinksWithIcon/LinksWithIcon';
import Layout from '../../containers/layout/Layout';
import Hotel from '../../assets/icons/hotel.png';
import Location from '../../assets/icons/locaton.png';
import Weather from '../../assets/icons/weather.png';
import Phone from '../../assets/icons/phone.png';
import styled from 'styled-components';
import Hero from '../../assets/images/Hero_Hotel.png';
import { colors } from '../../theme/colors';
import Text from '../../components/atoms/Text/Text';

const HomeScreen = ({ onLayout }) => {
	return (
		<Layout withHeader={true} onLayout={onLayout}>
			<HomeContainer>
				<View style={styles.shadow}>
					<ColumnContainer>
						<LinksWithIcon
							text={'Hotel'}
							icon={Hotel}
							flexType='column'
							onPress={() => alert('hola')}
						/>
						<LinksWithIcon
							text={'Ubicación'}
							icon={Location}
							flexType='column'
						/>
						<LinksWithIcon
							text={'Clima'}
							icon={Weather}
							flexType='column'
						/>
						<LinksWithIcon
							text={'tel. utiles'}
							icon={Phone}
							flexType='column'
						/>
					</ColumnContainer>
					<ColumnContainer>
						<LinksWithIcon
							text={'Hotel'}
							icon={Hotel}
							flexType='column'
						/>
					</ColumnContainer>
				</View>
				<HeroContainer>
					<StyledImage source={Hero} />
					<StyledHeroTextContainer>
						<Text
							textColor='white'
							textAlign={'center'}
							textType='text'
						>
							Te esperamos todo el año!
						</Text>
					</StyledHeroTextContainer>
				</HeroContainer>
				<PromoContainer>
					<TitlePromoContainer>
						<Text textColor='black' textType='title'>
							Promociones
						</Text>
					</TitlePromoContainer>
					<PromoContainersList></PromoContainersList>
				</PromoContainer>
				<ShareLinkContainer></ShareLinkContainer>
			</HomeContainer>
		</Layout>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	shadow: {
		width: '100%',
		maxHeight: 200,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 2.2,
		shadowRadius: 1.41,
		elevation: 1.9,
		borderRadius: 1,
		flexDirection: 'column',
	},
});

const HomeContainer = styled.View`
	flex: 1;
	justify-content: space-between;
`;

const ColumnContainer = styled.View`
	width: 100%;
	height: 45%;
	padding: 20px;
	flex-direction: row;
	justify-content: space-between;
`;

const HeroContainer = styled.View`
	height: 115px;
	position: relative;
`;

const StyledHeroTextContainer = styled.View`
	position: absolute;
	height: 100px;
	width: 110px;
	border: 2px solid ${colors.white};
	border-radius: 50px;
	right: 20px;
	top: 8px;
	background-color: rgba(65, 231, 231, 0.9);
	align-items: center;
	justify-content: center;
	padding: 5px 12px;
`;

const StyledImage = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	border-radius: 10px;
`;

const PromoContainer = styled.View`
	height: 170px;
	flex-direction: column;
`;

const TitlePromoContainer = styled.View`
	height: 20%;
	justify-content: center;
`;

const PromoContainersList = styled.View`
	height: 80%;
	background-color: red;
`;

const ShareLinkContainer = styled.View`
	height: 60px;
	background-color: yellow;
`;
