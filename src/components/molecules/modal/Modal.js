import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import Button from '../../atoms/button/Button';
import Text from '../../atoms/Text/Text';
import PropTypes from 'prop-types';
import { borderRadius } from '../../../theme/radiusses';

const ModalComponent = ({ isVisible, onClose, isLoading, text }) => {
	return (
		<Modal animationType={'fade'} transparent={true} visible={isVisible}>
			<StyledModalContainer>
				<StyledModal isLoading={isLoading}>
					{!isLoading && (
						<Text
							textType='subtitle'
							textColor='black'
							textAlign={'center'}
							fullWidth
						>
							{text}
						</Text>
					)}
					{isLoading && (
						<ActivityIndicator
							size='large'
							color={colors.primary}
						/>
					)}
					{!isLoading && (
						<Button btnType='primary' onPress={onClose}>
							Cerrar
						</Button>
					)}
				</StyledModal>
			</StyledModalContainer>
		</Modal>
	);
};
ModalComponent.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	onClose: PropTypes.func,
	isLoading: PropTypes.bool,
	text: PropTypes.string,
};

export default ModalComponent;

const StyledModalContainer = styled.View`
	max-width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.8);
`;

const StyledModal = styled.View`
	width: 80%;
	min-height: 180px;
	background-color: ${colors.white};
	align-items: center;
	justify-content: ${({ isLoading }) => {
		return isLoading ? 'center' : 'space-around';
	}};
	padding: 20px;
	border-radius: ${borderRadius.medium};
`;
