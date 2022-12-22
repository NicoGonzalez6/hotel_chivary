import React from 'react';
import Layout from '../../containers/layout/Layout';
import styled from 'styled-components';
import Hero from '../../assets/images/Hero.png';
import Text from '../../components/atoms/Text/Text';
import NavigationSection from '../../components/molecules/navigationSection/NavigationSection';
import { spacing } from '../../theme/spacing';
import { textTypes } from '../../constants/types/textTypes';
import { homeNavigationLinks } from '../../navigation/home/homeNavigation';

const HomeScreen = ({ onLayout }) => {
	return (
		<Layout
			withHeader={true}
			onLayout={onLayout}
			backgroundVariation={true}
		>
			<HomeContainer>
				<NavigationContainer>
					<Text textType={textTypes.text}>Accesos directos</Text>
					<NavigationLinksContainer>
						<NavigationSection navigation={homeNavigationLinks} />
					</NavigationLinksContainer>
				</NavigationContainer>
				<HeroContainer>
					<StyledImage source={Hero} />
				</HeroContainer>
				<PromoContainer></PromoContainer>
				<ShareLinkContainer></ShareLinkContainer>
			</HomeContainer>
		</Layout>
	);
};

export default HomeScreen;

const HomeContainer = styled.View`
	flex: 1;
	justify-content: space-between;
`;

const NavigationContainer = styled.View`
	min-height: 205px;
	justify-content: space-between;
`;

const NavigationLinksContainer = styled.View`
	width: 100%;
	min-height: 100px;
	flex-direction: row;
	border-radius: 5px;
	justify-content: space-between;
`;

const HeroContainer = styled.View`
	height: 18%;
	position: relative;
	margin-top: -${spacing.medium};
`;

const StyledImage = styled.Image`
	width: 100%;
	height: 100%;
	border-radius: 10px;
`;

const PromoContainer = styled.View`
	height: 28%;
	flex-direction: column;
`;

const ShareLinkContainer = styled.View`
	height: 10%;
`;
