import * as Yup from 'yup';
import { errors } from '../../../errors/errors';

export const loginSchema = Yup.object().shape({
	email: Yup.string().required(errors.required),
	password: Yup.string().required(errors.required),
});

export const loginInitialValues = [
	{
		id: 1,
		placeholder: 'Ingresá tu email',
		initialValue: '',
		keyName: 'email',
	},
	{
		id: 2,
		placeholder: 'Ingresá tu contraseña',
		initialValue: '',
		keyName: 'password',
	},
];
