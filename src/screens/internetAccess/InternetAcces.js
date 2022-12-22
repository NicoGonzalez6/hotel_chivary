import React from 'react';
import styled from 'styled-components';
import LabelBox from '../../components/molecules/labelBox/LabelBox';
import { internetAccessConstants } from '../../constants/pages/internetAccess/constants';
import Layout from '../../containers/layout/Layout';

const InternetAcces = () => {
	return (
		<Layout withHeader={true} backgroundVariation={true}>
			<StyledContainer>
				{internetAccessConstants.map((value) => {
					return <LabelBox value={value} />;
				})}
			</StyledContainer>
		</Layout>
	);
};

export default InternetAcces;

const StyledContainer = styled.View`
	min-height: 165px;
	justify-content: space-between;
`;
