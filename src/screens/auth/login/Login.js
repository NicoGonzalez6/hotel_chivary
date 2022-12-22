import KeyboardLayout from '../../../containers/KeyboardLayout/KeyboardLayout';
import Logo from '../../../components/atoms/logo/Logo';
import styled from 'styled-components';
import Input from '../../../components/atoms/Input/Input';
import Button from '../../../components/atoms/button/Button';
import Google_Icon from '../../../assets/icons/google.png';
import Text from '../../../components/atoms/Text/Text';
import { useForm } from '../../../hooks/useForm';
import {
	loginInitialValues,
	loginSchema,
} from '../../../constants/pages/auth/login/constants';
import ModalComponent from '../../../components/molecules/modal/Modal';
import { loginHandler } from '../../../services/index';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAsyncStorage } from '../../../hooks/useAsyncStorage';
import { asyncTypes } from '../../../constants/types/asyncTypes';
import { loginUser } from '../../../stores/sessionReducer/store';
import { logoTypes } from '../../../constants/types/logoTypes';
import { textTypes } from '../../../constants/types/textTypes';

const Login = ({ navigation, onLayout }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const Dispatch = useDispatch();

	const onSubmit = async (values) => {
		setIsVisible(true);
		setIsLoading(true);

		try {
			const response = await loginHandler(values);

			const tokens = {
				accessToken: response.accessToken,
				idToken: response.idToken,
				refreshToken: response.refreshToken,
			};
			const user = response.user;
			useAsyncStorage(asyncTypes.save, tokens, 'tokens');
			useAsyncStorage(asyncTypes.save, user, 'user');
			Dispatch(loginUser(user));
			await setIsVisible(false);
			await setIsLoading(false);
			navigation.navigate('home');
		} catch (error) {
			console.log(error);
		}
	};

	const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
		useForm(loginInitialValues, loginSchema, onSubmit);

	return (
		<KeyboardLayout onLayout={onLayout}>
			<ModalComponent isLoading={isLoading} isVisible={isVisible} />
			<StyledView>
				<LogoContainer>
					<Logo size={logoTypes.large} />
				</LogoContainer>
				<InputContainer>
					{loginInitialValues.map((value) => {
						return (
							<Input
								key={value.id}
								placeholder={value.placeholder}
								onChangeText={handleChange(value.keyName)}
								value={values[value.keyName]}
								secureTextEntry={value.keyName == 'password'}
								error={
									errors[value.keyName] &&
									touched[value.keyName]
								}
								errorMessage={errors[value.keyName]}
								onBlur={handleBlur(value.keyName)}
							/>
						);
					})}
					<LinkContainer>
						<Text
							textType='link'
							textColor='linkText'
							onPress={() => navigation.navigate('forgot')}
						>
							Olvide mi contraseña
						</Text>
					</LinkContainer>
				</InputContainer>
				<ButtonContainers>
					<Button btnType='primary' onPress={handleSubmit}>
						Ingresar
					</Button>
					<Button btnType='secundary' Icon={Google_Icon}>
						Google
					</Button>
				</ButtonContainers>
				<RegisterContainer>
					<Text textType={textTypes.text} textColor='black'>
						¿No tenes cuenta?
					</Text>
					<Text textType={textTypes.text} textColor='linkText'>
						{` `}
					</Text>
					<Text
						onPress={() => navigation.navigate('register')}
						textType={textTypes.text}
						textColor='linkText'
					>
						Registrate
					</Text>
				</RegisterContainer>
			</StyledView>
		</KeyboardLayout>
	);
};

export default Login;

const StyledView = styled.View`
	flex: 1;
`;

const LogoContainer = styled.View`
	height: 280px;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const InputContainer = styled.View`
	width: 100%;
	height: 160px;
	justify-content: space-between;
	margin-bottom: 30px;
`;

const LinkContainer = styled.View`
	align-items: flex-end;
`;

const ButtonContainers = styled.View`
	height: 100px;
	justify-content: space-between;
`;

const RegisterContainer = styled.View`
	height: 70px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	justify-content: center;
`;
