import React from 'react';

import styled, { css } from 'styled-components';
import { colors } from '../../../theme/colors';
import { fontTypes } from '../../../theme/fonts';
import { spacing } from '../../../theme/spacing';
import { borderRadius } from '../../../theme/radiusses';
import Text from '../Text/Text';
import PropTypes from 'prop-types';

const Input = ({
	placeholder,
	onChangeText,
	error,
	errorMessage,
	value,
	secureTextEntry,
	onBlur,
	textAlign,
	boldValue = false,
}) => {
	return (
		<StyledView>
			<StyledInput
				boldValue={boldValue}
				textAlign={textAlign}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				onChangeText={onChangeText}
				value={value}
				error={error}
				onBlur={onBlur}
			/>

			{error && (
				<Text textType='text' textColor='error'>
					{errorMessage}
				</Text>
			)}
		</StyledView>
	);
};

Input.propTypes = {
	error: PropTypes.bool,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	onChangeText: PropTypes.func,
	onBlur: PropTypes.func,
	value: PropTypes.any,
	secureTextEntry: PropTypes.bool,
	textAlign: PropTypes.string,
	boldValue: PropTypes.bool,
};

export default Input;

const StyledView = styled.View`
	width: 100%;
`;

const StyledInput = styled.TextInput`
	border: ${({ error }) => {
		if (error) {
			return `1px solid ${colors.error}`;
		} else {
			return `1px solid ${colors.inputBorders}`;
		}
	}};
	padding: ${spacing.medium};
	font-family: ${fontTypes.montserrat};
	border-radius: ${borderRadius.medium};
	${({ textAlign }) => {
		if (textAlign) {
			return css`
				text-align: ${textAlign};
			`;
		}
	}}

	${({ boldValue }) => {
		if (boldValue) {
			return css`
				font-family: ${fontTypes.montserrat_bold};
			`;
		}
	}}
`;
