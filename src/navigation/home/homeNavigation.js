import Hotel from '../../assets/icons/hotel.png';
import Location from '../../assets/icons/locaton.png';
import Weather from '../../assets/icons/weather.png';
import Phone from '../../assets/icons/phone.png';
import { textTypes } from '../../constants/types/textTypes';

export const homeNavigationLinks = [
	{
		flexType: 'column',
		textType: textTypes.text,
		text: 'Hotel',
		icon: Hotel,
	},
	{
		flexType: 'column',
		textType: textTypes.text,
		text: 'Ubicación',
		icon: Location,
	},
	{
		flexType: 'column',
		textType: textTypes.text,
		text: 'Clima',
		icon: Weather,
	},
	{
		flexType: 'column',
		textType: textTypes.text,
		text: 'tel. utiles',
		icon: Phone,
	},

	{
		flexType: 'column',
		textType: textTypes.text,
		text: 'Clima',
		icon: Weather,
	},
	{
		flexType: 'column',
		textType: textTypes.text,
		text: 'tel. utiles',
		icon: Phone,
	},
];
