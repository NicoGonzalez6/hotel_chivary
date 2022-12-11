import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/atoms/button/Button';
import Input from '../../../components/atoms/Input/Input';
import Text from '../../../components/atoms/Text/Text';
import KeyboardLayout from '../../../containers/KeyboardLayout/KeyboardLayout';

const Register = ({ navigation }) => {
	return (
		<KeyboardLayout>
			<StyledTitleContainer>
				<Text textType='title'>Registro</Text>
			</StyledTitleContainer>
			<InputsContainer>
				<Input placeholder='Ingresá tu nombre' />
				<Input placeholder='Ingresá tu apellido' />
				<Input placeholder='Ingresá tu email' />
				<Input placeholder='Ingresá tu contraseña' secureTextEntry />
			</InputsContainer>
			<ButtonContainers>
				<Button btnType='primary'>Registrar</Button>
			</ButtonContainers>
			<RegisterContainer>
				<Text textType='text' textColor='black'>
					¿Ya tenes una cuenta?
				</Text>
				<Text textType='text' textColor='linkText'>
					{` `}
				</Text>
				<Text
					textType='text'
					textColor='linkText'
					onPress={() => navigation.navigate('login')}
				>
					Iniciá sesion
				</Text>
			</RegisterContainer>
		</KeyboardLayout>
	);
};

export default Register;

const StyledTitleContainer = styled.View`
	height: 100px;
	justify-content: center;
`;

const InputsContainer = styled.View`
	min-height: 225px;
	justify-content: space-between;
`;

const ButtonContainers = styled.View`
	min-height: 80px;
	justify-content: center;
`;

const RegisterContainer = styled.View`
	height: 40px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	justify-content: center;
`;
