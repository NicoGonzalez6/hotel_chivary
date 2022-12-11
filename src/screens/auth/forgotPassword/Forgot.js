import React from 'react';
import styled from 'styled-components';
import KeyboardLayout from '../../../containers/KeyboardLayout/KeyboardLayout';
import ForgotImage from '../../../assets/images/Forgot.png';
import Text from '../../../components/atoms/Text/Text';
import Input from '../../../components/atoms/Input/Input';
import Button from '../../../components/atoms/button/Button';

const Forgot = () => {
	return (
		<KeyboardLayout>
			<ImageContainer>
				<StyledImage source={ForgotImage} resizeMode='contain' />
			</ImageContainer>
			<TextContainer>
				<Text textType='title' textAlign={'center'}>
					¿Olvidaste tu contraseña?
				</Text>
				<Text
					textType='text'
					textColor='softText'
					textAlign={'justify'}
					fullWidth
				>
					Ingresá el mail con el cual te registraste para recibir las
					instrucciones de recuperacion
				</Text>
			</TextContainer>

			<InputContainer>
				<Input placeholder='Ingresá tu email' />
			</InputContainer>
			<ButtonContainer>
				<Button btnType='primary'>Enviar</Button>
			</ButtonContainer>
		</KeyboardLayout>
	);
};

export default Forgot;

const ImageContainer = styled.View`
	height: 260px;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const StyledImage = styled.Image`
	width: 340px;
	height: 340px;
`;

const TextContainer = styled.View`
	align-items: center;
	width: 100%;
	height: 100px;
	justify-content: space-around;
`;

const InputContainer = styled.View`
	min-height: 80px;
	justify-content: center;
`;

const ButtonContainer = styled.View`
	min-height: 40px;
	justify-content: center;
`;
