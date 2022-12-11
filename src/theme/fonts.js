import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
	const newSize = size * scale;

	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	}
}

export const fontSizes = {
	mini: normalize(11),
	small: normalize(13),
	medium: normalize(16),
	large: normalize(19),
	xlarge: normalize(21),
};

export const fontTypes = {
	montserrat: 'montserrat',
	montserrat_bold: 'montserrat_bold',
};
