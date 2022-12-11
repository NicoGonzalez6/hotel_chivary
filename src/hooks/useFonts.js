import * as Font from 'expo-font';

export default useFonts = async () =>
	await Font.loadAsync({
		montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
		montserrat_bold: require('../assets/fonts/Montserrat-Medium.ttf'),
	});
