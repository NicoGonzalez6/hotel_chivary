import { getInitialValues } from '../utils/helpers';

const { useFormik } = require('formik');

export const useForm = (initialValues, validationSchema, onSubmit) => {
	const values = getInitialValues(initialValues);

	const Formik = useFormik({
		initialValues: values,
		validationSchema: validationSchema && validationSchema,
		onSubmit: (values) => {
			onSubmit(values);
		},
	});

	return Formik;
};
