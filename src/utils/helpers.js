import useFonts from '../hooks/useFonts';

//Load Fonts
export const loadFonts = async () => {
	await useFonts();
};

//extract Initial Values
export const getInitialValues = (initialValues) => {
	const initialValue = {};

	initialValues?.map((value) => {
		if (!initialValue[value.keyName]) {
			initialValue[value.keyName] = value.initialValue;
		}
	});

	return initialValue;
};
