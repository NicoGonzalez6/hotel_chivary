import React from 'react';
import styled, { css } from 'styled-components';
import Logo_final from '../../../assets/splash/Logo_final.png';
import { colors } from '../../../theme/colors';
import PropTypes from 'prop-types';
import { logoTypes } from '../../../constants/types/logoTypes';

const Logo = ({ size = 'medium' }) => {
	return <StyledLogo size={size} source={Logo_final}></StyledLogo>;
};

export default Logo;

Logo.propTypes = {
	size: PropTypes.oneOf(Object.keys(logoTypes)).isRequired,
};

const StyledLogo = styled.Image`
	background-color: ${colors.white};
	${({ size }) => {
		if (size == 'large') {
			return css`
				width: 300px;
				height: 300px;
			`;
		} else if (size == 'medium') {
			return css`
				width: 200px;
				height: 200px;
			`;
		} else if (size == 'small') {
			return css`
				width: 150px;
				height: 150px;
			`;
		}
	}}
`;
